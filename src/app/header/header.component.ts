import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerTabs = ['Restaurants', 'Chefs'];
  toolbarIcons = [
    { name: 'search', imgsrc: 'assets/hero-logos/search.svg' },
    { name: 'client', imgsrc: 'assets/logos/navbar-logos/client.svg' },
    { name: 'bag', imgsrc: 'assets/logos/navbar-logos/bag.svg' },
  ];
}
