import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'love',
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./love.scss')],
  template: require('./love.html')
})
export class Love {

  constructor() {

  }

}
