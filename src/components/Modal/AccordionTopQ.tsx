import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";
const AccordionTopQ = () => {
  return (
    <Accordion m={4} allowToggle>
      <Heading fontSize={22}>Top questions</Heading>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How to verify mail, phone number, and passport?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            {" "}
            If you are required to verify your personal data, go to the
            <a href="#player/verification" target="_blank">
              Verification
            </a>{" "}
            section.
          </p>
          <p>
            To confirm your phone or mail, click on the appropriate field in the
            "Contact Information" section.
          </p>
          <p>
            To verify your passport, click "Upload documents", and follow the
            on-screen instructions.
          </p>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How to withdraw winnings from free spins?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ol>
            <li>
              If you have successfully played your free spins, you will receive
              a special bonus: “Free spins win”.
            </li>
            <li>
              This bonus cannot be withdrawn immediately, it is wagered in the
              background while you are playing slots or other games in real
              money mode.
            </li>
            <li>
              The bonus amount will be automatically credited to your real money
              account and will be available for withdrawal when you complete the
              wagering requirements ("wager" is a necessary protection against
              abuse of the bonus system).
            </li>
            <li>
              After successful wagering, the amount of the wagered bonus will be
              added to the amount of winnings.
            </li>
          </ol>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Payment processing regulations
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            As a rule, payment processing occurs within 5 minutes from the
            moment the payment request is submitted.
          </p>
          <p>
            In some cases, the withdrawal can be processed in up to 24 hours
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionTopQ;
