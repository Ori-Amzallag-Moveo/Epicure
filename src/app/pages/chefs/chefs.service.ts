import { Injectable } from '@angular/core';
import axios from 'axios';
import { Chef } from '../../models/chef.model';

@Injectable({
  providedIn: 'root',
})
export class ChefsService {
  private readonly apiUrl = 'http://localhost:3000/api/v1';
  private readonly endpoints = {
    chefs: `${this.apiUrl}/chefs`,
    newChefs: `${this.apiUrl}/chefs/new`,
    mostViewedChefs: `${this.apiUrl}/chefs/most-viewed`,
  };

  async getChefs(): Promise<Chef[]> {
    return this.fetchChefs(this.endpoints.chefs);
  }

  async getNewChefs(): Promise<Chef[]> {
    return this.fetchChefs(this.endpoints.newChefs);
  }

  async getMostViewedChefs(): Promise<Chef[]> {
    return this.fetchChefs(this.endpoints.mostViewedChefs);
  }

  private async fetchChefs(url: string): Promise<Chef[]> {
    try {
      const response = await axios.get<{ success: boolean; data: Chef[] }>(url);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching chefs from ${url}:`, error);
      return [];
    }
  }
}
