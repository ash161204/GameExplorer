import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  return (
    <List.Root>
      {genres.map((genre) => (
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
