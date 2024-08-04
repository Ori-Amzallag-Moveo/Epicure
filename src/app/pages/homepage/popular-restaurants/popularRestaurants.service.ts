import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { restaurantsData } from '../../../data/restaurantsData';

@Injectable({
  providedIn: 'root',
})
export class popularRestaurantsService {
  getRestaurants() {
    return of(restaurantsData).pipe(delay(1000)); 
  }
}
