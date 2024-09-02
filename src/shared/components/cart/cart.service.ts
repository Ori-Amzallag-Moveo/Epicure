import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../../app/models/queries.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  private showCart = new BehaviorSubject<boolean>(false);
  showCart$ = this.showCart.asObservable();

  addToCart(item: CartItem) {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, item]);
  }

  toggleCart() {
    this.showCart.next(!this.showCart.value);
  }
}
