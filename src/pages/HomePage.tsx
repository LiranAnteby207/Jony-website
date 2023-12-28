import { Grid, GridItem, Flex, Box, HStack } from "@chakra-ui/react";
import GameGrid from "../components/game/GameGrid";
import GenreSelector from "../components/game/GenreSelector";
import PlatformSelector from "../components/game/PlatformSelector";
import SearchInput from "../components/game/SearchInput";
import SortSelector from "../components/game/SortSelector";
import Corousel from "../components/corousel/Corousel";
import RightOfCorousel from "../components/corousel/RightOfCorousel";

const HomePage = () => {
  return (
    <Grid pt={4} templateAreas={`"main"`} templateColumns="1fr" gap={2}>
      <GridItem padding={35} mr={10} ml={10} area="main">
        <HStack>
          <Corousel />
          <RightOfCorousel />
        </HStack>
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
    </Grid>
  );
};

export default HomePage;
