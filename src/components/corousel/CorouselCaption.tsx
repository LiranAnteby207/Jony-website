import { HStack, Heading, Box, Image, Text, Button } from "@chakra-ui/react";
import zues from "../../assets/zeusImage.png";
import dropWins from "../../assets/drops002.png";
import manMoney from "../../assets/manHoldingMoney.png";
import textForMan from "../../assets/newfreetexten.png";
import moneyTrophy from "../../assets/cadOfMoney.png";
import textMoneyTrophy from "../../assets/tonOfMoney.png";

export const CorouselCaptionZues = ({ isHoverd }: { isHoverd: boolean }) => {
  return (
    <HStack height="100%">
      <Box>
        <Box
          _hover={
            isHoverd
              ? {
                  transform: "scale(1.06)",
                  transition: "transform .35s ease-in",
                }
              : {}
          }
        >
          <Image src={dropWins} alt="DROPS AND WINS" />
        </Box>
        <Box height="30%">
          <Text mb={0} textAlign="left">
            Prize Pool
          </Text>
          <Heading mb={0} textAlign="left">
            2 000 000 $
          </Heading>
        </Box>
      </Box>
      <Box
        _hover={
          isHoverd
            ? {
                transform: "scale(1.06)",
                transition: "transform .35s ease-in",
              }
            : {}
        }
        height="100%"
      >
        <Image src={zues} alt="zues" height="105%" />
      </Box>
    </HStack>
  );
};

export const CorouselCaptionManHoldingMoney = ({
  isHoverd,
}: {
  isHoverd: boolean;
}) => {
  return (
    <HStack height="100%">
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Box
          _hover={
            isHoverd
              ? {
                  transform: "scale(1.06)",
                  transition: "transform .35s ease-in",
                }
              : {}
          }
          width="130%"
        >
          <Image src={textForMan} alt="50 FREESPINS" />
        </Box>
        <Button fontWeight="bold" bgColor="green.300" mt={4}>
          GET THE GIFT
        </Button>
      </Box>
      <Box
        _hover={
          isHoverd
            ? {
                transform: "scale(1.06)",
                transition: "transform .35s ease-in",
              }
            : {}
        }
        height="100%"
        pr={3}
      >
        <Image src={manMoney} alt="man with money" height="105%" width="auto" />
      </Box>
    </HStack>
  );
};

export const CorouselCaptionMoneyTrophy = ({
  isHoverd,
}: {
  isHoverd: boolean;
}) => {
  return (
    <HStack height="100%">
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Box
          _hover={
            isHoverd
              ? {
                  transform: "scale(1.06)",
                  transition: "transform .35s ease-in",
                }
              : {}
          }
          width="100%"
        >
          <Image src={textMoneyTrophy} alt="225% deposit bonus" />
        </Box>
        <Button fontWeight="bold" bgColor="green.300" mt={10}>
          GET THE GIFT
        </Button>
      </Box>
      <Box
        _hover={
          isHoverd
            ? {
                transform: "scale(1.06)",
                transition: "transform .35s ease-in",
              }
            : {}
        }
        height="100%"
        pr={3}
      >
        <Image
          src={moneyTrophy}
          alt="money trophy"
          height="100%"
          width="auto"
        />
      </Box>
    </HStack>
  );
};
