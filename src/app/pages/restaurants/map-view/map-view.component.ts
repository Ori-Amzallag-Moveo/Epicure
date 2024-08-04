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

  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: 32.0853, lng: 34.7818 },
    zoom: 13,
  };
  markers: { position: google.maps.LatLngLiteral; name: string }[] = [];

  ngOnInit() {
    this.loadMarkers();
  }

  loadMarkers() {
    this.markers = restaurantsData.map((restaurant: PopularRestaurant) => ({
      position: { lat: restaurant.latitude, lng: restaurant.longitude },
      name: restaurant.name,
    }));
  }
  
}
