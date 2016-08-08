import {Component, ViewEncapsulation,Input} from '@angular/core';

@Component({
  selector: 'card',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./card.scss')],
  template: require('./card.html')
})
export class Card {
  @Input() cardData;

  constructor() {

  }

}
