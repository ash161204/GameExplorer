import { Skeleton, Card, SkeletonText, SkeletonCircle } from "@chakra-ui/react";

const SkeltonGameCard = () => {
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      bg={"gray.900"}
      border={"whiteAlpha.200"}
    >
      <Skeleton height="200px" objectFit="cover"></Skeleton>

      <Card.Body gap="2">
        <SkeletonCircle></SkeletonCircle>

        <Card.Title color={"white"}>
          <SkeletonText></SkeletonText>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default SkeltonGameCard;
