import { Box, Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import GenreSelector from "./components/GenreSelector";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";
import useSideBarStore from "./sidebarStore";

function App() {
  const showSidebar = useSideBarStore((s) => s.showSidebar);
  const setSidebar = useSideBarStore((s) => s.setShowSidebar);
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
          <SideBar />
        </GridItem>
      )}
      <GridItem area="nav">
        <NavBar />
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
          onClick={setSidebar}
        />
      )}
    </Grid>
  );
}

export default App;
