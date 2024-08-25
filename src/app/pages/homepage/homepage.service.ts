import { Injectable } from '@angular/core';
import axios from 'axios';
import { homepageData } from '../../models/HomepageData';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  private apiUrl = environment.apiUrl; 

  async fetchData(): Promise<homepageData> {
    try {
      const response = await axios.get<{ success: boolean; data: homepageData }>(this.apiUrl);
      return response.data.data;
    } catch (error) {
      console.error(`Error fetching homepage data`, error);
      throw error; 
    }
  }
}
