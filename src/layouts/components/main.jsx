import { Box } from "@chakra-ui/react";

function Main({ children, ...properties }) {
  return <Box {...properties}>{children}</Box>;
}
export default Main;
