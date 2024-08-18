import { Component, Input, Output } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { CoinComponent } from '../../coin/coin.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-price-range',
  standalone: true,
  imports: [MatSliderModule, CoinComponent, FormsModule],
  templateUrl: './price-range.component.html',
  styleUrl: './price-range.component.scss'
})
export class PriceRangeComponent {
  @Input({required: true}) minValue !: number;
  @Input({required: true}) maxValue !: number;
}
