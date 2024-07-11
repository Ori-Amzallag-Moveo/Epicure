import { Component } from '@angular/core';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [FilterBarComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {

}
