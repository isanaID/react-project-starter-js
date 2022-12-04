import { AxiosResponse } from "axios";

import client from "../../client";
import { AUTH_PROVIDER_CONFIG } from "../constants";

const { endpoint } = AUTH_PROVIDER_CONFIG;

function login({ email, password }) {
  return client.post(endpoint.login, { email, password });
}

function me() {
  return client.get(endpoint.me);
}

export { login, me };
