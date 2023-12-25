import { HStack, useColorMode } from "@chakra-ui/react";
import DownPageLeft from "./DownPageLeft";
import DownPageMiddle from "./DownPageMiddle";

const DownPage = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}>
      <DownPageLeft />
      <DownPageMiddle />
    </HStack>
  );
};

export default DownPage;
