import { Component } from '@angular/core';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
<<<<<<< HEAD
export class HeaderComponent {
  headerTabs = ['Restaurants', 'Chefs'];
  toolbarIcons = [
    { name: 'search', imgsrc: 'assets/hero-logos/search.svg' },
    { name: 'client', imgsrc: 'assets/logos/navbar-logos/client.svg' },
    { name: 'bag', imgsrc: 'assets/logos/navbar-logos/bag.svg' },
  ];
}
=======
export class HeaderComponent {}
>>>>>>> e96d977 (prettier)
