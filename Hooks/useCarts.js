import { useState } from "react";
import useRequest from "./useRequest";

function usePostProduct() {
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any errors
  const [postRes, setPostRes] = useState(null);
  const createRequest = useRequest();

  const post = (url, data) => {
    setLoading(true);

    createRequest({
      method: "POST",
      baseUrl: "http://127.0.0.1:8000/", //Your base url
      url,
      data,
      onSuccess: (response) => {
        setPostRes(response);
      },
      onFail: (error) => {
        setError(error);
      },
      finally: () => {
        setLoading(false);
      },
    });

    return { postRes, loading, error };
  };

  return post;
}

function useGet() {
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any errors
  const [getRes, setgetRes] = useState(null);
  const createRequest = useRequest();

  const get = (url) => {
    setLoading(true);

    createRequest({
      method: "GET",
      baseUrl: "http://127.0.0.1:8000", //Your base url
      url,
      onSuccess: (response) => {
        setgetRes(response);
      },
      onFail: (error) => {
        setError(error);
      },
      finally: () => {
        setLoading(false);
      },
    });

    return { getRes, loading, error };
  };

  return get;
}

export { usePostProduct, useGet };
