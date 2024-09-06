import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";

export const useQueries = (
  { prefixUrl = "", isShowToastSuccess = true, isShowToastError = true },
  callback = { onSuccess: () => {} }
) => {
  const { onSuccess = () => {} } = callback;
  const toast = useToast();
  const [data, setData] = useState({
    data: null,
    isLoading: true,
    isError: false,
  });

  const fetchingData = useCallback(
    async ({ url = "", method = "GET" } = {}) => {
      try {
        const response = await fetch(url, { method });
        const result = await response.json();
        setData({
          ...data,
          data: result,
          isLoading: false,
        });
        onSuccess({ result });

        if (isShowToastSuccess) {
          toast({
            title: "Fetching data success",
            status: "success",
            duration: 1000,
            position: "top",
          });
        }
      } catch (error) {
        setData({
          ...data,
          isError: true,
          isLoading: false,
        });

        if (isShowToastError) {
          toast({
            title: "Fetching data failed",
            status: "error",
            duration: 1000,
            position: "top",
          });
        }
      }
    },
    []
  );

  useEffect(() => {
    if (prefixUrl) {
      fetchingData({ url: prefixUrl });
    }
  }, [prefixUrl, fetchingData]);

  return { ...data, fetchingData };
};
