import useTrailers from "@/hooks/useTrailers";

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useTrailers(id);

  if (error) throw error;
  if (isLoading) return null;

  const first = data?.results[0];

  return first ? (
    <video controls src={first.data[480]} poster={first.preview} width="100%" />
  ) : null;
};

export default GameTrailer;
