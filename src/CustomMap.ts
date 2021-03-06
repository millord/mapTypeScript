import { User } from "./User";
import { Company } from "./Company";

// Instructions to every other class
// on how they can be an argument to 'addMarker

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(idDiv: string) {
    this.googleMap = new google.maps.Map(document.getElementById(idDiv), {
      zoom: 8,
      center: {
        lat: 18.9668848,
        lng: -70.9278466
      }
    });
  }
  addMaker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
