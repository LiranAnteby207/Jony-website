import {
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import evoLady from "../../assets/EvolutionGamingLobby.jpg";
import evoLogo from "../../assets/evolution_logo.svg";
import LuckyStreakLady from "../../assets/LuckyStreakLobby.jpg";
import luckyStreakLogo from "../../assets/luckystreak.png.d56ead80c02320dadb2e08edb24dd9c7.png";
import pragmaticGamesLady from "../../assets/PragmaticPlayLobby.jpg";
import pragmaticLogo from "../../assets/pragmatic-play-logo-C41E3B3527-seeklogo.com.png";
import ezugiLady from "../../assets/EzugiLobby.jpg";
import ezugiLogo from "../../assets/Ezugi-logo300.webp";
import authenticLady from "../../assets/AuthenticGamingLobby.jpg";
import authenticLogo from "../../assets/c9e6f16f-4d77-4607-b64e-fb915b5464d4.png";
import { Link } from "react-router-dom";
const LiveCasinoMainCards = () => {
  const isLargeDevice = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });
  const isMediumDevice = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });
  return (
    <>
      <Link to="/liveCasino">
        <HStack>
          <Heading>Live Casino</Heading>
          <Heading fontSize={16} fontWeight="regular" mt={2} color="gray.500">
            all 137
          </Heading>
        </HStack>
      </Link>
      <SimpleGrid
        mb={2}
        height="350px"
        columns={{ base: 2, md: 3, lg: 5 }}
        spacing={2}
      >
        <Card bgSize="cover" alignItems="center" bgImage={evoLady}>
          <CardBody></CardBody>
          <CardFooter>
            <Image width="100%" src={evoLogo} alt="Company Logo" />
          </CardFooter>
        </Card>
        <Card bgSize="cover" alignItems="center" bgImage={LuckyStreakLady}>
          <CardBody></CardBody>
          <CardFooter>
            <Image src={luckyStreakLogo} alt="Company Logo" />
          </CardFooter>
        </Card>
        {isMediumDevice && (
          <>
            <Card
              bgSize="cover"
              alignItems="center"
              bgImage={pragmaticGamesLady}
            >
              <CardBody></CardBody>
              <CardFooter>
                <Image width="100%" src={pragmaticLogo} alt="Company Logo" />
              </CardFooter>
            </Card>
          </>
        )}
        {isLargeDevice && (
          <>
            <Card bgSize="cover" alignItems="center" bgImage={ezugiLady}>
              <CardBody></CardBody>
              <CardFooter>
                <Image width="100%" src={ezugiLogo} alt="Company Logo" />
              </CardFooter>
            </Card>
            <Card bgSize="cover" alignItems="center" bgImage={authenticLady}>
              <CardBody></CardBody>
              <CardFooter>
                <Image
                  style={{ filter: "brightness(150%)" }}
                  width="100%"
                  src={authenticLogo}
                  alt="Company Logo"
                />
              </CardFooter>
            </Card>
          </>
        )}
      </SimpleGrid>
    </>
  );
};

export default LiveCasinoMainCards;
