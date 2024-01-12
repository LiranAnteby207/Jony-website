import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import box from "../../assets/3-1.png";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
const BoxBonusCard = () => {
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
          <Image ml={2} mt={-4} src={box} />
          <Text fontSize={24} mt={4} mb={0} textAlign={"center"}>
            +100%
          </Text>
          <Text textAlign={"center"}>instant bonus</Text>
        </CardBody>
        <CardFooter mt={-6} display={"flex"} justifyContent={"center"}>
          <Text>FIRST DEPOSIT BONUS</Text>
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
            If you have $10 - $1000 on your account, claim this bonus to double
            your balance right away! Fulfill the 35x wagering requirement and
            the win is yours.
          </Text>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </ReactCardFlip>
  );
};

export default BoxBonusCard;
