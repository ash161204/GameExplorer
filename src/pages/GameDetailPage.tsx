import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import useGame from "@/hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading size="4xl">{game.slug}</Heading>
      <ExpandableText gameDescription={game.description_raw} />
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
