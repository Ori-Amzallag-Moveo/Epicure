import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { CommonModule } from '@angular/common';
import { RestaurantsButtonComponent } from '../../../../shared/buttons/restaurants-button/restaurants-button.component';
import { breakpointsData } from '../../../data/breakpointsData';
import { Dish } from '../../../models/dish.model';
import { DishCardComponent } from '../../../../shared/components/cards/dish-card/dish-card.component';
@Component({
  selector: 'app-signature-dishes',
  standalone: true,
  templateUrl: './signature-dishes.component.html',
  styleUrl: './signature-dishes.component.scss',
  imports: [CommonModule, GenericCardComponent, RestaurantsButtonComponent, DishCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignatureDishesComponent {
  @Input({ required: true }) signatureDishes!: Dish[] | undefined;
  breakpoints = breakpointsData;
}
