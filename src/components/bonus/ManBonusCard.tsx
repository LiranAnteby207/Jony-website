import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Icon,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import manBonus from "../../assets/bookOfDead.jpg";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
const ManBonusCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <Card
        border="5px solid "
        mb={4}
        borderRadius={16}
        width="240px"
        height="360px"
      >
        <CardHeader>
          <HStack justifyContent="flex-end">
            <Icon
              _hover={{ cursor: "pointer" }}
              boxSize={6}
              onClick={handleCardFlip}
              as={FaInfoCircle}
            />
          </HStack>
        </CardHeader>
        <CardBody mt={-4}>
          <Image src={manBonus} />
          <Text fontSize={24} mt={4} mb={0} textAlign={"center"}>
            50 FS
          </Text>
          <Text textAlign={"center"}>for registration</Text>
        </CardBody>
        <CardFooter mt={-12} display={"flex"} justifyContent={"center"}>
          <Button color={"gold"} width={"100%"}>
            GET
          </Button>
        </CardFooter>
      </Card>
      <Card
        border="5px solid "
        mb={4}
        borderRadius={16}
        width="240px"
        height="360px"
      >
        <CardHeader>
          <HStack justifyContent="flex-end">
            <Icon
              _hover={{ cursor: "pointer" }}
              boxSize={6}
              onClick={handleCardFlip}
              as={FaInfoCircle}
            />
          </HStack>
        </CardHeader>
        <CardBody mt={-4}>
          <Text fontSize={14} mt={0} mb={0} textAlign={"center"}>
            Register and claim free spins in the "Bonuses" section. Use your
            free spins. Your wins will be credited to your bonus account. Make a
            deposit and place your bets in the games. After fulfilling the
            wagering requirements, the bonus money will become real money and
            will be available for withdrawal.
          </Text>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </ReactCardFlip>
  );
};

export default ManBonusCard;
