import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { MapViewComponent } from './pages/restaurants/map-view/map-view.component';
import { AllRestaurantsComponent } from './pages/restaurants/all-restaurants/all-restaurants.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllRestaurantsComponent },
      { path: 'new', component: AllRestaurantsComponent },
      { path: 'most-popular', component: AllRestaurantsComponent },
      { path: 'open-now', component: AllRestaurantsComponent },
      { path: 'map-view', component: MapViewComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
