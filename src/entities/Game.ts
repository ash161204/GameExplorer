import type Platform from "@/entities/Platform";
import type Genre from "./Genre";
import type Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  publishers: Publisher[];
}
