import { Flex } from "@chakra-ui/react";
import backgroundGradient from "assets/images/background-gradient.png";

function Register({ children }) {
  return (
    <Flex
      backgroundImage={backgroundGradient}
      backgroundSize="cover"
      minHeight="100vh"
      align="center"
      justify="center"
      py={12}
    >
      {children}
    </Flex>
  );
}

export default Register;
