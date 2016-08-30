import { Component, ViewEncapsulation, OnInit,Output,EventEmitter } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'chat',
  pipes: [],
  providers:[AppService],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./chat.scss')],
  template: require('./chat.html')
})
export class Chat implements OnInit{


  isFullScreen:boolean;

  constructor(public appService:AppService) {

  }
  @Output() closeWindow = new EventEmitter<string>();
  public showComment:boolean=false;
  vote(agreed: string) {
      this.closeWindow.emit(agreed);
    }
  fullScreen(){
    this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
  }

  ngOnInit(): any {

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
