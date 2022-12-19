import React, { useEffect, useState, useMemo } from "react";
// import Link from 'next/link'
import { useRouter } from "next/router";
import { useWeb3 } from "@3rdweb/hooks";
import { client } from "../../lib/sanityClient";
//Import IMAGES from client
import { urlFor } from "../../lib/sanityClient";
import { ThirdwebSDK } from "@3rdweb/sdk";

import Header from "../../components/Header";
import NFTCard from "../../components/NFTCard";

// IMPORT CHAKRA tools
import { Box, Text, Flex, VStack, HStack, Spacer } from "@chakra-ui/react";

const Collection = () => {
  const router = useRouter();
  const { provider } = useWeb3();
  const { collectionId } = router.query;
  const [collection, setCollection] = useState({});
  const [nfts, setNfts] = useState([]);
  const [listings, setListings] = useState([]);

  //-----------GET ACCESS NFT COLLECTION -----------
  const nftModule = useMemo(() => {
    if (!provider) return;

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      "https://polygon-mumbai.g.alchemy.com/v2/CYdunjEvdFLXpSAV7J_Xzad3-26_OKt5"
    );
    return sdk.getNFTModule("0x1A8058eac6D3B1e1e571b48f3AD225BBAD8b68E5");
  }, [provider]);

  // get all NFTs in the collection
  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      const nfts = await nftModule.getAll();

      setNfts(nfts);
    })();
  }, [nftModule]);

  //-----------GET ACCESS MARKETPLACE-----------
  const marketPlaceModule = useMemo(() => {
    if (!provider) return;

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      "https://polygon-mumbai.g.alchemy.com/v2/CYdunjEvdFLXpSAV7J_Xzad3-26_OKt5"
    );
    return sdk.getMarketplaceModule(
      "0x0503136be65F975aB338427f86475a63C602eA60"
    );
  }, [provider]);

  // get all listings in the collection
  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      setListings(await marketPlaceModule.getAllListings());
    })();
  }, [marketPlaceModule]);

  const fetchCollectionData = async (sanityClient = client) => {
    // const query = `*[_type == "marketItems" && contractAddress == "${collectionId}"] {
    const query = `*[_type == "marketItems" && contractAddress == "0x1A8058eac6D3B1e1e571b48f3AD225BBAD8b68E5"] {
    "imageUrl": profileImage.asset->url,
        "bannerImageUrl": bannerImage.asset->url,
        volumeTraded,
        createdBy,
        contractAddress,
        "creator": createdBy->userName,
        title, floorPrice,
        "allOwners": owners[]->,
        description
  }`;
    const collectionData = await sanityClient.fetch(query);
    console.log(collectionData, "🔥");

    setCollection(collectionData[0]);
  };

  useEffect(() => {
    fetchCollectionData();
  }, [collectionId]);

  console.log(router.query);
  console.log(router.query.collectionId);
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Box>
          <img
            src={
              collection?.bannerImageUrl
                ? collection.bannerImageUrl
                : "https://via.placeholder.com/200"
            }
            alt="banner"
          />
        </Box>
        <Box>
          <img
            src={
              collection?.imageUrl
                ? collection.imageUrl
                : "https://via.placeholder.com/200"
            }
            alt="profile image"
          />
        </Box>
        <Box>{collection?.title}</Box>
        <Box>
          Created by <span>{collection?.creator} </span>
        </Box>
        <HStack>
          <Box>
            <VStack>
              <Box>{nfts.length}</Box>
              <Box>items</Box>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Box>
                {collection?.allOwners ? collection.allOwners.length : ""}{" "}
              </Box>
              <Box>Owners</Box>
            </VStack>
          </Box>
        </HStack>
        <Box>
          {nfts.map((nftItem, id) => (
            <NFTCard
              key={id}
              nftItem={nftItem}
              title={collection?.title}
              listings={listings}
            />
          ))}
        </Box>
      </section>
    </>
  );
};

export default Collection;
