import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { MapViewComponent } from './pages/restaurants/map-view/map-view.component';
import { FilterRestaurantsComponent } from './pages/restaurants/filter-restaurants/filter-restaurants.component';
import { FilterChefsComponent } from './pages/chefs/filter-chefs/filter-chefs.component';
import { ChefsComponent } from './pages/chefs/chefs.component';
import { RestaurantPageComponent } from './pages/restaurants/restaurant-page/restaurant-page.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    children: [
      { path: 'all', component: FilterRestaurantsComponent },
      { path: 'map-view', component: MapViewComponent },
    ],
  },
  { path: 'restaurants/:id', component: RestaurantPageComponent },
  {
    path: 'chefs',
    component: ChefsComponent,
    children: [
      { path: 'all', component: FilterChefsComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
