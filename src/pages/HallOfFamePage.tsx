import {
  Box,
  Button,
  ButtonGroup,
  GridItem,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import HallOfFameColumn from "../components/hallOfFame/HallOfFameColumn";

const HallOfFamePage = () => {
  const [selectedButton, setSelectedButton] = useState(4);

  const handleButtonClick = (buttonNumber: number) => {
    setSelectedButton(buttonNumber);
  };
  const { colorMode } = useColorMode();
  return (
    <Box mt={16} mb={8}>
      <HStack display={"flex"} justifyContent={"center"}>
        <Icon color="gold" as={FaStar} />
        <Heading color="gold">Hall Of Fame</Heading>
        <Icon color="gold" as={FaStar} />
      </HStack>
      <HStack display={"flex"} justifyContent={"center"} mt={8}>
        <ButtonGroup
          bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
          borderRadius={4}
        >
          <Button
            onClick={() => handleButtonClick(1)}
            bgColor={!(selectedButton === 1) ? "transparent" : undefined}
          >
            all
          </Button>
          <Button
            onClick={() => handleButtonClick(2)}
            bgColor={!(selectedButton === 2) ? "transparent" : undefined}
          >
            month
          </Button>
          <Button
            onClick={() => handleButtonClick(3)}
            bgColor={!(selectedButton === 3) ? "transparent" : undefined}
          >
            week
          </Button>
          <Button
            onClick={() => handleButtonClick(4)}
            bgColor={!(selectedButton === 4) ? "transparent" : undefined}
          >
            today
          </Button>
        </ButtonGroup>
      </HStack>
      <SimpleGrid columns={3}>
        <GridItem>
          <HallOfFameColumn />
        </GridItem>
        <GridItem>
          <HallOfFameColumn />
        </GridItem>
        <GridItem>
          <HallOfFameColumn />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default HallOfFamePage;
