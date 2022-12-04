import * as storage from "../storage";

const errorPrefix = "[ERROR] ";

const errorHandler = {
  somethingWrong() {
    console.error(errorPrefix, "Something wrong");
  },

  badRequest() {
    console.error(errorPrefix, "Bad Request");
  },

  notAuthorize() {
    storage.clearStorage();
    window.location.href = "/login";
    console.error(errorPrefix, "Not Authorize");
  },
};

export default (error) => {
  const { response } = error;

  if (
    typeof response === "undefined" ||
    typeof response.status === "undefined"
  ) {
    errorHandler.somethingWrong();
    return Promise.reject(error);
  }

  switch (response.status) {
    case 400:
      errorHandler.badRequest();
      break;
    case 401:
      errorHandler.notAuthorize();
      break;
    default:
      break;
  }

  return Promise.reject(error);
};
