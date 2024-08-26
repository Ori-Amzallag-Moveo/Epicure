import { Injectable } from '@angular/core';
import axios from 'axios';
import { Restaurant } from '../../models/Restaurant.model';
import { environment } from '../../../enviroments/enviroment';
import { Dish } from '../../models/dish.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private readonly apiUrl = environment.apiUrl;

  async fetchRestaurants(
    page: number,
    limit?: number,
    isPopular?: string,
    isNewRestaurant?: string,
    isOpenNow?: string,
  ): Promise<Restaurant[]> {
    const params: any = { page, limit };
    if (isPopular !== undefined) params.isPopular = isPopular;
    if (isNewRestaurant !== undefined) params.isNewRestaurant = isNewRestaurant;
    if (isOpenNow !== undefined) params.isOpenNow = isOpenNow;
    try {
      const response = await axios.get<{
        success: boolean;
        data: Restaurant[];
      }>(`${this.apiUrl}/restaurants`, {
        params,
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      return [];
    }
  }

  async getRestaurantById(id: string, meal?: string): Promise<Restaurant> {
    const params: any = {};
    if (meal) {
      params.meal = meal;
    }

    try {
      const response = await axios.get<{ success: boolean; data: Restaurant }>(
        `${this.apiUrl}/restaurants/${id}`,
        { params }
      );
      return response.data.data;
    } catch (error) {
      console.error('Error fetching restaurant by id:', error);
      throw error;
    }
  }
}
