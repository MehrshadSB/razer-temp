import axios from "axios";

function useRequest() {
  const createRequest = (config) => {
    axios({
      method: config?.method || "GET",
      baseURL: config?.baseUrl || "http://127.0.0.1:8000", // set default base url here
      url: config?.url,
      data: config?.data,
      params: config?.params,
      credentials: "include",
      headers: {
        authorization: `Bearer ${config?.token}`,
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
