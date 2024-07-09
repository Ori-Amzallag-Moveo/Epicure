import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { signatureDishesData } from '../../data/signatureDishesData';
import { CommonModule } from '@angular/common';
import { RestaurantsButtonComponent } from '../../../shared/buttons/restaurants-button/restaurants-button.component';
import { breakpointsData } from '../../data/breakpointsData';

@Component({
    selector: 'app-signature-dishes',
    standalone: true,
    templateUrl: './signature-dishes.component.html',
    styleUrl: './signature-dishes.component.scss',
    imports: [CommonModule, GenericCardComponent, RestaurantsButtonComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignatureDishesComponent {
  dishes = signatureDishesData;

  breakpoints = breakpointsData;
}
