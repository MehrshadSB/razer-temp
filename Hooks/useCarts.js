import { useState } from "react";
import useRequest from "./useRequest";

function usePostProduct() {
  // const [cart, setCart] = useState(null); // State to store cart data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any errors
  const [postRes, setPostRes] = useState(null);
  const createRequest = useRequest();

  const post = (url, data) => {
    setLoading(true);

    createRequest({
      method: "POST",
      baseUrl: "http://127.0.0.1:8000", //
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

export default usePostProduct;
