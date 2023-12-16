import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";

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
        <GridItem area="sidebar" bg="gold" colSpan={1}>
          <Button onClick={handleButtonClick}>close</Button>
          Sidebar Content
        </GridItem>
      )}
      <GridItem area="nav">
        <NavBar onClick={handleButtonClick} isNotDisplay={isNotDisplay} />
      </GridItem>
      <GridItem area="main" bg="green">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
