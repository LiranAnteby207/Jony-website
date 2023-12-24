import { Box, useColorMode } from "@chakra-ui/react";
import DownPageLeft from "./DownPageLeft";

const DownPage = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}>
      <DownPageLeft />
    </Box>
  );
};

export default DownPage;
