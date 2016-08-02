import './page/loader/app.loader.ts';

import { Component, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';
import { Pages } from './component';
import { AppState } from './app.state';
import { BaThemePreloader, BaThemeSpinner,Logger } from './services';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  // directives: [BaThemeRun],
  providers: [BaThemeSpinner,Logger],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.scss')],
  template: require('./app.html')
})
@RouteConfig([
  {
    path: '/pages/...',
    name: 'Pages',
    component: Pages,
    useAsDefault: true
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
  // {
  //   path: '/**',
  //   redirectTo: ['Pages']
  // }
])
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
