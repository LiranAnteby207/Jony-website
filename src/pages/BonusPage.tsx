import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import BonusCards from "../components/bonus/BonusCards";
import { FaInfoCircle } from "react-icons/fa";
import ModalLoyalBonus from "../components/Modal/ModalLoyalBonus";
import cpCurrency from "../assets/icon_currency_codpoints_large.webp";
import BonusLevels from "../components/bonus/BonusLevels";
import AfterLevelGifts from "../components/bonus/AfterLevelGifts";
const BonusPage = () => {
  const modalLoyal = useDisclosure();
  return (
    <Box mt={16} mb={8}>
      <Heading fontSize={32} mb={8}>
        My Bonuses
      </Heading>
      <BonusCards />
      <HStack>
        <Heading fontSize={32}>Loyalty program</Heading>
        <Icon
          _hover={{ cursor: "pointer" }}
          onClick={modalLoyal.onOpen}
          boxSize={6}
          as={FaInfoCircle}
        />
        <ModalLoyalBonus functions={modalLoyal} />
      </HStack>
      <HStack>
        <Text>Get +1</Text>
        <Image mb={3} boxSize={6} src={cpCurrency} />
        <Text>for every 20$ bets and increase your status</Text>
      </HStack>
      <BonusLevels />
      <AfterLevelGifts />
    </Box>
  );
};

export default BonusPage;
