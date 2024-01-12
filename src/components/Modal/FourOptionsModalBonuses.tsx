import {
  Button,
  CloseButton,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Image,
  Text,
  useDisclosure,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FaCrown } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiImperialCrown } from "react-icons/gi";
import cpCurrency from "../../assets/icon_currency_codpoints_large.webp";
import { ModalFunctions } from "../entities/ModalFunctions";
interface Props {
  functions1: ModalFunctions;
  functions2: ModalFunctions;
  functions3: ModalFunctions;
  functions4: ModalFunctions;
}

const FourOptionsModalBonuses = ({
  functions1,
  functions2,
  functions3,
  functions4,
}: Props) => {
  const cpExplainModal = useDisclosure();
  return (
    <>
      <Modal
        size={"lg"}
        isOpen={functions1.isOpen}
        onClose={functions1.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack justifyContent="space-between">
              <Heading fontSize={30}>RIOBET Guest</Heading>
              <CloseButton onClick={functions1.onClose} />
            </HStack>
          </ModalHeader>
          <ModalBody>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              Register and get:
            </Heading>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + welcome freespins
            </Heading>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + 100% deposit bonus
            </Heading>{" "}
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + max. cashout: 1000$/day
            </Heading>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"center"}>
            <Button width={"100%"} onClick={functions1.onClose}>
              ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        size={"lg"}
        isOpen={functions2.isOpen}
        onClose={functions2.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack justifyContent="space-between">
              <Heading fontSize={30}>RIOBET Classic</Heading>
              <CloseButton onClick={functions2.onClose} />
            </HStack>
          </ModalHeader>
          <ModalBody>
            <HStack>
              <Heading as={"p"} fontWeight="regular" fontSize={16}>
                Place bets to earn 100
              </Heading>
              <Image mb={3} boxSize={6} src={cpCurrency} />
              <Text>and get:</Text>
            </HStack>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + birthday bonus
            </Heading>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + CP exchange
            </Heading>{" "}
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + max. cashout: 3000$/day
            </Heading>
            <HStack
              _hover={{ cursor: "pointer" }}
              onClick={cpExplainModal.onOpen}
            >
              <Heading as={"p"} fontWeight="regular" fontSize={16}>
                What is
              </Heading>
              <Image mb={3} boxSize={6} src={cpCurrency} />
              <Text>?</Text>
            </HStack>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"center"}>
            <Button width={"100%"} onClick={functions2.onClose}>
              ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        size={"lg"}
        isOpen={functions3.isOpen}
        onClose={functions3.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack justifyContent="space-between">
              <Heading fontSize={30}>RIOBET Gold</Heading>
              <CloseButton onClick={functions3.onClose} />
            </HStack>
          </ModalHeader>
          <ModalBody>
            <HStack>
              <Heading as={"p"} fontWeight="regular" fontSize={16}>
                Place bets to earn 1000
              </Heading>
              <Image mb={3} boxSize={6} src={cpCurrency} />
              <Text>and get:</Text>
            </HStack>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + increased birthday bonus
            </Heading>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + beneficial rate for exchange CPs
            </Heading>{" "}
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + max. cashout: 5000$/day
            </Heading>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + cashback 7%
            </Heading>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + weekly deposit bonus
            </Heading>
            <HStack
              _hover={{ cursor: "pointer" }}
              onClick={cpExplainModal.onOpen}
            >
              <Heading as={"p"} fontWeight="regular" fontSize={16}>
                What is
              </Heading>
              <Image mb={3} boxSize={6} src={cpCurrency} />
              <Text>?</Text>
            </HStack>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"center"}>
            <Button width={"100%"} onClick={functions3.onClose}>
              ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        size={"lg"}
        isOpen={functions4.isOpen}
        onClose={functions4.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack justifyContent="space-between">
              <Heading fontSize={30}>RIOBET VIP</Heading>
              <CloseButton onClick={functions4.onClose} />
            </HStack>
          </ModalHeader>
          <ModalBody>
            <HStack>
              <Heading as={"p"} fontWeight="regular" fontSize={16}>
                Place bets to earn 10000
              </Heading>
              <Image mb={3} boxSize={6} src={cpCurrency} />
              <Text>and get:</Text>
            </HStack>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + maximum birthday bonus
            </Heading>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + the most beneficial rate for exchange CPs
            </Heading>{" "}
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + max. cashout: 10000$/day
            </Heading>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + cashback 10%
            </Heading>
            <Heading as={"p"} fontWeight="regular" fontSize={16}>
              + double weekly deposit bonus
            </Heading>
            <HStack
              _hover={{ cursor: "pointer" }}
              onClick={cpExplainModal.onOpen}
            >
              <Heading as={"p"} fontWeight="regular" fontSize={16}>
                What is
              </Heading>
              <Image mb={3} boxSize={6} src={cpCurrency} />
              <Text>?</Text>
            </HStack>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"center"}>
            <Button width={"100%"} onClick={functions4.onClose}>
              ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        size={"md"}
        isOpen={cpExplainModal.isOpen}
        onClose={cpExplainModal.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack justifyContent="space-between">
              <Heading fontSize={30}>What is CP?</Heading>
              <CloseButton onClick={cpExplainModal.onClose} />
            </HStack>
          </ModalHeader>
          <ModalBody>
            <Heading
              textAlign={"center"}
              as={"p"}
              fontWeight="regular"
              fontSize={16}
            >
              Comp. points (CP) are given for bets made with real money. For
              20USD bets the player is given 1 CP on average. You can exchange
              them in the CP Shop for real money.
            </Heading>
            <Heading
              textAlign={"center"}
              as={"p"}
              fontWeight="regular"
              fontSize={16}
            >
              Exchange every 100 coins (CP) to money.
            </Heading>
            <Heading
              textAlign={"center"}
              as={"p"}
              fontWeight="regular"
              fontSize={16}
            >
              The rate will grow with your status.
            </Heading>
            <HStack display={"flex"} justifyContent={"center"}>
              <VStack>
                <Icon boxSize={8} as={FaCrown} color={"brown"} />
                <Text>5 $</Text>
                <Text borderRadius={12} p={2} border={"2px solid"} mt={-4}>
                  Classic
                </Text>
              </VStack>
              <VStack>
                <Icon boxSize={8} as={GiQueenCrown} color={"orange"} />
                <Text>8 $</Text>
                <Text borderRadius={12} p={2} border={"2px solid"} mt={-4}>
                  Gold
                </Text>
              </VStack>
              <VStack>
                <Icon boxSize={8} as={GiImperialCrown} color={"purple"} />
                <Text>12 $</Text>
                <Text borderRadius={12} p={2} border={"2px solid"} mt={-4}>
                  VIP
                </Text>
              </VStack>
            </HStack>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"center"}>
            <Button width={"100%"} onClick={cpExplainModal.onClose}>
              ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FourOptionsModalBonuses;
