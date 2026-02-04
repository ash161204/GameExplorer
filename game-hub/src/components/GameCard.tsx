import { Card, Image, Text, RatingGroup } from "@chakra-ui/react";
import type { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={game.background_image}
        alt={game.name}
        height="200px"
        objectFit="cover"
      />
      <Card.Body gap="2">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
