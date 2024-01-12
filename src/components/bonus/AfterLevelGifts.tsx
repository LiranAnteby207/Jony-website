import BonusPigCard from "./BonusPigCard";
import BonusCashbackCard from "./BonusCashbackCard";
import BonusHundredCoinCard from "./BonusHundredCoinCard";
import { HStack } from "@chakra-ui/react";
import BonusBowMoneyCard from "./BonusBowMoneyCard";

const AfterLevelGifts = () => {
  return (
    <HStack>
      <BonusPigCard />
      <BonusCashbackCard />
      <BonusHundredCoinCard />
      <BonusBowMoneyCard />
    </HStack>
  );
};

export default AfterLevelGifts;
