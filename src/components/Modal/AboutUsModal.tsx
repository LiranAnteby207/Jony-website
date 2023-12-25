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
} from "@chakra-ui/react";
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
  accordionDataAboutUs: Element[];
  headline: string;
}

const AboutUsModal = ({ functions, accordionDataAboutUs, headline }: Props) => {
  return (
    <Modal size={"xl"} isOpen={functions.isOpen} onClose={functions.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack justifyContent="space-between">
            <Heading fontSize={30}>{headline}</Heading>
            <CloseButton onClick={functions.onClose} />
          </HStack>
        </ModalHeader>
        <ModalBody>
          <Heading as={"p"} fontWeight="regular" fontSize={16}>
            {accordionDataAboutUs[0].sections[0][0]}
          </Heading>
          <Heading as={"h1"} fontWeight="regular" color="red.500" fontSize={20}>
            {accordionDataAboutUs[0].sections[0][1]}
          </Heading>
          <Heading as={"p"} fontWeight="regular" fontSize={16}>
            {accordionDataAboutUs[0].sections[0][2]}
          </Heading>{" "}
          <Heading as={"p"} fontWeight="regular" fontSize={16}>
            {accordionDataAboutUs[0].sections[0][3]}
          </Heading>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AboutUsModal;
