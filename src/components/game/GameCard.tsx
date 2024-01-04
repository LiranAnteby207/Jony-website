import { Card, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import noImage from "../../assets/no-image-placeholder-6f3882e0.webp";
import getCroppedImageUrl from "../../services/image-url";
import HoverCards from "../HoverCards";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card 
    _hover={{
      "&::after": {},
      "& .hover-content": {
        opacity: 1,
      },
    }}>
      <HoverCards/>
      <Image src={getCroppedImageUrl(game.background_image) || noImage} />
    </Card>
  );
};

export default GameCard;
