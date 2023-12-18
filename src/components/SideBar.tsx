import { Button, HStack, Heading } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import useSideBarStore from "../sidebarStore";

const SideBar = () => {
  const setShowSideBar = useSideBarStore((s) => s.setShowSidebar);
  return (
    <>
      <HStack justifyContent="space-between" width="250px">
        <Button onClick={setShowSideBar}>x</Button>
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
