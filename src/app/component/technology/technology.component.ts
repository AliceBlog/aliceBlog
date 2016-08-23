import { Component, ViewEncapsulation, ElementRef,Output ,EventEmitter} from '@angular/core';
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
    providers: [AppService,TechnologyService],

})
export class Technology {

    public showArticle: boolean;
    public data: [any];
    public hotTag: [string];
    isFullScreen: boolean;

    constructor(
                public ref:ElementRef,
                public appService: AppService,
                private technologyService: TechnologyService) {
        this.technologyService.getTechnologyItems().then(technologyItem=> {
        this.data = technologyItem.cardList;
        this.hotTag = technologyItem.hotTag;
        });
        // this.technologyService.getMenuItems().subscribe(res=> {
        //   this.data = res;
        // });
        // this.data =this.technologyService.getTechnologyItems();
    }
    @Output() closeWindow = new EventEmitter<string>();
    public showComment:boolean=false;
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
}
