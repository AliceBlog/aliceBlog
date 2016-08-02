import {Component, ViewEncapsulation} from '@angular/core';

// import {PieChart} from './pieChart';
// import {TrafficChart} from './trafficChart';
// import {Feed} from './feed';
// import {Todo} from './todo';
// import {BaCard} from '../../theme/components';

@Component({
  selector: 'technical',
  pipes: [],
  // directives: [PieChart, TrafficChart, Feed, Todo, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./technical.scss')],
  template: require('./technical.html')
})
export class Technical {

  constructor() {

  }

}
