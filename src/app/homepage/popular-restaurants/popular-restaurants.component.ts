import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RestaurantsButtonComponent } from '../../../shared/buttons/restaurants-button/restaurants-button.component';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { CommonModule } from '@angular/common';
import { popularRestaurantsData } from '../../data/popularRestaurantsData';
import { breakpointsData } from '../../data/breakpointsData';

@Component({
  selector: 'app-popular-restaurants',
  standalone: true,
  imports: [GenericCardComponent, RestaurantsButtonComponent, CommonModule],
  templateUrl: './popular-restaurants.component.html',
  styleUrl: './popular-restaurants.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopularRestaurantsComponent {
  restaurants = popularRestaurantsData;

  breakpoints = breakpointsData;
}
