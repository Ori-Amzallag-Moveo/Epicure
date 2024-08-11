import { Component, OnInit } from '@angular/core';
import { FilterBarComponent } from '../../../shared/components/filter-bar/filter-bar.component';
import { CartComponent } from '../../../shared/components/cart/cart.component';
import { RouterModule, Router } from '@angular/router';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { CartService } from '../../../shared/components/cart/cart.service';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [FilterBarComponent, CartComponent, RouterModule],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.scss'
})
export class ChefsComponent {
  cartItems: any[] = [];
  cartIsEmpty: boolean = true;
  showCart: boolean = false;
  selectedFilter: string = 'All';

  filters: string[] = ['All', 'New', 'Most Viewed'];
  secondFilters: string[] = []

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
    this.router.navigate([`/chefs/${filterPath}`]);
  }

  private getFilterPath(filter: string): string {
    switch (filter) {
      case 'New':
        return 'new';
      case 'Most Viewed':
        return 'most-viewed';
      default:
        return 'all';
    }
  }

  redirectToAll() {
    this.router.navigate(['/chefs/all']);
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
