import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
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
          <SideBar
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            onClick={handleButtonClick}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      )}
      <GridItem area="nav">
        <NavBar onClick={handleButtonClick} isNotDisplay={isNotDisplay} />
      </GridItem>
      <GridItem padding={35} area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
