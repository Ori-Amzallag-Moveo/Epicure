import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PopularRestaurantsComponent } from "./popular-restaurants/popular-restaurants.component";



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroComponent,
    PopularRestaurantsComponent,

  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
