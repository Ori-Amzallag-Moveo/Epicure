import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PopularRestaurantsComponent } from './popular-restaurants/popular-restaurants.component';
import { SignatureDishesComponent } from './signature-dishes/signature-dishes.component';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
import { IconMeaningComponent } from './icon-meaning/icon-meaning.component';
import { WeekChefComponent } from './week-chef/week-chef.component';
import { AboutComponent } from './about/about.component';
import { homepageData } from '../../models/HomepageData';
import { HomepageService } from './homepage.service';
import { LoginComponent } from '../../auth/login/login.component';

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
    LoginComponent
  ],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  homepageData: homepageData | null = null; 

  constructor(
    private homepageService: HomepageService
  ) {}

  async ngOnInit() {
    this.homepageData = await this.homepageService.fetchData();
  }
}
