import platforms from "@/data/platforms";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["Platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 5 * 24 * 60 * 60 * 1000, // 5 days
    initialData: platforms,
  });

export default usePlatforms;
