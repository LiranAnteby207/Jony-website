import manIcon from "../../assets/person_profile_icon.png";
import moneyBag from "../../assets/icons-money-bag.png";
import bullseye from "../../assets/icons-dart-board.png";
import dollarMedal from "../../assets/icons-dollar-coin.png";
import {
  Box,
  HStack,
  Heading,
  Image,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const RightOfCorousel = () => {
  const { colorMode } = useColorMode();
  const isLargeDevice = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });
  const elements = [
    {
      name: "icon of man",
      icon: manIcon,
      heading: "Online Players",
      second: "2000",
    },
    {
      name: "money bag",
      icon: moneyBag,
      heading: "Average Withdrawal Time",
      second: "17 min 09 sec",
    },
    {
      name: "dart board",
      icon: bullseye,
      heading: "Top Win Today",
      second: "18 654$",
    },
    {
      name: "dollar medal",
      icon: dollarMedal,
      heading: "Tournaments prize pool",
      second: "11 728 428$",
    },
  ];
  if (isLargeDevice)
    return (
      <Box width="20%" height="100%" borderRadius={10} marginBottom="2%">
        {elements.map((e) => (
          <HStack
            mb={3}
            borderBottomRadius={e.name === "dollar medal" ? 10 : 0}
            borderTopRadius={e.name === "icon of man" ? 10 : 0}
            bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
          >
            <Image m={3} boxSize={10} src={e.icon} alt={e.name} />
            <Box>
              <Heading fontSize={15} color="gray.300">
                {e.heading}
              </Heading>
              <Heading fontSize={15}>{e.second}</Heading>
            </Box>
          </HStack>
        ))}
      </Box>
    );
  else return <></>;
};

export default RightOfCorousel;
