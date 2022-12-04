import shallow from "zustand/shallow";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAsync, useGetQuery } from "../../client/hooks";

import { useAuth } from "./index";

import * as authServices from "../services";

import * as TYPES from "../constants";

export function useLogin() {
  const navigate = useNavigate();
  const { execute, status, value, errorMessage, fieldErrors } = useAsync(
    authServices.login
  );
  const [setAuth] = useAuth((state) => [state.setAuth], shallow);

  useEffect(() => {
    if (status === "resolved") {
      setAuth(value.data);
      navigate("/");
    }
  }, [status]);

  async function login(payload) {
    try {
      await execute(payload);
    } catch (err) {
      console.error(err);
    }
  }

  return [login, status, errorMessage, fieldErrors];
}

export function useLogout() {
  const navigate = useNavigate();
  const [clearSession] = useAuth((state) => [state.clearSession], shallow);

  function logout() {
    clearSession();
    navigate("/");
  }

  return [logout];
}

export const useProfile = () => {
  const [setUser] = useAuth((state) => [state.setUser], shallow);

  const { data, status, errorMessage, isIdle, refetch } = useGetQuery({
    queryKey: TYPES.FETCH_PROFILE,
    queryFn: async () => {
      const response = await authServices.me();
      setUser(response.data.data);
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
};
