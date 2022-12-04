import axios, { AxiosInstance } from "axios";

import handler from "./handler";
import * as Storage from "../storage";

import { TOKEN_STORAGE_KEY } from "../auth-provider/constants";

const ENVIRONMENT = process.env.REACT_APP_STAGE || "local";
const CONFIG_ENVIRONMENT = require(`../config/${ENVIRONMENT.toLowerCase()}.json`);

const { apiBaseUrl } = CONFIG_ENVIRONMENT.env;

function createResource() {
  const instance = axios.create({
    baseURL: apiBaseUrl,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = Storage.getStorage(TOKEN_STORAGE_KEY);

      if (token) {
        if (config.headers) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = token;
        }
      }

      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },

    (error) => {
      return handler(error);
    }
  );

  return instance;
}

export default createResource();
