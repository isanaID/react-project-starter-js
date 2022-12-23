import { lazy } from "react";

import { Box } from "@chakra-ui/react";

import { NavBreadcrumb } from "../../../common/components";

const Random = lazy(() => import("../components/random"));

function RandomPage() {
  return (
    <Box>
      <NavBreadcrumb
        items={[{ text: "Example", to: "/example", isCurrentPage: true }]}
      />
      <Random />
    </Box>
  );
}

export default RandomPage;
