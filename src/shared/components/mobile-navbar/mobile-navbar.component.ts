import { Component } from '@angular/core';
import { FooterComponent } from '../../../app/footer/footer.component';
import { HeaderService } from '../../../app/header/header.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss',
  imports: [FooterComponent],
})
export class MobileNavbarComponent {
  constructor(private headerService: HeaderService, private router: Router) {}

  onClosing() {
    this.headerService.toggleNavbar();
  }

  navigateToRestaurants() {
    this.router.navigate(['/restaurants']);
    this.headerService.toggleNavbar();
  }
}
