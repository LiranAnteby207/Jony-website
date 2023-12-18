import { Box, Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import useSideBarStore from "../sidebarStore";
const NavBar = () => {
  const showSideBar = useSideBarStore((s) => s.showSidebar);
  const setSidebar = useSideBarStore((s) => s.setShowSidebar);
  return (
    <HStack>
      {showSideBar ? null : (
        <Button onClick={setSidebar}>sidebar handle</Button>
      )}

      <Box maxH="60px" maxW="120px">
        <Image src={logo} objectFit="cover" w="100%" h="100%" />
      </Box>
    </HStack>
  );
};

export default NavBar;
