import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PopularRestaurantsComponent } from './popular-restaurants/popular-restaurants.component';
import { SignatureDishesComponent } from './signature-dishes/signature-dishes.component';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { IconMeaningComponent } from './icon-meaning/icon-meaning.component';
import { WeekChefComponent } from './week-chef/week-chef.component';
import { AboutComponent } from './about/about.component';
import { CartService } from '../../../shared/components/cart/cart.service';
import { CartComponent } from '../../../shared/components/cart/cart.component';
import { homepageData } from '../../models/HomepageData';
import { HomepageService } from './homepage.service';

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
    CartComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  cartIsEmpty: boolean = true;
  showCart: boolean = false;
  homepageData: homepageData | null = null; 

  constructor(
    private cartService: CartService,
    private homepageService: HomepageService
  ) {}

  async ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartIsEmpty = items.length === 0;
    });

    this.cartService.showCart$.subscribe((show) => {
      this.showCart = show;
    });

    this.homepageData = await this.homepageService.fetchData();
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
