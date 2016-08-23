import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'logList',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./logList.scss')],
  template: require('./logList.html')
})
export class LogList {

  constructor() {

  }
  imgDeal(url){
   let img=new Image();
   let style;
   img.src=url;
   if(img.width<img.height){
     style={"width":"100%"}
   }else{
     style={"height":"100%"}
   }
   return style;
 }
}
