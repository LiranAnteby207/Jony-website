import {
  HStack,
  VStack,
  Text,
  Heading,
  useColorMode,
  Button,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

const HallOfFameColumn = () => {
  const { colorMode } = useColorMode();
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <VStack
      borderRadius={16}
      m={8}
      bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
      p={4}
      mt={14}
    >
      {elements.map((e) => (
        <HStack
          bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
          width={"300px"}
          borderRadius={8}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px "}
        >
          <HStack>
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
          <Menu>
            <MenuButton
              width={4}
              height={4}
              mt={-8}
              as={Button}
              display={"flex"}
              alignItems={"center"}
              rightIcon={<BsThreeDotsVertical />}
            ></MenuButton>
            <MenuList width={48}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium sapiente voluptate sunt deserunt blanditiis a impedit
                sint cumque qui fugiat eius dolor ratione, placeat corporis et
                quisquam temporibus ducimus hic!
              </Text>
            </MenuList>
          </Menu>
        </HStack>
      ))}
    </VStack>
  );
};

export default HallOfFameColumn;
