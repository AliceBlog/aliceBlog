import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import {MyAudio} from "./myAudio"

@Component({
  selector: 'works',
  directives: [ROUTER_DIRECTIVES,MyAudio],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./works.scss')],
  template: require('./works.html')
})
export class Works {

/*
three-js的npm没成功，采用音频流的形式显示音频播放器
*/
  constructor() {
  }
  public imgDeal(url){
     let img=new Image();
     let style;
     img.src=url;
     if(img.width<img.height*1.4){
       style={"width":"100%"}
     }else{
       style={"height":"100%"}
     }
     return style;
   }
}
