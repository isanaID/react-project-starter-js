import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const BasicContainer = styled.main({
  minHeight: "100vh",
});

function BasicLayout({ children }) {
  return (
    <Box id="app">
      <BasicContainer className="main">{children}</BasicContainer>
    </Box>
  );
}

export default BasicLayout;
