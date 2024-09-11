import { Chef } from './chef.model';
import { Dish } from './dish.model';

export interface Restaurant {
  _id: string;
  name: string;
  slug?: string;
  imageSrc: string;
  chef?: Chef;
  dishes: Dish[];
  rating: number;
  dateOfEstablishment: Date;
  openingHours: [string, string];
  location: {
    type: string;
    coordinates: [number, number];
  };
  clicks: number;
}
