import { Header } from "../components/dashboard/header";
import { CalorieDisplay } from "../components/dashboard/calorie-display";
import { BodyRecord } from "../components/dashboard/body-record";
import { Box } from "@chakra-ui/react";
import { BreakFast } from "../components/dashboard/break-fast";

export const Dashboard = () => {
  return (
    <Box bgColor={"gray.100"}>
      <Header />
      <CalorieDisplay />
      <BodyRecord />
      <BreakFast />
    </Box>
  );
};
