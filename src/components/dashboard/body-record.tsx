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

      <Flex
        justifyContent={"space-between"}
        textAlign={"center"}
        py={2}
        borderBottom={"2px"}
        borderColor={"gray.100"}
      >
        <Box>
          <Text>体重</Text>
          <Text>66.0kg</Text>
        </Box>
        <Box>
          <Text>体脂肪</Text>
          <Text>23.0%</Text>
        </Box>
        <Box>
          <Text>睡眠</Text>
          <Text>--</Text>
        </Box>
      </Flex>

      <Box textAlign={"center"} py={2}>
        <Text color={"teal"}>体重グラフ</Text>
      </Box>
    </Box>
  );
};
