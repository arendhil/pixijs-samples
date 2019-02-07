import * as PIXI from 'pixi.js';
import {SimpleButton, FlippableSprite, GameLevel} from './support';
import {BaseApp} from './main';
import {Bee} from './bee';

export class MainMenu implements GameLevel {
  level_name:string = "MainMenu";
  container: PIXI.Container;
  buttons:SimpleButton[];
  coin:FlippableSprite;
  constructor () {
    this.container = new PIXI.Container();
    this.container.x = 100;
    this.container.y = 100;

    var menu_bg = new PIXI.Graphics();
    menu_bg.beginFill(0xEEEEEE);
    menu_bg.lineStyle(2, 0xddddfF, 1);
    menu_bg.drawRoundedRect(0, 0, 200, 325, 5);
    menu_bg.endFill();

    var teste_cartas = new SimpleButton('Cards', 0x00a9ff, 0x99d9ff, 0x0066aa, 150,  50, 3);
    teste_cartas.x = 25;
    teste_cartas.y = 25;
    menu_bg.addChild(teste_cartas);
    teste_cartas.setClickCallback(this.enterCards);

    var teste_fast_cartas = new SimpleButton('(Fast) Cards', 0x00a9ff, 0x99d9ff, 0x0066aa, 150,  50, 3);
    teste_fast_cartas.x = 25;
    teste_fast_cartas.y = teste_cartas.y + teste_cartas.height + 25;
    menu_bg.addChild(teste_fast_cartas);
    teste_fast_cartas.setClickCallback(this.enterFastCards);

    var teste_text = new SimpleButton('Text + Image', 0x00a9ff, 0x99d9ff, 0x0066aa, 150,  50, 3);
    teste_text.x = 25;
    teste_text.y = teste_fast_cartas.y + teste_fast_cartas.height + 25;
    menu_bg.addChild(teste_text);
    teste_text.setClickCallback(this.enterTextImage);

    var teste_particles = new SimpleButton('Particles', 0x00a9ff, 0x99d9ff, 0x0066aa, 150,  50, 3);
    teste_particles.x = 25;
    teste_particles.y = teste_text.y + teste_text.height + 25;
    menu_bg.addChild(teste_particles);
    teste_particles.setClickCallback(this.enterParticles);

    this.buttons = [teste_cartas, teste_text, teste_particles, teste_fast_cartas];
    this.container.addChild(menu_bg);
    PIXI.loader
        .add('full_sprites.json')
        .add('particlePack.json')
        .load(this.loadCoin);

    //extra Text
    var style = {
        font : 'italic 18px Arial',
        fill : 0xFFFFFF,
        align: 'right'
    }
    var text = new PIXI.Text("Using: Pixi.JS, Typescript, webpack and NPM\nGame Development Test\nMarcelo F. Rigon\nAssets: kenney.nl", style);
    text.x = BaseApp.instance.renderer.width/2 + text.width - this.container.x;
    text.y = 0;
    this.container.addChild(text);

  }
  private loadCoin = ():void => {
    this.coin = new FlippableSprite(PIXI.Texture.fromImage('chipGreenWhite_sideBorder.png'));
    this.coin.flip_slide_y = 100;
    this.coin.flip_rotation = Math.PI*2;
    this.coin.flip_slide_x = 0;
    this.coin.flip_scale = false;
    this.coin.x = BaseApp.instance.renderer.width/2;
    this.coin.y = BaseApp.instance.renderer.height/2;
    this.container.addChild(this.coin);

    var coin2 = new FlippableSprite(PIXI.Texture.fromImage('chipGreenWhite_sideBorder.png'));
    coin2.flip_slide_y = 100;
    coin2.flip_rotation = Math.PI*2;
    coin2.flip_slide_x = 0;
    coin2.flip_scale = false;
    coin2.flip_time = 500;
    coin2.x = BaseApp.instance.renderer.width/2 - 80;
    coin2.y = BaseApp.instance.renderer.height/2;
    this.container.addChild(coin2);
    var style = {
        font : 'bold 18px Arial',
        fill : 0xFFFFFF,
    }
    var text = new PIXI.Text("Click me!", style);
    text.x = this.coin.x - text.width/2;
    text.y = this.coin.y +30;
    this.container.addChild(text);

    this.container.addChild(new Bee(new PIXI.Point(400,500), new PIXI.Point(800,50), 5000.0));
  }
  createLevel():void {
    for (var button of this.buttons) {
        button.activate();
    }
    if (this.coin)
        this.coin.interactive = true;
    BaseApp.instance.stage.addChild(this.container);
  }
  destroyLevel():void {
    for (var button of this.buttons) {
        button.deactivate();
    }

    if (this.coin)
        this.coin.interactive = false;
    BaseApp.instance.stage.removeChild(this.container);
  }
  enterCards():void {
    BaseApp.instance.changeLevel("Cards");
  }
  enterFastCards():void {
    BaseApp.instance.changeLevel("FastCards");
  }
  enterTextImage():void {
    BaseApp.instance.changeLevel("TextImage");
  }
  enterParticles():void {
    BaseApp.instance.changeLevel("Particles");
  }
}