import {
  Button,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Icon,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { MdOutlineSupportAgent } from "react-icons/md";
import useLanguageStoreStore from "../../stores/languageStore";
import { BsChevronDown } from "react-icons/bs";
import languages from "../../data/languages";
import bitcoin from "../../assets/icons8-bitcoin-48.png";
import etr from "../../assets/icons8-ethereum-64.png";
import ltc from "../../assets/icons8-litecoin-50.png";
import tron from "../../assets/icons8-tron-64.png";
import { Link } from "react-router-dom";
const DownPageLeft = () => {
  const { colorMode } = useColorMode();
  const selectedLanguage = useLanguageStoreStore((s) => s.selectedLanguage);
  const setSelectedLanguage = useLanguageStoreStore(
    (s) => s.setSelectedLanguage
  );
  const coins = [
    { icon: bitcoin, number: "43634.00$" },
    { icon: etr, number: "2291.50$" },
    { icon: ltc, number: "72.57$" },
    { icon: tron, number: "0.10$" },
  ];
  return (
    <Box pt={5} pl={20} width="40%">
      <HStack>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            <HStack>
              <Image
                boxSize={8}
                borderRadius={8}
                overflow="hidden"
                src={
                  languages.find((l) => l.language === selectedLanguage)?.flag
                }
              />
              <Heading pl={2} fontWeight="regular" fontSize={18}>
                {selectedLanguage}
              </Heading>
            </HStack>
          </MenuButton>
          <MenuList>
            {languages.map((country) => (
              <MenuItem
                onClick={() => setSelectedLanguage(country.language)}
                key={country.language}
              >
                <HStack key={country.language}>
                  <Image
                    boxSize={8}
                    borderRadius={8}
                    overflow="hidden"
                    src={country.flag}
                  />
                  <Heading fontSize={18} fontWeight="regular">
                    {country.language}
                  </Heading>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Button bgColor="green.400">
          <HStack>
            <Icon as={MdOutlineSupportAgent} boxSize={7} />
            <Heading mt={2} fontSize={18}>
              24/7 SUPPORT
            </Heading>
          </HStack>
        </Button>
      </HStack>
      <HStack>
        {coins.map((c) => (
          <Box
            key={c.number}
            p={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image boxSize={8} src={c.icon} />
            <Heading fontSize={16} fontWeight="regular">
              {c.number}
            </Heading>
          </Box>
        ))}
      </HStack>
      <HStack mb={16}>
        <Box maxW="25%">
          <Link to="/">
            <Image
              style={
                colorMode === "dark"
                  ? { filter: "brightness(170%)" }
                  : { filter: "brightness(100%)" }
              }
              src={logo}
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Link>
        </Box>
        <Box maxW="25%">
          <Link to="/">
            <Image
              style={
                colorMode === "dark"
                  ? { filter: "brightness(170%)" }
                  : { filter: "brightness(100%)" }
              }
              src={logo}
              objectFit="cover"
              w="100%"
              h="100%"
            />
          </Link>
        </Box>
      </HStack>
    </Box>
  );
};

export default DownPageLeft;
