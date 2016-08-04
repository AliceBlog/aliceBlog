import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'log',
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./log.scss')],
  template: require('./log.html')
})
export class Log {

  constructor() {

  }

}
