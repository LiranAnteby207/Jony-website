import { IconType } from "react-icons";
import { GrGamepad } from "react-icons/gr";
import { GiPokerHand } from "react-icons/gi";
import { IoTrophySharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react";

const NavbarMenu = () => {
  const menuElements: { [key: string]: IconType } = {
    Slots: GrGamepad,
    "Live Casino": GiPokerHand,
    Tourney: IoTrophySharp,
    Bonuses: FaGift,
  };
  const menuNames = ["Slots", "Live Casino", "Tourney", "Bonuses"];
  return (
    <HStack ml="5%">
      {menuNames.map((e) => (
        <Box key={e} ml={4}>
          <Button bgColor="transparent" width="100%">
            <Icon boxSize="60%" key={e} as={menuElements[e]} marginRight="6%" />
            {e}
          </Button>
        </Box>
      ))}
    </HStack>
  );
};

export default NavbarMenu;
