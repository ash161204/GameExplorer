import useScreenShots from "@/hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  game_pk: string;
}
const GameScreenShots = ({ game_pk }: Props) => {
  const { data, error, isLoading } = useScreenShots(game_pk);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {data?.results.map((s) => (
        <Image src={s.image} key={s.id}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
