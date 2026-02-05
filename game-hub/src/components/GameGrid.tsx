import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import SkeltonGameCard from "./SkeltonGameCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <text>{error}</text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap={6}
        padding="10px"
        overflow={"hidden"}
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer>
              <SkeltonGameCard key={s}></SkeltonGameCard>
            </GameCardContainer>
          ))}
        {!isLoading &&
          games.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
