import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { RestaurantsButtonComponent } from '../../../shared/buttons/restaurants-button/restaurants-button.component';
import { CommonModule } from '@angular/common';
import { popularRestaurants } from '../../data/popularRestaurants';
import { breakpointsRes1 } from '../../data/breakpoints';

@Component({
  selector: 'app-popular-restaurants',
  standalone: true,
  imports: [GenericCardComponent, RestaurantsButtonComponent, CommonModule],
  templateUrl: './popular-restaurants.component.html',
  styleUrl: './popular-restaurants.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopularRestaurantsComponent {
  restaurants = popularRestaurants;

  breakpoints = breakpointsRes1;
}
