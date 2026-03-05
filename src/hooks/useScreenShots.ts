import createApiClient, { type FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type ScreenShot from "../entities/ScreenShot";

const useScreenshots = (game_pk: string) => {
  return useQuery<FetchResponse<ScreenShot>, Error>({
    queryKey: ["screenshots", game_pk],
    queryFn: () =>
      createApiClient(`games/${game_pk}/screenshots`).getAll<ScreenShot>(),
  });
};

export default useScreenshots;
