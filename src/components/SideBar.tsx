import { Button, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import GenreList from "./GenreList";

const SideBar = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Button onClick={onClick}>x</Button>
        <ColorModeSwitch />
      </HStack>
      <GenreList />
    </>
  );
};

export default SideBar;
