import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private navbarVisible = new BehaviorSubject<boolean>(false);
  navbarVisible$ = this.navbarVisible.asObservable();

  constructor(private router: Router) {}

  toggleNavbar() {
    this.navbarVisible.next(!this.navbarVisible.value);
  }

  navigateToRestaurants() {
    this.router.navigate(['/restaurants']);
  }
}
