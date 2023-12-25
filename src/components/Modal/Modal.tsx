import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  HStack,
} from "@chakra-ui/react";
import AccordionMaker from "./AccordionMaker";
import { Element } from "../entities/Element";
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
  accordionData: Element[];
  headline: string;
}
const ModalComp = ({ functions, accordionData, headline }: Props) => {
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
            <Heading fontSize={30}>{headline}</Heading>
            <CloseButton onClick={functions.onClose} />
          </HStack>
        </ModalHeader>
        <ModalBody>
          <AccordionMaker elements={accordionData} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComp;
