import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import createApiClient from "@/services/api-client";
import type { FetchResponse } from "@/services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => createApiClient("genres").getAll<Genre>(),
    staleTime: ms("24h"),
    initialData: {
      count: genres.length,
      next: null,
      previous: null,
      results: genres,
    },
  });
};

export default useGenres;
