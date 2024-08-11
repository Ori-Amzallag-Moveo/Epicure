import { Injectable } from '@angular/core';
import { Restaurant } from '../../../models/Restaurant.model';
import axios from 'axios';
import { Dish } from '../../../models/dish.model';
import { Chef } from '../../../models/chef.model';
@Injectable({
  providedIn: 'root',
})
export class popularRestaurantsService {
  private apiUrl = 'http://localhost:3001/api/v1/';

  async getPopularRestaurants(): Promise<Restaurant[]> {
    try {
      const response = await axios.get<{ success: boolean;data: Restaurant[];}> (
        this.apiUrl + 'restaurants/popular');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching popular restaurants:', error);
      return [];
    }
  }

  async getSignatureDishes(): Promise<Dish[]> {
    try {
      const response = await axios.get<{ success: boolean; data: Dish[] }>(
        this.apiUrl + 'dishes'
      );
      return response.data.data;
    } catch (error) {
      console.error('Error fetching signature dishes:', error);
      return [];
    }
  }

  async getChefs(): Promise<Chef[]> {
    try {
      const response = await axios.get<{ success: boolean; data: Chef[] }>(
        this.apiUrl + 'chefs'
      );
      return response.data.data;
    } catch (error) {
      console.error('Error fetching chefs:', error);
      return [];
    }
  }
}
