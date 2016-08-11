import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";


@Component({
    selector: 'spiderTheme',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./spiderTheme.scss')],
    template: require('./spiderTheme.html')
})
export class SpiderTheme {

      public ngAfterViewInit():void{

      }
}
