import { Icon, VStack, useColorMode } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { ImQuestion } from "react-icons/im";
import useRightSideBarStore from "../../stores/rightSideBarStore";
import useRightSidebarOpenStore from "../../stores/rightSideBarOpenStore";
import { IconType } from "react-icons";

const RightVisiblePart = () => {
  const { colorMode } = useColorMode();
  const setRightSideBar = useRightSideBarStore((s) => s.setRightShowSidebar);
  const setIcon = useRightSidebarOpenStore((s) => s.setIcon);
  const handleClick = (icon: IconType, name: string) => {
    setRightSideBar();
    setIcon(icon, name);
  };
  return (
    <VStack
      borderLeftRadius={10}
      position="fixed"
      right={0}
      top="50%"
      transform="translateY(-50%)"
      bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
    >
      <Icon
        _hover={{
          transform: "scale(1.2)",
          transition: "transform 0.3s ease-in-out",
        }}
        cursor="pointer"
        onClick={() => handleClick(FaTrophy, "Tournaments")}
        color="yellow.400"
        boxSize={12}
        p={2}
        as={FaTrophy}
      />
      <Icon
        _hover={{
          transform: "scale(1.2)",
          transition: "transform 0.3s ease-in-out",
        }}
        cursor="pointer"
        onClick={() => handleClick(FaHeart, "Favorites")}
        color="red"
        boxSize={12}
        p={2}
        as={FaHeart}
      />
      <Icon
        _hover={{
          transform: "scale(1.2)",
          transition: "transform 0.3s ease-in-out",
        }}
        cursor="pointer"
        onClick={() => handleClick(ImQuestion, "Support")}
        color="green.500"
        boxSize={12}
        p={2}
        as={ImQuestion}
      />
    </VStack>
  );
};

export default RightVisiblePart;
