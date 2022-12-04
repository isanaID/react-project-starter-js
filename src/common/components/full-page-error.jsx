import { Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function FullPageError({ message, errorCode }) {
  return (
    <VStack gap={4} minH="100vh" justify="center" align="center">
      <Text fontSize="3xl">{errorCode}</Text>
      <Text fontSize="xl" color="gray.500">
        {message}
      </Text>
      <Link to="/">
        <Button size="sm" colorScheme="blue" w="208px" variant="solid">
          Back to home
        </Button>
      </Link>
    </VStack>
  );
}

export default FullPageError;
