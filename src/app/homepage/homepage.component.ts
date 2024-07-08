import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PopularRestaurantsComponent } from "./popular-restaurants/popular-restaurants.component";
import { SignatureDishesComponent } from './signature-dishes/signature-dishes.component';
import { GenericCardComponent } from '../../shared/components/cards/generic-card/generic-card.component';
import { IconMeaningComponent } from './icon-meaning/icon-meaning.component';



@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroComponent,
    PopularRestaurantsComponent,
    SignatureDishesComponent,
    GenericCardComponent,
    IconMeaningComponent,

  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
