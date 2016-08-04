import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

// import {PieChart} from './pieChart';
// import {TrafficChart} from './trafficChart';
// import {Feed} from './feed';
// import {Todo} from './todo';
// import {BaCard} from '../../theme/components';

@Component({
  selector: 'technology',
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./technology.scss')],
  template: require('./technology.html')
})
export class Technology {

  constructor() {

  }

}
