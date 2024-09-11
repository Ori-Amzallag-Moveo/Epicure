import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../app/auth/auth.service';
import { FooterComponent } from '../../../app/footer/footer.component';
import { HeaderService } from '../../../app/header/header.service';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
  imports: [FooterComponent, CommonModule],
})
export class MobileNavbarComponent implements OnInit {
  navBarMobile: boolean = false;
  tabs: string[] = ['Contact Us', 'Terms of Use', 'Privacy Policy'];
  routes: { routeName: string; routeUrl: string }[] = [
    { routeName: 'Login / Register', routeUrl: 'login-register' },
    { routeName: 'Restaurants', routeUrl: 'restaurants' },
    { routeName: 'Chefs', routeUrl: 'chefs' },
  ];

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private authService: AuthService
  ) {
    this.headerService.navbarVisible$.subscribe((isVisible) => {
      this.navBarMobile = isVisible;
    });
  }
  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.routes[0] = {routeName: 'Logout', routeUrl: 'logout'}
    }
  }

  onToggle() {
    this.headerService.toggleNavbar();
  }

  navigateToTab(route: string) {
    if (route === 'logout') {
      this.routes[0] = { routeName: 'Login / Register', routeUrl: 'login-register' };
      this.authService.logout();
    } else if (route === 'login-register') {
      this.authService.setLoginMode('login');
      this.authService.setShowAuth(true);
      this.headerService.toggleNavbar();
    } else {
      this.router.navigate([`/${route}`]);
      this.headerService.toggleNavbar();
    }
  }
}
