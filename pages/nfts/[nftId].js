import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router";

import NFTImage from "../../components/nft/NFTImage";

const Nft = () => {
  const { provider } = useWeb3();
  const [selectedNft, setSelectedNft] = useState();
  const [listings, setListings] = useState([]);
  const router = useRouter();

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

      const selectedNftItem = nfts.find((nft) => nft.id === router.query.nftId);

      setSelectedNft(selectedNftItem);
    })();
  }, [nftModule]);

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

  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      setListings(await marketPlaceModule.getAllListings());
    })();
  }, [marketPlaceModule]);

  return (
    <>
      <section>
        <Header />
        <NFTImage selectedNft={selectedNft} />
      </section>
    </>
  );
};

export default Nft;
