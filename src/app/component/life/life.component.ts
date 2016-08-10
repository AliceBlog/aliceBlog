import {Component, ViewEncapsulation} from '@angular/core';
import {Classification} from './classification';
import {PhotoShow} from "./photoShow"
@Component({
    selector: 'life',
    pipes: [],
    directives: [Classification, PhotoShow],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./life.scss')],
    template: require('./life.html')
})
export class Life {
  public showBigPhoto:boolean=false;
  public showPhotoLayer:boolean=false;

  imgDeal(url){
    let img=new Image();
    let style;
    img.src=url;
    if(img.width<img.height*1.6){
      style={"width":"60%"}
    }else{
      style={"height":"60%"}
    }
    return style;
  }
  onVoted(agreed: boolean) {
     this.showBigPhoto=agreed;

   }
   onShowPhoto(agreed: boolean){
     this.showPhotoLayer=agreed;
   }
}
