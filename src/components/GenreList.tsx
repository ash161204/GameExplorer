import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Heading, HStack, Image, Link, List } from "@chakra-ui/react";
import SkeltonGenreList from "./SkeltonGenreList";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;

  return (
    <List.Root listStyleType="none">
      <Heading fontSize={"3xl"} marginBottom={6}>
        Genres
      </Heading>
      {isLoading &&
        skeletons.map((s) => (
          <List.Item key={s} color="fg" gap={4} marginBottom={3}>
            <SkeltonGenreList></SkeltonGenreList>
          </List.Item>
        ))}
      {!isLoading &&
        genres.map((genre) => (
          <List.Item key={genre.id} color="fg" gap={4} marginBottom={3}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"50px"}
                borderRadius={8}
                objectFit="cover"
              />
              <Link
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                color={genre.id === selectedGenre?.id ? "blue.500" : "fg"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="plain"
                _hover={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "blue.400",
                }}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
    </List.Root>
  );
};

export default GenreList;
