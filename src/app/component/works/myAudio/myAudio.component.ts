import {Component, ViewEncapsulation,ElementRef} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";


@Component({
  selector: 'myAudio',
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./myAudio.scss')],
  template: require('./myAudio.html')
})
export class MyAudio {
/*
three-js的npm没成功，采用音频流的形式显示音频播放器
*/

  constructor(public ref:ElementRef) {
  }
  public musicStart(){
    this.ref.nativeElement.querySelector('audio').play();
  }
  public musicPause(){
    this.ref.nativeElement.querySelector('audio').pause();
  }
  public musicStop(){
      this.ref.nativeElement.querySelector('audio').load();
      this.ref.nativeElement.querySelector('audio').pause();
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
