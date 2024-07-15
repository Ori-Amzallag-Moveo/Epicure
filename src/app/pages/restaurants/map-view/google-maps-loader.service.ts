import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsLoaderService {
  private static promise: Promise<void>;

  load(): Promise<void> {
    if (!GoogleMapsLoaderService.promise) {
      GoogleMapsLoaderService.promise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0htViNj5m2v0IKN6v7gpKJfI0ICdvsw8`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject('Google Maps API failed to load');
        document.head.appendChild(script);
      });
    }
    return GoogleMapsLoaderService.promise;
  }
}
