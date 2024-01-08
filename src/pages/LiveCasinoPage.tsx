import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import GenreSelector from '../components/game/GenreSelector'
import PlatformSelector from '../components/game/PlatformSelector'
import SearchInput from '../components/game/SearchInput'
import SortSelector from '../components/game/SortSelector'
import LiveCasinoMainCards from '../components/liveCasino/LiveCasinoMainCards'
import LiveCasinoGames from '../components/liveCasino/LiveCasinoGames'

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
        <LiveCasinoGames/>
      </GridItem>
    </Grid>
  )
}

export default LiveCasinoPage