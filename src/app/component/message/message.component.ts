import { Component, ViewEncapsulation } from '@angular/core';
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

    fullScreen() {
        this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
    }

}
