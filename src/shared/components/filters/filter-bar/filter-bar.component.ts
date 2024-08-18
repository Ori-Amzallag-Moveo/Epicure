import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonComponent } from '../../../buttons/filter-button/filter-button.component';
import { SecondFilterButtonComponent } from '../../../buttons/second-filter-button/second-filter-button.component';
import { PriceRangeComponent } from '../price-range/price-range.component';
import { DistanceBarComponent } from '../distance-bar/distance-bar.component';
import { RatingBarComponent } from "../rating-bar/rating-bar.component";

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [
    CommonModule,
    FilterButtonComponent,
    SecondFilterButtonComponent,
    PriceRangeComponent,
    DistanceBarComponent,
    RatingBarComponent
],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  selectedFilter: string = 'All';
  secondFilterSelected: string = '';
  isPriceRangeVisible: boolean = false;

  @Input() pageName!: string;
  @Input({ required: true }) tabsNames: string[] = [];
  @Input() secondTabsNames: string[] = [];
  @Output() filterChange = new EventEmitter<string>();
  @Output() secondFilterChange = new EventEmitter<string>();

  setFilter(filter: string) {
    this.selectedFilter = filter;
    this.filterChange.emit(filter);
  }

  onFilterButtonClick(filter: string) {
    this.setFilter(filter);
  }

  onSecondFilterButtonClick(secondFilter: string) {
    if (secondFilter === this.secondFilterSelected) {
      this.secondFilterSelected = '';
    } else {
      this.secondFilterSelected = secondFilter;
      this.secondFilterChange.emit(secondFilter);
    }
  }
}
