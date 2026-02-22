import platforms from "@/data/platforms";
import { useQuery } from "@tanstack/react-query";
import createApiClient from "@/services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["Platforms"],
    queryFn: () =>
      createApiClient("/platforms/lists/parents").getAll<Platform>(),
    staleTime: 5 * 24 * 60 * 60 * 1000, // 5 days
    initialData: platforms,
  });

export default usePlatforms;
