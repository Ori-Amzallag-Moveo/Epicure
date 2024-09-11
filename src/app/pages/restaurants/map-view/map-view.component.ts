import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { Restaurant } from '../../../models/Restaurant.model';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-map-view',
  standalone: true,
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  imports: [GoogleMapsModule],
})
export class MapViewComponent implements OnInit {
  options: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
    center: { lat: 32.0853, lng: 34.7818 },
    zoom: 13,
  };
  markers: { position: google.maps.LatLngLiteral; name: string }[] = [];

  constructor (private restaurantsService: RestaurantsService) {}

  async ngOnInit() {
   await this.loadMarkers();
  }

  async loadMarkers() {
    const restaurants = await this.restaurantsService.fetchRestaurants(1,10000);
    this.markers = restaurants.map((restaurant: Restaurant) => ({
      position: {
        lat: restaurant.location.coordinates[1],
        lng: restaurant.location.coordinates[0],
      },
      name: restaurant.name,
    }));
  }
}
