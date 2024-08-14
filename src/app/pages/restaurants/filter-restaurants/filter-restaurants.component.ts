import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { Restaurant } from '../../../models/Restaurant.model';

@Component({
  selector: 'app-filter-restaurants',
  standalone: true,
  imports: [GenericCardComponent],
  templateUrl: './filter-restaurants.component.html',
  styleUrls: ['./filter-restaurants.component.scss']
})
export class FilterRestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      const isPopular = params['isPopular'];
      const isNewRestaurant = params['isNewRestaurant'];
      const isOpenNow = params['isOpenNow'];

      this.restaurants = await this.restaurantsService.fetchRestaurants(
        isPopular,
        isNewRestaurant,
        isOpenNow
      );
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
