import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-distance-bar',
  standalone: true,
  imports: [FormsModule, MatSliderModule],
  templateUrl: './distance-bar.component.html',
  styleUrl: './distance-bar.component.scss',
})
export class DistanceBarComponent {
  @Input({ required: true }) minValue!: number;
  @Input({ required: true }) maxValue!: number;
  formatLabel(value: number): string {
    if (value > 0) {
      return value + 'km';
    }
    return `${value}`;
  }
}
