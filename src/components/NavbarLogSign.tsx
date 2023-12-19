import { Button, HStack, Text } from "@chakra-ui/react";

const NavbarLogSign = () => {
  return (
    <HStack>
      <Button fontWeight="bold" bgColor="red.600">
        Login
      </Button>
      <Button fontWeight="bold" bgColor="gray.400">
        Sign In
      </Button>
    </HStack>
  );
};

export default NavbarLogSign;
