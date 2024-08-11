import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonComponent } from '../../buttons/filter-button/filter-button.component';
import { SecondFilterButtonComponent } from '../../buttons/second-filter-button/second-filter-button.component';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, FilterButtonComponent, SecondFilterButtonComponent],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  selectedFilter: string = 'All';
  
  @Input() pageName !: string;
  @Input({ required: true }) tabsNames: string[] = [];
  @Input() secondTabsNames: string[] = [];
  @Output() filterChange = new EventEmitter<string>();

  setFilter(filter: string) {
    this.selectedFilter = filter;
    this.filterChange.emit(filter);
  }

  onFilterButtonClick(filter: string) {
    this.setFilter(filter);
  }

  trackByFn(index: number, item: string): string {
    return item;
  }
}
