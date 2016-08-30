import { Component, ViewEncapsulation, Input, EventEmitter, Output, ElementRef} from '@angular/core';

@Component({
    selector: 'articleText',
    pipes: [],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./article.scss')],
    template: require('./article.html')
})
export class Article {
    public html: string;
    constructor(public ref: ElementRef) {
        var showdown = require('showdown');

        // require('showdown-youtube');
        var converter = new showdown.Converter();
        var text = require("./_user.md");
        // console.log(text.replace(/&quot;/g,'"'));
        this.html= converter.makeHtml(text.replace(/&quot;/g,'"'));


        //
    }
    public ngAfterViewInit(): void {
        this.ref.nativeElement.querySelector('article').innerHTML = this.html;
    }
    @Input() hero;
    @Output() onVoted = new EventEmitter<boolean>();
    public showComment: boolean = false;
    vote(agreed: boolean) {
        this.onVoted.emit(agreed);
    }
    conmmentShow() {
        this.showComment = true;
    }
    commentOk() {
        this.showComment = false;
    }
    commentCancel() {
        this.showComment = false;
    }
}
