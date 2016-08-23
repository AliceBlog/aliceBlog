import {Component, ViewEncapsulation} from '@angular/core';


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
