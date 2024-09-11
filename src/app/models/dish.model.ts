export enum MealTime {
  Breakfast = 1,
  Lunch = 2,
  Dinner = 3,
}
interface DishIcon {
  imageSrc: string;
  alt: string;
}

export interface Dish {
  _id: string;
  name: string;
  slug?: string;
  imageSrc: string;
  ingredients: string[];
  icons: DishIcon[];
  price: number;
  meals: MealTime[];
  isSignature?: boolean;
}

