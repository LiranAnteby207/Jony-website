import React from "react";
import useGames from "../../hooks/useGames";
import { Box, Button, SimpleGrid, useColorMode } from "@chakra-ui/react";
import GameCardContainer from "../game/GameCardContainer";
import GameCard from "../game/GameCard";

const RightSideGames = () => {
  const { colorMode } = useColorMode();
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames();
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default RightSideGames;
