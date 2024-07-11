import { Component } from '@angular/core';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { restaurantsData } from '../../data/restaurantsData';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [FilterBarComponent, GenericCardComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss',
})
export class RestaurantsComponent {
  restaurants = restaurantsData;
}
