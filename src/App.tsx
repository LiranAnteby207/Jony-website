import { Box, Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import GenreSelector from "./components/GenreSelector";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";

function App() {
  const [showSidebar, setSideBar] = useState(false);
  const { colorMode } = useColorMode();
  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns="1fr" gap={2}>
      {showSidebar && (
        <GridItem
          area="sidebar"
          position="absolute"
          backgroundColor={colorMode === "dark" ? "gray.800" : "white"}
          top={0}
          bottom={0}
          left={0}
          zIndex={1}
          paddingRight={2}
        >
          <SideBar onClick={() => setSideBar(!showSidebar)} />
        </GridItem>
      )}
      <GridItem area="nav">
        <NavBar
          onClick={() => setSideBar(!showSidebar)}
          isNotDisplay={showSidebar}
        />
      </GridItem>
      <GridItem padding={35} area="main">
        <Flex marginBottom={3}>
          <Box marginRight={2}>
            <GenreSelector />
          </Box>
          <Box marginRight={2}>
            <PlatformSelector />
          </Box>
          <Box marginRight={2}>
            <SortSelector />
          </Box>
          <SearchInput />
        </Flex>
        <GameGrid />
      </GridItem>
      {showSidebar && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={0}
          onClick={() => setSideBar(!showSidebar)}
        />
      )}
    </Grid>
  );
}

export default App;
