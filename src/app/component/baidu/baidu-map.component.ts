import { Component, OnInit, Input } from "@angular/core";
import { BaiduMap, OfflineOptions, ControlAnchor, NavigationControlType } from "angular2-baidu-map";

@Component({
  selector: 'baidu-map',
  template: `<baidu-map ak="{{key}}" [options]="opts" [offline]="offlineOpts" (onMapLoaded)="loadMap($event)" (onMarkerClicked)="clickMarker($event)"></baidu-map> `,
  styles: [require('./baidu-map.scss')],
  directives: [BaiduMap]
})
export class BaiduMapComponent implements OnInit {

  @Input() key:string;


  opts: any;
  offlineOpts: OfflineOptions;

  ngOnInit() {
    this.opts = {
      center: {
        longitude: 121.506191,
        latitude: 31.245554
      },
      zoom: 17,
      markers: [{
        longitude: 121.506191,
        latitude: 31.245554,
        title: 'Where',
        content: 'Put description here'
      }],
      geolocationCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
      },
      scaleCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
      },
      overviewCtrl: {
        isOpen: true
      },
      navCtrl: {
        type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
      }
    };

    this.offlineOpts = {
      retryInterval: 5000,
      txt: 'NO-NETWORK'
    };
    console.log(this.key)
  }

  loadMap(map: any) {
    console.log('map instance here', map);
  }

  clickMarker(marker: any){
    console.log('The clicked marker is', marker);
  }
}
