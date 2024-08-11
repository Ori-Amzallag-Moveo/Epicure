import { Injectable } from '@angular/core';
import axios from 'axios';
import { Restaurant } from '../../models/Restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private apiUrl = 'http://localhost:3001/api/v1/restaurants/';

  async getRestaurants(): Promise<Restaurant[]> {
    try {
      const response = await axios.get< { success: boolean, data: Restaurant[] } >(this.apiUrl);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      return [];
    }
  }
}
