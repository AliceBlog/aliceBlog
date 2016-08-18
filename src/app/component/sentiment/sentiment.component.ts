import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'sentiment',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./sentiment.scss')],
  template: require('./sentiment.html')
})
export class Sentiment {

  constructor() {

  }

}
