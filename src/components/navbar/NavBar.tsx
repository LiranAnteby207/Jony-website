import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import useSideBarStore from "../../stores/sidebarStore";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import NavbarMenu from "./NavbarMenu";
import NavbarLogSign from "./NavbarLogSign";
import { Link } from "react-router-dom";

const NavBar = () => {
  const showSideBar = useSideBarStore((s) => s.showSidebar);
  const setSidebar = useSideBarStore((s) => s.setShowSidebar);
  const { colorMode } = useColorMode();

  const isLargeDevice = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });
  const isMediumDevice = useBreakpointValue({
    base: false,
    md: true,
    lg: false,
  });
  const isSmallDevice = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  });
  return (
    <>
      {isLargeDevice && (
        <HStack
          pt={2}
          pb={4}
          bgColor={colorMode === "dark" ? "gray.800" : "gray.100"}
        >
          {showSideBar ? null : (
            <Button onClick={setSidebar} bgColor="transparent">
              <Icon as={HiOutlineMenuAlt2} boxSize={7} />
            </Button>
          )}

          <Box maxW="9%" ml="auto">
            <Link to="/">
              <Image
                style={
                  colorMode === "dark"
                    ? { filter: "brightness(170%)" }
                    : { filter: "brightness(100%)" }
                }
                src={logo}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Link>
          </Box>
          <NavbarMenu />
          <Box ml="auto" mr={"2%"}>
            <NavbarLogSign />
          </Box>
        </HStack>
      )}
      {isMediumDevice && (
        <>
          <HStack>
            {showSideBar ? null : (
              <Button onClick={setSidebar} bgColor="transparent">
                <Icon as={HiOutlineMenuAlt2} boxSize={7} />
              </Button>
            )}

            <Box maxW="12%" ml="auto">
              <Link to="/">
                <Image
                  style={
                    colorMode === "dark"
                      ? { filter: "brightness(170%)" }
                      : { filter: "brightness(100%)" }
                  }
                  src={logo}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Link>
            </Box>

            <Box ml="auto">
              <NavbarLogSign />
            </Box>
          </HStack>
          <Box bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}>
            <NavbarMenu />
          </Box>
        </>
      )}
      {isSmallDevice && (
        <HStack>
          {showSideBar ? null : (
            <Button onClick={setSidebar} bgColor="transparent">
              <Icon as={HiOutlineMenuAlt2} boxSize={7} />
            </Button>
          )}

          <Box maxW="20%" ml="auto">
            <Link to="/">
              <Image
                style={
                  colorMode === "dark"
                    ? { filter: "brightness(170%)" }
                    : { filter: "brightness(100%)" }
                }
                src={logo}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Link>
          </Box>
          <Box ml="auto">
            <NavbarLogSign />
          </Box>
        </HStack>
      )}
    </>
  );
};

export default NavBar;
