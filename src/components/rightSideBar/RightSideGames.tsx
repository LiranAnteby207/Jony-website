import React, { useState } from "react";
import { Box, Button, SimpleGrid, useColorMode } from "@chakra-ui/react";
import RightSideGame from "./RightSideGame";

const RightSideGames = () => {
  const [numberOfGames, setNumberOfGames] = useState([1, 2, 3]);

  const handleLoadMore = () => {
    // Generate an array of 10 additional numbers
    const additionalNumbers = Array.from(
      { length: 10 },
      (_, index) => index + numberOfGames.length + 1
    );

    // Update the state by combining the existing array with the new numbers
    setNumberOfGames((prevState) => [...prevState, ...additionalNumbers]);
  };
  const { colorMode } = useColorMode();
  return (
    <Box
      overflowY="auto"
      maxH="100vh"
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: colorMode === "dark" ? "gray.600" : "gray.300",
          borderRadius: "16px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: colorMode === "dark" ? "gray.400" : "gray.200",
        },
      }}
    >
      <SimpleGrid columns={1} width="300px" spacing={2}>
        {numberOfGames.map((n) => (
          <React.Fragment key={n}>
            <RightSideGame />
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button marginY={5} onClick={handleLoadMore}>
        Load More
      </Button>
    </Box>
  );
};

export default RightSideGames;
