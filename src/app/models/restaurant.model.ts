import { Chef } from "./chef.model";
export interface Restaurant {
  _id: string,
  name: string;
    slug?: string;
    imageSrc: string;
    chef ?: Chef;
    rating: number;
    attributes: string[];
    location: {
        type: string;
        coordinates: [number, number];
    };
}