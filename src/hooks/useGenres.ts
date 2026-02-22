import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import type { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const fetchResponse = () => {
    return apiClient
      .get<FetchResponse<Genre>>("genres")
      .then((res) => res.data.results);
  };
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchResponse,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: genres,
  });
};

export default useGenres;
