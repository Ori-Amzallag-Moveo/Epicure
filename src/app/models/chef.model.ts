export interface Restaurant {
    name: string;
    imgSrc: string;
  }
  
  export interface Chef {
    name: string;
    description: string;
    restaurants: Restaurant[];
  }
  