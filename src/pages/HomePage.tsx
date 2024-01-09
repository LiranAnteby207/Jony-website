import { Grid, GridItem, Flex, Box, HStack, Heading } from "@chakra-ui/react";
import GameGrid from "../components/game/GameGrid";
import GenreSelector from "../components/game/GenreSelector";
import PlatformSelector from "../components/game/PlatformSelector";
import SearchInput from "../components/game/SearchInput";
import SortSelector from "../components/game/SortSelector";
import LiveCasinoMainCards from "../components/liveCasino/LiveCasinoMainCards";
import { Link } from "react-router-dom";
import SlotsRealtimeWins from "../components/slots/SlotsRealtimeWins";
import IconsHolderMain from "../components/iconsHolder/IconsHolderMain";

const HomePage = () => {
  return (
    <Grid templateAreas={`"main"`} templateColumns="1fr" gap={2}>
      <GridItem mr={16} ml={10} area="main">
        <Flex marginBottom={3}>
          <Box marginRight={2}>
            <GenreSelector />
          </Box>
          <Box marginRight={2}>
            <PlatformSelector />
          </Box>
          <Box marginRight={2}>
            <SortSelector />
          </Box>
          <SearchInput />
        </Flex>
        <GameGrid />
      </GridItem>
      <GridItem mr={16} ml={10}>
        <Link to="/live-casino">
          <HStack mb={-12}>
            <Heading>Live Casino</Heading>
            <Heading fontSize={16} fontWeight="regular" mt={2} color="gray.500">
              all 137
            </Heading>
          </HStack>
        </Link>
        <LiveCasinoMainCards />
      </GridItem>
      <GridItem mr={16} ml={10}>
        <Link to="/slots">
          <Heading>Realtime Wins</Heading>
        </Link>
        <SlotsRealtimeWins />
      </GridItem>

      <GridItem mr={16} ml={10}>
        <IconsHolderMain />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
