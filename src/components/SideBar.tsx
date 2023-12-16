import { Button, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const SideBar = ({ onClick }: { onClick: () => void }) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Button onClick={onClick}>x</Button>
      <ColorModeSwitch />
    </HStack>
  );
};

export default SideBar;
