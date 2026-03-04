import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  gameDescription: string;
}

const ExpandableText = ({ gameDescription }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const limit = 300;

  if (!gameDescription) return;

  if (gameDescription.length <= limit) return <Text>gameDescription</Text>;

  const summary = expanded
    ? gameDescription
    : gameDescription.slice(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          colorPalette={"yellow"}
          onClick={() => setExpanded(!expanded)}
          size={"xs"}
          fontWeight={"bold"}
          marginLeft={1}
        >
          {expanded ? "Show less" : "Load More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
