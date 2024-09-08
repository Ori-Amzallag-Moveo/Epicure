import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    RestaurantsComponent,
    LoginComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isLoginVisible: boolean = true; // Set to true by default to show login

  // This method would be called when the user successfully logs in
  onLoginSuccess() {
    this.isLoginVisible = false; // Hide the login modal
  }
}
