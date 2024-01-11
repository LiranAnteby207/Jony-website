import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const NavbarLogSign = () => {
  const loginModal = useDisclosure();
  const signInModal = useDisclosure();
  const loginInitialRef = useRef(null);
  const loginFinalRef = useRef(null);
  const signInInitialRef = useRef(null);
  const signInFinalRef = useRef(null);
  return (
    <>
      <HStack>
        <Button onClick={loginModal.onOpen} fontWeight="bold" bgColor="red.600">
          Login
        </Button>
        <Button
          onClick={signInModal.onOpen}
          fontWeight="bold"
          bgColor="gray.400"
        >
          Sign In
        </Button>
      </HStack>
      <Modal
        initialFocusRef={loginInitialRef}
        finalFocusRef={loginFinalRef}
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login to your user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>email</FormLabel>
              <Input ref={loginInitialRef} placeholder="email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>password</FormLabel>
              <Input placeholder="password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              login
            </Button>
            <Button onClick={loginModal.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        initialFocusRef={signInInitialRef}
        finalFocusRef={signInFinalRef}
        isOpen={signInModal.isOpen}
        onClose={signInModal.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SIGN IN</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>email</FormLabel>
              <Input ref={signInInitialRef} placeholder="email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>password</FormLabel>
              <Input placeholder="password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              SIGN IN
            </Button>
            <Button onClick={signInModal.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NavbarLogSign;
