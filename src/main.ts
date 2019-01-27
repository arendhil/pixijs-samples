import * as PIXI from 'pixi.js';
import * as HUB from './support';
import {CardsLevel, FastCardsLevel} from './cards_levels';
import {TextImageLevel} from './text_image_level';
import {MainMenu} from './main_menu';

export class BaseApp extends PIXI.Application {
  static instance:BaseApp;
  current_level:HUB.GameLevel;
  fps_text: any;
  stage: any;
  available_levels: HUB.GameLevel[];
  constructor () {
    super(window.innerWidth, window.innerHeight, {transparent:true});
    if (BaseApp.instance) {
      //game already running
      this.destroy(true);
    } else {
      //initialization
      document.body.appendChild(this.view);
      window.addEventListener("resize", function() {
        app.renderer.resize(window.innerWidth, window.innerHeight);
      });
      this.ticker.add(this.renderFPS);
      BaseApp.instance = this;

      this.available_levels = []
      var hub = new MainMenu();
      this.available_levels.push(hub);
      for (var level of [new CardsLevel(), new FastCardsLevel(), new TextImageLevel()]) {
        this.available_levels.push(level);

      }

      //first level
      this.current_level = hub;
      hub.createLevel();
    }
  }
  renderFPS = (delta:number) => {
    if (this.fps_text == null) {
      var style = {
        font : 'bold 16px Arial',
        fill : '#F7EDCA',
        stroke : '#4a1850',
        strokeThickness : 5
      };
      this.fps_text = new PIXI.Text("FPS=60", style);
      this.stage.addChild(this.fps_text);
    }
    this.fps_text.x = app.renderer.width - 15 - this.fps_text.width;
    this.fps_text.y = 10;
    this.fps_text.text = "FPS = "+Math.round(this.ticker.FPS);
  }
  changeLevel(level_name:string):void {
    console.log("Switching from ", this.current_level.level_name, " to ", level_name);
    for (var level of this.available_levels) {
      if (level.level_name === level_name) {
        //found the level, remove old one
        this.current_level.destroyLevel();
        //update and create the new level
        this.current_level = level;
        level.createLevel();
        return;
      }
    }
    //no level found with that name.
    console.error("No level found with name: "+level_name+". Cannot change level!");
  }
}

var app = new BaseApp();
