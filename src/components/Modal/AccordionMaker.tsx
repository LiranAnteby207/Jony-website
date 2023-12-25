import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Element } from "../entities/Element";
interface AccordionMakerProps {
  elements: Element[];
}
const AccordionMaker = ({ elements }: AccordionMakerProps) => {
  return (
    <Accordion m={4} allowToggle>
      {elements.map((accordion) => (
        <Box key={accordion.heading}>
          <Heading color="red.500" fontSize={26}>
            {accordion.heading}
          </Heading>
          {accordion.sections.map((section, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Heading
                    fontSize={19}
                    fontWeight="regular"
                    flex="1"
                    textAlign="left"
                  >
                    {section[0]}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {section.slice(1).map((content, contentIndex) => (
                  <Text fontSize={20} key={contentIndex}>
                    {content}
                  </Text>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Box>
      ))}
    </Accordion>
  );
};

export default AccordionMaker;
