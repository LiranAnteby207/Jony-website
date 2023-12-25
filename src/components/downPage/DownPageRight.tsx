import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import accordionDataAboutUs from "../../data/accordionDataAboutUs";

const DownPageRight = () => {
  const linksToModals = [
    {
      name: "Terms & Conditions",
      functions: useDisclosure(),
      accordionData: accordionDataAboutUs,
    },
    {
      name: "AML policy",
      functions: useDisclosure(),
      accordionData: accordionDataAboutUs,
    },
    {
      name: "Deposits and withdrawals",
      functions: useDisclosure(),
      accordionData: accordionDataAboutUs,
    },
    {
      name: "Bonuses and promotions",
      functions: useDisclosure(),
      accordionData: accordionDataAboutUs,
    },
    {
      name: "Games rules",
      functions: useDisclosure(),
      accordionData: accordionDataAboutUs,
    },
    {
      name: "Responsible gaming",
      functions: useDisclosure(),
      accordionData: accordionDataAboutUs,
    },
  ];
  const headingStyle = {
    fontWeight: "regular",
    fontSize: 18,
    cursor: "pointer",
  };
  return (
    <Box pl="10%" display="flex" flexDirection="column" alignItems="flex-start">
      <Heading color="gray.500" fontWeight="regular" fontSize="16px">
        INFORMATION
      </Heading>
      {linksToModals.map((link, index) => (
        <Heading
          key={index}
          style={headingStyle}
          onClick={link.functions.onOpen}
        >
          {link.name}
        </Heading>
      ))}
    </Box>
  );
};

export default DownPageRight;
