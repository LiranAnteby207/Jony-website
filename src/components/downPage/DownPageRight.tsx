import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import accordionDataAboutUs from "../../data/accordionDataAboutUs";
import termsAndConditions from "../../data/termsAndConditions";
import TermsAndConditionsModal from "../Modal/TermsAndConditionsModal";
import amlPolicyData from "../../data/amlPolicyData";
import AmlPolicyModal from "../Modal/AmlPolicyModal";
import DepAndWithModal from "../Modal/DepAndWithModal";
const DownPageRight = () => {
  const linksToModals = [
    {
      name: "Terms & Conditions",
      functions: useDisclosure(),
      accordionData: termsAndConditions,
    },
    {
      name: "Appendix 2. AML Policy",
      functions: useDisclosure(),
      accordionData: amlPolicyData,
    },
    {
      name: "Appendix 3. Deposits and withdrawals",
      functions: useDisclosure(),
      accordionData: accordionDataAboutUs,
    },
    {
      name: "Appendix 4. Bonus Rules",
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
    <>
      <Box
        pl="10%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
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
      <TermsAndConditionsModal
        accordionDataTermsAndConditions={linksToModals[0].accordionData}
        headline={linksToModals[0].name}
        functions={linksToModals[0].functions}
      />
      <AmlPolicyModal
        accordionDataAmlPolicy={linksToModals[1].accordionData}
        headline={linksToModals[1].name}
        functions={linksToModals[1].functions}
      />
      <DepAndWithModal
        headline={linksToModals[2].name}
        functions={linksToModals[2].functions}
      />
    </>
  );
};

export default DownPageRight;
