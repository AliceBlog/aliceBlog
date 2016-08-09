import {Component, ViewEncapsulation} from '@angular/core';
import {Classification} from './classification';
@Component({
  selector: 'life',
  pipes: [],
  directives: [Classification],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./life.scss')],
  template: require('./life.html')
})
export class Life {

  constructor() {

  }

}
