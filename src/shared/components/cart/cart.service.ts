import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  private showCart = new BehaviorSubject<boolean>(false);
  showCart$ = this.showCart.asObservable();

  addToCart(item: any) {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, item]);
  }

  toggleCart() {
    this.showCart.next(!this.showCart.value);
  }
}
