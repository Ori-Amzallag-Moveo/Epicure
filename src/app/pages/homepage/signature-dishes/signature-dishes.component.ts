import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { CommonModule } from '@angular/common';
import { RestaurantsButtonComponent } from '../../../../shared/buttons/restaurants-button/restaurants-button.component';
import { breakpointsData } from '../../../data/breakpointsData';
import { Dish } from '../../../models/dish.model';
import { popularRestaurantsService } from '../popular-restaurants/popularRestaurants.service';
@Component({
  selector: 'app-signature-dishes',
  standalone: true,
  templateUrl: './signature-dishes.component.html',
  styleUrl: './signature-dishes.component.scss',
  imports: [CommonModule, GenericCardComponent, RestaurantsButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignatureDishesComponent {
  dishes: Dish[] = [];
  breakpoints = breakpointsData;

  constructor(private restaurantsService: popularRestaurantsService) {}

  async ngOnInit() {
    this.dishes = await this.restaurantsService.getSignatureDishes();
  }
}
