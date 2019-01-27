import * as PIXI from 'pixi.js';
import {BaseApp} from './main';

export interface GameLevel {
  readonly level_name: string;
  container: PIXI.Container;
  createLevel():void;
  destroyLevel():void;
}

export class SimpleButton extends PIXI.Graphics {
  label: string;
  normal_color: number;
  hover_color: number;
  border_color: number;
  border_radius:number;
  click_callback?: any;
  w: number;
  h: number;
  constructor (label:string, normal_color:number, hover_color:number, border_color:number, width:number, height:number, radius:number) {
    super();
    this.w = width;
    this.h = height;
    this.label = label;
    this.normal_color = normal_color;
    this.hover_color = hover_color;
    this.border_color = border_color;
    this.border_radius = radius;
    this.drawText();

    this.interactive = true;
    this.buttonMode = true;
    this.drawButton(this.normal_color);
  }
  drawButton(color:number) {
    this.beginFill(color);
    this.lineStyle(this.border_radius, this.border_color, 1);
    this.drawRoundedRect(0, 0, this.w, this.h, 3);
    this.endFill();
  }
  drawText() {
    var style = {
        font : 'bold 18px Arial',
        fill : 0xFFFFFF,
        align: 'center',
        stroke : this.border_color,
        strokeThickness : 5
    }
    var text = new PIXI.Text(this.label, style);
    this.addChild(text);
    text.x = this.w/2 - text.width/2;
    text.y = this.h/2 - text.height/2;
  }
  setClickCallback(callback:Function) {
    this.click_callback = callback;
  }
  activate() {
    this.on('click', this.onClick);
    this.on('tap', this.onClick);
    this.on('pointerover', this.onHover);
    this.on('touchstart', this.onHover);
    this.on('pointerout', this.onExit);
    this.on('touchendoutside', this.onExit);
    this.on('touchend', this.onExit);
  }
  deactivate() {
    this.removeAllListeners();
  }
  onHover = () => {
    this.clear();
    this.drawButton(this.hover_color);
  }
  onExit = () => {
    this.clear();
    this.drawButton(this.normal_color);
  }
  onClick = () => {
    if (this.click_callback)
      this.click_callback();
  }
}

export class FlippableSprite extends PIXI.Sprite {
  flip_time:number = 2000;
  flip_height:number = 10.0;
  flip_slide_x:number = 100.0;
  flip_rotation:number = 0.0;
  flip_slide_y:number = 0.0;
  flip_scale:boolean = true;
  sides:PIXI.Texture[];
  ticker:PIXI.ticker.Ticker;
  base_scale:number = 1.0;
  side:number = 0;
  private orig_x:number;
  private orig_y:number;
  private flip_counter:number = 0.0;
  constructor(texture?:PIXI.Texture | undefined, backface?:PIXI.Texture | undefined) {
    super(texture);

    this.ticker = new PIXI.ticker.Ticker();
    this.ticker.autoStart = false;
    this.ticker.speed = 1.0;

    this.pivot.x = this.width/2;
    this.pivot.y = this.height/2;

    this.sides = [];
    if (texture)
      this.sides.push(texture);
    if (backface)
      this.sides.push(backface)

    this.interactive = true;
    this.on('click', this.flip);
    this.on('tap', this.flip);
  }
  flip=() => {
    //console.log("Started flip.");
    this.interactive = false;
    this.flip_counter = 0.0;
    this.ticker.start();
    this.base_scale = this.scale.x;
    this.orig_x = this.x;
    this.orig_y = this.y;
    this.side = (this.side + 1)% this.sides.length
    this.ticker.add(this.flipLogic);
  }
  flipLogic=(delta:number)=>{
    this.flip_counter += this.ticker.elapsedMS * this.ticker.speed;
    var perc = this.flip_counter / this.flip_time;
    //console.log(this.ticker.elapsedMS," - ", this.flip_counter);
    //x
    if (this.flip_slide_x != 0.0){
      this.x = lerp(this.orig_x, this.orig_x+this.flip_slide_x, perc);
    }
    //rot
    if (this.flip_rotation != 0.0){
      this.rotation = lerp(0,this.flip_rotation,perc);
    }
    //y
    if (perc <= 0.5) {
      //going up and shrinking
      if (this.flip_slide_y != 0)
        this.y = lerp(this.orig_y, this.orig_y-this.flip_slide_y, Math.sqrt(perc*2));
      if (this.flip_scale)
        this.scale.x = lerp(this.base_scale, 0.1, perc*2);
    } else {
      this.texture = this.sides[this.side];
      //going down and expanding
      if (this.flip_slide_y != 0)
        this.y = lerp(this.orig_y-this.flip_slide_y, this.orig_y, Math.pow(perc*2 - 1.0,2));
      if (this.flip_scale)
        this.scale.x = lerp(0.1, this.base_scale, perc*2 - 1.0);
    }
    if (this.flip_counter >= this.flip_time) {
      if (this.flip_scale)
        this.scale.x = this.base_scale;
      this.rotation = this.flip_rotation;
      this.x = this.orig_x+this.flip_slide_x;
      this.y = this.orig_y;
      this.ticker.remove(this.flipLogic);
      this.ticker.stop();
      this.interactive = true;
      //this.rotation = 0;
    }
  }
}

//basic lerp funtion.
export function lerp(a1:number,a2:number,t:number){
  return a1*(1-t) + a2*t;
}

export class OutputContent {
  type:string;
  content:string;
  options?:object | undefined;
}

export class TextImageMixin extends PIXI.Container {
  constructor(contentToPrint:OutputContent[]) {
    super();
    let last_x:number = 0;
    let last_y:number = 0;
    for (var content of contentToPrint) {
      let obj:PIXI.Sprite;
      if (content.type == "Text")
        obj = this.createText(content);
      else if (content.type == "Image")
        obj = this.createImage(content);
      else{
        console.warn("TextImageMixin::constructor - Cannot create content of type: ",content.type);
        continue;
      }
      obj.pivot.y = obj.height
      obj.pivot.x = 0;
      obj.x = last_x;
      obj.y = last_y;

      last_x += obj.width;
      this.addChild(obj);
    }
  }
  createText(content:OutputContent):PIXI.Text {
    return new PIXI.Text(content.content, content.options);
  }
  createImage(content:OutputContent):PIXI.Sprite {
    return new PIXI.Sprite(PIXI.Texture.fromImage(content.content));
  }
}

export class VanishingObject {
  time_to_fade:number = 10000;
  fade_time:number = 1000;
  private start_time:number = 0;
  private fade_counter:number = 0;
  ticker:PIXI.ticker.Ticker;
  obj: PIXI.Container;
  constructor(obj:PIXI.Container) {
    this.ticker = new PIXI.ticker.Ticker();
    this.ticker.autoStart = true;
    this.ticker.start();
    this.ticker.add(this.ticTac);
    this.obj = obj;
    this.fade_counter = 0;
    this.start_time = 0;
  }
  ticTac = (delta:number) => {
    this.start_time += this.ticker.elapsedMS;
    if (this.start_time > this.time_to_fade + this.fade_time) {
      this.ticker.stop();
      this.obj.destroy();
    } else {
      if (this.start_time > this.time_to_fade) {
        this.fade_counter += this.ticker.elapsedMS;
        var alpha = lerp(1.0, 0.0, this.fade_counter/this.fade_time);
        this.obj.alpha = alpha;
        this.obj.children.forEach(function(child:PIXI.Sprite) {
          child.alpha = alpha;
        })
      }
    }
  }
}