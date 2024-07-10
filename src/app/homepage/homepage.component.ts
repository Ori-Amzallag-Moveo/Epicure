import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PopularRestaurantsComponent } from './popular-restaurants/popular-restaurants.component';
import { PopularRestaurantsComponent } from './popular-restaurants/popular-restaurants.component';
import { SignatureDishesComponent } from './signature-dishes/signature-dishes.component';
import { GenericCardComponent } from '../../shared/components/cards/generic-card/generic-card.component';
import { IconMeaningComponent } from './icon-meaning/icon-meaning.component';
import { WeekChefComponent } from './week-chef/week-chef.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../../shared/components/cart/cart.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroComponent,
    PopularRestaurantsComponent,
    SignatureDishesComponent,
    GenericCardComponent,
    IconMeaningComponent,
    WeekChefComponent,
    AboutComponent,
    FooterComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  styleUrl: './homepage.component.scss',
})

export class HomepageComponent implements OnInit {
  cartItems: any[] = [];
  cartIsEmpty: boolean = true;
  showCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.cartIsEmpty = items.length === 0;
    });

    this.cartService.showCart$.subscribe(show => {
      this.showCart = show;
    });
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}