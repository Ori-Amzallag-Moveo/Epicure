import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-button',
  standalone: true,
  imports: [],
  templateUrl: './restaurants-button.component.html',
  styleUrl: './restaurants-button.component.scss',
})
export class RestaurantsButtonComponent {
  constructor(private router: Router) {}

  @Input({ required: true }) buttonName!: string;
  @Input({ required: true }) url!: string;

  navigateToUrl() {
    this.router.navigate([this.url]);
  }
}
