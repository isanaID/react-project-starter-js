import { WarningIcon } from "@chakra-ui/icons";
import { Button, Text, VStack } from "@chakra-ui/react";

function ErrorAlert({ message, onRetry, ...props }) {
  return (
    <VStack
      gap={4}
      flexGrow={1}
      py={12}
      align="center"
      justify="center"
      {...props}
    >
      <WarningIcon w={8} h={8} color="red.500" />
      <Text fontSize="sm" lineHeight={5} color="gray.500" my={2}>
        {message}
      </Text>
      <Button
        size="sm"
        colorScheme="blue"
        w="208px"
        variant="solid"
        onClick={onRetry}
      >
        Retry
      </Button>
    </VStack>
  );
}

export default ErrorAlert;
