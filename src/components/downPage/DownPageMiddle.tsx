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
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Heading color="gray.500" fontWeight="regular" fontSize="16px">
        Help
      </Heading>
      <Heading style={headingStyle} onClick={linksToModals[0].functions.onOpen}>
        {linksToModals[0].name}
      </Heading>
      <AboutUsModal
        accordionDataAboutUs={linksToModals[0].accordionData}
        headline={linksToModals[0].name}
        functions={linksToModals[0].functions}
      />
      <Heading style={headingStyle} onClick={linksToModals[1].functions.onOpen}>
        {linksToModals[1].name}
      </Heading>
      <ModalComp
        accordionData={linksToModals[1].accordionData}
        headline={headline}
        functions={linksToModals[1].functions}
      />
      <Heading style={headingStyle} onClick={linksToModals[2].functions.onOpen}>
        {linksToModals[2].name}
      </Heading>
      <Heading style={headingStyle} onClick={linksToModals[3].functions.onOpen}>
        {linksToModals[3].name}
      </Heading>
      <ComplaintsModal
        accordionDataComplaints={linksToModals[3].accordionData}
        headline={linksToModals[3].name}
        functions={linksToModals[3].functions}
      />
      <Heading style={headingStyle} onClick={linksToModals[4].functions.onOpen}>
        {linksToModals[4].name}
      </Heading>
      <Heading style={headingStyle} onClick={linksToModals[5].functions.onOpen}>
        {linksToModals[5].name}
      </Heading>
      <PrivacyPolicyModal
        accordionDataPrivacyPolicy={linksToModals[5].accordionData}
        headline={linksToModals[5].name}
        functions={linksToModals[5].functions}
      />
    </Box>
  );
};

export default DownPageMiddle;
