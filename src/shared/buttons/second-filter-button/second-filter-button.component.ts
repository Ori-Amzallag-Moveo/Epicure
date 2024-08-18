import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-filter-button',
  standalone: true,
  imports: [],
  templateUrl: './second-filter-button.component.html',
  styleUrl: './second-filter-button.component.scss'
})
export class SecondFilterButtonComponent {
  @Input({required: true}) secondFilterName !: string;
  @Input() selected: boolean = false; 
}
