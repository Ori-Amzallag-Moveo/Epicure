import { Injectable } from '@angular/core';
import axios from 'axios';
import { Restaurant } from '../../models/Restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private readonly apiUrl = 'http://localhost:3000/api/v1';

  private readonly endpoints = {
    all: `${this.apiUrl}/restaurants/`,
    new: `${this.apiUrl}/restaurants/new`,
    popular: `${this.apiUrl}/restaurants/popular`,
    open: `${this.apiUrl}/restaurants/open`,
  };

  async getRestaurants(): Promise<Restaurant[]> {
    return this.fetchRestaurants(this.endpoints.all);
  }

  async getNewRestaurants(): Promise<Restaurant[]> {
    return this.fetchRestaurants(this.endpoints.new);
  }

  async getPopularRestaurants(): Promise<Restaurant[]> {
    return this.fetchRestaurants(this.endpoints.popular);
  }

  async getOpenRestaurants(): Promise<Restaurant[]> {
    return this.fetchRestaurants(this.endpoints.open);
  }

  private async fetchRestaurants(url: string): Promise<Restaurant[]> {
    try {
      const response = await axios.get<{
        success: boolean;
        data: Restaurant[];
      }>(url);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching restaurants from ${url}:`, error);
      return [];
    }
  }
}
