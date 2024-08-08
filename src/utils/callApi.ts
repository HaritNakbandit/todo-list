import axios from "@/lib/axios";
import { useState, useEffect } from "react";

const usePostApi = async (url: string, data: any, callback?: Function) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  // const PostData = async () => {
    try {
      await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setIsLoading(false);
      if (typeof callback === "function") {
        callback();
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  // };
  // PostData();
  return [isLoading, isError];
};

export { usePostApi };
