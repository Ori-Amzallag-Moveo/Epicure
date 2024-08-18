import { Component } from '@angular/core';
import { CartButtonComponent } from '../../buttons/cart-button/cart-button.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [CartButtonComponent],
})
export class CartComponent {
  cartIsEmpty = true;
  cartItems = [];

  emptyCart() {
    this.cartItems = [];
  }

  viewOrderHistory() {
    alert('view order history');
  }
}
