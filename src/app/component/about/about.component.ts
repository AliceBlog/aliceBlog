import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'about',
  pipes: [],
  providers:[AppService],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./about.scss')],
  template: require('./about.html')
})
export class About implements OnInit{


  isFullScreen:boolean;

  constructor(public appService:AppService) {

  }
  fullScreen(){
    this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
  }

  ngOnInit(): any {

  }


}
