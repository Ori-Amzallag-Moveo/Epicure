import { Injectable } from '@angular/core';
import axios from 'axios';
import { Restaurant } from '../../models/Restaurant.model';
import { environment } from '../../../enviroments/enviroment';
import { isClient } from '../../../helpers/isclient.helper';
import { RestaurantQueryParams, SingleRestaurantQueryParams } from '../../models/queries.model';
@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private readonly apiUrl = environment.apiUrl;

  async fetchRestaurants(page: number,limit?: number, isPopular?: string, isNewRestaurant?: string, isOpenNow?: string, rating?: string, distance?: string, priceRange?: string): Promise<Restaurant[]> {
    const params: RestaurantQueryParams = { page, limit }; 
    const sessionKey = `restaurants-${page}-${limit}-${isPopular}-${isNewRestaurant}-${isOpenNow}-${rating}-${distance}-${priceRange}`;
    
    if (isClient()) {
      const storedData = sessionStorage.getItem(sessionKey);
      if (storedData) {
        return JSON.parse(storedData);
      }
    }
    if (isPopular !== undefined) params.isPopular = isPopular;
    if (isNewRestaurant !== undefined) params.isNewRestaurant = isNewRestaurant;
    if (isOpenNow !== undefined) params.isOpenNow = isOpenNow;
    if (rating !== undefined) params.rating = rating; 
    if (distance !== undefined) params.distance = distance; 
    if (priceRange !== undefined) params.priceRange = priceRange; 

    try {
      const response = await axios.get<{success: boolean; data: Restaurant[]}>(`${this.apiUrl}/restaurants`, {params});
      const data: Restaurant[] = response.data.data;

      if (isClient()) {
        sessionStorage.setItem(sessionKey, JSON.stringify(data));
      }
      return data;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      return [];
    }
  }

  async getRestaurantById(id: string, meal?: string): Promise<Restaurant> {
    const params: SingleRestaurantQueryParams = {};
    const sessionKey = `restaurants-${id}-${meal}`;

    if (isClient()) {
      const storedData = sessionStorage.getItem(sessionKey);
      if (storedData) {
        return JSON.parse(storedData);
      }
    }
    if (meal) {
      params.meal = meal;
    }
    try {
      const response = await axios.get<{ success: boolean; data: Restaurant }>(`${this.apiUrl}/restaurants/${id}`,{ params });
      const data: Restaurant = response.data.data;

      if (isClient()) {
        sessionStorage.setItem(sessionKey, JSON.stringify(data));
      }
      return data;
    } catch (error) {
      console.error('Error fetching restaurant by id:', error);
      throw error;
    }
  }

  
}
