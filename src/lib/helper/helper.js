import { get } from "lodash";

export const getValueByKey = (obj, key, defaultValue) => {
  return get(obj, key, defaultValue);
};
