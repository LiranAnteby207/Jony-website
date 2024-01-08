import { Grid, GridItem, Flex, Box } from '@chakra-ui/react'
import GenreSelector from '../components/game/GenreSelector'
import PlatformSelector from '../components/game/PlatformSelector'
import SearchInput from '../components/game/SearchInput'
import SortSelector from '../components/game/SortSelector'
import SlotsGames from '../components/slots/SlotsGames'

const SlotsPage = () => {
  return (
    <Grid templateAreas={`"main"`} templateColumns="1fr" gap={2}>
      <GridItem mr={16} ml={10} area="main">
        <Flex marginBottom={8}>
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
        <SlotsGames/>
      </GridItem>
    </Grid>
  )
}

export default SlotsPage