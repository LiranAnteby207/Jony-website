import React from "react";
import { Element } from "../entities/Element";
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
  accordionDataTermsAndConditions: Element[];
  headline: string;
}

const TermsAndConditionsModal = ({
  functions,
  accordionDataTermsAndConditions,
  headline,
}: Props) => {
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
          {accordionDataTermsAndConditions.map((item, index) => (
            <React.Fragment key={index}>
              <Heading
                color="red.400"
                as="p"
                fontWeight="bold"
                fontSize={20}
                mb={2}
              >
                {`${index + 1}. ${item.heading}`}
              </Heading>
              {item.sections[0].map((section, subIndex) => (
                <Heading fontSize={16} fontWeight="regular" key={subIndex}>
                  {item.beforeSections
                    ? `${index + 1}.${subIndex + 1}.`
                    : `${index + 1}.${subIndex + 1}`}{" "}
                  {section}
                </Heading>
              ))}
            </React.Fragment>
          ))}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TermsAndConditionsModal;
