import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeekChefPictureComponent } from '../../../../shared/components/week-chef-picture/week-chef-picture.component';
import { Chef } from '../../../models/chef.model';
import { ChefsService } from '../chefs.service';
import { ChefQueryParams } from '../../../models/queries.model';

@Component({
  selector: 'app-filter-chefs',
  standalone: true,
  imports: [WeekChefPictureComponent],
  templateUrl: './filter-chefs.component.html',
  styleUrls: ['./filter-chefs.component.scss'] 
})
export class FilterChefsComponent implements OnInit {
  chefs: Chef[] = [];
  page: number = 1;
  limit: number = 10;
  isNewChef: string = '';
  isMostViewedChef: string = '';
  isLoading: boolean = false;
  allChefsLoaded: boolean = false;

  constructor(private chefsService: ChefsService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.resetFilters(params); 
      this.loadChefs(); 
    });
  }

  resetFilters(params: ChefQueryParams) {
    this.page = 1;
    this.limit = 10;
    this.isNewChef = params['isNewChef'] || '';
    this.isMostViewedChef = params['isMostViewedChef'] || '';
    this.chefs = [];
    this.allChefsLoaded = false; 
  }

  async loadChefs() {
    if (this.isLoading || this.allChefsLoaded) return; 

    this.isLoading = true;
    try {
      const newChefs = await this.chefsService.fetchChefs(
        this.page,
        this.limit,
        this.isNewChef,
        this.isMostViewedChef,
      );
      this.chefs = [...this.chefs, ...newChefs]; 


      if (newChefs.length < this.limit) {
        this.allChefsLoaded = true;
      } else {
        this.page++; 
      }
    } catch (error) {
      console.error('Error loading chefs:', error);
    } finally {
      this.isLoading = false;
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      this.loadChefs();
    }
  }
}
