import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from '../../../enviroments/enviroment';
import { isClient } from '../../../helpers/isclient.helper';
import { AuthService } from '../../auth/auth.service';
import { Chef } from '../../models/chef.model';
import { ChefQueryParams } from '../../models/queries.model';

@Injectable({
  providedIn: 'root',
})
export class ChefsService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private authService: AuthService) {}

  async fetchChefs(
    page: number,
    limit?: number,
    isNewChef?: string,
    isMostViewedChef?: string
  ): Promise<Chef[]> {
    const headers = this.authService.getAuthHeaders();
    const params: ChefQueryParams = { page, limit };
    const sessionKey = `chefs-${page}-${limit}-${isNewChef}-${isMostViewedChef}`;

    if (isClient()) {
      const storedData = sessionStorage.getItem(sessionKey);
      if (storedData) {
        return JSON.parse(storedData);
      }
    }

    if (isNewChef !== undefined) params.isNewChef = isNewChef;
    if (isMostViewedChef !== undefined)
      params.isMostViewedChef = isMostViewedChef;

    try {
      const response = await axios.get<{ success: boolean; data: Chef[] }>(
        `${this.apiUrl}/chefs`,
        { params, headers }
      );
      const data: Chef[] = response.data.data;

      if (isClient()) {
        sessionStorage.setItem(sessionKey, JSON.stringify(data));
      }

      return data;
    } catch (error) {
      console.error('Error fetching chefs', error);
      return [];
    }
  }
}
