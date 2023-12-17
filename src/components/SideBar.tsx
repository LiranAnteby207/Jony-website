import { Button, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreList from "./GenreList";
import { Genre } from "../hooks/useGenres";
interface Props {
  onClick: () => void;
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const SideBar = ({ onClick, onSelectGenre, selectedGenre }: Props) => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Button onClick={onClick}>x</Button>
        <ColorModeSwitch />
      </HStack>
      <GenreList onSelectGenre={onSelectGenre} selectedGenre={selectedGenre} />
    </>
  );
};

export default SideBar;
