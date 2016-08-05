import {Component, ViewEncapsulation} from '@angular/core';
import {Card} from './card';
import {Article} from './article';
@Component({
  selector: 'technology',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./technology.scss')],
  template: require('./technology.html'),
  directives: [Card,Article],

})
export class Technology {
public showArticle:boolean;
  constructor() {

  }
lookArticle(){
  this.showArticle=true;
}
onVoted(agreed: boolean) {
   this.showArticle=agreed;
 }
}
