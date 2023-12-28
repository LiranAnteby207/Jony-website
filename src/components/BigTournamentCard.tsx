import { Box, HStack, Heading, Icon, Image, VStack } from "@chakra-ui/react";
import { LuAlarmClock } from "react-icons/lu";
interface Props {
  bgImage: string;
  rImage: string;
  ltImage: string;
  lbText: string[];
  ltLogo: string;
}
const BigTournamentCard = ({
  bgImage,
  rImage,
  ltImage,
  lbText,
  ltLogo,
}: Props) => {
  const basicBoxStyles = {
    width: "100%",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 10,
    border: "2px solid gold",
    marginBottom: "5%",
  };
  return (
    <Box width={{ base: "100%", lg: "80%" }} mb={2}>
      <HStack mt={4}>
        <Icon as={LuAlarmClock} />
        <Heading fontWeight="regular" fontSize={16} mt={2}>
          12 days left
        </Heading>
      </HStack>
      <Box sx={basicBoxStyles}>
        <HStack pl={6}>
          <VStack alignItems={"left "}>
            <Image
              width="80px"
              src={ltLogo}
              style={{ filter: "brightness(1.5)" }}
            />
            <Image mt={-4} src={ltImage} />
            <Heading color="white" fontSize={20}>
              {lbText[0]}
            </Heading>
            <Heading mt={-2} color="white" fontSize={38}>
              {lbText[1]}
            </Heading>
          </VStack>
          <Box>
            <Image src={rImage} ml={{ base: "", lg: "20%" }} mt={-10} />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default BigTournamentCard;
