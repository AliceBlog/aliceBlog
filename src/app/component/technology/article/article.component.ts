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
public showComment:boolean=false;
vote(agreed: boolean) {
    this.onVoted.emit(agreed);
  }
  conmmentShow(){
    this.showComment=true;
  }
  commentOk(){
    this.showComment=false;
  }
  commentCancel(){
    this.showComment=false;
  }
}
