import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [showSidebar, setSideBar] = useState(false);
  const handleButtonClick = () => {
    setSideBar(!showSidebar);
  };
  const gridTemplateAreas = showSidebar
    ? `"sidebar   nav" "sidebar main"`
    : `"nav   nav" "main main"`;
  return (
    <Grid templateAreas={gridTemplateAreas} templateColumns="200px 1fr" gap={1}>
      {showSidebar && (
        <GridItem area="sidebar" bg="gold" colSpan={1}>
          {/* Sidebar content goes here */}
          Sidebar Content
        </GridItem>
      )}
      <GridItem area="nav" bg="coral">
        <Button onClick={handleButtonClick}>sidebar handle</Button>
      </GridItem>
      <GridItem area="main" bg="green">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
