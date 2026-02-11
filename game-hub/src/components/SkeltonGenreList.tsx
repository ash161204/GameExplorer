import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeltonGenreList = () => {
  return (
    <HStack>
      <Skeleton boxSize={"50px"} borderRadius={8} objectFit="cover" />
      <SkeletonText fontSize="lg" fontWeight="medium"></SkeletonText>
    </HStack>
  );
};

export default SkeltonGenreList;
