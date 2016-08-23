import { Component, ViewEncapsulation,EventEmitter,Output} from '@angular/core';
import { AppService } from "../../app.service";

@Component({
    selector: 'sentiment',
    pipes: [],
    encapsulation: ViewEncapsulation.None,
    providers: [AppService],
    styles: [require('./sentiment.scss')],
    template: require('./sentiment.html')
})
export class Sentiment {

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
