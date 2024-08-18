import { Injectable } from '@angular/core';
import axios from 'axios';
import { Restaurant } from '../../models/Restaurant.model';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private readonly apiUrl = environment.apiUrl; 

  async fetchRestaurants(isPopular?: string, isNewRestaurant?: string, isOpenNow?: string): Promise<Restaurant[]> {
    const params: any = {};
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
}
