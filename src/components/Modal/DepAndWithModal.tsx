import {
  Modal,
  ModalHeader,
  CloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaInfo } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiImperialCrown } from "react-icons/gi";

interface Props {
  functions: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
  };
  headline: string;
}

const DepAndWithModal = ({ functions, headline }: Props) => {
  return (
    <Modal
      scrollBehavior={"inside"}
      size={"xl"}
      isOpen={functions.isOpen}
      onClose={functions.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack justifyContent="space-between">
            <HStack>
              <Heading fontSize={30}>{headline}</Heading>
            </HStack>
            <CloseButton onClick={functions.onClose} />
          </HStack>
        </ModalHeader>
        <ModalBody pr={8} pl={8}>
          <Heading
            color="red.400"
            as="p"
            fontWeight="bold"
            fontSize={20}
            mb={2}
          >
            {`Withdrawal limits`}
          </Heading>
          <Heading fontSize={16} fontWeight="regular">
            {`There are daily and monthly withdrawal limits that depend on a player\'s level.
                  All limits are displayed and calculated in USD`}
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th pl={10}>
                    level <Icon boxSize={4} borderRadius="50%" as={FaInfo} />
                  </Th>
                  <Th>daily</Th>
                  <Th>monthly</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td pl={6}>
                    <Flex direction="column" align="center">
                      <Icon boxSize={6} as={FaUserTie} />
                      <Heading
                        display="inline-block"
                        fontSize={10}
                        as="p"
                        bg="gray.100" // Set the background color here
                      >
                        GUEST
                      </Heading>
                    </Flex>
                  </Td>
                  <Td>1,000 $</Td>
                  <Td>7,500 $</Td>
                </Tr>
                <Tr>
                  <Td pl={6}>
                    <Flex direction="column" align="center">
                      <Icon boxSize={6} as={FaCrown} />
                      <Heading
                        display="inline-block"
                        fontSize={10}
                        as="p"
                        bg="gray.100" // Set the background color here
                      >
                        CLASSIC
                      </Heading>
                    </Flex>
                  </Td>
                  <Td>3,000 $</Td>
                  <Td>20,000 $</Td>
                </Tr>
                <Tr>
                  <Td pl={6}>
                    <Flex direction="column" align="center">
                      <Icon boxSize={6} color="gold" as={GiQueenCrown} />
                      <Heading
                        display="inline-block"
                        fontSize={10}
                        as="p"
                        bg="gray.100" // Set the background color here
                      >
                        GOLD
                      </Heading>
                    </Flex>
                  </Td>
                  <Td>5,000 $</Td>
                  <Td>50,000 $</Td>
                </Tr>
                <Tr>
                  <Td pl={6}>
                    <Flex direction="column" align="center">
                      <Icon boxSize={6} color="purple" as={GiImperialCrown} />
                      <Heading
                        display="inline-block"
                        fontSize={10}
                        as="p"
                        bg="gray.100" // Set the background color here
                      >
                        VIP
                      </Heading>
                    </Flex>
                  </Td>
                  <Td>10,000 $</Td>
                  <Td>100,000 $</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Heading
            color="red.400"
            as="p"
            fontWeight="bold"
            fontSize={20}
            mb={2}
          >
            {`Withdrawal procedure`}
          </Heading>
          <Heading fontSize={16} fontWeight="regular">
            {` - Withdrawals are processed within 1 minute to 24 hours from the moment of the withdrawal request, 15 minutes in average.`}
          </Heading>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DepAndWithModal;
