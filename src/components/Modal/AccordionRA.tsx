import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

const AccordionRA = () => {
  return (
    <Accordion m={4} allowToggle>
      <Heading fontSize={22}>Registration. Account. Verification</Heading>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Jurisdictions prohibited for registration
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            The company does not give permission to open an account and/or
            deposit to users residing or located in Australia, Afghanistan,
            Belarus, Burundi, Venezuela, Hong Kong, DR Congo, Zimbabwe, Israel,
            Iraq, Iran, Yemen, North Korea, Cuba, Curacao, Lebanon, Libya, Mali,
            Myanmar, Netherlands, Nicaragua, SAR, Singapore, Somalia, USA,
            France, Central African Republic, South Sudan.
          </p>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How is game fairness guaranteed?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            We cooperate only with the world's leading game providers which are
            certified annually.
          </p>
          <p>
            We have a license to carry out legal gambling activities issued by
            the government of Curaçao which is renewed annually.
          </p>
          <p>
            Also, some roulette tables have built-in fair play control by
            providing encrypted round results before betting starts.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How can you get in touch with us?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>Online support works around the clock 24/7.</p>
          <p>
            Also you can write to the internal messaging system by heading to
            the{" "}
            <a href="#player/support/messages" target="_blank">
              Messages
            </a>{" "}
            section on your Account page.{" "}
          </p>
          <p>
            Our email: <span> support@riobet.com</span>
          </p>
          <p>You can also contact us </p>
          <p>via Skype: riosupport.</p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How many accounts can I open?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>You are allowed to have only one account.</p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Is passport verification required?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            The administration may request verification of documents in order to
            make sure that you are over 18 years old, that you do not have
            multi-accounts, or for other reasons.
          </p>
          <p>
            To pass the verification, you need to go to your Account page,{" "}
            <a href="#player/verification" target="_blank">
              Verification
            </a>{" "}
            section.
          </p>
          <p>
            Verification with a document is not required to play for real money.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How to verify mail, phone number, passport?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            If you are required to verify your personal data, go to
            <a href="#player/verification" target="_blank">
              Verification
            </a>{" "}
            section.
          </p>
          <p>
            To confirm your phone or mail, click on the appropriate field in the
            "Contact Information" section
          </p>
          <p>
            To verify your passport, click "Upload documents", and follow the
            on-screen instructions
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How do I change my password?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            Visit your Account page and open the
            <a href="#player/security" target="_blank">
              Security
            </a>{" "}
            section.
          </p>
          <p>
            We also recommend setting an additional security measure for
            withdrawing funds and logging into your account (using PIN, 2FA or
            Telegram).
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionRA;
