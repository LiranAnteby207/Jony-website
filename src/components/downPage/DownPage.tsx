import {
  HStack,
  VStack,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import DownPageLeft from "./DownPageLeft";
import DownPageMiddle from "./DownPageMiddle";
import DownPageRight from "./DownPageRight";

const DownPage = () => {
  const { colorMode } = useColorMode();
  const isLargerThanLg = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      {isLargerThanLg ? (
        <HStack
          bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
          spacing={4}
        >
          <DownPageLeft />
          <DownPageMiddle />
          <DownPageRight />
        </HStack>
      ) : (
        <VStack
          bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
          spacing={4}
        >
          <DownPageLeft />
          <DownPageMiddle />
          <DownPageRight />
        </VStack>
      )}
    </>
  );
};

export default DownPage;
