import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    RestaurantsComponent,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isLoginVisible: boolean = false; 
  isRegisterVisible: boolean = false;

  showLogin() {
    this.isLoginVisible = true;
  }

  showRegister() {
    this.isRegisterVisible = true;
  }

  hideModals() {
    this.isLoginVisible = false;
    this.isRegisterVisible = false;
  }
}
