import { Injectable } from '@angular/core';
import axios from 'axios';
import { Restaurant } from '../../models/Restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private apiUrl = 'http://localhost:3001/api/v1/restaurants/';
  private newApiUrl = 'http://localhost:3001/api/v1/restaurants/new';
  private popularApiUrl = 'http://localhost:3001/api/v1/restaurants/popular';
  private openNowApiUrl = 'http://localhost:3001/api/v1/restaurants/open';

  async getRestaurants(): Promise<Restaurant[]> {
    try {
      const response = await axios.get< { success: boolean, data: Restaurant[] } >(this.apiUrl);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      return [];
    }
  }

  async getNewRestaurants(): Promise<Restaurant[]> {
    try {
      const response = await axios.get< { success: boolean, data: Restaurant[] } >(this.newApiUrl);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching new restaurants:', error);
      return [];
    }
  }

  async getPopularRestaurants(): Promise<Restaurant[]> {
    try {
      const response = await axios.get<{ success: boolean, data: Restaurant[] }>(this.popularApiUrl);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching popular restaurants:', error);
      return [];
    }
  }

  async getOpenRestaurants(): Promise<Restaurant[]> {
    try {
      const response = await axios.get<{ success: boolean, data: Restaurant[] }>(this.openNowApiUrl);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching open restaurants:', error);
      return [];
    }
  }
}
