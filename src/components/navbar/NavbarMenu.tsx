import { GrGamepad } from "react-icons/gr";
import { GiPokerHand } from "react-icons/gi";
import { IoTrophySharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { Box, Button, HStack, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  const menuElementsNew = [
    {btnLabel: 'Slots', link:'/slots', iconType: GrGamepad},
    {btnLabel: "Live Casino", link:'/live-casino', iconType: GiPokerHand},
    {btnLabel: 'Tourney', link:'/tournaments', iconType: IoTrophySharp},
    {btnLabel: 'Bonuses', link:'/Bonuses', iconType: FaGift},
  ]
  return (
    <HStack ml="5%">
      {menuElementsNew.map((e) => (
        <Box key={e.btnLabel} ml={4}>
          <Link to={e.link}>
            <Button bgColor="transparent" width="100%">
              <Icon boxSize="50%" key={e.btnLabel} as={e.iconType} marginRight="1%" />
              {e.btnLabel}
            </Button>
          </Link>
        </Box>
      ))}
    </HStack>
  );
};

export default NavbarMenu;
