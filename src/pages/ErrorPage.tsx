import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading size="4xl">Oops</Heading>
        {isRouteErrorResponse(error) ? (
          <Text fontSize="2xl">This page does not exist</Text>
        ) : (
          <Text fontSize="2xl">Something Unexpected</Text>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
