import {
  Box,
  Heading,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import ModalComp from "../Modal/Modal";
import accordionDataFAQ from "../../data/accordionDataTopQusetion";
import accordionDataAboutUs from "../../data/accordionDataAboutUs";
import AboutUsModal from "../Modal/AboutUsModal";
import ComplaintsModal from "../Modal/ComplaintsModal";
import complaintsData from "../../data/complaintsData";
import privacyPolicyData from "../../data/privacyPolicyData";
import PrivacyPolicyModal from "../Modal/PrivacyPolicyModal";
const DownPageMiddle = () => {
  const isLargerThanLg = useBreakpointValue({ base: false, lg: true });
  const linksToModals = [
    {
      name: "About_us",
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
      name: "Privacy_Policy",
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
    <>
      {!isLargerThanLg && (
        <Heading
          mt={-12}
          mb={-2}
          color="gray.500"
          fontWeight="regular"
          fontSize={28}
        >
          Help
        </Heading>
      )}
      <Box
        ml={isLargerThanLg ? "5%" : "-15%"}
        display="flex"
        flexDirection={isLargerThanLg ? "column" : "row"}
        alignItems={isLargerThanLg ? "flex-start" : "center"}
      >
        {isLargerThanLg && (
          <Heading
            mt={"-16%"}
            color="gray.500"
            fontWeight="regular"
            fontSize={"20px"}
          >
            Help
          </Heading>
        )}
        {linksToModals.map((link, index) => (
          <Heading
            m={"2%"}
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
    </>
  );
};

export default DownPageMiddle;
