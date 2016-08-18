import {Component, ViewEncapsulation,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'photoShow',
  pipes: [],
  encapsulation: ViewEncapsulation.Native,
  styles: [require('./photoShow.scss')],
  template: require('./photoShow.html')
})
export class PhotoShow {
  @Input() number;
  @Output() onVoted = new EventEmitter<boolean>();

  constructor() {

  }
  vote(agreed: boolean) {
   this.onVoted.emit(agreed);
 }
imgDeal(url){
  let img=new Image();
  let style;
  img.src=url;
  if(img.width<img.height*1.2){
    style={"width":"100%"}
  }else{
    style={"height":"100%"}
  }
  return style;
}
}
