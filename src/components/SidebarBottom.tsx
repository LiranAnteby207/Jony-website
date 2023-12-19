import { Button, HStack, Icon, Image, Text } from "@chakra-ui/react";
import EnFlag from "../assets/united-kingdom.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";

const SidebarBottom = () => {
  return (
    <HStack>
      <Button width="35%">
        <HStack>
          <Image src={EnFlag} boxSize={8} mr={2} overflow="hidden" />
          <Icon as={IoIosArrowDown} boxSize={5} />
        </HStack>
      </Button>
      <Button width="65%" bgColor="green.400">
        <HStack>
          <Icon as={MdOutlineSupportAgent} boxSize={7} mr={2} />
          <Text fontSize={17} fontWeight="bold">
            SUPPORT
          </Text>
        </HStack>
      </Button>
    </HStack>
  );
};

export default SidebarBottom;
