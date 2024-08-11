import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { CartComponent } from '../../../shared/components/cart/cart.component';
import { CartService } from '../../../shared/components/cart/cart.service';
@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [FilterBarComponent, GenericCardComponent, RouterModule, CartComponent],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit{
  cartItems: any[] = [];
  cartIsEmpty: boolean = true;
  showCart: boolean = false;
  selectedFilter: string = 'All';

  constructor(private router: Router, private cartService: CartService) {}

  async ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.cartIsEmpty = items.length === 0;
    });

    this.cartService.showCart$.subscribe(show => {
      this.showCart = show;
    });
    this.redirectToAll();
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;
    const filterPath = this.getFilterPath(filter);
    this.router.navigate([`/restaurants/${filterPath}`]);
  }

  private getFilterPath(filter: string): string {
    switch (filter) {
      case 'New':
        return 'new';
      case 'Most Popular':
        return 'most-popular';
      case 'Open Now':
        return 'open';
      case 'Map View':
        return 'map-view';
      default:
        return 'all';
    }
  }

  redirectToAll() {
    this.router.navigate(['/restaurants/all']);
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
