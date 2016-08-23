import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'bigEye',
  pipes: [],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./bigEye.scss')],
  template: require('./bigEye.html')
})
export class BigEye {

    public ngAfterViewInit():void{
    var canvas,
    	ctx,
    	width,
    	height,
    	mx,
    	my,
    	mouseIdle,
    	mouseIdleTick,
    	mouseIdleMax,
    	eyes,
    	PI,
    	TAU;

    function Eye(opt) {
    	this.x = opt.x;
    	this.y = opt.y;
    	this.radius = opt.radius;
    	this.pupilX = this.x;
    	this.pupilY = this.y;
    	this.pupilRadius = this.radius / 2;
    	this.angle = 0;
    	this.magnitude = 0;
    	this.magnitudeMax = this.radius - this.pupilRadius;
    }

    Eye.prototype.step = function() {
    	var dx = mx - this.x,
    		dy = my - this.y,
    		dist = Math.sqrt(dx * dx + dy * dy);
    	this.angle = Math.atan2(dy, dx);
    	if (mouseIdle) {
    		this.magnitude = 0;
    	} else {
    		this.magnitude = Math.min(Math.abs(dist), this.magnitudeMax);
    	}
    	this.pupilX += ((this.x + Math.cos(this.angle) * this.magnitude) - this.pupilX) * 0.1;
    	this.pupilY += ((this.y + Math.sin(this.angle) * this.magnitude) - this.pupilY) * 0.1;
    };

    Eye.prototype.draw = function() {
    	ctx.beginPath();
    	ctx.arc(this.x, this.y, this.radius, 0, TAU);
    	ctx.fillStyle = '#fbf9e6';
    	ctx.fill();
    	ctx.lineWidth = 5;
    	ctx.strokeStyle = '#424031';
    	ctx.stroke();

    	ctx.beginPath();
    	ctx.arc(this.pupilX, this.pupilY, this.pupilRadius, 0, TAU);
    	ctx.fillStyle = '#424031';
    	ctx.fill();
    };

    function init() {
    	canvas = document.getElementById('bigEye');
    	ctx = canvas.getContext('2d');
    	mouseIdleMax = 100;
    	PI = Math.PI;
    	TAU = PI * 2;
    	eyes = [];
    	reset();
    	loop();
    }

    function reset() {
    	width = innerWidth;
    	height = innerHeight;
    	canvas.width = width;
    	canvas.height = height;
    	mx = width / 2;
    	my = height / 2;
    	mouseIdle = true;
    	eyes.length = 0;
    	eyes.push(new Eye({
    		x: width * 0.2,
    		y: height * 0.4,
    		radius: 70
    	}));
    	eyes.push(new Eye({
    		x: width * 0.8,
    		y: height * 0.4,
    		radius: 70
    	}));
    }

    function mousemove(e) {
    	mx = e.pageX;
    	my = e.pageY;
    	mouseIdleTick = mouseIdleMax;
    }

    function step() {
    	var i = eyes.length;
    	while (i--) {
    		eyes[i].step();
    	}

    	if (mouseIdleTick > 0) {
    		mouseIdleTick--;
    		mouseIdle = false;
    	} else {
    		mouseIdle = true;
    	}
    }

    function draw() {
    	ctx.clearRect(0, 0, width, height);

    	var i = eyes.length;
    	while (i--) {
    		eyes[i].draw();
    	}

    	ctx.beginPath();
    	ctx.arc(width / 2, height * 0.65, 100, 0, PI);
    	ctx.fillStyle = '#424031';
    	ctx.fill();
    }

    function loop() {
    	requestAnimationFrame(loop);
    	step();
    	draw();
    }

    addEventListener('mousemove', mousemove);
    addEventListener('resize', reset);

    init();
  }

}
