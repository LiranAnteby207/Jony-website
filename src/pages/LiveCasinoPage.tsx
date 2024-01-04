import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import GameGrid from '../components/game/GameGrid'
import GenreSelector from '../components/game/GenreSelector'
import PlatformSelector from '../components/game/PlatformSelector'
import SearchInput from '../components/game/SearchInput'
import SortSelector from '../components/game/SortSelector'
import LiveCasinoMainCards from '../components/liveCasino/LiveCasinoMainCards'

const LiveCasinoPage = () => {
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
        <LiveCasinoMainCards />
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default LiveCasinoPage