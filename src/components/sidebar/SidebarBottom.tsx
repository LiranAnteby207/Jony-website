import {
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import languages from "../../data/languages";
import useLanguageStoreStore from "../../stores/languageStore";
const SidebarBottom = () => {
  const selectedLanguage = useLanguageStoreStore((s) => s.selectedLanguage);
  const setSelectedLanguage = useLanguageStoreStore(
    (s) => s.setSelectedLanguage
  );
  useState("English");
  return (
    <>
      <HStack>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            <Image
              boxSize={8}
              borderRadius={8}
              overflow="hidden"
              src={languages.find((l) => l.language === selectedLanguage)?.flag}
            />
          </MenuButton>
          <MenuList>
            {languages.map((country) => (
              <MenuItem
                onClick={() => setSelectedLanguage(country.language)}
                key={country.language}
              >
                <HStack>
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
        <Button width="65%" bgColor="green.400">
          <HStack>
            <Icon as={MdOutlineSupportAgent} boxSize={7} mr={2} />
            <Heading mt={2} fontSize={18}>
              SUPPORT
            </Heading>
          </HStack>
        </Button>
      </HStack>
    </>
  );
};

export default SidebarBottom;
