import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../../shared/components/cart/cart.component';
import { CartService } from '../../shared/components/cart/cart.service';
import { HeaderService } from './header.service';
import { MobileNavbarComponent } from '../../shared/components/mobile-navbar/mobile-navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, MobileNavbarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navBarMobile: boolean = false;

  constructor(
    private cartService: CartService,
    private headerService: HeaderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.headerService.navbarVisible$.subscribe((isVisible) => {
      this.navBarMobile = isVisible;
    });
  }

  onToggleCart() {
    this.cartService.toggleCart();
  }

  onToggleNavbar() {
    this.headerService.toggleNavbar();
  }

  navigateToRestaurants() {
    this.router.navigate(['/restaurants']);
  }
}
