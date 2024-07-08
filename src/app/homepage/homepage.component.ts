import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
<<<<<<< HEAD
import { PopularRestaurantsComponent } from './popular-restaurants/popular-restaurants.component';
=======

>>>>>>> ae16051 (homepage/hero component and searchbar component)

@Component({
  selector: 'app-homepage',
  standalone: true,
<<<<<<< HEAD
  imports: [HeroComponent, PopularRestaurantsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
=======
  imports: [
    HeroComponent,

  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
>>>>>>> ae16051 (homepage/hero component and searchbar component)
