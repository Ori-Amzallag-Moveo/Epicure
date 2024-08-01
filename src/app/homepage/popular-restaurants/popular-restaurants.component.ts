import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { RestaurantsButtonComponent } from '../../../shared/buttons/restaurants-button/restaurants-button.component';
import { CommonModule } from '@angular/common';
import { breakpointsData } from '../../data/breakpointsData';
import { Restaurant } from '../../models/restaurant.model';
import { PopularRestaurantsService } from './popular-restaurants.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-popular-restaurants',
  standalone: true,
  imports: [GenericCardComponent, RestaurantsButtonComponent, CommonModule, HttpClientModule],
  templateUrl: './popular-restaurants.component.html',
  styleUrls: ['./popular-restaurants.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PopularRestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];
  breakpoints = breakpointsData;

  constructor(private popularRestaurantsService: PopularRestaurantsService) {}

  ngOnInit() {
    this.popularRestaurantsService.fetchRestaurants()
      .pipe(tap((data: Restaurant[]) => this.restaurants = data))
      .subscribe();
  }
}