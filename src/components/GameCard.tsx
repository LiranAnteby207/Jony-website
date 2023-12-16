import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius="5px">
      <Image src={game.background_image} />
    </Card>
  );
};

export default GameCard;
