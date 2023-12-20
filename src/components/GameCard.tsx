import { Card, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image) || noImage} />
    </Card>
  );
};

export default GameCard;
