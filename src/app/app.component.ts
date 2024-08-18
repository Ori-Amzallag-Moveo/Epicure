import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    RestaurantsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
