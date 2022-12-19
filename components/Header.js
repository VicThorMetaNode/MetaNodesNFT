import React from "react";
import Link from "next/link";
//IMPORT MOTION
import { motion } from "framer-motion";

// IMPORT CHAKRA tools
import { Box, Text, Flex, HStack, Spacer } from "@chakra-ui/react";

//IMPORT ICON
import { RiShoppingCartLine } from "react-icons/ri";

// //IMPORT CART + CONTEXT
// import { Cart } from "./";
// import { useStateContext } from "../context/StateContext";

const Header = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <>
      <Box height={10}>
        <Flex>
          <Box m={2}>
            <Text className="navbar-logo-title">
              <Link href="/">MTN-labs</Link>
            </Text>
          </Box>
          <Spacer />
          <HStack>
            <Text className="navbar-logo-title">
              <Link href="/collections/0x1A8058eac6D3B1e1e571b48f3AD225BBAD8b68E5">
                Collection
              </Link>
            </Text>
            <Text className="navbar-logo-title">
              <Link href="/">About</Link>
            </Text>
            <Text className="navbar-logo-title">
              <Link href="/">Create</Link>
            </Text>
          </HStack>
          <Box m={2}>
            <button
              type="button"
              className="cart-icon"
              // onClick={() => setShowCart(true)}
            >
              <RiShoppingCartLine />
              {/* <span className="cart-item-qty">{totalQuantities}</span> */}
            </button>
            {/* {showCart && <Cart />} */}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
