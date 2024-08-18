import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coin',
  standalone: true,
  imports: [],
  templateUrl: './coin.component.html',
  styleUrl: './coin.component.scss'
})
export class CoinComponent {
@Input({required: true}) price !: Number;
}
