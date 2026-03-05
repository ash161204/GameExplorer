import createApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type Trailer from "../entities/Trailer";

const useTrailers = (id: number) => {
  return useQuery({
    queryKey: ["trailers", id],
    queryFn: () => createApiClient(`games/${id}/movies`).getAll<Trailer>(),
    staleTime: ms("5 days"),
  });
};

export default useTrailers;
