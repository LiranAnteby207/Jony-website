import {
  Button,
  Card,
  CardBody,
  CloseButton,
  HStack,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { BiTrophy } from "react-icons/bi";
import { CiClock1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaMoneyBillAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
interface ModalInfo {
  headline: string;
  prize: string;
  time: string;
  minimumBet: string;
  logoText: string;
}
interface Props {
  name: string;
  headline: string;
  fPrize: string;
  sPrize: string;
  tPrize: string;
  modalInfo: ModalInfo;
}
const BigTournamentInfoCard = ({
  name,
  headline,
  fPrize,
  sPrize,
  tPrize,
  modalInfo,
}: Props) => {
  const { colorMode } = useColorMode();
  const prizesModal = useDisclosure();
  const rulesModal = useDisclosure();
  const trDesign = {
    justifyContent: "space-between",
    display: "flex",
    marginLeft: "20px",
    marginRight: "-100px",
  };
  return (
    <Card
      height='80%'

      borderRadius={20}
      mr={"2%"}
      ml={'2%'}
      width={'20%'}
      bgColor={colorMode === "dark" ? "gray.700" : "gray.100"}
    >
      <CardBody>
        <Heading textAlign="center" size={"md"} color="gray.400">
          {headline}
        </Heading>
        <HStack justifyContent="center">
          <VStack m='2%'>
            <Icon color="gold" boxSize={8} as={FaTrophy} />
            <Heading fontSize={12}>{fPrize}</Heading>
          </VStack>
          <VStack m='2%'>
            <Icon color="gray.500" boxSize={8} as={FaTrophy} />
            <Heading fontSize={16}>{sPrize}</Heading>
          </VStack>
          <VStack m='2%' mr='1%'>
            <Icon color="brown" boxSize={8} as={FaTrophy} />
            <Heading fontSize={16}>{tPrize}</Heading>
          </VStack>
        </HStack>
        <VStack>
          <Button onClick={prizesModal.onOpen}>
            {modalInfo.headline}
          </Button>
          <Button onClick={rulesModal.onOpen} mt={2}  width="140px">
            <HStack>
              <Icon boxSize={6} color="yellow.400" as={FaInfoCircle} />
              <Heading color="yellow.400" mt={2} fontSize={20}>
                RULES
              </Heading>
            </HStack>
          </Button>
        </VStack>
        <Modal
          size={"xl"}
          isOpen={prizesModal.isOpen}
          onClose={prizesModal.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <HStack justifyContent="space-between">
                <Heading ml={10} fontSize={30}>
                  {modalInfo.headline}
                </Heading>
                <CloseButton onClick={prizesModal.onClose} />
              </HStack>
            </ModalHeader>
            <ModalBody mt={-10}>
              <TableContainer>
                <Table>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr sx={trDesign}>
                      <Td pl={6}>
                        <Icon color="gold" boxSize={8} as={FaTrophy} />
                      </Td>
                      <Td>{fPrize}</Td>
                    </Tr>
                    <Tr ml={14} sx={trDesign}>
                      <Td pl={6}>
                        <Icon color="gray.500" boxSize={8} as={FaTrophy} />
                      </Td>
                      <Td>{sPrize}</Td>
                    </Tr>
                    <Tr sx={trDesign}>
                      <Td pl={6}>
                        <Icon color="brown" boxSize={8} as={FaTrophy} />
                      </Td>
                      <Td>{tPrize}</Td>
                    </Tr>
                    <Tr sx={trDesign}>
                      <Td pl={6}>
                        <Heading ml={2} fontSize={16}>
                          4
                        </Heading>
                      </Td>
                      <Td>250$</Td>
                    </Tr>
                    <Tr sx={trDesign}>
                      <Td pl={6}>
                        <Heading ml={2} fontSize={16}>
                          5
                        </Heading>
                      </Td>
                      <Td>150$</Td>
                    </Tr>
                    <Tr sx={trDesign}>
                      <Td pl={6}>
                        <Heading fontSize={16}>6-10</Heading>
                      </Td>
                      <Td>100$</Td>
                    </Tr>
                    <Tr sx={trDesign}>
                      <Td pl={6}>
                        <Heading fontSize={16}>11-30</Heading>
                      </Td>
                      <Td>50$</Td>
                    </Tr>
                    <Tr sx={trDesign}>
                      <Td pl={6}>
                        <Heading fontSize={16}>31-60</Heading>
                      </Td>
                      <Td>20$</Td>
                    </Tr>
                    <Tr sx={trDesign}>
                      <Td pl={6}>
                        <Heading fontSize={16}>61-100</Heading>
                      </Td>
                      <Td>10$</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          size={"xl"}
          isOpen={rulesModal.isOpen}
          onClose={rulesModal.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <HStack justifyContent="space-between">
                <Heading ml={10} fontSize={30}>
                  "{name}" rules
                </Heading>
                <CloseButton onClick={rulesModal.onClose} />
              </HStack>
            </ModalHeader>
            <ModalBody>
              <VStack alignItems="left">
                <HStack>
                  <Icon boxSize={6} as={BiTrophy} />
                  <Heading ml={6} fontSize={20} fontWeight="regular">
                    prize fund: {modalInfo.prize}
                  </Heading>
                </HStack>
                <HStack>
                  <Icon boxSize={6} as={CiClock1} />
                  <Heading ml={6} fontSize={20} fontWeight="regular">
                    Time spending: {modalInfo.time}
                  </Heading>
                </HStack>
                <HStack>
                  <Icon boxSize={6} as={CiStar} />
                  <Heading ml={6} fontSize={20} fontWeight="regular">
                    Tournament mechanics: Multiplier race
                  </Heading>
                </HStack>
                <HStack>
                  <Icon color="gray.400" boxSize={6} as={FaMoneyBillAlt} />
                  <Heading ml={6} fontSize={20} fontWeight="regular">
                    Minimum bet: {modalInfo.minimumBet}
                  </Heading>
                </HStack>
                <HStack>
                  <Icon color="gray.400" boxSize={6} as={BiTrophy} />
                  <Heading ml={6} fontSize={20} fontWeight="regular">
                    All Prizes
                  </Heading>
                </HStack>
                <HStack>
                  <Image
                    style={{ filter: "brightness(1.5)" }}
                    ml={-4}
                    width={"60px"}
                    src={logo}
                  />
                  <Heading fontSize={20} fontWeight="regular">
                    Time spending: {modalInfo.logoText}
                  </Heading>
                </HStack>
              </VStack>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
};

export default BigTournamentInfoCard;
