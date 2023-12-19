import {
  Grid,
  GridItem,
  Flex,
  Box,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreSelector from "../components/GenreSelector";
import PlatformSelector from "../components/PlatformSelector";
import SearchInput from "../components/SearchInput";
import SideBar from "../components/sidebar/SideBar";
import SortSelector from "../components/SortSelector";
import useSideBarStore from "../sidebarStore";
import Corousel from "../components/corousel/Corousel";
import RightOfCorousel from "../components/corousel/RightOfCorousel";

const HomePage = () => {
  const showSidebar = useSideBarStore((s) => s.showSidebar);
  const setSidebar = useSideBarStore((s) => s.setShowSidebar);
  const { colorMode } = useColorMode();

  return (
    <Grid templateAreas={`"main"`} templateColumns="1fr" gap={2}>
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
      <GridItem padding={35} area="main">
        <HStack>
          <Corousel />
          <RightOfCorousel />
        </HStack>
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
};

export default HomePage;
