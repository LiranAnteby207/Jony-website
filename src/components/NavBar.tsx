import { Box, Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
const NavBar = ({
  onClick,
  isNotDisplay,
}: {
  onClick: () => void;
  isNotDisplay: boolean;
}) => {
  return (
    <HStack>
      {isNotDisplay ? null : <Button onClick={onClick}>sidebar handle</Button>}

      <Box maxH="60px" maxW="120px">
        <Image src={logo} objectFit="cover" w="100%" h="100%" />
      </Box>
    </HStack>
  );
};

export default NavBar;
