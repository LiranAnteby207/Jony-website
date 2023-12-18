import {
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres, { Genre } from "../hooks/useGenres";
import useGenre from "../hooks/useGenre";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenreSelector = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error } = useGenres();
  const selectedGenre = useGenre(selectedGenreId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genres"}
      </MenuButton>
      <MenuList>
        {data?.results.map((genre) => (
          <MenuItem onClick={() => onSelectGenre(genre)} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={genre.image_background}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
