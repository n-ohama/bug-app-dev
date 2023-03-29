import { EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { AiOutlineCamera } from "react-icons/ai";
import { BiBarcodeReader } from "react-icons/bi";

export const BreakFast = () => {
  return (
    <Box bgColor={"white"} mt={6} px={3}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        py={2}
        borderBottom={"2px"}
        borderColor={"gray.100"}
      >
        <Text>朝食</Text>
        <EditIcon boxSize={6} color={"teal"} />
      </Flex>

      <Flex justifyContent={"space-evenly"} textAlign={"center"} py={2}>
        <Flex alignItems={"center"} gap={2}>
          <Icon as={AiOutlineCamera} boxSize={6} color={"teal"} />
          <Text>解析</Text>
        </Flex>
        <Flex alignItems={"center"} gap={2}>
          <Icon as={BiBarcodeReader} boxSize={6} color={"teal"} />
          <Text>バーコード</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
