import axios from "axios";

function useRequest() {
  const createRequest = (config) => {
    axios({
      method: config?.method || "GET",
      baseURL: config?.baseUrl || "", // set default base url here
      url: config?.url,
      data: config?.data,
      params: config?.params,
      headers: {
        authorization: `Bearer ${config?.token}`,
        "Content-Type":
          config?.contentType || "application/json",
      },
    })
      .then((response) => {
        config?.onSuccess(response);
      })
      .catch((error) => {
        if (
          error?.response?.status === 403 ||
          error?.response?.status === 401
        ) {
          // define what to do when token invalid
          return;
        }
        config?.onFail(error.status);
      })
      .finally(() => {
        if (config?.finally) {
          config?.finally();
        }
      });
  };

  return createRequest;
}

export default useRequest;
