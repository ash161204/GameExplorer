import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import SkeltonGameCard from "./SkeltonGameCard";

const GameGrid = () => {
  const { error, data, isLoading, hasNextPage, fetchNextPage } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const games = data?.pages.flatMap((page) => page.results);

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <text>{error.message}</text>}
      <InfiniteScroll
        dataLength={fetchedGamesCount} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Spinner></Spinner>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          gap={6}
          overflow={"hidden"}
          padding="10px"
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
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
