import { Component } from '@angular/core';
import { FooterComponent } from '../../../app/footer/footer.component';
import { HeaderService } from '../../../app/header/header.service';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss',
  imports: [FooterComponent],
})
export class MobileNavbarComponent {
  constructor(private headerService: HeaderService) {}

  onClosing() {
    this.headerService.toggleNavbar();
  }
}
