import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../../models/restaurant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopularRestaurantsService {
  constructor(private http: HttpClient) {}

  fetchRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('/api/popular-restaurants');
  }
}
