import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

//IMPORT CLIENT FROM SANITY
import { client } from "../lib/client";
//IMPORT THIRDWEB HOOKS
import { useWeb3 } from "@3rdweb/hooks";

// IMPORT CHAKRA tools
import { Box, Stack, Text } from "@chakra-ui/react";
import { HeroBanner } from "../components";

export default function Home() {
  const { address, connectWallet } = useWeb3();

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== "Unnamed" ? ` ${userName}` : ""}!`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: "Unnamed",
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);

      welcomeUser(result.userName);
    })();
  }, [address]);
  return (
    <>
      <section className="home-section">
        <Toaster position="top-center" reverseOrder={false} />
        {address ? (
          <>
            <HeroBanner />
          </>
        ) : (
          <Box>
            <button
              className="btn-connect-wallet"
              onClick={() => connectWallet("injected")}
            >
              Connect Wallet
            </button>
            <Box>
              You need{" "}
              <a
                href="https://brave.com/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="brave-link"
              >
                BRAVE
              </a>{" "}
              to be
              <br /> able to run this app.
            </Box>
          </Box>
        )}
      </section>
    </>
  );
}
