import { Image, SimpleGrid } from "@chakra-ui/react";
import iconsOfCompanies from "../../data/iconsData";

const IconsHolderMain = () => {
  return (
    <SimpleGrid columns={{ base: 4, md: 5, lg: 9 }}>
      {iconsOfCompanies.map((element, index) => (
        <Image
          key={index}
          color={"gray.500"}
          src={element.img}
          title={element.name}
        />
      ))}
    </SimpleGrid>
  );
};

export default IconsHolderMain;
