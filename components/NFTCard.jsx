import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import Router from "next/router";
import Image from "next/image";

// IMPORT CHAKRA tools
import { Box, Text, Flex, HStack, Spacer } from "@chakra-ui/react";

import polygonLogo from "../dist/img/polygon-matic-logo.png";

const NFTCard = ({ nftItem, title, listings }) => {
  const [isListed, setIsListed] = useState(false);
  const [price, setPrice] = useState(0);

  //we're looping. If any listing matches a nft item then set to true and set the price
  useEffect(() => {
    const listing = listings.find((listing) => listing.asset.id === nftItem.id);
    if (Boolean(listing)) {
      setIsListed(true);
      setPrice(listing.buyoutCurrencyValuePerToken.displayValue);
    }
  }, [listings, nftItem]);

  return (
    <>
      {/* onclick bring me to nft details */}
      <Box
        className="nftcard-wrapper"
        onClick={() => {
          Router.push({
            pathname: `/nfts/${nftItem.id}`,
            query: { isListed: isListed },
          });
        }}
      >
        <Box>
          <img src={nftItem.image} alt={nftItem.name} className="nftImg" />
        </Box>
        <Box className="info-left">
          <Box>{title}</Box>
          <Box>{nftItem.name}</Box>
        </Box>

        {/* conditioning rendering */}
        {isListed && (
          <Box className="info-right">
            <Box>Price</Box>
            <Box>
              <Flex>
                <Image
                  src={polygonLogo}
                  width={20}
                  height={20}
                  alt="polygon-logo"
                />
                {price}
              </Flex>
            </Box>
            <Box>
              <span className="nft-card-likes">
                <BiHeart />
              </span>
              {nftItem.likes}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default NFTCard;
