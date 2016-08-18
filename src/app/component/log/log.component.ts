import {Component, ViewEncapsulation} from '@angular/core';
import {LogList} from "./logList"
@Component({
  selector: 'log',
  pipes: [],
  directives: [LogList],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./log.scss')],
  template: require('./log.html')
})
export class Log {

  constructor() {

  }

}
