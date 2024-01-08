import { HStack, Heading,Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import GameGrid from '../game/GameGrid';

const LiveCasinoGames = () => {
    const gameArsenal = [
        {name: 'Roulettes', allNumber: 'all 53'},
        {name: 'BlackJack', allNumber: 'all 16'},
        {name: 'Poker', allNumber: ''},
        {name: 'Live show', allNumber: ''},
        {name: 'Baccarat', allNumber: ''},
        {name: 'Dice', allNumber: ''},
        {name: 'Various', allNumber: ''},
    ];
  return (
    gameArsenal.map(e => (
        <Box mb={8}>
            <Link to={`/live-casino/${e.name}`}>
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

export default LiveCasinoGames