import {Component, ViewEncapsulation,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'classification',
  pipes: [],
  // directives: [PhotoShow],
  encapsulation: ViewEncapsulation.Native,
  styles: [require('./classification.scss')],
  template: require('./classification.html')
})
export class Classification {

  @Output() onShowPhoto = new EventEmitter<boolean>();

  constructor() {

  }
  vote(agreed: boolean) {
    console.log("into")
   this.onShowPhoto.emit(agreed);
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
