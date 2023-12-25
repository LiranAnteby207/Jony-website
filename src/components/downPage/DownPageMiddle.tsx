import { Box, Heading, useDisclosure } from "@chakra-ui/react";
import ModalComp from "../Modal/Modal";
import accordionDataFAQ from "../../data/accordionDataTopQusetion";
import accordionDataAboutUs from "../../data/accordionDataAboutUs";
import AboutUsModal from "../Modal/AboutUsModal";
import ComplaintsModal from "../Modal/ComplaintsModal";
import complaintsData from "../../data/complaintsData";
import privacyPolicyData from "../../data/privacyPolicyData";
import PrivacyPolicyModal from "../Modal/PrivacyPolicyModal";
const DownPageMiddle = () => {
  const linksToModals = [
    {
      name: "About us",
      functions: useDisclosure(),
      accordionData: accordionDataAboutUs,
    },
    {
      name: "FAQ",
      functions: useDisclosure(),
      accordionData: accordionDataFAQ,
    },
    {
      name: "Affiliates",
      functions: useDisclosure(),
      accordionData: accordionDataFAQ,
    },
    {
      name: "Complaints",
      functions: useDisclosure(),
      accordionData: complaintsData,
    },
    {
      name: "News",
      functions: useDisclosure(),
      accordionData: accordionDataFAQ,
    },
    {
      name: "Privacy Policy",
      functions: useDisclosure(),
      accordionData: privacyPolicyData,
    },
  ];
  const headline = "Frequently asked questions";
  const headingStyle = {
    fontWeight: "regular",
    fontSize: 18,
    cursor: "pointer",
  };
  return (
    <Box pl="5%" display="flex" flexDirection="column" alignItems="flex-start">
      <Heading color="gray.500" fontWeight="regular" fontSize="16px">
        Help
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
      <AboutUsModal
        accordionDataAboutUs={linksToModals[0].accordionData}
        headline={linksToModals[0].name}
        functions={linksToModals[0].functions}
      />
      <ModalComp
        accordionData={linksToModals[1].accordionData}
        headline={headline}
        functions={linksToModals[1].functions}
      />
      <ComplaintsModal
        accordionDataComplaints={linksToModals[3].accordionData}
        headline={linksToModals[3].name}
        functions={linksToModals[3].functions}
      />
      <PrivacyPolicyModal
        accordionDataPrivacyPolicy={linksToModals[5].accordionData}
        headline={linksToModals[5].name}
        functions={linksToModals[5].functions}
      />
    </Box>
  );
};

export default DownPageMiddle;
