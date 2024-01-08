import { Box, HStack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import GameGrid from '../game/GameGrid';

const SlotsGames = () => {
    const gameArsenal = [
        {name: 'Popular', allNumber: 'all 8109'},
        {name: 'New', allNumber: 'all 215'},
        {name: 'Feature buy', allNumber: 'all 1781'},
        {name: 'Books', allNumber: 'all 203'},
        {name: 'Jackpots', allNumber: 'all 244'},
        {name: 'MegaWays', allNumber: 'all 223'},
        {name: 'Unusual', allNumber: 'all 276'},
    ];
  return (
    gameArsenal.map(e => (
        <Box mb={8}>
            <Link to={`/slots/${e.name}`}>
                <HStack>
                    <Heading fontWeight='regular'>{e.name}</Heading>
                    <Heading fontSize={16} fontWeight="regular" mt={2} color="gray.500">
                        {e.allNumber}
                    </Heading>
                </HStack>
            </Link>
            <GameGrid/>
        </Box>
    ))
    
  )
}

export default SlotsGames