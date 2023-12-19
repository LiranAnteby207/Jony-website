import { Button, HStack, Text } from "@chakra-ui/react";

const NavbarLogSign = () => {
  return (
    <HStack>
      <Button bgColor="yellow.300">
        <Text>Login</Text>
      </Button>
      <Button bgColor="green.300">
        <Text>Sign In</Text>
      </Button>
    </HStack>
  );
};

export default NavbarLogSign;
