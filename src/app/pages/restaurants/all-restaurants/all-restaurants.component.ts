import { Component } from '@angular/core';
import { restaurantsData } from '../../../data/restaurantsData';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';

@Component({
  selector: 'app-all-restaurants',
  standalone: true,
  imports: [GenericCardComponent],
  templateUrl: './all-restaurants.component.html',
  styleUrl: './all-restaurants.component.scss'
})
export class AllRestaurantsComponent {
  restaurants = restaurantsData;

}
