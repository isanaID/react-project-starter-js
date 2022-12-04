import { Box } from "@chakra-ui/react";
import NavBreadcrumb from "../../../common/components/nav-breadcrumb";

import Homepage from "../components/home";

function Home() {
  return (
    <Box>
      <NavBreadcrumb
        items={[{ text: "Home", to: "/home", isCurrentPage: true }]}
      />
      <Homepage />
    </Box>
  );
}

export default Home;
