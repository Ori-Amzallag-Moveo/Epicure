import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { RestaurantsButtonComponent } from '../../../../shared/buttons/restaurants-button/restaurants-button.component';
import { WeekChefPictureComponent } from '../../../../shared/components/week-chef-picture/week-chef-picture.component';

import { breakpointsData } from '../../../data/breakpointsData';
import { Chef } from '../../../models/chef.model';
import { HomepageService } from '../homepage.service';

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
  chefs: Chef[] = [];
  breakpoints = breakpointsData;

  constructor(private homepageService: HomepageService) {}

  async ngOnInit() {
    this.chefs = await this.homepageService.getChefs();
  }

  getFirstName(fullName: string): string {
    return fullName.split(' ')[0];
  }
}
