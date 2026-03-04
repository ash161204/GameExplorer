import createApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { Game } from "./useGames";

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => createApiClient("games").get<Game>(slug),
    staleTime: ms("5 days"),
  });
};

export default useGame;
