import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilterBarComponent } from '../../../shared/components/filters/filter-bar/filter-bar.component';
import { CartComponent } from '../../../shared/components/cart/cart.component';
import { CartService } from '../../../shared/components/cart/cart.service';
import { FilterRestaurantsComponent } from './filter-restaurants/filter-restaurants.component';
import { MapViewComponent } from './map-view/map-view.component';
import { RestaurantQueryParams } from '../../models/queries.model';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [
    FilterBarComponent,
    CartComponent,
    FilterRestaurantsComponent,
    MapViewComponent,
  ],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  cartIsEmpty: boolean = true;
  showCart: boolean = false;

  selectedFilter: string = '';
  filters: string[] = ['All', 'New', 'Most Popular', 'Open Now', 'Map View'];
  secondFilters: string[] = ['Price Range', 'Distance', 'Rating'];
  filterBarFontSize !: number;

  private smallScreenSize = 875;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartIsEmpty = items.length === 0;
    });

    this.cartService.showCart$.subscribe((show) => {
      this.showCart = show;
    });
    this.onFilterChange(this.selectedFilter);
    this.isSmallScreenSize();
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;

    const queryParams: RestaurantQueryParams = {};

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

  toggleCart() {
    this.cartService.toggleCart();
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
