import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
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
    <Grid templateAreas={gridTemplateAreas} templateColumns="200px 1fr" gap={1}>
      {showSidebar && (
        <GridItem area="sidebar" colSpan={1}>
          <SideBar onClick={handleButtonClick} />
        </GridItem>
      )}
      <GridItem area="nav">
        <NavBar onClick={handleButtonClick} isNotDisplay={isNotDisplay} />
      </GridItem>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
