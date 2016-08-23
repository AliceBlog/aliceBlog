import {Component, ViewEncapsulation,Output,EventEmitter} from '@angular/core';
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
  @Output() closeWindow = new EventEmitter<string>();
  public showComment:boolean=false;
  vote(agreed: string) {
      this.closeWindow.emit(agreed);
    }
  isFullScreen:boolean;

  constructor(public appService:AppService) {

  }
  fullScreen(){
    this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
  }

}
