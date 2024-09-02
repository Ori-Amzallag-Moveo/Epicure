import { Injectable } from '@angular/core';
import axios from 'axios';
import { homepageData } from '../../models/HomepageData';
import { environment } from '../../../enviroments/enviroment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  private apiUrl = environment.apiUrl; 
  private cookieName = 'homepageData';

  constructor(private cookieService: CookieService) {}

  async fetchData(): Promise<homepageData> {
    const storedData = this.cookieService.get(this.cookieName);

    if (storedData) {
      console.log(storedData);
      return JSON.parse(storedData);
    }

    try {
      const response = await axios.get<{ success: boolean; data: homepageData }>(this.apiUrl);
      
      const data: homepageData = response.data.data;
      this.cookieService.set(this.cookieName, JSON.stringify(data), 1); 
      return data;
    } catch (error) {
      console.error(`Error fetching homepage data`, error);
      throw error; 
    }
  }
}
