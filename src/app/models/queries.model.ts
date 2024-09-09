export interface ChefQueryParams {
  page?: number;
  limit?: number;
  isNewChef?: string;
  isMostViewedChef?: string;
}

export interface RestaurantQueryParams {
  page?: number;
  limit?: number;
  isNewRestaurant?: string;
  isPopular?: string;
  isOpenNow?: string;
  rating?: string;
  distance?: string;
  priceRange?: string;
}

export interface SingleRestaurantQueryParams {
  meal?: string;
}
