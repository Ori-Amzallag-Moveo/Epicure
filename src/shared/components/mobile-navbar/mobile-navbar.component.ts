import { Component } from '@angular/core';
import { FooterComponent } from '../../../app/footer/footer.component';
import { HeaderService } from '../../../app/header/header.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
  imports: [FooterComponent, CommonModule],
})
export class MobileNavbarComponent {
  navBarMobile: boolean = false;
  routes: { routeName: string; routeUrl: string }[] = [
    { routeName: 'Restaurants', routeUrl: 'restaurants' },
    { routeName: 'Chefs', routeUrl: 'chefs' },
  ];

  constructor(private headerService: HeaderService, private router: Router) {
    this.headerService.navbarVisible$.subscribe((isVisible) => {
      this.navBarMobile = isVisible;
    });
  }

  onClosing() {
    this.headerService.toggleNavbar();
  }

  navigateToTab(route: string) {
    this.router.navigate([`/${route}`]);
    this.headerService.toggleNavbar();
  }
}
