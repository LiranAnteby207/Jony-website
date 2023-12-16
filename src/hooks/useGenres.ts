import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
}
interface FetchGenresResponse{
    count: number;
    results: Genre[];
}
const useGenres = () => {
    const [isLoading, setLoading] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setErorr] = useState("");
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres")
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setErorr(err.message)});
            setLoading(false);
    },[]);
    return {genres,error, isLoading};
}

export default useGenres;