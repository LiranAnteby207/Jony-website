import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import useRightSidebarOpenStore from "../../stores/rightSideBarOpenStore";
import { HStack, Heading, Icon } from "@chakra-ui/react";
import useRightSideBarStore from "../../stores/rightSideBarStore";

const RightSideBarNavBar = () => {
  const setRightShowSidebar = useRightSideBarStore(
    (s) => s.setRightShowSidebar
  );
  const icon = useRightSidebarOpenStore((s) => s.icon);
  const name = useRightSidebarOpenStore((s) => s.name);
  return (
    <HStack>
      <Icon color="red.500" boxSize={6} as={icon} />
      <Heading color="red.500" fontSize={20} pr={32}>
        {name}
      </Heading>
      <Icon
        _hover={{
          transform: "scale(1.2)",
          transition: "transform 0.3s ease-in-out",
        }}
        cursor="pointer"
        onClick={setRightShowSidebar}
        boxSize={8}
        m={2}
        as={HiOutlineArrowSmallRight}
      />
    </HStack>
  );
};

export default RightSideBarNavBar;
