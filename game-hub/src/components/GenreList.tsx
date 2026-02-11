import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import SkeltonGenreList from "./SkeltonGenreList";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;

  return (
    <List.Root>
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
              <Text fontSize="lg" fontWeight="medium">
                {genre.name}
              </Text>
            </HStack>
          </List.Item>
        ))}
    </List.Root>
  );
};

export default GenreList;
