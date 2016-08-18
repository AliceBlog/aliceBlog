import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";


@Component({
    selector: 'pinkTheme',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./pinkTheme.scss')],
    template: require('./pinkTheme.html')
})
export class PinkTheme {


}
