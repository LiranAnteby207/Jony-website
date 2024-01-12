import NavBar from "../components/navbar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import useSideBarStore from "../stores/sidebarStore";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import SideBar from "../components/sidebar/SideBar";
import DownPage from "../components/downPage/DownPage";
import { FaArrowUp } from "react-icons/fa";
import useRightSideBarStore from "../stores/rightSideBarStore";
import RightSideBar from "../components/rightSideBar/RightSideBar";
import RightVisiblePart from "../components/rightSideBar/RightVisiblePart";
import Corousel from "../components/corousel/Corousel";
import RightOfCorousel from "../components/corousel/RightOfCorousel";
import { useEffect, useState } from "react";
import usePathStore from "../stores/pathStore";

const Layout = () => {
  const isLargeDevice = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // You can adjust the value (200 in this case) to determine when to show the button
    setShowButton(scrollY > 200);
  };

  useEffect(() => {
    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const top = () => {
    window.scrollTo(0, 0);
  };
  const showSidebar = useSideBarStore((s) => s.showSidebar);
  const setSidebar = useSideBarStore((s) => s.setShowSidebar);
  const showRightSideBar = useRightSideBarStore((s) => s.showRightSidebar);
  const setRightSideBar = useRightSideBarStore((s) => s.setRightShowSidebar);
  const { colorMode } = useColorMode();
  const { selectedPath, setSelectedPath } = usePathStore();
  let location = useLocation();
  useEffect(() => {
    setSelectedPath(location.pathname);
  }, [location]);
  return (
    <Grid>
      <Box
        width="100%"
        position="fixed"
        zIndex={showSidebar || showRightSideBar ? 1 : 2}
      >
        <NavBar />
      </Box>
      {showSidebar && (
        <GridItem
          position="fixed"
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
      <RightVisiblePart />
      {showRightSideBar && (
        <GridItem
          position="fixed"
          backgroundColor={colorMode === "dark" ? "gray.800" : "white"}
          top={0}
          bottom={0}
          right={0}
          zIndex={1}
          paddingLeft={2}
        >
          <RightSideBar />
        </GridItem>
      )}
      <Box mr={isLargeDevice ? "8%" : 0} ml={isLargeDevice ? "8%" : 0}>
        {!selectedPath.includes("/tournaments") &&
          !selectedPath.includes("/Bonuses") && (
            <>
              <HStack mt={20} mr={16} ml={10}>
                <Corousel />
                <RightOfCorousel />
              </HStack>
            </>
          )}

        <Box pt={5}>
          <Outlet />
        </Box>
      </Box>
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
      {showRightSideBar && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={0}
          onClick={setRightSideBar}
        />
      )}
      <DownPage />
      {showButton && (
        <Button
          position="fixed"
          bottom="2%"
          left="2%"
          borderRadius="25%"
          boxShadow="0 0 10px rgba(255, 255, 255, 0.5)"
          boxSize={10}
          onClick={top}
        >
          <Icon color="red.500" boxSize={6} as={FaArrowUp} />
        </Button>
      )}
    </Grid>
  );
};

export default Layout;
