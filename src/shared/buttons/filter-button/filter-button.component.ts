import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
})
export class FilterButtonComponent {
  @Input() filter: string = '';
  @Input() selectedFilter: string = '';
  @Input() fontSize: number = 18;
  @Output() onFilterChange: EventEmitter<string> = new EventEmitter<string>();

  setFilter() {
    this.onFilterChange.emit(this.filter);
  }

  getFilterClass(): string {
    return this.filter.toLowerCase().replace(' ', '-');
  }
}
