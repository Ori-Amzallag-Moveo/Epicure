import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { Restaurant } from '../../../models/Restaurant.model';
import { RestaurantQueryParams } from '../../../models/queries.model';
import { RestaurantsService } from '../restaurants.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filter-restaurants',
  standalone: true,
  imports: [GenericCardComponent, LoadingComponent, CommonModule],
  templateUrl: './filter-restaurants.component.html',
  styleUrls: ['./filter-restaurants.component.scss'],
})
export class FilterRestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];
  page: number = 1;
  limit: number = 10;
  isPopular: string = '';
  isNewRestaurant: string = '';
  isOpenNow: string = '';
  rating: string = ''; 
  distance: string= '';
  priceRange: string = '';

  isLoading: boolean = false;
  allRestaurantsLoaded: boolean = false;

  isButtonDisabled: boolean = false;
  delayTime: number = 2000;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.resetFilters(params);
      this.loadRestaurants();
    });
  }

  resetFilters(params: RestaurantQueryParams) {
    this.page = 1;
    this.limit = 10;
    this.isPopular = params['isPopular'] || '';
    this.isNewRestaurant = params['isNewRestaurant'] || '';
    this.isOpenNow = params['isOpenNow'] || '';
    this.rating = params['rating'] || ''; 
    this.distance = params['distance'] || '';
    this.priceRange = params['priceRange'] || '';
    this.allRestaurantsLoaded
    this.restaurants = [];
    this.allRestaurantsLoaded = false;
  }

  async loadRestaurants() {
    if (this.isLoading || this.allRestaurantsLoaded) return;

    this.isLoading = true;
    try {
      const newRestaurants = await this.restaurantsService.fetchRestaurants(
        this.page,
        this.limit,
        this.isPopular,
        this.isNewRestaurant,
        this.isOpenNow,
        this.rating,
        this.distance,
        this.priceRange,
      );
      this.restaurants = [...this.restaurants, ...newRestaurants];

      if (newRestaurants.length < this.limit) {
        this.allRestaurantsLoaded = true;
      } else {
        this.page++;
      }
    } catch (error) {
      console.error('Error loading restaurants:', error);
    } finally {
      this.isLoading = false;
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      this.loadRestaurants();
    }
  }

  ratingConverter(rating: number): string {
    if (rating >= 1 && rating <= 5) {
      return `assets/rating-icons/${rating}-stars-rating.svg`;
    }
    return '';
  }

  goToRestaurant(restaurantId: string) {
    this.restaurantsService.increaseClicks(restaurantId);
    this.isButtonDisabled = true;
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, this.delayTime);
    this.router.navigate([`/restaurants`, restaurantId]);
  }
}
