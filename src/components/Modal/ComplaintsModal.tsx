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
  Icon,
  Image,
} from "@chakra-ui/react";
import { TbMessageCircle2Filled } from "react-icons/tb";

import { Element } from "../entities/Element";
import { Link } from "react-router-dom";
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
  accordionDataComplaints: Element[];
  headline: string;
}

const ComplaintsModal = ({
  functions,
  accordionDataComplaints,
  headline,
}: Props) => {
  const handleImageClick = () => {
    // Open the URL in a new tab
    window.open("https://www.askgamblers.com/submit-complaint", "_blank");
  };
  return (
    <Modal size={"xl"} isOpen={functions.isOpen} onClose={functions.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <HStack justifyContent="space-between">
            <HStack>
              <Icon boxSize={8} as={TbMessageCircle2Filled} />
              <Heading fontSize={30}>{headline}</Heading>
            </HStack>
            <CloseButton onClick={functions.onClose} />
          </HStack>
        </ModalHeader>
        <ModalBody pr={8} pl={8}>
          <Heading as={"p"} fontWeight="regular" fontSize={16}>
            {accordionDataComplaints[0].sections[0][0]}
          </Heading>
          <Heading as={"p"} fontWeight="regular" fontSize={16}>
            {accordionDataComplaints[0].sections[0][1]}
            <Link
              to="https://www.askgamblers.com/submit-complaint"
              target="blank"
            >
              <Heading
                borderBottom="1px solid "
                as={"text"}
                fontWeight="regular"
                fontSize={16}
              >
                {" "}
                {accordionDataComplaints[0].sections[0][2]}
                {"."}
              </Heading>
            </Link>
          </Heading>
          <Image
            alt="AskGamblers Certificate of Trust"
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
            src="https://www.askgamblers.com/images/askgamblers-certificate-of-trust.png"
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ComplaintsModal;
