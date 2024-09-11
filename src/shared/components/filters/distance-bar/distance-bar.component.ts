import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-distance-bar',
  standalone: true,
  imports: [FormsModule, MatSliderModule],
  templateUrl: './distance-bar.component.html',
  styleUrl: './distance-bar.component.scss',
})
export class DistanceBarComponent implements OnInit{
  @Input({ required: true }) minValue!: number;
  @Input({ required: true }) maxValue!: number;
  @Input() userDistanceSelected !: number;
  @Input() selectedDistance: number = 4;
  @Output() distanceChange = new EventEmitter<number>(); 

  ngOnInit(): void {
    if (this.userDistanceSelected) {
      this.selectedDistance = this.userDistanceSelected;
    }
  }

  formatLabel(value: number): string {
    return value > 0 ? value + 'km' : `${value}`;
  }

  onDistanceChange(event: any) {
    const sliderValue = event.target.value; 
    this.selectedDistance = sliderValue;
    this.distanceChange.emit(sliderValue);
  }
}
