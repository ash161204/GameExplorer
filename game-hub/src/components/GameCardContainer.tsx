import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box maxW="sm" overflow="hidden" bg={"gray.900"} border={"whiteAlpha.200"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
