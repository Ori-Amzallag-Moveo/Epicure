import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { isRestaurantOpen } from '../../../../helpers/isopen.helper';
import { DishCardComponent } from '../../../../shared/components/cards/dish-card/dish-card.component';
import { FilterBarComponent } from '../../../../shared/components/filters/filter-bar/filter-bar.component';
import { LoadingComponent } from "../../../../shared/components/loading/loading.component";
import { Restaurant } from '../../../models/Restaurant.model';
import { Dish } from '../../../models/dish.model';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [FilterBarComponent, DishCardComponent, LoadingComponent, CommonModule],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.scss',
})
export class RestaurantPageComponent implements OnInit {
  restaurant!: Restaurant;
  filters: string[] = ['All', 'Breakfast', 'Lunch', 'Dinner', 'AI'];
  selectedFilter: string = '';
  dishes: Dish[] = [];
  restaurantIsOpen: boolean | null = null;
  filterBarFontSize !: number;
  isLoading: boolean = false;

  private smallScreenSize = 875;
  private largeScreenSize = 1024;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
  ) {}

  async ngOnInit() {
    this.isSmallScreenSize();
    const restaurantId = this.route.snapshot.paramMap.get('id');

    if (!restaurantId) {
      console.error('No restaurant ID found in route');
      return;
    }
    await this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      replaceUrl: true,
    });
    await this.loadRestaurantData(restaurantId);
  }

  async loadRestaurantData(restaurantId: string) {

    this.route.queryParams.subscribe(async (params) => {
      const meal = params['meal'] || '';
      this.selectedFilter = meal
        ? meal.charAt(0).toUpperCase() + meal.slice(1)
        : '';
      try {
        this.isLoading = true;
        this.restaurant = await this.restaurantsService.getRestaurantById(
          restaurantId,
          meal
        );
        if (this.restaurant) {
          this.dishes = this.restaurant.dishes;
          this.restaurantIsOpen = isRestaurantOpen(this.restaurant);
        }
      } catch (error) {
        console.error('Error loading restaurant data:', error);
      } finally {
        this.isLoading = false;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isSmallScreenSize();
  }

  onFilterChange(filter: string) {
    if (filter === 'All') {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {}, 
      });
    } else {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { meal: filter.toLowerCase() }
      });
    }
  }

  private isSmallScreenSize(): void {
    const width = window.innerWidth;
    if (width < this.smallScreenSize) {  
      this.filterBarFontSize = 18;   
    } else if (width < this.largeScreenSize) {  
      this.filterBarFontSize = 20;  
    } else {
      this.filterBarFontSize = 24;  
    }
  }
}
