import { useState, useMemo } from "react";
import { useQuery } from "react-query";

export const useAsync = (asyncFunction) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.

  const errorMessage = useMemo(() => {
    if (error) {
      if (error.response && error.response.data) {
        return error.response.data.message;
      }
      return "Something error";
    }
    return null;
  }, [error]);

  const fieldErrors = useMemo(() => {
    if (error) {
      if (error.response && error.response.data) {
        return error.response.data.errors;
      }
      return {};
    }
    return null;
  }, [error]);

  const execute = async (arg) => {
    setStatus("fetching");
    setValue(null);
    setError(null);
    try {
      const { data } = await asyncFunction(arg);
      setValue(data);
      setStatus("resolved");
    } catch (err) {
      setError(err);
      setStatus("rejected");
      throw err;
    }
  };

  return { execute, status, value, error, errorMessage, fieldErrors };
};

export const useGetQuery = ({ queryKey, queryFn, enabled = true }) => {
  const { data, status, error, isIdle, refetch } = useQuery(queryKey, queryFn, {
    enabled,
  });

  const errorMessage = useMemo(() => {
    if (error) {
      if (error.response && error.response.data) {
        return error.response.data.message;
      }
      return "Something error";
    }
    return null;
  }, [error]);

  return { data, status, isIdle, errorMessage, refetch };
};
