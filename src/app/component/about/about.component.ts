import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'about',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./about.scss')],
  template: require('./about.html')
})
export class About {

  constructor() {

  }

}
