import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilterBarComponent } from '../../../../shared/components/filters/filter-bar/filter-bar.component';
import { Dish } from '../../../models/dish.model';
import { DishCardComponent } from '../../../../shared/components/cards/dish-card/dish-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../../../models/Restaurant.model';
import { isRestaurantOpen } from '../../../../helpers/isopen.helper';

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [FilterBarComponent, DishCardComponent],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.scss',
})
export class RestaurantPageComponent implements OnInit {
  restaurant!: Restaurant;
  filters: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  selectedFilter: string = '';
  dishes: Dish[] = [];
  restaurantIsOpen: boolean | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) {}

  async ngOnInit() {
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
      }
    });
  }

  onFilterChange(filter: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { meal: filter.toLowerCase() },
    });
  }
}
