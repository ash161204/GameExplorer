import platforms from "@/data/platforms";
import { useQuery } from "@tanstack/react-query";
import createApiClient from "@/services/api-client";
import type { FetchResponse } from "@/services/api-client";
import ms from "ms";
import type { Platform } from "../entities/Platform";

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["Platforms"],
    queryFn: () =>
      createApiClient("/platforms/lists/parents").getAll<Platform>(),
    staleTime: ms("5 days"),
    initialData: {
      count: platforms.length,
      next: null,
      previous: null,
      results: platforms,
    },
  });

export default usePlatforms;
