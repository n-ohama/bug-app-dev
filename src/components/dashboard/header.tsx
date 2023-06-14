import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useCallback } from "react";

export const Header = () => {
  // Circle Date Component
  const circleDate = useCallback((date: string) => {
    return (
      <Box border={"1px"} borderRadius={"full"} key={date} p={"4px 6px"}>
        {date}
      </Box>
    );
  }, []);

  return (
    <Box p={"8px"} bgColor={"teal"} textColor="white">
      <Flex justifyContent={"space-between"} py={"8px"}>
        <HamburgerIcon boxSize={6} />
        <Flex>
          <ChevronLeftIcon boxSize={6} />
          <Text fontSize={"18px"}>2023年3月</Text>
          <ChevronRightIcon boxSize={6} />
        </Flex>
        <CalendarIcon boxSize={6} />
      </Flex>

      <Flex justifyContent={"space-between"} py={"4px"} alignItems={"center"}>
        <ChevronLeftIcon boxSize={6} />
        {["20", "21", "22", "23", "24", "25", "26"].map((item) =>
          circleDate(item)
        )}
        <ChevronRightIcon boxSize={6} />
      </Flex>

      <Box textAlign={"center"} py={"4px"}>
        <Text fontSize={"18px"}>3月27日</Text>
      </Box>
    </Box>
  );
};
