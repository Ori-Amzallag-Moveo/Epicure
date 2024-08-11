import { Component } from '@angular/core';
import { OrderHistoryButtonComponent } from '../../buttons/order-history-button/order-history-button.component';
import { CheckoutButtonComponent } from '../../buttons/checkout-button/checkout-button.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [OrderHistoryButtonComponent, CheckoutButtonComponent],
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
