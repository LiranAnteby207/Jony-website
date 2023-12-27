import { Box, HStack, Image, Text, Heading } from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import greenBackground from "../../assets/green-backgrounds.jpg";
import mysteryFallText from "../../assets/mysteryfalltext.png";
import mysteryFallChar from "../../assets/mysteryfallchar.png";
const RightSideGame = () => {
  return (
    <Carousel
      style={{
        width: "300px",
        height: "150px",
        paddingBottom: "5px",
      }}
      controls={false}
      indicators={false}
    >
      <Carousel.Item style={{ height: "150px" }}>
        <Box
          border="solid 2px gold"
          width="100%"
          height="100%"
          borderRadius={30}
          overflow="hidden"
          position="relative"
        >
          <Image
            src={greenBackground}
            alt="First slide"
            className="carousel-background-image"
          />
          <Carousel.Caption
            className="custom-caption"
            style={{ padding: 0, left: "5px", right: "5px" }}
          >
            <HStack height="100%">
              <Box width="50%">
                <Box
                  mt="-30px"
                  _hover={{
                    transform: "scale(1.06)",
                    transition: "transform .35s ease-in",
                  }}
                >
                  <Image src={mysteryFallText} alt="mysteryFallText" />
                </Box>
                <Box>
                  <Text mb={2} ml={2} textAlign="left">
                    Prize Pool
                  </Text>
                  <Heading fontSize={20} ml={2} mb={-16} textAlign="left">
                    1 500 000$
                  </Heading>
                </Box>
              </Box>
              <Box
                width="70%"
                _hover={{
                  transform: "scale(1.06)",
                  transition: "transform .35s ease-in",
                }}
                height="100%"
              >
                <Image
                  src={mysteryFallChar}
                  alt="mysteryFallChar"
                  height="100%"
                />
              </Box>
            </HStack>
          </Carousel.Caption>
        </Box>
      </Carousel.Item>
    </Carousel>
  );
};

export default RightSideGame;
