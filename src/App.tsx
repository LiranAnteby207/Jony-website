import { Box, Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import GenreSelector from "./components/GenreSelector";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [isNotDisplay, setNotDisplay] = useState(false);
  const [showSidebar, setSideBar] = useState(false);
  const handleButtonClick = () => {
    setSideBar(!showSidebar);
    setNotDisplay(!isNotDisplay);
  };
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
          <SideBar onClick={handleButtonClick} />
        </GridItem>
      )}
      <GridItem area="nav">
        <NavBar onClick={handleButtonClick} isNotDisplay={isNotDisplay} />
      </GridItem>
      <GridItem padding={35} area="main">
        <Flex marginBottom={3}>
          <Box marginRight={2}>
            <GenreSelector
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </Box>
          <Box marginRight={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <Box marginRight={2}>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Box>
          <SearchInput
            onSerach={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
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
          onClick={handleButtonClick}
        />
      )}
    </Grid>
  );
}

export default App;
