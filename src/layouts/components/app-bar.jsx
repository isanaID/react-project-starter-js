import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Spacer,
  VStack,
  HStack,
  Text,
  Circle,
  Avatar,
  Button,
  Icon,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

import shallow from "zustand/shallow";
import { useAuth } from "../../lib/auth-provider/context";

function AppBar({
  onToggleNavigationDrawer,
  navigationDrawerWidth,
  ...properties
}) {
  const [user] = useAuth((state) => [state.user], shallow);

  const { fullname } = user;

  return (
    <Box
      as="header"
      height="64px"
      marginTop="0"
      transform="translateY(0px)"
      borderBottom="1px solid #e6e6e6"
      position="fixed"
      top={0}
      right={0}
      zIndex={5}
      py="18px"
      px="40px"
      display="flex"
      alignItems="center"
      backgroundColor="white"
      left={{ base: "0", md: navigationDrawerWidth }}
      {...properties}
    >
      <Button
        display={{ base: "block", md: "none" }}
        variant="ghost"
        p={1}
        onClick={onToggleNavigationDrawer}
      >
        <Icon as={MdMenu} width="28px" height="28px" />
      </Button>
      <Spacer />
      <Flex gap={4} align="center">
        <VStack align="start" spacing="2px" gap={1}>
          <Text
            fontSize="sm"
            lineHeight={5}
            fontWeight="bold"
            textTransform="capitalize"
          >
            {fullname}
          </Text>
        </VStack>
        <Avatar
          width="32px"
          height="32px"
          name="Kent Dodds"
          src="https://bit.ly/kent-c-dodds"
        />
      </Flex>
    </Box>
  );
}

export { AppBar };
