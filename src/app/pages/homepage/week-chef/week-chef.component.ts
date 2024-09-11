import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { RestaurantsButtonComponent } from '../../../../shared/buttons/restaurants-button/restaurants-button.component';
import { WeekChefPictureComponent } from '../../../../shared/components/week-chef-picture/week-chef-picture.component';
import { breakpointsData } from '../../../data/breakpointsData';
import { chefOfTheWeek } from '../../../models/HomepageData';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-week-chef',
  standalone: true,
  imports: [
    GenericCardComponent,
    RestaurantsButtonComponent,
    WeekChefPictureComponent,
    RestaurantsButtonComponent
  ],
  templateUrl: './week-chef.component.html',
  styleUrl: './week-chef.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WeekChefComponent {
  @Input({ required: true }) chefOfTheWeek!: chefOfTheWeek | undefined;
  breakpoints = breakpointsData;

  constructor (private router: Router) {}

  getFirstName(fullName: string | undefined): string {
    return fullName ? fullName.split(' ')[0] : 'Unknown';
  }

  goToRestaurant(restaurantId: string) {
    this.router.navigate([`/restaurants`, restaurantId]);
  }
}
