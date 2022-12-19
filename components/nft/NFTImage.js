import { IoMdSnow } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

// IMPORT CHAKRA tools
import { Box, Text, Flex, HStack, Spacer } from "@chakra-ui/react";

const NFTImage = ({ selectedNft }) => {
  return (
    <>
      <Box>
        <Box>
          <Box>
            <IoMdSnow />
            <Box>
              <AiOutlineHeart />
            </Box>
          </Box>
        </Box>
        <Box>
          {console.log(selectedNft, "🎆")}
          <img src={selectedNft?.image} />
        </Box>
      </Box>
    </>
  );
};

export default NFTImage;
