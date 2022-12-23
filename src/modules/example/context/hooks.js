import { useAsync, useGetQuery } from "../../../lib/client/hooks";

import * as services from "../services";
import * as TYPES from "../constants";

export function useRandomUser(params) {
  const result = params?.result || 10;

  const { data, status, errorMessage, isIdle, refetch } = useGetQuery({
    queryKey: TYPES.FETCH_EXAMPLE,
    queryFn: async () => {
      const response = await services.randomUser({ results: result });
      return response.data;
    },
  });

  return {
    data,
    status,
    errorMessage,
    isIdle,
    refetch,
  };
}
