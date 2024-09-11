import { Component, Input } from '@angular/core';
import { GenericCardComponent } from '../generic-card/generic-card.component';
import { Dish } from '../../../../app/models/dish.model';
import { CoinComponent } from '../../coin/coin.component';

@Component({
  selector: 'app-dish-card',
  standalone: true,
  imports: [GenericCardComponent, CoinComponent],
  templateUrl: './dish-card.component.html',
  styleUrl: './dish-card.component.scss'
})
export class DishCardComponent {
  @Input({required: true}) dish!: Dish;
}
