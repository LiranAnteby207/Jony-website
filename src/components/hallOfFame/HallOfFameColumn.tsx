import {
  HStack,
  VStack,
  Text,
  Heading,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

const HallOfFameColumn = () => {
  const { colorMode } = useColorMode();
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <VStack mt={14}>
      {elements.map((e) => (
        <HStack
          bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
          m={2}
          width={"300px"}
          borderRadius={8}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <HStack ml={2}>
            <VStack>
              <button className="btnPlayerData2" />
              <button className="btnNumberData2">{e}</button>
            </VStack>
            <VStack ml={4} textAlign={"left"} align={"start"}>
              <Text mb={0} mt={4}>
                liran :)
              </Text>
              <Heading mt={-2}>$ 3 588</Heading>
            </VStack>
          </HStack>
          <Icon ml={"10%"} mt={-8} mr={4} as={BsThreeDotsVertical} />
        </HStack>
      ))}
    </VStack>
  );
};

export default HallOfFameColumn;
