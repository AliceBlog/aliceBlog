import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { BaiduMapComponent } from './../baidu'

@Component({
  selector: 'love',
  pipes: [],
  directives: [BaiduMapComponent,ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./love.scss')],
  template: require('./love.html')
})
export class Love {

  key:string = "ma3XxUkRwGTsCcRleaTVdSgl";

  constructor() {

  }

}
