import { Component, ViewEncapsulation,Output,EventEmitter} from '@angular/core';
import { AppService } from "../../app.service";

@Component({
    selector: 'message',
    pipes: [],
    providers: [AppService],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./message.scss')],
    template: require('./message.html')
})
export class Message {

    isFullScreen: boolean;

    constructor(public appService: AppService) {

    }
    @Output() closeWindow = new EventEmitter<string>();
    public showComment:boolean=false;
    vote(agreed: string) {
        this.closeWindow.emit(agreed);
      }
    fullScreen() {
        this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
    }

}
