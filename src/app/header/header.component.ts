import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../../shared/components/cart/cart.component';
import { CartService } from '../../shared/components/cart/cart.service';
import { HeaderService } from './header.service';
import { MobileNavbarComponent } from '../../shared/components/mobile-navbar/mobile-navbar.component';
import { Router, NavigationEnd, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, MobileNavbarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navBarMobile: boolean = false;
  selectedTab: string = '';

  constructor(
    private cartService: CartService,
    private headerService: HeaderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.headerService.navbarVisible$.subscribe((isVisible) => {
      this.navBarMobile = isVisible;
    });

    this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.setActiveTab(event.urlAfterRedirects);
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
  
  navigateToHomepage() {
    this.router.navigate(['/']);
  }

  private setActiveTab(url: string) {
    if (url.startsWith('/restaurants')) {
      this.selectedTab = 'Restaurants';
    } else {
      this.selectedTab = '';
    }
  }
}
