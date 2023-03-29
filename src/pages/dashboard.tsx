import { Header } from "../components/dashboard/header";
import { CalorieDisplay } from "../components/dashboard/calorie-display";
import { BodyRecord } from "../components/dashboard/body-record";
import { Box } from "@chakra-ui/react";

export const Dashboard = () => {
  return (
    <Box bgColor={"gray.100"}>
      <Header />
      <CalorieDisplay />
      <BodyRecord />
    </Box>
  );
};
