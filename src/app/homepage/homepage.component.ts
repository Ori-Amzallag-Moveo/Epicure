import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroComponent,

  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
