import { AxiosResponse } from "axios";

import client from "../../../lib/client";

import { ENDPOINT } from "../constants";

function randomUser(args) {
  return client.get(ENDPOINT.randomUser, {
    params: {
      ...args,
    },
  });
}

export { randomUser };
