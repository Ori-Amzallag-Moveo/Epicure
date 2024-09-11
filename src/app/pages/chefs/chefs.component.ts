import { Component, OnInit } from '@angular/core';
import { FilterBarComponent } from '../../../shared/components/filters/filter-bar/filter-bar.component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FilterChefsComponent } from './filter-chefs/filter-chefs.component';
import { ChefQueryParams } from '../../models/queries.model';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [
    FilterBarComponent,
    RouterModule,
    FilterChefsComponent,
  ],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.scss',
})
export class ChefsComponent implements OnInit{
  selectedFilter: string = '';
  filters: string[] = ['All', 'New', 'Most Viewed'];
  secondFilters: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.onFilterChange(this.selectedFilter);
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;

    const queryParams: ChefQueryParams = {};

    switch (filter) {
      case 'All':
        this.router.navigate(['chefs']);
        return; 
      case 'New':
        queryParams.isNewChef = 'true';
        break;
      case 'Most Viewed':
        queryParams.isMostViewedChef = 'true';
        break;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }
}
