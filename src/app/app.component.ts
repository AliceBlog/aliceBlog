import './page/loader/app.loader.ts';

import { Component, ElementRef, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { AppState } from './app.state';
import { BaThemePreloader, BaThemeSpinner, Logger } from './services';
import { JSONP_PROVIDERS }  from '@angular/http';
import { RouterLinkActive } from '@angular/router';
import { MenusService } from './menus.service';
import { MenusModel } from './menus.model';
import { Clock,BigEye,Rain,PinkTheme } from "./component/theme";
import {Router}    from '@angular/router';
import { Technology} from "./component/technology";
import { Life } from "./component/life";
import { Works } from "./component/works";
import { About } from "./component/about";
import { Log } from "./component/log";
import { Love } from "./component/love";
import { Message } from "./component/message";
import { Sentiment } from "./component/sentiment";
// import {  } from "./component/sharkTheme";

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    pipes: [],
    directives: [ RouterLinkActive, Clock, BigEye,Rain,PinkTheme,Technology,
    Life,Works,About,Log,Love,Message,Sentiment
  ],
    providers: [BaThemeSpinner, Logger, MenusService, JSONP_PROVIDERS],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./app.scss')],
    template: require('./app.html')
})

export class App {
    public data: MenusModel[] = []; //数据内容
    public items;
    private router: Router;
    public chooseBox: boolean = false;
    viewContainerRef: ViewContainerRef;
    public themeColor:string="yellow";
    public technology:boolean=false;
    public life:boolean=false;
    public works:boolean=false;
    public about:boolean=false;
    public log:boolean=false;
    public love:boolean=false;
    public message:boolean=false;
    public sentiment:boolean=false;
    public constructor(
        private state: AppState,
        private spinner: BaThemeSpinner,
        private elementRef: ElementRef,
        private menusService: MenusService,
        viewContainerRef: ViewContainerRef) {
        this.menusService.getMenuItems().then(menItem => {
            console.info(menItem);
            this.data = menItem;
        });

    }
    ngOnInit() {
    this.themeColor=localStorage.getItem('themeColor')||"yellow";
    }
    openGoLink(data) {
    this[data.url]=true;
    }
    closeWindow(data) {
      this[data+""]=false;
    }
    public ngAfterViewInit(): void {
        BaThemePreloader.load().then((values) => {
            this.spinner.hide();
        });
    }
    handleTheme(){
      this.chooseBox=!this.chooseBox;
    }
    handleChangeTheme(themeColor){
      this.themeColor=themeColor;
      localStorage.setItem('themeColor',themeColor)
      this.chooseBox=false;
    }


}
