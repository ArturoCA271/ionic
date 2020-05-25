import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
}
from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  lat;
  long;
  resp;
  map: GoogleMap;

  constructor(private plataforma: Platform, private Geo: Geolocation) {}
  
  async ngOnInit(){
    
    await this.plataforma.ready();
    await this.loadMapa();
    
    
  }


  loadMapa(){
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '',
      'API_KEY_FOR_BROWSER_DEBUG': ''
    });
    this.map = GoogleMaps.create('map_canvas');





      this.Geo.getCurrentPosition().then( (position) => {
          console.log(position);
          return(position);
        }
      );
      let watch = this.Geo.watchPosition();
      watch.subscribe((data) => {
        console.log(data);
        this.long = data.coords.latitude
        this.lat = data.coords.longitude
      });











    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.lat,
        lng: this.long
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });

  }








  
}
  

  



