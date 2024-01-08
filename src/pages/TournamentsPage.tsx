import {
  Box,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import background_gradient_lights from "../assets/background-gradient-lights.jpg";
import BigTournamentCard from "../components/BigTournamentCard";
import zeus from "../assets/zeusImage.png";
import dropWins from "../assets/drops002.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const TournamentsPage = () => {
  const numberOfTour = [1,2,3,4,5,6,7,8,9,10];
  return (
    <SimpleGrid columns={{base:1 ,lg:2} } p={"2%"} pt={16} pb={4}>
      {numberOfTour.map(n => (
        <GridItem  key={n}>
          <Link to={`/tournaments/zeus`}>
            <Box _hover={{
            transform: 'scale(1.05)',
            transition: 'transform 0.6s',
          }}>
              <BigTournamentCard
                    bgImage={background_gradient_lights}
                    rImage={zeus}
                    ltImage={dropWins}
                    lbText={["Prize Pool", "2 000 000 $"]}
                    ltLogo={logo}
                  />
              </Box>
          </Link>
          </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default TournamentsPage;
