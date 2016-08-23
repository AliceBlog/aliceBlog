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
// import {  } from "./component/sharkTheme";

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    pipes: [],
    directives: [ RouterLinkActive, Clock, BigEye,Rain,PinkTheme],
    providers: [BaThemeSpinner, Logger, MenusService, JSONP_PROVIDERS],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./app.scss')],
    template: require('./app.html')
})

export class App {
    public data: MenusModel[] = []; //数据内容
    public showWindow: boolean = false; //窗口是否显示
    public items;
    private router: Router;
    public chooseBox: boolean = false;
    viewContainerRef: ViewContainerRef;
    public themeColor:string="yellow";

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
        console.log(data);
        this.showWindow = true;
        //  this.router.navigate(['/dashboard']);
    }
    closeWindow() {
        this.showWindow = false;
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
