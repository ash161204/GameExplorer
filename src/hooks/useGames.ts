import { useInfiniteQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";
import createApiClient, { type FetchResponse } from "@/services/api-client";
import ms from "ms";
import useGameQueryStore from "@/store";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const { gameQuery } = useGameQueryStore();
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      createApiClient("games").getAll<Game>({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: 25,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return undefined;

      return allPages.length + 1;
    },
    staleTime: ms("24h"), //24 hrs
  });
};

export default useGames;
