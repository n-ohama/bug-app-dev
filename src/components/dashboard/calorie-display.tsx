import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export const CalorieDisplay = () => {
  return (
    <Tabs isFitted bgColor={"white"} mt={6}>
      <TabList>
        <Tab>摂取カロリー</Tab>
        <Tab>消費カロリー</Tab>
        <Tab>PFCバランス</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
