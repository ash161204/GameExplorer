import { Card, HStack, Image } from "@chakra-ui/react";
import type Game from "@/entities/Game";
import PlatformIconList from "./PlatformIconList";
import MetaCritic from "./MetaCritic";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";
import { NavLink } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <NavLink to={`games/${game.slug}`}>
      <Card.Root
        maxW="sm"
        overflow="hidden"
        bg={"gray.900"}
        boxShadow={"none"}
        border="none"
      >
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={"https://placehold.co/600x400?text=No+Image+Available"}
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

          <Card.Footer>
            <Emoji rating={game.rating_top}></Emoji>
          </Card.Footer>
        </Card.Body>
      </Card.Root>
    </NavLink>
  );
};

export default GameCard;
