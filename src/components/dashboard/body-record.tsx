import { EditIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";

export const BodyRecord = () => {
  return (
    <Box bgColor={"white"} mt={6} px={3}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        py={2}
        borderBottom={"2px"}
        borderColor={"gray.100"}
      >
        <Text>カラダ記録</Text>
        <EditIcon boxSize={6} color={"teal"} />
      </Flex>
    </Box>
  );
};
