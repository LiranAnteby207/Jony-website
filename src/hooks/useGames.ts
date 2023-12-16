import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Platform{
  id:number ;
  name: string;
  slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms:{platform: Platform}[];
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  
const useGames = () =>{
    const controller = new AbortController();
    const [isLoading, setLoading] = useState(false);
    const [games, setGames] = useState<Game[]>([]);
    const [error, setErorr] = useState("");
    useEffect(() => {
      setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games")
        .then((res) => {
          setGames(res.data.results)
          setLoading(false)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setErorr(err.message)});
            setLoading(false);
    },[]);
    return {games,error, isLoading};
}

export default useGames;