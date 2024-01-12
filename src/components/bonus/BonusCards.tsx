import { HStack } from "@chakra-ui/react";
import ManBonusCard from "./ManBonusCard";
import BoxBonusCard from "./BoxBonusCard";

const BonusCards = () => {
  return (
    <HStack>
      <ManBonusCard />
      <BoxBonusCard />
    </HStack>
  );
};

export default BonusCards;
