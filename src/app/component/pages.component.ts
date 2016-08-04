import { Component,ElementRef} from '@angular/core';
  import {Router}    from '@angular/router';

<<<<<<< HEAD
@Component({
  selector: 'pages',

=======
// import { BaPageTop, BaContentTop, BaSidebar, BaBackTop } from '../theme/components';


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
>>>>>>> b3d0c0fe39c2a1f50af85b5bef1a63a91e5e2c8a
})
export class Pages {

}
