import * as PIXI from 'pixi.js';
import * as TOOLS from './support';
import {BaseApp} from './main';

export class ParticlesLevel implements TOOLS.GameLevel {
  level_name:string = "Particles";
  container: PIXI.Container;
  ticker: PIXI.ticker.Ticker;
  constructor() {
    this.ticker = new PIXI.ticker.Ticker();
    this.ticker.autoStart = false;
    this.ticker.stop();
  }
  createLevel() {
    console.log("Particles creation started.");
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
  onTick = (delta:number) {
    
  }
}