import { Chef } from "./chef.model";
export interface Restaurant {
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