import { Component, ChangeDetectionStrategy, Input, OnInit, ElementRef, Renderer } from '@angular/core';
import { TechnologyService } from './../technology.service';

@Component({
  selector: 'duoshuo-comment',
  template: require('./duoshuo-comment.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DuoShuoCommentComponent implements OnInit {
  @Input() articleItem: any;
  private duoShuoUrl: string;

  constructor(private elmRef: ElementRef, private renderer: Renderer, private service: TechnologyService) {
    let protocol = this.service.getOwnerDocument(this.elmRef).location.protocol === 'https:' ? 'https:' : 'http:';
    this.duoShuoUrl = `${protocol}//static.duoshuo.com/embed.js`;
    this.service.getGlobalObject().duoshuoQuery = { short_name: "xiaomoBlog" };
  }

  ngOnInit() {
    let duoshuoElm = this.elmRef.nativeElement.querySelector('.ds-thread');

    this.service.createScript(`${this.duoShuoUrl}?rn=${Math.random()}`,
      this.renderer, this.elmRef, () => {
        this.service.getGlobalObject().DUOSHUO.EmbedThread(duoshuoElm);
      });
  }
}
