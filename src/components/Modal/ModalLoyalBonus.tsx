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
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdFiberManualRecord } from "react-icons/md";
import data from "../../data/loyaltyInfoModalData";
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
}
const ModalLoyalBonus = ({ functions }: Props) => {
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
            <Heading fontSize={30}>Loyalty Program</Heading>
            <CloseButton onClick={functions.onClose} />
          </HStack>
        </ModalHeader>
        <ModalBody>
          <Heading as={"p"} fontWeight="regular" fontSize={16}>
            For every 20$ bets the player gets 1 CP (Compliment Point) on
            average. The amount of bets can be more or less than $ 20, depending
            on the wagering% specified in the "Games Rules" section. The more CP
            coins you accumulate, the higher your status is. The higher your
            status, the more bonuses you get.
          </Heading>
          {data.map((loyaltyInfo, loyaltyIndex) => (
            <div key={loyaltyIndex}>
              <Heading as="h1" fontWeight="regular" fontSize={20}>
                {loyaltyInfo[0]}
              </Heading>

              <List styleType="none">
                {loyaltyInfo.slice(1).map((item, index) => (
                  <ListItem
                    key={index}
                    fontSize={16}
                    display="flex"
                    alignItems="center"
                  >
                    <ListIcon as={MdFiberManualRecord} boxSize={4} />
                    {item}
                  </ListItem>
                ))}
              </List>
            </div>
          ))}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalLoyalBonus;
