import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CoinComponent } from '../../coin/coin.component';
@Component({
  selector: 'app-price-range',
  standalone: true,
  imports: [MatSliderModule, CoinComponent, FormsModule],
  templateUrl: './price-range.component.html',
  styleUrl: './price-range.component.scss'
})
export class PriceRangeComponent implements OnInit{

  @Input({required: true}) minValue : number = 0;
  @Input({required: true}) maxValue : number = 150;
  @Input() userPriceRangeSelected !: number[];
  @Output() priceRangeChange = new EventEmitter<number[]>(); 

  ngOnInit(): void {
    if (this.userPriceRangeSelected) {
      [this.minValue, this.maxValue] = this.userPriceRangeSelected;
    }
  }

  onSliderChange() {
    this.priceRangeChange.emit([this.minValue, this.maxValue]);
  }
}
