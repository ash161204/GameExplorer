import { Heading } from "@chakra-ui/react";
import { type GameQuery } from "../App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((genre) => genre.id == gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find(
    (platform) => platform.id == gameQuery.platformId,
  );

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
