import {
  Box,
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
import ezugiLogo from "../../assets/hvfbbdrni4ez5mbjnujq.png";
import authenticLady from "../../assets/AuthenticGamingLobby.jpg";
import authenticLogo from "../../assets/c9e6f16f-4d77-4607-b64e-fb915b5464d4.png";
import { Link } from "react-router-dom";
import HoverCards from "../HoverCards";
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
  const elementsArray = [
    {name:'evo',lady: evoLady, logo: evoLogo},
    {name:'luck',lady: LuckyStreakLady, logo: luckyStreakLogo},
    {name:'prag',lady: pragmaticGamesLady, logo: pragmaticLogo},
    {name:'ezug',lady: ezugiLady, logo: ezugiLogo},
    {name:'auth',lady: authenticLady, logo: authenticLogo},
  ];
  let elementsToRender = isLargeDevice
  ? elementsArray
  : isMediumDevice
  ? elementsArray.slice(0, 3)
  : elementsArray.slice(0, 2);
  return (
    <Box mb={16}>
      <Link to="/live-casino">
        <HStack>
          <Heading>Live Casino</Heading>
          <Heading fontSize={16} fontWeight="regular" mt={2} color="gray.500">
            all 137
          </Heading>
        </HStack>
      </Link>
      <SimpleGrid mb={2}
        height="350px"
        columns={{ base: 2, md: 3, lg: 5 }}
        spacing={2}>

      {elementsToRender.map(element => (
        <>
          <Card  
          _hover={{
            "&::after": {},
            "& .hover-content": {
              opacity: 1,
            },
          }} 
          bgSize="cover" 
          alignItems="center" 
          bgImage={element.lady}>
          <CardBody><Link to={'/live-casino'}><HoverCards/></Link></CardBody>
          <CardFooter  height={element.name === 'luck' ? 120 : undefined } width={element.name === 'luck' ? 180 : undefined }>
            <Image  height={element.name === 'ezug' ? 180 : undefined} mb={element.name === 'ezug' ? -16 : element.name === 'auth'? -6 : undefined} width="100%" src={element.logo} alt="Company Logo" />
          </CardFooter>
        </Card>
        </>
      ))}
      </SimpleGrid>
    </Box>
  );
};

export default LiveCasinoMainCards;
