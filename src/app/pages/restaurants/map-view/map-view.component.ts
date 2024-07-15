import { Component, AfterViewInit } from '@angular/core';
import { restaurantsData } from '../../../data/restaurantsData';
import { GoogleMapsLoaderService } from './google-maps-loader.service';
import { PopularRestaurant } from '../../../models/popularRestaurants.model';

@Component({
  selector: 'app-map-view',
  standalone: true,
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements AfterViewInit {
  constructor(private googleMapsLoader: GoogleMapsLoaderService) {}

  ngAfterViewInit() {
    this.googleMapsLoader
      .load()
      .then(() => {
        this.initMap();
      })
      .catch((error) => {
        console.error('Error loading Google Maps API:', error);
      });
  }

  initMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 32.0853, lng: 34.7818 },
      zoom: 12,
    };

    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );

    if (map) {
      console.log('Map initialized successfully in Tel Aviv');
      this.addRestaurantMarkers(map);
    }
  }

  addRestaurantMarkers(map: google.maps.Map) {
    restaurantsData.forEach((restaurant: PopularRestaurant) => {
      if (restaurant.latitude && restaurant.longitude) {
        const marker = new google.maps.Marker({
          position: { lat: restaurant.latitude, lng: restaurant.longitude },
          map: map,
          title: restaurant.name,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div>
              <h3>${restaurant.name}</h3>
              <p>Chef: ${restaurant.chef}</p>
              <img src="${restaurant.rating}" alt="Rating" />
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }
    });
  }
}
