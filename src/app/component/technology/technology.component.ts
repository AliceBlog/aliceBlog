import { Component,
   ViewEncapsulation,
   ElementRef,
   Output,
   EventEmitter,
   trigger,
    state,
    style,
    transition,
    animate,group} from '@angular/core';
import { TechnologyService } from './technology.service';
import { Card } from './card';
import { Article } from './article';
import { AppService } from "../../app.service";
@Component({
    selector: 'technology',
    pipes: [],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./technology.scss')],
    template: require('./technology.html'),
    directives: [Card, Article],
    providers: [AppService, TechnologyService],
    animations: [
      trigger('flyInOut', [
      state('in', style({transform: 'scale(1,1)', opacity: 1})),
      transition('void => *', [
        style({transform: 'scale(0,0)', opacity: 0}),
          animate('0.5s ease', style({
            transform: 'scale(1,1)',
            opacity: 1
          }))
      ])
    ])
    ]
})
export class Technology {

    public showArticle: boolean;
    public data: [any];
    public hotTag: [string];
    isFullScreen: boolean;
    public dragWindow: boolean = false;
    constructor(
        public ref: ElementRef,
        public appService: AppService,
        private technologyService: TechnologyService) {
        this.technologyService.getTechnologyItems().then(technologyItem => {
            this.data = technologyItem.cardList;
            this.hotTag = technologyItem.hotTag;
        });
        var showdown = require('showdown'),
            converter = new showdown.Converter(),
            text = '#hello, markdown!',
            html = converter.makeHtml(text);
        console.log(html);
        // this.technologyService.getMenuItems().subscribe(res=> {
        //   this.data = res;
        // });
        // this.data =this.technologyService.getTechnologyItems();
    }
    @Output() closeWindow = new EventEmitter<string>();
    public showComment: boolean = false;
    vote(agreed: string) {
        this.closeWindow.emit(agreed);
    }
    fullScreen() {
        console.log(this.ref.nativeElement);
        this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
    }

    lookArticle() {
        this.showArticle = true;
    }

    onVoted(agreed: boolean) {
        this.showArticle = agreed;
    }
    canDrag() {
        console.log("into");
        this.dragWindow = true;
    }
    dragWindows(event, id) {
        if (this.dragWindow) {
            var event = event || window.event;
            this.ref.nativeElement.querySelector('#' + id).style.left = event.clientX;
            this.ref.nativeElement.querySelector('#' + id).style.top = event.clientY;
        }

    }
    stopDrag() {
        console.log("into");
        this.dragWindow = false;
    }

}
