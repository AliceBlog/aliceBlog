import { Component, ViewEncapsulation } from '@angular/core';
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

    fullScreen() {
        this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
    }

}
