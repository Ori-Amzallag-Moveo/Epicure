import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonComponent } from '../../../../shared/buttons/filter-button/filter-button.component';
import { SecondFilterButtonComponent } from '../../../../shared/buttons/second-filter-button/second-filter-button.component';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, FilterButtonComponent, SecondFilterButtonComponent],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  selectedFilter: string = 'All';
  filters: string[] = ['All', 'New', 'Most Popular', 'Open Now', 'Map View'];
  secondFilters: string[] = ['Price Range', 'Distance', 'Rating'];

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }
  
}
