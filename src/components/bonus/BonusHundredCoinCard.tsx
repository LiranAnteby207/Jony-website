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
import hundred from "../../assets/icon_currency_codpoints_large.webp";
import { FaInfoCircle } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiImperialCrown } from "react-icons/gi";
import ReactCardFlip from "react-card-flip";
import { IoArrowDownOutline } from "react-icons/io5";
const BonusHundredCoinCard = () => {
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
          <Image ml={10} boxSize={32} mt={-12} src={hundred} />
          <Icon
            color={"gold"}
            mx={"auto"}
            mt={-2}
            boxSize={12}
            as={IoArrowDownOutline}
          />
          <VStack>
            <HStack mb={-4} mt={-4}>
              <Icon boxSize={8} as={FaCrown} color={"gray.200"} />
              <Text fontSize={20} mt={4} color={"gray.200"}>
                5 $
              </Text>
            </HStack>
            <HStack mb={-4} mt={-4}>
              <Icon boxSize={8} as={GiQueenCrown} color={"gray.200"} />
              <Text fontSize={20} mt={4} color={"gray.200"}>
                8 $
              </Text>
            </HStack>
            <HStack mb={-4} mt={-4}>
              <Icon boxSize={8} as={GiImperialCrown} color={"purple"} />
              <Text fontSize={20} mt={4}>
                12 $
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
          <VStack>
            <HStack>
              <Text fontSize={14} mb={0} textAlign={"center"}>
                Exchange
              </Text>
              <Image boxSize={6} src={hundred} />
              <Text fontSize={14} mb={0}>
                for money.
              </Text>
            </HStack>
            <Text fontSize={14} mb={0} textAlign={"center"}>
              The exchange rate depends of your VIP-status.
            </Text>
          </VStack>

          <HStack display={"flex"} justifyContent={"center"} mt={12}>
            <Text fontSize={14} textAlign={"center"}>
              what is
            </Text>
            <Image boxSize={6} mt={-4} src={hundred} />
          </HStack>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </ReactCardFlip>
  );
};

export default BonusHundredCoinCard;
