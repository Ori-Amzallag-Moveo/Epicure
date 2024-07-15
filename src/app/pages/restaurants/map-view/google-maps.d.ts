declare namespace google.maps {
    // Add the necessary Google Maps types you are using
    // For example:
    interface Map {
      constructor(element: HTMLElement, options: MapOptions): Map;
    }
  
    interface MapOptions {
      center: LatLngLiteral;
      zoom: number;
    }
  
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  
    interface Marker {
      constructor(options: MarkerOptions): Marker;
      addListener(eventName: string, handler: Function): void;
    }
  
    interface MarkerOptions {
      position: LatLngLiteral;
      map: Map;
      title?: string;
    }
  
    interface InfoWindow {
      constructor(options?: InfoWindowOptions): InfoWindow;
      open(map?: Map, anchor?: Marker): void;
      setContent(content: string | Node): void;
    }
  
    interface InfoWindowOptions {
      content?: string | Node;
    }
  }
  