import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id} color="fg">
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
