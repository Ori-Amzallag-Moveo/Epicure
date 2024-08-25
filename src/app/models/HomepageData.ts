import { Dish } from './dish.model';

export interface popularRestaurantsHomepage {
  restaurantImg: string;
  restaurantName: string;
  chefName: string;
  rating: number;
}

export interface chefOfTheWeek {
  name: string;
  imageSrc: string;
  description: string;
  restaurants: Array<{ restaurantImg: string; restaurantName: string }>;
}

export interface homepageData {
  popularRestaurants: popularRestaurantsHomepage[];
  signatureDishes: Dish[];
  chefOfTheWeek: chefOfTheWeek;
}
