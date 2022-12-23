import { useMemo, useState } from "react";
import shallow from "zustand/shallow";
import {
  Box,
  Text,
  Flex,
  useBreakpointValue,
  Badge,
  InputGroup,
  Input,
  InputLeftElement,
  Link,
  Image,
} from "@chakra-ui/react";

import { Pagination, DataTable, ErrorAlert } from "../../../common/components";

import { useRandomUser } from "../context/hooks";
import { useExample } from "../context";

function Random() {
  const [page, setPage] = useState(1);

  const [result, setResult] = useExample(
    (state) => [state.result, state.setResult],
    shallow
  );

  const {
    status,
    data: response,
    errorMessage,
    refetch,
  } = useRandomUser({ result });

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: (row) => row.name?.first,
      },
      {
        Header: "Last Name",
        accessor: (row) => row.name?.last,
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  return (
    <Box>
      <Box
        borderColor="gray.200"
        borderWidth="1px"
        px={6}
        borderRadius="12px"
        height="100%"
      >
        {status !== "error" && (
          <>
            <DataTable
              isLoaded={status === "success"}
              columns={columns}
              data={response?.results || []}
            />

            {/* {status === "success" && (
              <Pagination
                currentPage={page}
                pageCount={response?.data.totalPages || 0}
                totalItems={response?.data.totalDocs || 0}
                perPage={response?.data.limit || 0}
                maxVisible={3}
                gotoPage={(p) => {
                  setPage(p);
                }}
                previousPage={() => {
                  setPage((p) => p - 1);
                }}
                nextPage={() => {
                  setPage((p) => p + 1);
                }}
              />
            )} */}
          </>
        )}
        {status === "error" && (
          <ErrorAlert message={errorMessage} onRetry={refetch} />
        )}
      </Box>
    </Box>
  );
}

export default Random;
