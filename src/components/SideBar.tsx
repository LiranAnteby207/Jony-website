import { Button, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onClick: () => void;
}
const SideBar = ({ onClick }: Props) => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Button onClick={onClick}>x</Button>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default SideBar;
