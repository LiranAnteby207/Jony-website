import {
    Button,
    Grid,
    GridItem,
    HStack,
    Heading,
    Icon,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import { IoArrowUndo } from "react-icons/io5";
  import background_gradient_lights from "../assets/background-gradient-lights.jpg";
  import GameGrid from "../components/game/GameGrid";
  import BigTournamentCard from "../components/BigTournamentCard";
  import zeus from "../assets/zeusImage.png";
  import dropWins from "../assets/drops002.png";
  import logo from "../assets/logo.png";
  import BigTournamentInfoCard from "../components/BigTournamentInfoCard";
import { Link } from "react-router-dom";
  const TournamentsSpecificPage = () => {
    const isLargeDevice = useBreakpointValue({
      base: false,
      md: false,
      lg: true,
    });
    const isSmallDevice = useBreakpointValue({
      base: true,
      md: false,
      lg: false,
    });
    const modalInfo = {
      headline: "All Prizes",
      prize: "5000$",
      time: "from 23.12 to 29.12",
      minimumBet: "equivalent 0,5€",
      logoText: "Riobet Network Tournament",
    };
    return (
      <Grid p={"2%"} pt={16} pb={4} ml={isSmallDevice? 4: 0} mr={isSmallDevice? -16: 0}>
        <GridItem>
          <Link to={'/tournaments'}>
            <Button bgColor="transparent" mb={4}>
              <HStack>
                <Icon as={IoArrowUndo} boxSize={6} />
                <Heading mt={2} fontWeight="regular" fontSize={16}>
                  All tournaments
                </Heading>
              </HStack>
            </Button>
          </Link>
        </GridItem>
        <GridItem>
          <HStack>
            <BigTournamentCard
              bgImage={background_gradient_lights}
              rImage={zeus}
              ltImage={dropWins}
              lbText={["Prize Pool", "2 000 000 $"]}
              ltLogo={logo}
            />
            {isLargeDevice && (
            <BigTournamentInfoCard
              name={"Zeus Game"}
              headline={"Prize places"}
              fPrize={"1 000$"}
              sPrize={"700$"}
              tPrize={"400$"}
              modalInfo={modalInfo}
            />)}
          </HStack>
        </GridItem>
        <GridItem pr={isLargeDevice ? 8: 0}>
          <Heading mb={4}>Tournament games</Heading>
          <GameGrid />
        </GridItem>
      </Grid>
    );
  };
  
  export default TournamentsSpecificPage;
  