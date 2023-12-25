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

import { Element } from "./Element";
import React from "react";
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
  accordionDataPrivacyPolicy: Element[];
  headline: string;
}

const PrivacyPolicyModal = ({
  functions,
  accordionDataPrivacyPolicy,
  headline,
}: Props) => {
  return (
    <Modal size={"xl"} isOpen={functions.isOpen} onClose={functions.onClose}>
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
          {accordionDataPrivacyPolicy.map((item, index) => (
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

              {item.beforeSections && (
                <Heading fontSize={16}>{`${item.beforeSections}`}</Heading>
              )}

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

export default PrivacyPolicyModal;
