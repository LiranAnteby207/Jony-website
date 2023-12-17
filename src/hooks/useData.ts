import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T>{
    count: number;
    results: T[];
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState<T[]>([]);
    const [error, setErorr] = useState("");
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint,{signal: controller.signal, ...requestConfig})
        .then((res) => {
          setData(res.data.results)
          setLoading(false)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setErorr(err.message)});
            setLoading(false);
      return () => controller.abort();

    },deps ? [...deps]: []);
    return {data,error, isLoading};
}

export default useData;