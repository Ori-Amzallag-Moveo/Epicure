import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { MobileNavbarComponent } from '../../shared/components/mobile-navbar/mobile-navbar.component';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MobileNavbarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerTabs: string[] = ['Restaurants', 'Chefs'];
  toolbarIcons: { name: string; imgsrc: string }[] = [
    { name: 'search', imgsrc: 'assets/hero-logos/search.svg' },
    { name: 'client', imgsrc: 'assets/logos/navbar-logos/client.svg' },
    { name: 'bag', imgsrc: 'assets/logos/navbar-logos/bag.svg' },
  ];
  navBarMobile: boolean = false;
  selectedTab: (typeof this.headerTabs)[number] | '' = '';

  constructor(
    private headerService: HeaderService,
    private router: Router,
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

  onToggleNavbar() {
    this.headerService.toggleNavbar();
  }

  navigateTo(tabOrHome: (typeof this.headerTabs)[number] | 'Homepage') {
    const routes: {
      [key in (typeof this.headerTabs)[number] | 'Homepage']: string;
    } = {
      Restaurants: '/restaurants',
      Chefs: '/chefs',
      Homepage: '/',
    };
    this.router.navigate([routes[tabOrHome]]);
  }

  private setActiveTab(url: string) {
    if (url.startsWith('/restaurants')) {
      this.selectedTab = 'Restaurants';
    } else if (url.startsWith('/chefs')) {
      this.selectedTab = 'Chefs';
    } else {
      this.selectedTab = '';
    }
  }
}
