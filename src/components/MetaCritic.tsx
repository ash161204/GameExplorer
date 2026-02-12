import { Badge } from "@chakra-ui/react";
interface metacriticProp {
  metacritic: number;
}
const MetaCritic = ({ metacritic }: metacriticProp) => {
  let color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "";

  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {metacritic}
    </Badge>
  );
};

export default MetaCritic;
