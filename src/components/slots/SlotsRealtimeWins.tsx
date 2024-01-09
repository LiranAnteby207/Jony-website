import {
  SimpleGrid,
  Box,
  Button,
  Text,
  VStack,
  Heading,
  HStack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import GameCard from "../game/GameCard";
import GameCardContainer from "../game/GameCardContainer";
import GameCardSkeleton from "../game/GameCardSkeleton";
import useGames from "../../hooks/useGames";
import player from "../../assets/guest.png";
import "../../style.css";
const SlotsRealtimeWins = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  if (error) return <Text>{error.message}</Text>;
  const winTypes = [
    {
      winName: "Win",
      amount: "x10",
      color: "",
      img: player,
      name: "liran",
      legitMoney: "+27.64$",
    },
    {
      winName: "Big Win",
      amount: "x40",
      color: "yellow.400",
      img: player,
      name: "liran",
      legitMoney: "+88.84$",
    },
    {
      winName: "Mega Win",
      amount: "x56",
      color: "orange.400",
      img: player,
      name: "liran",
      legitMoney: "+41.33$",
    },
    {
      winName: "Super Win",
      amount: "x110",
      color: "orange.600",
      img: player,
      name: "liran",
      legitMoney: "+41.55$",
    },
    {
      winName: "Huge Win",
      amount: "x430",
      color: "red.600",
      img: player,
      name: "liran",
      legitMoney: "+105$",
    },
  ];
  return (
    <Box>
      <SimpleGrid columns={{ base: 3, md: 4, lg: 6 }} spacing={4}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => {
          let incrementedIndex = index;
          return (
            <React.Fragment key={index}>
              {page.results.map((game) => {
                incrementedIndex++;
                return (
                  <VStack key={game.id}>
                    <GameCardContainer>
                      <GameCard game={game} />
                    </GameCardContainer>
                    <Heading
                      color={winTypes[incrementedIndex % 5].color}
                      fontSize={24}
                    >
                      {winTypes[incrementedIndex % 5].winName}
                    </Heading>
                    <Heading
                      mt={-4}
                      color={winTypes[incrementedIndex % 5].color}
                    >
                      {winTypes[incrementedIndex % 5].amount}
                    </Heading>
                    <HStack
                      mt={-2}
                      width={"100%"}
                      borderRadius={"40%"}
                      bgColor={"gray.700"}
                    >
                      <button className="btnPlayerData" />

                      <Flex ml={"5%"} direction="column" align="flex-start">
                        <Text pt={2} color={"gray.600"}>
                          {winTypes[incrementedIndex % 5].name}
                        </Text>
                        <Text mt={-4}>
                          {winTypes[incrementedIndex % 5].legitMoney}
                        </Text>
                      </Flex>
                    </HStack>
                  </VStack>
                );
              })}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default SlotsRealtimeWins;
