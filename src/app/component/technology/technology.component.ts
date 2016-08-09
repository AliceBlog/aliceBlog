import { Component , ViewEncapsulation} from '@angular/core';
import { TechnologyService } from './technology.service';
import {Card} from './card';
import {Article} from './article';
@Component({
  selector: 'technology',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./technology.scss')],
  template: require('./technology.html'),
  directives: [Card,Article],
  providers: [TechnologyService],

})
export class Technology {
public showArticle:boolean;
public data:[any];
public hotTag:[string];
  constructor(
  private technologyService:TechnologyService
  ) {
    this.technologyService.getTechnologyItems().then(technologyItem=>{
      console.info(technologyItem);
      this.data = technologyItem.cardList;
      this.hotTag=technologyItem.hotTag;
    });
    // this.technologyService.getMenuItems().subscribe(res=> {
    //   this.data = res;
    // });
    // this.data =this.technologyService.getTechnologyItems();
  }
lookArticle(){
  this.showArticle=true;
}
onVoted(agreed: boolean) {
   this.showArticle=agreed;
 }
}
