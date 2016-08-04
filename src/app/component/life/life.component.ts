import {Component, ViewEncapsulation} from '@angular/core';

// import {PieChart} from './pieChart';
// import {TrafficChart} from './trafficChart';
// import {Feed} from './feed';
// import {Todo} from './todo';
// import {BaCard} from '../../theme/components';

@Component({
  selector: 'life',
  pipes: [],
  // directives: [PieChart, TrafficChart, Feed, Todo, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./life.scss')],
  template: require('./life.html')
})
export class Life {

  constructor() {

  }

}
