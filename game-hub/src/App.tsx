import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
      gap={4}
      bg={"gray.950"}
    >
      <GridItem area="nav" paddingX={5}>
        <NavBar></NavBar>
      </GridItem>

      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        Aside
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
