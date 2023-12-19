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
} from "@chakra-ui/react";

const RightOfCorousel = () => {
  const isLargeDevice = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });
  if (isLargeDevice)
    return (
      <Box width="20%" height="100%" borderRadius={10} marginBottom="2%">
        <HStack mb={3} borderTopRadius={10} bgColor="gray.700">
          <Image m={3} boxSize={10} src={manIcon} alt="icon of man" />
          <Box>
            <Heading fontSize={15} color="gray.300">
              Online Players
            </Heading>
            <Heading fontSize={15}>2000</Heading>
          </Box>
        </HStack>
        <HStack mb={3} bgColor="gray.700">
          <Image m={3} src={moneyBag} boxSize={10} alt="money bag" />
          <Box>
            <Heading fontSize={15} color="gray.300">
              Average Withdrawal Time
            </Heading>
            <Heading fontSize={15}>17 min 09 sec</Heading>
          </Box>
        </HStack>
        <HStack mb={3} bgColor="gray.700">
          <Image m={3} src={bullseye} boxSize={10} alt="dart board" />
          <Box>
            <Heading fontSize={15} color="gray.300">
              Top Win Today
            </Heading>
            <Heading fontSize={15}>18 654$</Heading>
          </Box>
        </HStack>
        <HStack borderBottomRadius={10} bgColor="gray.700">
          <Image m={3} src={dollarMedal} boxSize={10} alt="dollar medal" />
          <Box>
            <Heading fontSize={15} color="gray.300">
              Tournaments prize pool
            </Heading>
            <Heading fontSize={15}>11 728 428$</Heading>
          </Box>
        </HStack>
      </Box>
    );
  else return <></>;
};

export default RightOfCorousel;
