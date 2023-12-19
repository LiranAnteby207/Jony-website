import { HStack, Button, Icon, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import useSideBarStore from "../sidebarStore";
import { FaTimes } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { FaSun } from "react-icons/fa";
const SidebarNavbar = () => {
  const setShowSideBar = useSideBarStore((s) => s.setShowSidebar);
  const { colorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" width="300px">
      <Button onClick={setShowSideBar} bgColor="transparent">
        <Icon boxSize={5} as={FaTimes} />
      </Button>
      <HStack>
        <Icon
          mr={2}
          boxSize={6}
          as={FiMoon}
          color={colorMode === "light" ? "gray.200" : undefined}
        />
        <ColorModeSwitch />
        <Icon
          ml={2}
          boxSize={6}
          as={FaSun}
          color={colorMode === "dark" ? "gray.500" : undefined}
        />
      </HStack>
    </HStack>
  );
};

export default SidebarNavbar;
