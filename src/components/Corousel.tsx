import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Carousel } from "react-bootstrap";
import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import "../style.css";
import greenBackground from "../assets/green-backgrounds.jpg";
import purpleBackgruond from "../assets/purple-and-blue-background.jpg";
import {
  CorouselCaptionManHoldingMoney,
  CorouselCaptionMoneyTrophy,
  CorouselCaptionZues,
} from "./CorouselCaption";
import useSideBarStore from "../sidebarStore";
const Corousel = () => {
  const showSidebar = useSideBarStore((s) => s.showSidebar);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{
        backgroundColor: "gray",
        borderRadius: "300px",
        width: "75%",
        marginBottom: "2%",
      }}
      controls={!showSidebar}
      indicators={false}
    >
      <Carousel.Item className="custom-carousel-item">
        <Box
          width="100%"
          height="350px"
          borderRadius={30}
          overflow="hidden"
          position="relative"
        >
          <Image
            src={greenBackground}
            alt="First slide"
            className="carousel-background-image"
          />
          <Carousel.Caption className="custom-caption" style={{ padding: 0 }}>
            <CorouselCaptionManHoldingMoney />
          </Carousel.Caption>
        </Box>
      </Carousel.Item>

      <Carousel.Item className="custom-carousel-item">
        <Box
          width="100%"
          height="350px"
          borderRadius={30}
          overflow="hidden"
          position="relative"
        >
          <Image
            src={purpleBackgruond}
            alt="second slide"
            className="carousel-background-image"
          />
          <Carousel.Caption className="custom-caption" style={{ padding: 0 }}>
            <CorouselCaptionZues />
          </Carousel.Caption>
        </Box>
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item">
        <Box
          width="100%"
          height="350px"
          borderRadius={30}
          overflow="hidden"
          position="relative"
        >
          <Image
            src={greenBackground}
            alt="second slide"
            className="carousel-background-image"
          />
          <Carousel.Caption className="custom-caption" style={{ padding: 0 }}>
            <CorouselCaptionMoneyTrophy />
          </Carousel.Caption>
        </Box>
      </Carousel.Item>
    </Carousel>
  );
};

export default Corousel;
