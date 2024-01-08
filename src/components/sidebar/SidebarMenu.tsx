import { Box, Button, Icon, useDisclosure } from "@chakra-ui/react";
import { GrGamepad } from "react-icons/gr";
import { GiPokerHand } from "react-icons/gi";
import {
  IoTrophySharp,
  IoNewspaperOutline,
  IoHomeSharp,
} from "react-icons/io5";
import accordionData from "../../data/accordionDataTopQusetion";
import { ImQuestion } from "react-icons/im";
import { FaGift, FaTelegram } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import ModalComp from "../Modal/Modal";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const headline = "Frequently asked questions";
  const functions = useDisclosure();
  const menuElementsNew = [
    {btnLabel: 'Main Page', link:'/', iconType: IoHomeSharp},
    {btnLabel: 'Slots', link:'/slots', iconType: GrGamepad},
    {btnLabel: "Live Casino", link:'/live-casino', iconType: GiPokerHand},
    {btnLabel: 'Tourney', link:'/tournaments', iconType: IoTrophySharp},
    {btnLabel: 'Bonuses', link:'/Bonuses', iconType: FaGift},
    {btnLabel: 'Hall Of Fame', link:'/hall-of-fame', iconType: FaStar},
    {btnLabel: 'News', link:'/', iconType: IoNewspaperOutline},
    {btnLabel: 'Join Our Channel', link:'/', iconType: FaTelegram},
  ];

  return (
    <Box mt={5}>
      {menuElementsNew.map((e) => (
        <Box key={e.btnLabel} mb={4} ml={4}>
          <Link to={e.link}>
            <Button
              fontSize={16}
              bgColor="transparent"
              width="100%"
              justifyContent="flex-start"
            >
              <Icon
                boxSize={6}
                key={e.btnLabel}
                as={e.iconType}
                marginRight={3}
                color={e.btnLabel === "Join Our Channel" ? "blue.300" : undefined}
              />
              {e.btnLabel}
            </Button>
          </Link>
        </Box>
      ))}
      <Box mb={4} ml={4}>
        <Button
          fontSize={16}
          bgColor="transparent"
          width="100%"
          justifyContent="flex-start"
          onClick={functions.onOpen}
        >
          <Icon boxSize={6} as={ImQuestion} marginRight={3} />
          FAQ
        </Button>
        <ModalComp
          headline={headline}
          accordionData={accordionData}
          functions={functions}
        />
      </Box>
    </Box>
  );
};

export default SidebarMenu;
