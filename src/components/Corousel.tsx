import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Carousel } from "react-bootstrap";
import ukIcon from "../assets/united-kingdom.png";
import { Image } from "@chakra-ui/react";
import { useState } from "react";

const Corousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image src={ukIcon} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={ukIcon} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Item as needed */}
    </Carousel>
  );
};

export default Corousel;
