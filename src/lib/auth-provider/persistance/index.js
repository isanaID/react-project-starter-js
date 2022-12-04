import * as storage from "../../storage";

import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY, User } from "../constants";

export function userPersistance() {
  function set(payload) {
    return storage.setStorage(USER_STORAGE_KEY, payload);
  }

  function get() {
    return storage.getStorage(USER_STORAGE_KEY);
  }

  function remove() {
    storage.removeItemStorage(USER_STORAGE_KEY);
  }

  return [set, get, remove];
}

export function tokenPersistance() {
  function set(token) {
    return storage.setStorage(TOKEN_STORAGE_KEY, token);
  }

  function get() {
    return storage.getStorage(TOKEN_STORAGE_KEY);
  }

  function remove() {
    storage.removeItemStorage(TOKEN_STORAGE_KEY);
  }

  return [set, get, remove];
}
