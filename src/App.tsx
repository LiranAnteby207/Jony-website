import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import GenreSelector from "./components/GenreSelector";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [isNotDisplay, setNotDisplay] = useState(false);
  const [showSidebar, setSideBar] = useState(false);
  const handleButtonClick = () => {
    setSideBar(!showSidebar);
    setNotDisplay(!isNotDisplay);
  };
  const gridTemplateAreas = showSidebar
    ? `"sidebar   nav" "sidebar main"`
    : `"nav   nav" "main main"`;
  return (
    <Grid templateAreas={gridTemplateAreas} templateColumns="200px 1fr" gap={2}>
      {showSidebar && (
        <GridItem area="sidebar" colSpan={1} paddingX={5}>
          <SideBar onClick={handleButtonClick} />
        </GridItem>
      )}
      <GridItem area="nav">
        <NavBar onClick={handleButtonClick} isNotDisplay={isNotDisplay} />
      </GridItem>
      <GridItem padding={35} area="main">
        <HStack>
          <GenreSelector
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
