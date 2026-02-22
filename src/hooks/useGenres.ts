import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import createApiClient from "@/services/api-client";
import type { FetchResponse } from "@/services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => createApiClient("genres").getAll<Genre>(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
