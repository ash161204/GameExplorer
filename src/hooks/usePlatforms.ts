import platforms from "@/data/platforms";
import { useQuery } from "@tanstack/react-query";
import createApiClient from "@/services/api-client";
import type { FetchResponse } from "@/services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["Platforms"],
    queryFn: () =>
      createApiClient("/platforms/lists/parents").getAll<Platform>(),
    staleTime: 5 * 24 * 60 * 60 * 1000, // 5 days
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
