import { Restaurant } from './Restaurant.model';

export interface Chef {
  name: string;
    slug?: string;
    imageSrc: string;
    description: String;
    restaurants?: Restaurant[];
}