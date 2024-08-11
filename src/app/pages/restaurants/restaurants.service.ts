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
    return this.fetchRestaurants(this.apiUrl);
  }

  async getNewRestaurants(): Promise<Restaurant[]> {
    return this.fetchRestaurants(this.newApiUrl);
  }

  async getPopularRestaurants(): Promise<Restaurant[]> {
    return this.fetchRestaurants(this.popularApiUrl);
  }

  async getOpenRestaurants(): Promise<Restaurant[]> {
    return this.fetchRestaurants(this.openNowApiUrl);
  }

  private async fetchRestaurants(url: string): Promise<Restaurant[]> {
    try {
      const response = await axios.get<{ success: boolean, data: Restaurant[] }>(url);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching restaurants from ${url}:`, error);
      return [];
    }
  }
}