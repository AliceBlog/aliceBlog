import {Component, ViewEncapsulation} from '@angular/core';
import {Card} from './card';

@Component({
  selector: 'technology',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./technology.scss')],
  template: require('./technology.html'),
  directives: [Card],

})
export class Technology {

  constructor() {

  }

}
