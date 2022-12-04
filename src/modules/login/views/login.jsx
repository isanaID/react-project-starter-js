import { lazy } from "react";
import { Box, Flex } from "@chakra-ui/react";

import LoginForm from "../components/login-form";

function Login() {
  return (
    <Flex minHeight="100vh">
      <Box width={{ base: "100%", lg: "40%" }}>
        <LoginForm />
      </Box>
    </Flex>
  );
}

export default Login;
