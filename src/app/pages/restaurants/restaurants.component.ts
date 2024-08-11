import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { GenericCardComponent } from '../../../shared/components/cards/generic-card/generic-card.component';
@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [FilterBarComponent, GenericCardComponent, RouterModule],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit{
  selectedFilter: string = 'All';

  constructor(private router: Router) {}

  async ngOnInit() {
    this.redirectToAll();
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;
    const filterPath = this.getFilterPath(filter);
    this.router.navigate([`/restaurants/${filterPath}`]);
  }

  private getFilterPath(filter: string): string {
    switch (filter) {
      case 'New':
        return 'new';
      case 'Most Popular':
        return 'most-popular';
      case 'Open Now':
        return 'open';
      case 'Map View':
        return 'map-view';
      default:
        return 'all';
    }
  }

  redirectToAll() {
    this.router.navigate(['/restaurants/all']);
  }
}
