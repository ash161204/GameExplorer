import { Card, HStack, Image } from "@chakra-ui/react";
import type { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import MetaCritic from "./MetaCritic";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      bg={"gray.900"}
      boxShadow={"none"}
      border="none"
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        height="200px"
        objectFit="cover"
      />
      <Card.Body gap="2">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <MetaCritic metacritic={game.metacritic}></MetaCritic>
        </HStack>

        <Card.Title color={"white"}>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
