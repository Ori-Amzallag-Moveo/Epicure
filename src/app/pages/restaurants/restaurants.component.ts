import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FilterBarComponent } from '../../../shared/components/filters/filter-bar/filter-bar.component';
import { RestaurantQueryParams } from '../../models/queries.model';
import { FilterRestaurantsComponent } from './filter-restaurants/filter-restaurants.component';
import { MapViewComponent } from './map-view/map-view.component';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [FilterBarComponent, FilterRestaurantsComponent, MapViewComponent, CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  
  selectedFilter: string = '';
  filters: string[] = ['All', 'New', 'Most Popular', 'Open Now', 'Map View'];
  secondFilters: string[] = ['Price Range', 'Distance', 'Rating'];
  filterBarFontSize!: number;
  userDistanceSelected!: number;
  userPriceRangeSelected!: number[];

  private smallScreenSize = 875;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.onFilterChange(this.selectedFilter);
    this.isSmallScreenSize();
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;

    const queryParams: RestaurantQueryParams = {};

    this.secondFilters = (filter === 'Map View') ? [] : ['Price Range', 'Distance', 'Rating'];

    switch (filter) {
      case 'All':
        this.router.navigate(['restaurants']);
        return;
      case 'New':
        queryParams.isNewRestaurant = 'true';
        break;
      case 'Most Popular':
        queryParams.isPopular = 'true';
        break;
      case 'Open Now':
        queryParams.isOpenNow = 'true';
        break;
      case 'Map View':
        this.router.navigate(['map-view'], { relativeTo: this.route });
        return;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }

  onRatingChange(selectedRatings: number[]) {
    const queryParams: RestaurantQueryParams = {};
    const sortedSelectedRatings = selectedRatings.sort();

    if (sortedSelectedRatings.length > 0) {
      queryParams.rating = sortedSelectedRatings.join(',');
    } else {
      queryParams.rating = undefined;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams,
    });
  }

  onDistanceChange(selectedDistance: number) {
    this.userDistanceSelected = selectedDistance;
    const queryParams: RestaurantQueryParams = {};
    queryParams.distance = selectedDistance.toString();

    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams,
    });
  }

  onPriceRangeChange(selectedPriceRange: number[]) {
    this.userPriceRangeSelected = selectedPriceRange;
    const queryParams: RestaurantQueryParams = {};
    queryParams.priceRange = selectedPriceRange.join(',');

    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams,
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isSmallScreenSize();
  }

  private isSmallScreenSize(): void {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= this.smallScreenSize) {
        this.filterBarFontSize = 16;
      } else {
        this.filterBarFontSize = 18;
      }
    }
  }
}
