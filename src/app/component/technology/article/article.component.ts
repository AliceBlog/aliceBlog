import { Component, ViewEncapsulation, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'articleText',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./article.scss')],
  template: require('./article.html')
})
export class Article {

  constructor() {

  }
@Input() hero;
@Output() onVoted = new EventEmitter<boolean>();
vote(agreed: boolean) {
  console.log("into");
    this.onVoted.emit(agreed);
  }
}
