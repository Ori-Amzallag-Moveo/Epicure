import { Component, model } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-rating-bar',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.scss'
})
export class RatingBarComponent {
  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before' | 'after'>('after');
}
