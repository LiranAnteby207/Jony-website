import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Carousel } from "react-bootstrap";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import "../../style.css";
import greenBackground from "../../assets/green-backgrounds.jpg";
import purpleBackgruond from "../../assets/purple-and-blue-background.jpg";
import {
  CorouselCaptionManHoldingMoney,
  CorouselCaptionMoneyTrophy,
  CorouselCaptionZues,
} from "./CorouselCaption";
import useSideBarStore from "../../stores/sidebarStore";
const Corousel = () => {
  const showSidebar = useSideBarStore((s) => s.showSidebar);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const isLargeDevice = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });
  const [isHoveredZues, setIsHoveredZues] = useState(false);
  const [isHoveredMan, setIsHoveredMan] = useState(false);
  const [isHoveredMoney, setIsHoveredMoney] = useState(false);
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{
        backgroundColor: "gray",
        borderRadius: "300px",
        width: isLargeDevice ? "80%" : "100%",
        marginBottom: "2%",
      }}
      controls={!showSidebar}
      indicators={false}
    >
      <Carousel.Item
        onMouseEnter={() => setIsHoveredMan(true)}
        onMouseLeave={() => setIsHoveredMan(false)}
        className="custom-carousel-item"
      >
        <Box
          width="100%"
          height="300px"
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
            <CorouselCaptionManHoldingMoney isHoverd={isHoveredMan} />
          </Carousel.Caption>
        </Box>
      </Carousel.Item>

      <Carousel.Item
        onMouseEnter={() => setIsHoveredZues(true)}
        onMouseLeave={() => setIsHoveredZues(false)}
        className="custom-carousel-item"
      >
        <Box
          width="100%"
          height="300px"
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
            <CorouselCaptionZues isHoverd={isHoveredZues} />
          </Carousel.Caption>
        </Box>
      </Carousel.Item>
      <Carousel.Item
        onMouseEnter={() => setIsHoveredMoney(true)}
        onMouseLeave={() => setIsHoveredMoney(false)}
        className="custom-carousel-item"
      >
        <Box
          width="100%"
          height="300px"
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
            <CorouselCaptionMoneyTrophy isHoverd={isHoveredMoney} />
          </Carousel.Caption>
        </Box>
      </Carousel.Item>
    </Carousel>
  );
};

export default Corousel;
