import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
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
    LoginComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  constructor(public authService: AuthService, public router: Router) {}
  isLogin: string = 'login';
  showAuth: boolean = true;

  ngOnInit() {
    this.authService.showAuth$.subscribe((show) => {
      this.showAuth = show;
    });

    this.authService.isLoginMode$.subscribe((mode) => {
      this.isLogin = mode;
    });
  }
}
