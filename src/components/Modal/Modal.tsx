import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalHeader,
  CloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Box,
  Icon,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { ImQuestion } from "react-icons/im";
import AccordionTopQ from "./AccordionTopQ";
import AccordionRA from "./AccordionRA";

const ModalComp = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box mb={4} ml={4}>
        <Button
          fontSize={16}
          bgColor="transparent"
          width="100%"
          justifyContent="flex-start"
          onClick={onOpen}
        >
          <Icon boxSize={6} as={ImQuestion} marginRight={3} />
          FAQ
        </Button>
        <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <HStack justifyContent="space-between">
                <Heading fontSize={22}>Frequently asked questions</Heading>
                <CloseButton onClick={onClose} />
              </HStack>
            </ModalHeader>
            <ModalBody>
              <AccordionTopQ />
              <AccordionRA />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default ModalComp;
