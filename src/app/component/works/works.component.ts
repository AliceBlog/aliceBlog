import {Component, ViewEncapsulation,Output,EventEmitter,ElementRef} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { MyAudio } from "./myAudio";

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
public musicPlay:boolean=false;
  constructor(public ref:ElementRef) {
  }
  @Output() closeWindow = new EventEmitter<string>();
  public showComment:boolean=false;
  vote(agreed: string) {
      this.closeWindow.emit(agreed);
    }
    public musicStart(src){
      this.ref.nativeElement.querySelector('audio').src=src;
      this.ref.nativeElement.querySelector('audio').play();
this.musicPlay=true;
    }

    public musicStop(){
        this.ref.nativeElement.querySelector('audio').load();
        this.ref.nativeElement.querySelector('audio').pause();
        this.musicPlay=false;
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
