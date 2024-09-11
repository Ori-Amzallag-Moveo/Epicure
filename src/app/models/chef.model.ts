import { Restaurant } from './Restaurant.model';

export interface Chef {
  _id: string;
  age: number;
  name: string;
  slug?: string;
  imageSrc: string;
  description: String;
  restaurants?: Restaurant[];
}
