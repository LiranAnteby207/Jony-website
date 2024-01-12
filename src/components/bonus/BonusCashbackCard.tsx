import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import cashback from "../../assets/cashback.png";
import { FaInfoCircle } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiImperialCrown } from "react-icons/gi";
import ReactCardFlip from "react-card-flip";
import { FaTimes } from "react-icons/fa";

const BonusCashbackCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <Card
        className="card"
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
              onClick={flipCard}
              as={FaInfoCircle}
            />
          </HStack>
        </CardHeader>
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          mt={-4}
        >
          <Image ml={10} boxSize={32} mt={-12} src={cashback} />
          <Text fontSize={16} mt={4} mb={4} textAlign={"center"}>
            Monthly cashback
          </Text>
          <VStack>
            <HStack mb={0} mt={-4}>
              <Icon boxSize={8} as={FaCrown} color={"gray.200"} />
              <Icon boxSize={6} color={"gray.200"} as={FaTimes} />
            </HStack>
            <HStack mb={-4} mt={-4}>
              <Icon boxSize={8} as={GiQueenCrown} color={"gray.200"} />
              <Text fontSize={20} mt={4} color={"gray.200"}>
                7%
              </Text>
            </HStack>
            <HStack mb={-4} mt={-4}>
              <Icon boxSize={8} as={GiImperialCrown} color={"purple"} />
              <Text fontSize={20} mt={4}>
                10%
              </Text>
            </HStack>
          </VStack>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
      <Card
        className="card"
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
              onClick={flipCard}
              as={FaInfoCircle}
            />
          </HStack>
        </CardHeader>
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          mt={-4}
        >
          <Text fontSize={14} mb={0} textAlign={"center"}>
            Cashback is your safety cushion against losses. The higher your
            status at Riobet is, the bigger cashback you get.
          </Text>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </ReactCardFlip>
  );
};

export default BonusCashbackCard;
