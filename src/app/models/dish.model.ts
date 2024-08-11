import { Restaurant } from "./Restaurant.model";

interface DishIcon {
  imgSrc: string;
  alt: string;
}

export interface Dish {
  name: string;
  imageSrc: string;
  restaurants: Restaurant[];
  ingredients: string[];
  icons: DishIcon[];
  price: number;
}

