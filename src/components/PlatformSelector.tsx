import {
  Button,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaNeos,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiD3Dotjs,
  SiNintendo,
  SiAtari,
  SiCommodore,
  SiSega,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../stores/store";

const PlatformSelector = () => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    atari: SiAtari,
    sega: SiSega,
    "3do": SiD3Dotjs,
    "commodore-amiga": SiCommodore,
    "neo-geo": FaNeos,
  };
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            <HStack>
              <Icon
                key={platform.id}
                as={iconMap[platform.slug] || platform.slug}
                color="gray.500"
                title={platform.slug}
              />
              <Heading fontSize={18} fontWeight="regular">
                {platform.name}
              </Heading>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
