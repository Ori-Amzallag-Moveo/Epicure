import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss'],
})
export class CartButtonComponent {
  @Input({ required: true }) buttonName!: string;
  @Input() backgroundColor: string = 'black'; 
  @Input() fontColor: string = 'white';      
}
