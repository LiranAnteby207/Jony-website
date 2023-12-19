import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import useSideBarStore from "../sidebarStore";
import { Grid, GridItem, useColorMode } from "@chakra-ui/react";
import SideBar from "../components/sidebar/SideBar";

const Layout = () => {
  const showSidebar = useSideBarStore((s) => s.showSidebar);
  const { colorMode } = useColorMode();

  return (
    <Grid>
      <NavBar />
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
      <Outlet />
    </Grid>
  );
};

export default Layout;
