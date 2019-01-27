import * as PIXI from 'pixi.js';
import * as TOOLS from './support';
import {BaseApp} from './main';

export class TextImageLevel implements TOOLS.GameLevel {
  level_name:string = "TextImage";
  container: PIXI.Container;
  ticker: PIXI.ticker.Ticker;
  images_name_array: string[];
  time_to_create:number = 500;
  private counter:number = 0;
  max_font_size:number = 30;
  min_font_size:number = 12;
  content_size:number = 3;
  constructor() {
    this.ticker = new PIXI.ticker.Ticker();
    this.ticker.autoStart = false;
    this.ticker.stop();
    this.images_name_array = ["pieceWhite_border00.png","pieceWhite_border01.png","pieceWhite_border02.png","pieceWhite_border03.png","pieceWhite_border04.png","pieceWhite_border05.png","pieceWhite_border06.png","pieceWhite_border07.png","pieceWhite_border08.png","pieceWhite_border09.png","pieceWhite_border10.png","pieceWhite_border11.png","pieceWhite_border12.png","pieceWhite_border13.png","pieceWhite_border14.png","pieceWhite_border15.png","pieceWhite_border16.png","pieceWhite_border17.png","pieceWhite_border18.png"];
  }
  createLevel() {
    console.log("Text + Image creation started.");
    this.container = new PIXI.Container();

    BaseApp.instance.stage.addChild(this.container);
    this.ticker.add(this.onTick);
    this.ticker.start();

    //create back option
    var menu_bg = new PIXI.Graphics();
    menu_bg.beginFill(0xEEEEEE);
    menu_bg.lineStyle(2, 0xddddfF, 1);
    menu_bg.drawRoundedRect(100, 100, 200, 100, 5);
    menu_bg.endFill();

    var main_menu_btn = new TOOLS.SimpleButton('Back', 0x00a9ff, 0x99d9ff, 0x0066aa, 150,  50, 3);
    main_menu_btn.x = 125;
    main_menu_btn.y = 125;
    menu_bg.addChild(main_menu_btn);
    main_menu_btn.setClickCallback(this.backToMenu);
    main_menu_btn.activate();
    this.container.addChild(menu_bg);
    this.counter = this.time_to_create;
  }
  backToMenu() {
      BaseApp.instance.changeLevel("MainMenu");
  }
  destroyLevel() {
    this.container.destroy({children:true});
    this.ticker.stop();
  }
  onTick=() =>{
    this.counter += this.ticker.elapsedMS;
    if (this.counter > this.time_to_create) {
      this.createRandom();
      this.counter = 0;
    }
  }
  createRandom() {
    let content:TOOLS.OutputContent[] = [];
    for (let i:number = 0; i < this.content_size; i++) {
      let chance:number = Math.random();
      let new_content:TOOLS.OutputContent = new TOOLS.OutputContent();
      if (chance > 0.5) {
        //Text
        new_content.type = "Text";
        var style = new PIXI.TextStyle({
          fontSize: Math.random()*(this.max_font_size-this.min_font_size)+this.min_font_size,
          fontFamily: "Arial",
          fill: "#FFFFFF"
        })
        if (chance < 0.1)
          style.fontWeight="bold";
        if (chance > 0.4)
          style.fontStyle = "italic";

        if (chance > 0.75) {
          if (chance < 0.85)
            style.fill = 0x333333;
          else if (chance < 0.95)
            style.fill = 0x666666;
          else if (chance > 0.95)
            style.fill = [0x000000,0x0033a9];
        }
        new_content.content = "Ahoy!";
        new_content.options = style;
      } else {
        //Image
        new_content.type = "Image";
        new_content.content = this.images_name_array[Math.floor(Math.random() * (this.images_name_array.length-0.1))];
      }
      content.push(new_content);
    }
    //Meta-data OK, real creation.
    var new_obj = new TOOLS.TextImageMixin(content);
    new_obj.x = 300 + Math.random()*(BaseApp.instance.renderer.width - 350 - new_obj.width);
    new_obj.y = 50 + Math.random()*(BaseApp.instance.renderer.height - 200 - new_obj.height);
    //obj to vanish after some time.
    new TOOLS.VanishingObject(new_obj);
    this.container.addChild(new_obj);
  }
}