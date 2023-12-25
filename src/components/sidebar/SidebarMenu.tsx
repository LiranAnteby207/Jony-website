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
import { IconType } from "react-icons";
import ModalComp from "../Modal/Modal";

const SidebarMenu = () => {
  const headline = "Frequently asked questions";
  const functions = useDisclosure();
  const menuElements: { [key: string]: IconType } = {
    "Main Page": IoHomeSharp,
    Slots: GrGamepad,
    "Live Casino": GiPokerHand,
    Tourney: IoTrophySharp,
    Bonuses: FaGift,
    "Hall Of Fame": FaStar,
    News: IoNewspaperOutline,
    "Join Our Channel": FaTelegram,
  };
  const menuNames = [
    "Main Page",
    "Slots",
    "Live Casino",
    "Tourney",
    "Bonuses",
    "Hall Of Fame",
    "News",
    "Join Our Channel",
  ];

  return (
    <Box mt={5}>
      {menuNames.map((e) => (
        <Box key={e} mb={4} ml={4}>
          <Button
            fontSize={16}
            bgColor="transparent"
            width="100%"
            justifyContent="flex-start"
          >
            <Icon
              boxSize={6}
              key={e}
              as={menuElements[e]}
              marginRight={3}
              color={e === "Join Our Channel" ? "blue.300" : undefined}
            />
            {e}
          </Button>
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
