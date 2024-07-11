import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'restaurants', component: RestaurantsComponent }
];
