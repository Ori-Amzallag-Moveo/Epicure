import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { GenericCardComponent } from '../../../../shared/components/cards/generic-card/generic-card.component';
import { Restaurant } from '../../../models/Restaurant.model';
@Component({
  selector: 'app-all-restaurants',
  standalone: true,
  imports: [GenericCardComponent],
  templateUrl: './all-restaurants.component.html',
  styleUrl: './all-restaurants.component.scss'
})
export class AllRestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private restaurantsService: RestaurantsService) {}

  async ngOnInit() {
    this.restaurants = await this.restaurantsService.getRestaurants();
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
