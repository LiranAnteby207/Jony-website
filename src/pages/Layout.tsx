import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import useSideBarStore from "../stores/sidebarStore";
import { Button, Grid, GridItem, Icon, useColorMode } from "@chakra-ui/react";
import SideBar from "../components/sidebar/SideBar";
import DownPage from "../components/downPage/DownPage";
import { FaArrowUp } from "react-icons/fa";

const Layout = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };
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
      <DownPage />
      <Button
        borderRadius="25%"
        boxShadow="0 0 10px rgba(255, 255, 255, 0.5)"
        mt="-5rem"
        ml="2%"
        boxSize={10}
        onClick={top}
      >
        <Icon color="red.500" boxSize={6} as={FaArrowUp} />
      </Button>
    </Grid>
  );
};

export default Layout;
