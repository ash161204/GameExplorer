import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeltonGameCard from "./SkeltonGameCard";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    error,
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const games = data?.pages.flatMap((page) => page.results);

  return (
    <Box padding="10px">
      {error && <text>{error.message}</text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap={6}
        overflow={"hidden"}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <SkeltonGameCard></SkeltonGameCard>
            </GameCardContainer>
          ))}
        {!isLoading &&
          games?.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          disabled={isFetchingNextPage || !hasNextPage}
          onClick={() => fetchNextPage()}
          marginY={5}
        >
          {isFetchingNextPage ? <h1>Loading.....</h1> : <h1>LoadMore</h1>}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
