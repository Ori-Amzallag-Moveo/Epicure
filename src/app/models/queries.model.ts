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
}

export interface SingleRestaurantQueryParams {
  meal?: string;
}
