import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RestaurantsButtonComponent } from '../../../shared/buttons/restaurants-button/restaurants-button.component';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { CommonModule } from '@angular/common';
import { breakpointsData } from '../../data/breakpointsData';
import { PopularRestaurant } from '../../models/popularRestaurants.model';
import { popularRestaurantsService } from './popularRestaurants.service';
@Component({
  selector: 'app-popular-restaurants',
  standalone: true,
  imports: [GenericCardComponent, RestaurantsButtonComponent, CommonModule],
  templateUrl: './popular-restaurants.component.html',
  styleUrl: './popular-restaurants.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopularRestaurantsComponent implements OnInit {
  restaurants: PopularRestaurant[] = [];
  breakpoints = breakpointsData;

  constructor(private restaurantsService: popularRestaurantsService) {}

  ngOnInit() {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantsService.getRestaurants().subscribe((data: PopularRestaurant[]) => {
      this.restaurants = data;
    });
  }
}