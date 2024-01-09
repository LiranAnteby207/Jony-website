import { Card, CardHeader, CardBody, Icon } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import "../style.css";
const HoverCards = () => {
  return (
    <Card
      borderRadius={4}
      bgColor="rgba(30, 30, 30, 0.9)"
      height="100%"
      width="100%"
      top="50%"
      left="50%"
      className="hover-content"
      position="absolute"
      transform="translate(-50%, -50%)"
      opacity={0}
      transition="opacity 0.3s ease-in-out"
      border="2px solid gold"
    >
      <CardHeader width="100%" pt={2} pb={0}>
        <Icon color="gold" boxSize={6} as={FaRegHeart} />
      </CardHeader>
      <CardBody
        mt={-8}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Icon
          className="heart"
          color="green.400"
          boxSize={"55%"}
          as={FaCirclePlay}
        />
      </CardBody>
    </Card>
  );
};

export default HoverCards;
