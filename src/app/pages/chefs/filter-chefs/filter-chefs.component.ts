import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeekChefPictureComponent } from '../../../../shared/components/week-chef-picture/week-chef-picture.component';
import { Chef } from '../../../models/chef.model';
import { ChefsService } from '../chefs.service';

@Component({
  selector: 'app-filter-chefs',
  standalone: true,
  imports: [WeekChefPictureComponent],
  templateUrl: './filter-chefs.component.html',
  styleUrl: './filter-chefs.component.scss'
})
export class FilterChefsComponent implements OnInit {
  chefs: Chef[] = [];

  constructor(private chefsService: ChefsService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.url.subscribe(async (url) => {
      const path = url[0].path;
      switch (path) {
        case 'new':
          this.chefs = await this.chefsService.getNewChefs();
          break;
        case 'most-viewed':
          this.chefs = await this.chefsService.getMostViewedChefs();
          break;
        default:
          this.chefs = await this.chefsService.getChefs();
          break;
      }
    });
  }
}
