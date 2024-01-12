import { Box, Image, SimpleGrid, useColorMode } from "@chakra-ui/react";
import iconsOfCompanies from "../../data/iconsData";

const IconsHolderMain = () => {
  const { colorMode } = useColorMode();
  return (
    <SimpleGrid columns={{ base: 4, md: 5, lg: 9 }}>
      {iconsOfCompanies.map((element, index) => (
        <Box key={index} position="relative">
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgColor={colorMode === "dark" ? "rgba(18, 18, 18, 0.9)" : ""}
            _hover={{
              bgColor: "transparent",
              transition: "background-color 0.5s ease-in-out",
            }}
          />
          <Image
            bgColor={"transparent"}
            key={index}
            color={"gray.500"}
            src={element.img}
            title={element.name}
            zIndex="1"
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default IconsHolderMain;
