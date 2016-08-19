import { Component, ViewEncapsulation } from '@angular/core';
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

    constructor(public appService: AppService,
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

    fullScreen() {
        this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
    }

    lookArticle() {
        this.showArticle = true;
    }

    onVoted(agreed: boolean) {
        this.showArticle = agreed;
    }
}
