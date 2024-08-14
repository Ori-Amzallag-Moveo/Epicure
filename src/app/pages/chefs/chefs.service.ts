import { Injectable } from '@angular/core';
import axios from 'axios';
import { Chef } from '../../models/chef.model';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class ChefsService {
  private readonly apiUrl = environment.apiUrl;

  async fetchChefs(
    isNewChef?: string,
    isMostViewedChef?: string
  ): Promise<Chef[]> {
    const params: any = {};

    if (isNewChef !== undefined) params.isNewChef = isNewChef;
    if (isMostViewedChef !== undefined) params.isMostViewedChef = isMostViewedChef;
    try {
      const response = await axios.get<{ success: boolean; data: Chef[] }>(
        `${this.apiUrl}/chefs`,
        {
          params,
        }
      );
      return response.data.data;
    } catch (error) {
      console.error('Error fetching chefs', error);
      return [];
    }
  }
}
