import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { MapViewComponent } from './pages/restaurants/map-view/map-view.component';
import { FilterRestaurantsComponent } from './pages/restaurants/filter-restaurants/filter-restaurants.component';
import { FilterChefsComponent } from './pages/chefs/filter-chefs/filter-chefs.component';
import { ChefsComponent } from './pages/chefs/chefs.component';
import { RestaurantPageComponent } from './pages/restaurants/restaurant-page/restaurant-page.component';
import { AuthGuard } from './auth/authGuard.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: '', component: HomepageComponent, canActivate: [AuthGuard]},
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    children: [
      { path: 'all', component: FilterRestaurantsComponent},
      { path: 'map-view', component: MapViewComponent},
    ],
    canActivate: [AuthGuard]
  },
  { path: 'restaurants/:id', component: RestaurantPageComponent, canActivate: [AuthGuard] },
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
