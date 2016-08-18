import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'message',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./message.scss')],
  template: require('./message.html')
})
export class Message {

  constructor() {

  }

}
