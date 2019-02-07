import * as PIXI from 'pixi.js';

export class Bee extends PIXI.Sprite {
  _start:PIXI.Point;
  _end:PIXI.Point;
  _totalTime:number;
  _currentTime:number = 0;
  _timer:PIXI.ticker.Ticker;
  _forward:boolean = true;
  _t0:PIXI.Point;
  _t1:PIXI.Point;
  constructor(startPos:PIXI.Point, endPos:PIXI.Point, motionTime:number) {
    super(PIXI.Texture.fromImage("pieceWhite_border16.png"));
    this._start = startPos;
    this._end = endPos;
    this._totalTime = motionTime;
    this._currentTime = 0.0;

    this.calculateTangents();

    this._timer = new PIXI.ticker.Ticker();
    this._timer.autoStart = true;
    this._timer.speed = 1.0;
    this._timer.add(this.tick);
  }

  calculateTangents() {
    this._t0 = new PIXI.Point(0,0);
    this._t1 = new PIXI.Point(0,0);
    //main axis
    if (Math.abs(this._start.x - this._end.x) > Math.abs(this._start.y - this._end.y)) {
      //x is bigger
      this._t0 = new PIXI.Point(0.4,0.1);
      this._t1 =  new PIXI.Point(-0.4,-0.1);
    } else {
      this._t0 = new PIXI.Point(0.9, 0.6);
      this._t1 = new PIXI.Point(-0.9, -0.6);
    }

    // //check motion direction
    // if (this._start.x > this._end.x) {
    //   //moving to the left
    //   this._t0.x = -1 * this._t0.x;
    //   this._t1.x = -1 * this._t1.x;
    // }

    // if (this._start.y > this._end.y) {
    //   //moving to the down
    //   this._t0.y = -1 * this._t0.y;
    //   this._t1.y = -1 * this._t1.y;
    // }

    this._t0.x = this._start.x + 0.4 * (this._end.x - this._start.x);
    this._t0.y = this._start.y + 0.4 * (this._end.y - this._start.y);

    this._t1.x = this._end.x + 0.4 * (this._start.x - this._end.x)
    this._t1.y = this._end.y + 0.4 * (this._start.y - this._end.y)
  }

  tick=(delta:number) => {
    var t = 0.0;
    if (this._forward) {
      this._currentTime += this._timer.elapsedMS * this._timer.speed;
      if (this._currentTime >= this._totalTime) {
        this._currentTime = this._totalTime;
        t = 1.0;
        this._forward = false;
      } else {
        t = this._currentTime / this._totalTime;
      }
    } else {
      this._currentTime -= this._timer.elapsedMS * this._timer.speed;
      if (this._currentTime <= 0.0) {
        this._currentTime = 0.0;
        t = 0.0;
        this._forward = true;
      } else {
        t = this._currentTime / this._totalTime;
      }
    }

    let t3:number = Math.pow(t,3);
    let t2:number = Math.pow(t,2);

    let a0:number = (2 * t3 - 3 * t2 + 1);
    let a1:number = (t3 - 2 * t2 + t);
    let a2:number = (-2 * t3 + 3 * t2);
    let a3:number = (t3 - t2);

    this.x = a0 * this._start.x + a1 * this._t0.x + a2 * this._end.x + a3 * this._t1.x;
    this.y = a0 * this._start.y + a1 * this._t0.y + a2 * this._end.y + a3 * this._t1.y;
  }
}
