import { Component,ElementRef, ViewEncapsulation ,
  trigger,
  state,
  style,
  transition,
  animate} from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

// import { BaPageTop, BaContentTop, BaSidebar, BaBackTop } from '../theme/components';
import { Dashboard } from './dashboard';
// import { Managers } from './manager/manager.component';
import { MenusService } from './menus.service';
import { MenusModel } from './menus.model';
import { AppState } from './../app.state';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./pages.scss')],
  // directives: [BaPageTop, BaSidebar, BaContentTop, BaBackTop],
  template: require('./pages.html'),
  providers:[MenusService],
  // animations: [
  //    trigger('heroState', [
  //      state('inactive', style({
  //        backgroundColor: '#eee',
  //        transform: 'scale(1)'
  //      })),
  //      state('active',   style({
  //        backgroundColor: '#cfd8dc',
  //        transform: 'scale(1.1)'
  //      })),
  //      transition('inactive => active', animate('100ms ease-in')),
  //      transition('active => inactive', animate('100ms ease-out'))
  //    ])
  //  ]
})
@RouteConfig([
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,

  }
])
export class Pages {
  public data:MenusModel[] =[]; //数据内容
  public showWindow:boolean =false; //窗口是否显示
  constructor(
    private elementRef:ElementRef,
    private menusService:MenusService,
    private state:AppState
  ) {
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
  }
closeWindow(){
  this.showWindow=false;
}
}
