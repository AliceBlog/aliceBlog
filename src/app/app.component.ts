import './page/loader/app.loader.ts';

import { Component, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { AppState } from './app.state';
import { BaThemePreloader, BaThemeSpinner,Logger } from './services';
import { RouterLinkActive, ROUTER_DIRECTIVES } from '@angular/router';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  directives: [ROUTER_DIRECTIVES,RouterLinkActive],
  providers: [BaThemeSpinner,Logger],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.scss')],
  template: require('./app.html')
})

export class App {

  viewContainerRef:ViewContainerRef;

  public constructor(
      private state:AppState,
      private spinner:BaThemeSpinner,
      viewContainerRef:ViewContainerRef) {

  }

  public ngAfterViewInit():void {
    BaThemePreloader.load().then((values) => {
      this.spinner.hide();
    });
  }


}
