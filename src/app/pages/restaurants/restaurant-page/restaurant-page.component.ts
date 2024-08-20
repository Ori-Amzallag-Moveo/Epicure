import { Component, Input } from '@angular/core';
import { FilterBarComponent } from '../../../../shared/components/filters/filter-bar/filter-bar.component';
import { Dish } from '../../../models/dish.model';
import { DishCardComponent } from '../../../../shared/components/cards/dish-card/dish-card.component';
import { CartService } from '../../../../shared/components/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../../../models/Restaurant.model';

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [FilterBarComponent, DishCardComponent],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.scss',
})
export class RestaurantPageComponent {
  restaurant!: Restaurant;
  filters: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  selectedFilter: string = 'Breakfast';
  dishes: Dish[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private restaurantsService: RestaurantsService
  ) {}

  async ngOnInit() {
    const restaurantId = this.route.snapshot.paramMap.get('id');

    this.loadRestaurant(restaurantId);

    this.onFilterChange(this.selectedFilter);

    this.dishes = await this.restaurantsService.getDishes();
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;

    const queryParams: any = {};

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }

  async loadRestaurant(id: string | null) {
    if (id) {
      this.restaurant = await this.restaurantsService.getRestaurantById(id);
    }
  }
}
