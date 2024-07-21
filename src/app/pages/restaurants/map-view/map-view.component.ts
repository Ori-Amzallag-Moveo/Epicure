import { Component, OnInit } from '@angular/core';
import { restaurantsData } from '../../../data/restaurantsData';
import { GoogleMapsModule } from '@angular/google-maps';
import { PopularRestaurant } from '../../../models/popularRestaurants.model';


@Component({
  selector: 'app-map-view',
  standalone: true,
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
  imports: [GoogleMapsModule],
})
export class MapViewComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 32.0853, lng: 34.7818 };
  zoom = 12;
  markerPositions: google.maps.LatLngLiteral[] = [];

  ngOnInit() {
    this.loadMarkers();
  }

  loadMarkers() {
    this.markerPositions = restaurantsData.map((restaurant : PopularRestaurant) => ({
      lat: restaurant.latitude,
      lng: restaurant.longitude,
    }));
  }
}
