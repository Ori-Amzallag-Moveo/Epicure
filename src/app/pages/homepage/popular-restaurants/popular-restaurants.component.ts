import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsButtonComponent } from '../../../../shared/buttons/restaurants-button/restaurants-button.component';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { CommonModule } from '@angular/common';
import { breakpointsData } from '../../../data/breakpointsData';
import { popularRestaurantsHomepage } from '../../../models/HomepageData';

@Component({
  selector: 'app-popular-restaurants',
  standalone: true,
  imports: [GenericCardComponent, RestaurantsButtonComponent, CommonModule],
  templateUrl: './popular-restaurants.component.html',
  styleUrl: './popular-restaurants.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopularRestaurantsComponent {
  @Input({ required: true }) popularRestaurants!:| popularRestaurantsHomepage[]| undefined;
  breakpoints = breakpointsData;

  constructor (private router: Router) {}

  goToRestaurant(restaurantId: string) {
    this.router.navigate([`/restaurants`, restaurantId]);
  }

  ratingConverter(rating: number): string {
    if (rating >= 1 && rating <= 5) {
      return `assets/rating-icons/${rating}-stars-rating.svg`;
    }
    return '';
  }
}
