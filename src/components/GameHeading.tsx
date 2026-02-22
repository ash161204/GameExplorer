import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";
import { type GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading
      as="h1"
      size="5xl"
      marginY={5}
      paddingX={2}
      fontWeight="bold"
      letterSpacing="tight"
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
