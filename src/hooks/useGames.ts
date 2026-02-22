import type { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";
import createApiClient from "@/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      createApiClient("games").getAll<Game>({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
