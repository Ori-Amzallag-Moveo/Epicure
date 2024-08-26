import { Restaurant } from './Restaurant.model';

export interface Chef {
  _id: string;
  name: string;
  slug?: string;
  imageSrc: string;
  description: String;
  restaurants?: Restaurant[];
}
