import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap={6}
      bg="bg.canvas"
      color="fg"
    >
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList></GenreList>
      </GridItem>

      <GridItem area="main">
        <GameHeading></GameHeading>
        <HStack marginBottom={3} paddingX={2}>
          <PlatformSelector />
          <SortSelector></SortSelector>
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
