import { Component, OnInit } from '@angular/core';
import { FilterBarComponent } from '../../../shared/components/filters/filter-bar/filter-bar.component';
import { CartComponent } from '../../../shared/components/cart/cart.component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { CartService } from '../../../shared/components/cart/cart.service';
import { FilterChefsComponent } from './filter-chefs/filter-chefs.component';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [
    FilterBarComponent,
    CartComponent,
    RouterModule,
    FilterChefsComponent,
  ],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.scss',
})
export class ChefsComponent {
  cartIsEmpty: boolean = true;
  showCart: boolean = false;
  selectedFilter: string = 'All';

  filters: string[] = ['All', 'New', 'Most Viewed'];
  secondFilters: string[] = [];

  constructor(
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartIsEmpty = items.length === 0;
    });

    this.cartService.showCart$.subscribe((show) => {
      this.showCart = show;
    });
    
    this.onFilterChange(this.selectedFilter);
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;

    const queryParams: any = {};

    switch (filter) {
      case 'All':
        this.router.navigate(['all'], { relativeTo: this.route });
        return; 
      case 'New':
        queryParams.isNewChef = 'true';
        break;
      case 'Most Viewed':
        queryParams.isMostViewedChef = 'true';
        break;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
