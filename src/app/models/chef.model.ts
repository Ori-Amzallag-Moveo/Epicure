import { Restaurant } from './restaurant.model';

export interface Chef {
  name: string;
  imgSrc: string;
  description: string;
  restaurants: Restaurant[];
}