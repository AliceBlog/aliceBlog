import { Component, ViewEncapsulation,Output,EventEmitter,ElementRef} from '@angular/core';
import { AppService } from "../../app.service";

@Component({
    selector: 'message',
    pipes: [],
    providers: [AppService],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./message.scss')],
    template: require('./message.html')
})
export class Message {

    isFullScreen: boolean;
    public plate:boolean=true;
    constructor(public appService: AppService,public ref:ElementRef) {

    }
        public ngAfterViewInit():void{
          function heiban(option){
          this.width=option.width;
          this.height=option.height;
          this.parentnode=option.parentnode;
          this.parentnode.style.height=this.height+"px";
          this.parentnode.style.width=this.width+"px";
          this.clickdown=false;
          }

      heiban.prototype={
          init:function(){
              this.maincanvas = this.createElem("canvas",{style:"position:absolute;left:0;top:0;"});
              this.mainctx = this.maincanvas.getContext("2d");
              this.maincanvas.height=this.height;
              this.maincanvas.width=this.width;
              this.parentnode.appendChild(this.maincanvas);
              this.maincanvas.style.backgroundColor="#222";
              //this.mainctx.fillStyle="black";
      //      this.mainctx.fillRect(0,0,this.width,this.height);
      //      this.mainctx.fill();

              this.btn = this.creatButton("input",{style:"position:absolute;left:10px;top:10px; width:100px; height:50px; line-height:50px; text-align:center;"})
              this.parentnode.appendChild(this.btn);



              this.bingEvent();
              },

          btnclick:function(ev,_this){
              _this.mainctx.clearRect(0,0,_this.width,_this.height);
              },

          creatButton:function(tagname,stylecss){
              var newbutton = document.getElementById("reset");

              // for(var att in stylecss){
              //     newbutton.setAttribute(att,stylecss[att]);
              //     }
              return newbutton;
              },

          createElem:function(tagname,KeyValue){
              var elem=document.createElement(tagname);
              for(var cssindex in KeyValue){
                  elem.setAttribute(cssindex,KeyValue[cssindex]);
                  }
                  return elem;
              },

          bingEvent:function(){
              var _this=this;
              var device=(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
              var mousedown=device?"touchstart":"mousedown";
              var mousemove=device?"touchmove":"mousemove";
              var mouseup=device?"touchend":"mouseup";
              //console.log(mousedown);

              this.maincanvas.addEventListener(mousedown,function(ev){
                  _this.mousedown_Event(ev,_this);
                  },false);

              this.maincanvas.addEventListener(mousemove,function(ev){
                  _this.mousemove_Event(ev,_this);
                  },false);

              this.maincanvas.addEventListener(mouseup,function(ev){
                  _this.mouseup_Event(ev,_this);
                  },false);
              this.btn.addEventListener(mousedown,function(ev){
                  _this.btnclick(ev,_this);
                  },false);
              },

          mousedown_Event:function(ev,_this){
              ev.preventDefault();
              _this.clickdown=true;
              var localpos=_this.getlocalpos(ev);
              _this.huaxian(localpos.x,localpos.y,true);
              },

          mousemove_Event:function(ev,_this){
              ev.preventDefault();
              if(_this.clickdown==false){
                  return;
                  }
                  var localpos=_this.getlocalpos(ev);
                  _this.huaxian(localpos.x,localpos.y,false);
              },

          mouseup_Event:function(ev,_this){
              ev.preventDefault();
              if(_this.clickdown==true){
                  _this.clickdown=false;

                  }
              },

          getlocalpos:function(ev){
              var elem=this.maincanvas;
              var ox=0,oy=0;
              var pagex,pagey;
              if(elem!=null){
                  ox+=elem.offsetLeft;
                  oy+=elem.offsetTop;
                  elem = elem.offsetParent;
                  }
              if(ev.hasOwnProperty('changedTouches')){
                  var first=ev.changedTouches[0];
                  pagex=first.pageX;
                  pagey=first.pageY;
                  }
              else{
                  pagex=ev.pageX;
                  pagey=ev.pageY;
                  }
              return {
                  'x':pagex-ox-120,
                  'y':pagey-oy-120
                  }
              },
          huaxian:function(x,y,fresh){
              this.mainctx.strokeStyle="white";
              this.mainctx.lineWidth=3;
              this.mainctx.lineCap = this.mainctx.lineJoin = 'round';

              if(fresh==true){

                  this.mainctx.beginPath();
                  this.mainctx.moveTo(x+0.01,y);
                  }
              this.mainctx.lineTo(x,y);
              this.mainctx.stroke();
              }

          }
          var mycontainer=document.getElementById("myID");
          console.log(window.innerHeight);
    var option={
        width:screen.width,
        height:window.innerHeight*0.8-28,
        parentnode:mycontainer
        }
        var heibanquyu=new heiban(option);
        heibanquyu.init();

        }
    @Output() closeWindow = new EventEmitter<string>();
    public showComment:boolean=false;
    vote(agreed: string) {
        this.closeWindow.emit(agreed);
      }
    fullScreen() {
        this.isFullScreen = this.appService.fullScreen(this.isFullScreen);
    }
changeBox(){
  this.plate=!this.plate;
}
deleteTextValue(){
  this.ref.nativeElement.querySelector('textarea').value="";
}
saveMessage(){
if(this.plate){
  var url=this.ref.nativeElement.querySelector('canvas').toDataURL("image/png");
  console.log(url);
  return url;
}else{
  var url =this.ref.nativeElement.querySelector('textarea').value;
  console.log(url);
  return url;
}

}
}
