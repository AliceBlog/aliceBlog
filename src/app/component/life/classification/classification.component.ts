import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'classification',
  pipes: [],
  // directives: [PieChart, TrafficChart, Feed, Todo, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./classification.scss')],
  template: require('./classification.html')
})
export class Classification {

  constructor() {

  }

}
