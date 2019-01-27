import * as PIXI from 'pixi.js';
import * as TOOLS from './support';
import {BaseApp} from './main';
import * as PARTICLES from 'pixi-particles';


export class ParticlesLevel implements TOOLS.GameLevel {
  level_name:string = "Particles";
  container: PIXI.Container;
  ticker: PIXI.ticker.Ticker;
  emitter:PARTICLES.Emitter;
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

    this.emitter = new PARTICLES.Emitter(this.container, PIXI.Texture.fromImage('fire_02.png'), {
          "alpha": {
            "start": 1,
            "end": 0
          },
          "scale": {
            "start": 0.4,
            "end": 0.01,
            "minimumScaleMultiplier": 2
          },
          "color": {
            "start": "#f00919",
            "end": "#e0a562"
          },
          "speed": {
            "start": 25,
            "end": 80,
            "minimumSpeedMultiplier": 1
          },
          "acceleration": {
            "x": 0,
            "y": -500
          },
          "maxSpeed": 0,
          "startRotation": {
            "min": 0,
            "max": 360
          },
          "noRotation": false,
          "rotationSpeed": {
            "min": 0,
            "max": 0
          },
          "lifetime": {
            "min": 0.2,
            "max": 1.2
          },
          "blendMode": "normal",
          "frequency": 0.001,
          "emitterLifetime": -1,
          "maxParticles": 500,
          "pos": {
            "x": 0,
            "y": 0
          },
          "addAtBack": false,
          "spawnType": "circle",
          "spawnCircle": {
            "x": 0,
            "y": 0,
            "r": 12
          }
        });
    this.emitter.spawnPos.x = BaseApp.instance.renderer.width/2;
    this.emitter.spawnPos.y = BaseApp.instance.renderer.height/2;
    this.emitter.autoUpdate = true;
    this.emitter.emit = true;
  }
  backToMenu() {
      BaseApp.instance.changeLevel("MainMenu");
  }
  destroyLevel() {
    this.container.destroy({children:true});
    this.emitter.destroy();
    this.ticker.stop();
  }
  updateEmitter(px:number, py:number) {
    if ((px < 300) || (px > BaseApp.instance.renderer.width-200) ||
        (py < 100) || (py > BaseApp.instance.renderer.height-100)) {
      this.emitter.spawnPos.x = BaseApp.instance.renderer.width/2;
      this.emitter.spawnPos.y = BaseApp.instance.renderer.height/2;

    } else {
      this.emitter.spawnPos.x = px;
      this.emitter.spawnPos.y = py;
    }
  }
  onTick = (delta:number) =>{
    //this.emitter.update(this.ticker.deltaTime);
    var mousePos = BaseApp.instance.renderer.plugins.interaction.mouse.global;
    var px = mousePos.x;
    var py = mousePos.y;
    this.updateEmitter(px,py);
  }
}
