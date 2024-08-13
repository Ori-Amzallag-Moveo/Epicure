import { Injectable } from '@angular/core';
import { Restaurant } from '../../models/Restaurant.model';
import axios from 'axios';
import { Dish } from '../../models/dish.model';
import { Chef } from '../../models/chef.model';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  private readonly apiUrl = 'http://localhost:3000/api/v1';

  private readonly endpoints = {
    popularRestaurants: `${this.apiUrl}/restaurants/popular`,
    signatureDishes: `${this.apiUrl}/dishes/signature`,
    chefs: `${this.apiUrl}/chefs`,
  };

  async getPopularRestaurants(): Promise<Restaurant[]> {
    return this.fetchData<Restaurant[]>(this.endpoints.popularRestaurants);
  }

  async getSignatureDishes(): Promise<Dish[]> {
    return this.fetchData<Dish[]>(this.endpoints.signatureDishes);
  }

  async getChefs(): Promise<Chef[]> {
    return this.fetchData<Chef[]>(this.endpoints.chefs);
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
