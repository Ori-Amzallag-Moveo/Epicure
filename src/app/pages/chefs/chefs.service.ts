import { Injectable } from '@angular/core';
import axios from 'axios';
import { Restaurant } from '../../models/Restaurant.model';
import { Chef } from '../../models/chef.model';

@Injectable({
  providedIn: 'root',
})
export class ChefsService {
  private apiUrl = 'http://localhost:3001/api/v1/chefs/';
  private newApiUrl = 'http://localhost:3001/api/v1/chefs/new';
  private popularApiUrl = 'http://localhost:3001/api/v1/chefs/most-viewed';

  async getChefs(): Promise<Chef[]> {
    return this.fetchChefs(this.apiUrl);
  }

  async getNewChefs(): Promise<Chef[]> {
    return this.fetchChefs(this.newApiUrl);
  }

  async getMostViewedChefs(): Promise<Chef[]> {
    return this.fetchChefs(this.popularApiUrl);
  }

  private async fetchChefs(url: string): Promise<Chef[]> {
    try {
      const response = await axios.get<{ success: boolean, data: Chef[] }>(url);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching chefs from ${url}:`, error);
      return [];
    }
  }
}