import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap={6}
        padding="10px"
        overflow={"hidden"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
