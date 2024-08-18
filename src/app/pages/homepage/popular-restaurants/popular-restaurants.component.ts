import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RestaurantsButtonComponent } from '../../../../shared/buttons/restaurants-button/restaurants-button.component';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { CommonModule } from '@angular/common';
import { breakpointsData } from '../../../data/breakpointsData';
import { Restaurant } from '../../../models/Restaurant.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';
@Component({
  selector: 'app-popular-restaurants',
  standalone: true,
  imports: [GenericCardComponent, RestaurantsButtonComponent, CommonModule],
  templateUrl: './popular-restaurants.component.html',
  styleUrl: './popular-restaurants.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopularRestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];
  breakpoints = breakpointsData;

  constructor(private restaurantsService: RestaurantsService) {}

  async ngOnInit() {
    this.restaurants = await this.restaurantsService.fetchRestaurants('true', undefined, undefined);
  }

  ratingConverter(rating: number): string {
    if (rating >= 1 && rating <= 5) {
      return `assets/rating-icons/${rating}-stars-rating.svg`;
    }
    return '';
  }
}