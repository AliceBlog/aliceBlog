import './page/loader/app.loader.ts';

import { Component,ElementRef, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { AppState } from './app.state';
import { BaThemePreloader, BaThemeSpinner,Logger } from './services';
import { RouterLinkActive, ROUTER_DIRECTIVES } from '@angular/router';
import { MenusService } from './menus.service';
import { MenusModel } from './menus.model';
import { Clock } from "./component/clock";
import {Router}    from '@angular/router';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  directives: [ROUTER_DIRECTIVES,RouterLinkActive,Clock],
  providers: [BaThemeSpinner,Logger,MenusService],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.scss')],
  template: require('./app.html')
})

export class App {
  public data:MenusModel[] =[]; //数据内容
  public showWindow:boolean =false; //窗口是否显示
   private router: Router;
  viewContainerRef:ViewContainerRef;

  public constructor(
      private state:AppState,
      private spinner:BaThemeSpinner,
      private elementRef:ElementRef,
      private menusService:MenusService,
      viewContainerRef:ViewContainerRef) {
        this.menusService.getMenuItems().then(menItem=>{
          console.info(menItem);
          this.data = menItem;
        });
  }
  ngOnInit() {

  }
  openGoLink(data){
    console.log(data);
    this.showWindow=true;
    //  this.router.navigate(['/dashboard']);
  }
closeWindow(){
  this.showWindow=false;
}
  public ngAfterViewInit():void {
    BaThemePreloader.load().then((values) => {
      this.spinner.hide();
    });
  }


}
