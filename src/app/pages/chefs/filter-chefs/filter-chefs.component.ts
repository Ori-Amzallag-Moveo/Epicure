import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeekChefPictureComponent } from '../../../../shared/components/week-chef-picture/week-chef-picture.component';
import { Chef } from '../../../models/chef.model';
import { ChefsService } from '../chefs.service';

@Component({
  selector: 'app-filter-chefs',
  standalone: true,
  imports: [WeekChefPictureComponent],
  templateUrl: './filter-chefs.component.html',
  styleUrls: ['./filter-chefs.component.scss'] // Correct property name
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
      this.resetFilters(params); // Reset filters and load data
      this.loadChefs(); // Initial load of chefs
    });
  }

  resetFilters(params: any) {
    this.page = 1;
    this.limit = 10;
    this.isNewChef = params['isNewChef'] || '';
    this.isMostViewedChef = params['isMostViewedChef'] || '';
    this.chefs = [];
    this.allChefsLoaded = false; // Reset all chefs loaded flag
  }

  async loadChefs() {
    if (this.isLoading || this.allChefsLoaded) return; // Prevent duplicate or unnecessary loading

    this.isLoading = true;
    try {
      const newChefs = await this.chefsService.fetchChefs(
        this.page,
        this.limit,
        this.isNewChef,
        this.isMostViewedChef,
      );
      this.chefs = [...this.chefs, ...newChefs]; // Append new chefs

      // If fewer chefs were returned than the limit, it means no more chefs to load
      if (newChefs.length < this.limit) {
        this.allChefsLoaded = true;
      } else {
        this.page++; // Increment page for the next load
      }
    } catch (error) {
      console.error('Error loading chefs:', error);
    } finally {
      this.isLoading = false;
    }
  }

  // Scroll event listener to trigger loading when reaching the bottom of the page
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If the user has scrolled to the bottom, load more chefs
    if (scrollTop + windowHeight >= documentHeight) {
      this.loadChefs();
    }
  }
}
