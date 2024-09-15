import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/authGuard.service';
import { ChefsComponent } from './pages/chefs/chefs.component';
import { FilterChefsComponent } from './pages/chefs/filter-chefs/filter-chefs.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FilterRestaurantsComponent } from './pages/restaurants/filter-restaurants/filter-restaurants.component';
import { MapViewComponent } from './pages/restaurants/map-view/map-view.component';
import { RestaurantPageComponent } from './pages/restaurants/restaurant-page/restaurant-page.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent},
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    children: [
      { path: 'all', component: FilterRestaurantsComponent, canActivate: [AuthGuard]},
      { path: 'map-view', component: MapViewComponent, canActivate: [AuthGuard]},
    ],
    canActivate: [AuthGuard]
  },
  { path: 'restaurants/:id', component: RestaurantPageComponent, canActivate: [AuthGuard]},
  {
    path: 'chefs',
    component: ChefsComponent,
    children: [
      { path: 'all', component: FilterChefsComponent, canActivate: [AuthGuard] },
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
