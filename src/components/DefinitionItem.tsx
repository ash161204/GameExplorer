import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={2}>
      <Heading as={"dt"} fontSize={"md"} color={"gray.600"}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
