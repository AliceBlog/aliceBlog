import {Component, ViewEncapsulation} from '@angular/core';
import {LogList} from "./logList"
import { AppService } from "../../app.service";
@Component({
  selector: 'log',
  pipes: [],
  directives: [LogList],
  providers:[AppService],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./log.scss')],
  template: require('./log.html')
})
export class Log {

  isFullScreen:boolean;

  constructor(public appService:AppService) {

  }
  fullScreen(){
    this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
  }

}
