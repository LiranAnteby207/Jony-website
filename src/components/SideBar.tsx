import { Button, HStack, Heading } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {
  onClick: () => void;
}
const SideBar = ({ onClick }: Props) => {
  return (
    <>
      <HStack justifyContent="space-between" width="250px">
        <Button onClick={onClick}>x</Button>
        <ColorModeSwitch />
      </HStack>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
      <Heading>liran</Heading>
    </>
  );
};

export default SideBar;
