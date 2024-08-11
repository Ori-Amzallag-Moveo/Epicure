import { Injectable } from '@angular/core';
import { Restaurant } from '../../models/Restaurant.model';
import axios from 'axios';
import { Dish } from '../../models/dish.model';
import { Chef } from '../../models/chef.model';
@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  private apiUrl = 'http://localhost:3001/api/v1/';

  async getPopularRestaurants(): Promise<Restaurant[]> {
    return this.fetchData<Restaurant[]>(this.apiUrl + 'restaurants/popular');
  }

  async getSignatureDishes(): Promise<Dish[]> {
    return this.fetchData<Dish[]>(this.apiUrl + 'dishes');
  }

  async getChefs(): Promise<Chef[]> {
    return this.fetchData<Chef[]>(this.apiUrl + 'chefs');
  }

  private async fetchData<T>(url: string): Promise<T> {
    try {
      const response = await axios.get<{ success: boolean; data: T }>(url);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      return [] as unknown as T;
    }
  }
}
