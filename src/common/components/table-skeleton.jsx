import { Box } from "@chakra-ui/react";
import ContentLoader from "react-content-loader";

function TableSkeleton() {
  return (
    <Box p={4}>
      <ContentLoader
        speed={2}
        width="100%"
        height="160"
        viewBox="0 0"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="40" height="25" />
        <rect x="60" y="0" rx="0" ry="0" width="200" height="25" />
        <rect x="280" y="0" rx="0" ry="0" width="200" height="25" />
        <rect x="500" y="0" rx="0" ry="0" width="200" height="25" />
        <rect x="720" y="0" rx="0" ry="0" width="200" height="25" />
        <rect x="940" y="0" rx="0" ry="0" width="200" height="25" />

        <rect x="0" y="45" rx="0" ry="0" width="40" height="25" />
        <rect x="60" y="45" rx="0" ry="0" width="200" height="25" />
        <rect x="280" y="45" rx="0" ry="0" width="200" height="25" />
        <rect x="500" y="45" rx="0" ry="0" width="200" height="25" />
        <rect x="720" y="45" rx="0" ry="0" width="200" height="25" />
        <rect x="940" y="45" rx="0" ry="0" width="200" height="25" />

        <rect x="0" y="90" rx="0" ry="0" width="40" height="25" />
        <rect x="60" y="90" rx="0" ry="0" width="200" height="25" />
        <rect x="280" y="90" rx="0" ry="0" width="200" height="25" />
        <rect x="500" y="90" rx="0" ry="0" width="200" height="25" />
        <rect x="720" y="90" rx="0" ry="0" width="200" height="25" />
        <rect x="940" y="90" rx="0" ry="0" width="200" height="25" />

        <rect x="0" y="135" rx="0" ry="0" width="40" height="25" />
        <rect x="60" y="135" rx="0" ry="0" width="200" height="25" />
        <rect x="280" y="135" rx="0" ry="0" width="200" height="25" />
        <rect x="500" y="135" rx="0" ry="0" width="200" height="25" />
        <rect x="720" y="135" rx="0" ry="0" width="200" height="25" />
        <rect x="940" y="135" rx="0" ry="0" width="200" height="25" />
      </ContentLoader>
    </Box>
  );
}

export default TableSkeleton;
