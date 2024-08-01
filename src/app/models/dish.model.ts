interface DishIcon {
  src: string;
  alt: string;
}

export interface Dish {
  name: string;
  imageSrc: string;
  ingredients: string;
  icons: DishIcon[];
  price: number;
}
