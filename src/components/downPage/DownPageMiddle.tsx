import { Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
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
  const functions = useDisclosure();
  const headline = "Frequently asked questions";
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Heading fontWeight="regular" fontSize="16px">
        Help
      </Heading>
      <Button onClick={linksToModals[0].functions.onOpen}>
        {linksToModals[0].name}
      </Button>
      <AboutUsModal
        accordionDataAboutUs={linksToModals[0].accordionData}
        headline={linksToModals[0].name}
        functions={linksToModals[0].functions}
      />
      <Button onClick={functions.onOpen}>FAQ</Button>
      <ModalComp
        accordionData={accordionDataFAQ}
        headline={headline}
        functions={functions}
      />
      <Button onClick={linksToModals[3].functions.onOpen}>
        {linksToModals[3].name}
      </Button>
      <ComplaintsModal
        accordionDataComplaints={linksToModals[3].accordionData}
        headline={linksToModals[3].name}
        functions={linksToModals[3].functions}
      />
      <Button onClick={linksToModals[5].functions.onOpen}>
        {linksToModals[5].name}
      </Button>
      <PrivacyPolicyModal
        accordionDataPrivacyPolicy={linksToModals[5].accordionData}
        headline={linksToModals[5].name}
        functions={linksToModals[5].functions}
      />
    </Box>
  );
};

export default DownPageMiddle;
