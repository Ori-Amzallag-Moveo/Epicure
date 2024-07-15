import { Component, OnInit } from '@angular/core';
import { restaurantsData } from '../../../data/restaurantsData';

@Component({
  selector: 'app-map-view',
  standalone: true,
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 32.0853, lng: 34.7818 };
  zoom = 12;
  markerPositions: google.maps.LatLngLiteral[] = [];

  ngOnInit() {
    this.loadMarkers();
  }

  loadMarkers() {
    this.markerPositions = restaurantsData.map(restaurant => ({
      lat: restaurant.latitude,
      lng: restaurant.longitude,
    }));
  }
}
