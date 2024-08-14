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
    this.restaurants = await this.restaurantsService.fetchRestaurants('isPopular');
  }

  ratingConverter(rating: number): string {
    switch (rating) {
      case 1:
        return 'assets/rating-icons/1-stars-rating.svg';
      case 2:
        return 'assets/rating-icons/2-stars-rating.svg';
      case 3:
        return 'assets/rating-icons/3-stars-rating.svg';
      case 4:
        return 'assets/rating-icons/4-stars-rating.svg';
      case 5:
        return 'assets/rating-icons/5-stars-rating.svg';
      default:
        return '';
    }
  }
}