import { Platform } from "../hooks/useGames";
import { HStack, Text } from "@chakra-ui/react";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
