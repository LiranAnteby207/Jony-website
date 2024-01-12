import {
  HStack,
  Icon,
  VStack,
  useColorMode,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { RiArrowRightFill } from "react-icons/ri";

import { FaUserTie } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GiImperialCrown } from "react-icons/gi";
import FourOptionsModalBonuses from "../Modal/FourOptionsModalBonuses";
const BonusLevels = () => {
  const { colorMode } = useColorMode();
  const guestModal = useDisclosure();
  const classicModal = useDisclosure();
  const goldModal = useDisclosure();
  const vipModal = useDisclosure();
  return (
    <HStack mb={8} mt={8} display={"flex"} justifyContent={"center"}>
      <HStack _hover={{ cursor: "pointer" }} onClick={guestModal.onOpen}>
        <VStack>
          <Icon
            color={colorMode === "dark" ? "gray.600" : "gray.200"}
            boxSize={20}
            as={FaUserTie}
          />
          <Text color={colorMode === "dark" ? "gray.600" : "gray.200"}>
            Guest
          </Text>
        </VStack>

        <Icon mb={-12} ml={-3} boxSize={6} as={FaInfoCircle} />
      </HStack>
      <Icon
        color={colorMode === "dark" ? "gray.600" : "gray.200"}
        as={RiArrowRightFill}
        boxSize={12}
      />
      <HStack _hover={{ cursor: "pointer" }} onClick={classicModal.onOpen}>
        <VStack>
          <Icon
            color={colorMode === "dark" ? "gray.600" : "gray.200"}
            boxSize={20}
            as={FaCrown}
          />
          <Text mt={-2} color={colorMode === "dark" ? "gray.600" : "gray.200"}>
            Classic
          </Text>
        </VStack>
        <Icon mb={-12} ml={-3} boxSize={6} as={FaInfoCircle} />
      </HStack>
      <Icon
        color={colorMode === "dark" ? "gray.600" : "gray.200"}
        as={RiArrowRightFill}
        boxSize={12}
      />
      <HStack _hover={{ cursor: "pointer" }} onClick={goldModal.onOpen}>
        <VStack>
          <Icon
            color={colorMode === "dark" ? "gray.600" : "gray.200"}
            boxSize={24}
            as={GiQueenCrown}
          />
          <Text mt={-4} color={colorMode === "dark" ? "gray.600" : "gray.200"}>
            Gold
          </Text>
        </VStack>
        <Icon mb={-12} ml={-3} boxSize={6} as={FaInfoCircle} />
      </HStack>
      <Icon
        color={colorMode === "dark" ? "gray.600" : "gray.200"}
        as={RiArrowRightFill}
        boxSize={12}
      />
      <HStack _hover={{ cursor: "pointer" }} onClick={vipModal.onOpen}>
        <VStack>
          <Icon
            color={colorMode === "dark" ? "gray.600" : "gray.200"}
            boxSize={24}
            as={GiImperialCrown}
          />
          <Text
            pb={3}
            mt={-2}
            color={colorMode === "dark" ? "gray.600" : "gray.200"}
          >
            VIP
          </Text>
        </VStack>
        <Icon mb={-12} ml={-3} boxSize={6} as={FaInfoCircle} />
      </HStack>
      <FourOptionsModalBonuses
        functions1={guestModal}
        functions2={classicModal}
        functions3={goldModal}
        functions4={vipModal}
      />
    </HStack>
  );
};

export default BonusLevels;
