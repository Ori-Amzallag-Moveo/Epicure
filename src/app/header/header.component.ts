import { Component, NgModule, OnInit } from '@angular/core';
import { CartComponent } from '../../shared/components/cart/cart.component';
import { CartService } from '../../shared/components/cart/cart.service';
import { HeaderService } from './header.service';
import { MobileNavbarComponent } from '../../shared/components/mobile-navbar/mobile-navbar.component';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, MobileNavbarComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerTabs = ['Restaurants', 'Chefs'];
  toolbarIcons = [
    { name: 'search', imgsrc: 'assets/hero-logos/search.svg' },
    { name: 'client', imgsrc: 'assets/logos/navbar-logos/client.svg' },
    { name: 'bag', imgsrc: 'assets/logos/navbar-logos/bag.svg' },
  ];
  navBarMobile: boolean = false;
  selectedTab: typeof this.headerTabs[number] | '' = '';

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

  navigateTo(tab: typeof this.headerTabs[number]) {
    const routes: { [key in typeof this.headerTabs[number]]: string } = {
      Restaurants: '/restaurants',
    };
    this.router.navigate([routes[tab]]);
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
