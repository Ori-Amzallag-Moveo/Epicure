import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { Restaurant } from '../../../models/Restaurant.model';
@Component({
  selector: 'app-all-restaurants',
  standalone: true,
  imports: [GenericCardComponent],
  templateUrl: './filter-restaurants.component.html',
  styleUrl: './filter-restaurants.component.scss'
})
export class FilterRestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.url.subscribe(async (url) => {
      const path = url[0].path;
      switch (path) {
        case 'new':
          this.restaurants = await this.restaurantsService.getNewRestaurants();
          break;
        case 'open':
          this.restaurants = await this.restaurantsService.getOpenRestaurants();
          break;
        case 'popular':
          this.restaurants = await this.restaurantsService.getPopularRestaurants();
          break;
        default:
          this.restaurants = await this.restaurantsService.getRestaurants();
          break;
      }
    });
  }

  ratingConverter(rating: number): string {
    switch (rating) {
      case 1:
        return 'assets/rating-icons/1-stars-rating.svg';
      case 2:
        return 'assets/rating-icons/2-stars-rating.svg';
      case 3:
        return 'assets/rating-icons/3-stars-rating.svg';
      case 4:
        return 'assets/rating-icons/4-stars-rating.svg';
      case 5:
        return 'assets/rating-icons/5-stars-rating.svg';
      default:
        return '';
    }
  }
}
