import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { chefs } from '../../data/chefs';
import { Chef } from '../../models/chef.model';
import { CommonModule } from '@angular/common';
import { RestaurantsButtonComponent } from '../../../shared/buttons/restaurants-button/restaurants-button.component';
import { breakpointsRes1 } from '../../data/breakpoints';

@Component({
  selector: 'app-week-chef',
  standalone: true,
  imports: [GenericCardComponent, CommonModule, RestaurantsButtonComponent],
  templateUrl: './week-chef.component.html',
  styleUrl: './week-chef.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WeekChefComponent {
  chefs: Chef[] = chefs;
  chefOfTheWeek = this.chefs[0];
  breakpoints = breakpointsRes1;

  getFirstName(fullName: string): string {
    return fullName.split(' ')[0];
  }
}
