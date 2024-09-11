import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private navbarVisible = new BehaviorSubject<boolean>(false);
  navbarVisible$ = this.navbarVisible.asObservable();

  toggleNavbar() {
    this.navbarVisible.next(!this.navbarVisible.value);
  }
}
