import { Component, EventEmitter, Input, Output, model } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-rating-bar',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.scss'
})
export class RatingBarComponent {
  @Input() selectedRatings: number[] = []; 
  @Output() ratingChange = new EventEmitter<number[]>(); 

  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before' | 'after'>('after');

  onRatingChange(rating: number, checked: boolean) {
    if (checked) {
      this.selectedRatings.push(rating); 
    } else {
      const index = this.selectedRatings.indexOf(rating);
      if (index > -1) {
        this.selectedRatings.splice(index, 1); 
      }
    }
    this.ratingChange.emit(this.selectedRatings);
  }
  isChecked(rating: number): boolean {
    return this.selectedRatings.includes(rating); 
  }
}
