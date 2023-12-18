import React from "react";
import useSideBarStore from "../sidebarStore";
import { Grid, GridItem, Heading, useColorMode } from "@chakra-ui/react";
import SideBar from "../components/SideBar";

const GameDetailPage = () => {
  return (
    <Grid>
      <GridItem>
        <Heading paddingLeft={400}>liran's page</Heading>
      </GridItem>
    </Grid>
  );
};

export default GameDetailPage;
