import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav "  "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap={6}
      bg="bg.canvas"
      color="fg"
    >
      <GridItem area="nav" paddingX={5}>
        <NavBar></NavBar>
      </GridItem>

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

export default App;
