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
  accordionDataAmlPolicy: Element[];
  headline: string;
}

const AmlPolicyModal = ({
  functions,
  accordionDataAmlPolicy,
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
          {accordionDataAmlPolicy.map((item, index) => (
            <React.Fragment key={index}>
              <Heading
                color="red.400"
                as="p"
                fontWeight="bold"
                fontSize={20}
                mb={2}
              >
                {`${item.heading}`}
              </Heading>
              {item.sections[0].map((section, subIndex) => (
                <Heading fontSize={16} fontWeight="regular" key={subIndex}>
                  {section}
                </Heading>
              ))}
              {item.sections[2] && (
                <ol>
                  <li>
                    {
                      <div>
                        {item.sections[1].map((section, subIndex) => (
                          <Heading
                            fontSize={16}
                            fontWeight="regular"
                            key={subIndex}
                          >
                            {section}
                          </Heading>
                        ))}
                      </div>
                    }
                  </li>
                  <li>
                    {item.sections[2].map((section, subIndex) => (
                      <Heading
                        fontSize={16}
                        fontWeight="regular"
                        key={subIndex}
                      >
                        {section}
                      </Heading>
                    ))}
                  </li>
                </ol>
              )}

              {!item.sections[2] &&
                item.sections[1].map((section, subIndex) => (
                  <Heading fontSize={16} fontWeight="regular" key={subIndex}>
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

export default AmlPolicyModal;
