import * as PIXI from 'pixi.js';
import {SimpleButton, FlippableSprite, GameLevel} from './support';
import {BaseApp} from './main';

export class CardsLevel implements  GameLevel {
  level_name:string = "Cards";
  container: PIXI.Container;
  private readonly deck_size:number = 144;
  private deck:FlippableSprite[];
  private ticker:PIXI.ticker.Ticker;
  private card_index:number = 0;
  card_delay:number = 1000;
  card_anim_speed:number = 2000;
  private card_counter:number = 0.0;
  private card_start_time:number = 0.0;
  constructor() {
      this.ticker = new PIXI.ticker.Ticker();
      this.ticker.autoStart = false;
  }
  createLevel() {
      console.log("Card Level creation started.");
      this.container = new PIXI.Container();
      // create cards
      this.deck = [];
      var spacing = 3;
      var backs = ["cardBack_blue5.png", "cardBack_green5.png", "cardBack_red5.png"];
      var fronts = ["cardClubs2.png","cardClubs3.png","cardClubs4.png","cardClubs5.png","cardClubs6.png","cardClubs7.png","cardClubs8.png","cardClubs9.png","cardClubs10.png","cardClubsA.png","cardClubsJ.png","cardClubsK.png","cardClubsQ.png","cardDiamonds2.png","cardDiamonds3.png","cardDiamonds4.png","cardDiamonds5.png","cardDiamonds6.png","cardDiamonds7.png","cardDiamonds8.png","cardDiamonds9.png","cardDiamonds10.png","cardDiamondsA.png","cardDiamondsJ.png","cardDiamondsK.png","cardDiamondsQ.png","cardHearts2.png","cardHearts3.png","cardHearts4.png","cardHearts5.png","cardHearts6.png","cardHearts7.png","cardHearts8.png","cardHearts9.png","cardHearts10.png","cardHeartsA.png","cardHeartsJ.png","cardHeartsK.png","cardHeartsQ.png","cardJoker.png","cardSpades2.png","cardSpades3.png","cardSpades4.png","cardSpades5.png","cardSpades6.png","cardSpades7.png","cardSpades8.png","cardSpades9.png","cardSpades10.png","cardSpadesA.png","cardSpadesJ.png","cardSpadesK.png","cardSpadesQ.png"];
      for (var i = 0; i < this.deck_size; i++) {
          var back = PIXI.Texture.fromImage(backs[Math.floor(Math.random()*(backs.length-0.1))]);
          var front = PIXI.Texture.fromImage(fronts[Math.floor(Math.random()*(fronts.length-0.1))]);
          var card = new FlippableSprite(front, back)
          card.flip_rotation = 0;
          card.flip_time = this.card_anim_speed;
          card.flip_scale = true;
          card.scale.x = 0.6;
          card.scale.y = 0.6;
          card.flip_slide_x = 200;
          card.flip_slide_y = 20;
          card.x = BaseApp.instance.renderer.width/2 - 100;// + i*spacing;
          card.y = BaseApp.instance.renderer.height/2 + (this.deck_size/2) * spacing - i*spacing;
          this.deck.push(card);
          card.interactive = false;
          this.container.addChild(card);
      }
      this.card_counter = this.card_delay;
      this.card_index = -1;
      this.card_start_time = performance.now();
      this.ticker.start();
      this.ticker.add(this.onTick);

      //create back option
      var menu_bg = new PIXI.Graphics();
      menu_bg.beginFill(0xEEEEEE);
      menu_bg.lineStyle(2, 0xddddfF, 1);
      menu_bg.drawRoundedRect(100, 100, 200, 100, 5);
      menu_bg.endFill();

      var main_menu_btn = new SimpleButton('Back', 0x00a9ff, 0x99d9ff, 0x0066aa, 150,  50, 3);
      main_menu_btn.x = 125;
      main_menu_btn.y = 125;
      menu_bg.addChild(main_menu_btn);
      main_menu_btn.setClickCallback(this.backToMenu);
      main_menu_btn.activate();
      this.container.addChild(menu_bg);
      BaseApp.instance.stage.addChild(this.container);
      console.log("Card Level created successfully.");
  }
  backToMenu() {
      BaseApp.instance.changeLevel("MainMenu");
  }
  destroyLevel() {
      this.deck = []
      this.ticker.stop();
      this.ticker.remove(this.onTick);
      this.container.destroy({children:true});
  }
  onTick = (delta:number) => {
    this.card_counter += this.ticker.elapsedMS;
    //console.log("Ticking... ",this.card_counter," index: "+this.card_index);
    if (this.card_counter >= this.card_delay) {
        this.card_counter = 0.0;
        // move current card to the back.
        if (this.card_index >= 0)
            this.container.setChildIndex(this.deck[this.deck.length-this.card_index-1],this.card_index);
        this.card_index ++;
        if (this.card_index == this.deck.length){
            this.ticker.stop();
            //The End
            console.log("Card animation completed in ",performance.now() - this.card_start_time," ms");
            return;
        }
        this.deck[this.deck.length-this.card_index-1].flip();
    }
  }
}

export class FastCardsLevel extends CardsLevel {
    level_name = "FastCards";
    card_delay = 100;
    card_anim_speed = 300;
}