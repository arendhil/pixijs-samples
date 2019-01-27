/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cards_levels.ts":
/*!*****************************!*\
  !*** ./src/cards_levels.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var support_1 = __webpack_require__(/*! ./support */ "./src/support.ts");
var main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
var CardsLevel = /** @class */ (function () {
    function CardsLevel() {
        var _this = this;
        this.level_name = "Cards";
        this.deck_size = 144;
        this.card_index = 0;
        this.card_delay = 1000;
        this.card_anim_speed = 2000;
        this.card_counter = 0.0;
        this.card_start_time = 0.0;
        this.onTick = function (delta) {
            _this.card_counter += _this.ticker.elapsedMS;
            //console.log("Ticking... ",this.card_counter," index: "+this.card_index);
            if (_this.card_counter >= _this.card_delay) {
                _this.card_counter = 0.0;
                // move current card to the back.
                if (_this.card_index >= 0)
                    _this.container.setChildIndex(_this.deck[_this.deck.length - _this.card_index - 1], _this.card_index);
                _this.card_index++;
                if (_this.card_index == _this.deck.length) {
                    _this.ticker.stop();
                    //The End
                    console.log("Card animation completed in ", performance.now() - _this.card_start_time, " ms");
                    return;
                }
                _this.deck[_this.deck.length - _this.card_index - 1].flip();
            }
        };
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.autoStart = false;
    }
    CardsLevel.prototype.createLevel = function () {
        console.log("Card Level creation started.");
        this.container = new PIXI.Container();
        // create cards
        this.deck = [];
        var spacing = 3;
        var backs = ["cardBack_blue5.png", "cardBack_green5.png", "cardBack_red5.png"];
        var fronts = ["cardClubs2.png", "cardClubs3.png", "cardClubs4.png", "cardClubs5.png", "cardClubs6.png", "cardClubs7.png", "cardClubs8.png", "cardClubs9.png", "cardClubs10.png", "cardClubsA.png", "cardClubsJ.png", "cardClubsK.png", "cardClubsQ.png", "cardDiamonds2.png", "cardDiamonds3.png", "cardDiamonds4.png", "cardDiamonds5.png", "cardDiamonds6.png", "cardDiamonds7.png", "cardDiamonds8.png", "cardDiamonds9.png", "cardDiamonds10.png", "cardDiamondsA.png", "cardDiamondsJ.png", "cardDiamondsK.png", "cardDiamondsQ.png", "cardHearts2.png", "cardHearts3.png", "cardHearts4.png", "cardHearts5.png", "cardHearts6.png", "cardHearts7.png", "cardHearts8.png", "cardHearts9.png", "cardHearts10.png", "cardHeartsA.png", "cardHeartsJ.png", "cardHeartsK.png", "cardHeartsQ.png", "cardJoker.png", "cardSpades2.png", "cardSpades3.png", "cardSpades4.png", "cardSpades5.png", "cardSpades6.png", "cardSpades7.png", "cardSpades8.png", "cardSpades9.png", "cardSpades10.png", "cardSpadesA.png", "cardSpadesJ.png", "cardSpadesK.png", "cardSpadesQ.png"];
        for (var i = 0; i < this.deck_size; i++) {
            var back = PIXI.Texture.fromImage(backs[Math.floor(Math.random() * (backs.length - 0.1))]);
            var front = PIXI.Texture.fromImage(fronts[Math.floor(Math.random() * (fronts.length - 0.1))]);
            var card = new support_1.FlippableSprite(front, back);
            card.flip_rotation = 0;
            card.flip_time = this.card_anim_speed;
            card.flip_scale = true;
            card.scale.x = 0.6;
            card.scale.y = 0.6;
            card.flip_slide_x = 200;
            card.flip_slide_y = 20;
            card.x = main_1.BaseApp.instance.renderer.width / 2 - 100; // + i*spacing;
            card.y = main_1.BaseApp.instance.renderer.height / 2 + (this.deck_size / 2) * spacing - i * spacing;
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
        var main_menu_btn = new support_1.SimpleButton('Back', 0x00a9ff, 0x99d9ff, 0x0066aa, 150, 50, 3);
        main_menu_btn.x = 125;
        main_menu_btn.y = 125;
        menu_bg.addChild(main_menu_btn);
        main_menu_btn.setClickCallback(this.backToMenu);
        main_menu_btn.activate();
        this.container.addChild(menu_bg);
        main_1.BaseApp.instance.stage.addChild(this.container);
        console.log("Card Level created successfully.");
    };
    CardsLevel.prototype.backToMenu = function () {
        main_1.BaseApp.instance.changeLevel("MainMenu");
    };
    CardsLevel.prototype.destroyLevel = function () {
        this.deck = [];
        this.ticker.stop();
        this.ticker.remove(this.onTick);
        this.container.destroy({ children: true });
    };
    return CardsLevel;
}());
exports.CardsLevel = CardsLevel;
var FastCardsLevel = /** @class */ (function (_super) {
    __extends(FastCardsLevel, _super);
    function FastCardsLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level_name = "FastCards";
        _this.card_delay = 100;
        _this.card_anim_speed = 300;
        return _this;
    }
    return FastCardsLevel;
}(CardsLevel));
exports.FastCardsLevel = FastCardsLevel;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var cards_levels_1 = __webpack_require__(/*! ./cards_levels */ "./src/cards_levels.ts");
var text_image_level_1 = __webpack_require__(/*! ./text_image_level */ "./src/text_image_level.ts");
var main_menu_1 = __webpack_require__(/*! ./main_menu */ "./src/main_menu.ts");
var BaseApp = /** @class */ (function (_super) {
    __extends(BaseApp, _super);
    function BaseApp() {
        var _this = _super.call(this, window.innerWidth, window.innerHeight, { transparent: true }) || this;
        _this.renderFPS = function (delta) {
            if (_this.fps_text == null) {
                var style = {
                    font: 'bold 16px Arial',
                    fill: '#F7EDCA',
                    stroke: '#4a1850',
                    strokeThickness: 5
                };
                _this.fps_text = new PIXI.Text("FPS=60", style);
                _this.stage.addChild(_this.fps_text);
            }
            _this.fps_text.x = app.renderer.width - 15 - _this.fps_text.width;
            _this.fps_text.y = 10;
            _this.fps_text.text = "FPS = " + Math.round(_this.ticker.FPS);
        };
        if (BaseApp.instance) {
            //game already running
            _this.destroy(true);
        }
        else {
            //initialization
            document.body.appendChild(_this.view);
            window.addEventListener("resize", function () {
                app.renderer.resize(window.innerWidth, window.innerHeight);
            });
            _this.ticker.add(_this.renderFPS);
            BaseApp.instance = _this;
            _this.available_levels = [];
            var hub = new main_menu_1.MainMenu();
            _this.available_levels.push(hub);
            for (var _i = 0, _a = [new cards_levels_1.CardsLevel(), new cards_levels_1.FastCardsLevel(), new text_image_level_1.TextImageLevel()]; _i < _a.length; _i++) {
                var level = _a[_i];
                _this.available_levels.push(level);
            }
            //first level
            _this.current_level = hub;
            hub.createLevel();
        }
        return _this;
    }
    BaseApp.prototype.changeLevel = function (level_name) {
        console.log("Switching from ", this.current_level.level_name, " to ", level_name);
        for (var _i = 0, _a = this.available_levels; _i < _a.length; _i++) {
            var level = _a[_i];
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
        console.error("No level found with name: " + level_name + ". Cannot change level!");
    };
    return BaseApp;
}(PIXI.Application));
exports.BaseApp = BaseApp;
var app = new BaseApp();


/***/ }),

/***/ "./src/main_menu.ts":
/*!**************************!*\
  !*** ./src/main_menu.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var support_1 = __webpack_require__(/*! ./support */ "./src/support.ts");
var main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        var _this = this;
        this.level_name = "MainMenu";
        this.loadCoin = function () {
            _this.coin = new support_1.FlippableSprite(PIXI.Texture.fromImage('chipGreenWhite_sideBorder.png'));
            _this.coin.flip_slide_y = 100;
            _this.coin.flip_rotation = Math.PI * 2;
            _this.coin.flip_slide_x = 0;
            _this.coin.flip_scale = false;
            _this.coin.x = main_1.BaseApp.instance.renderer.width / 2;
            _this.coin.y = main_1.BaseApp.instance.renderer.height / 2;
            _this.container.addChild(_this.coin);
            var coin2 = new support_1.FlippableSprite(PIXI.Texture.fromImage('chipGreenWhite_sideBorder.png'));
            coin2.flip_slide_y = 100;
            coin2.flip_rotation = Math.PI * 2;
            coin2.flip_slide_x = 0;
            coin2.flip_scale = false;
            coin2.flip_time = 500;
            coin2.x = main_1.BaseApp.instance.renderer.width / 2 - 80;
            coin2.y = main_1.BaseApp.instance.renderer.height / 2;
            _this.container.addChild(coin2);
            var style = {
                font: 'bold 18px Arial',
                fill: 0xFFFFFF,
            };
            var text = new PIXI.Text("Click me!", style);
            text.x = _this.coin.x - text.width / 2;
            text.y = _this.coin.y + 30;
            _this.container.addChild(text);
        };
        this.container = new PIXI.Container();
        this.container.x = 100;
        this.container.y = 100;
        var menu_bg = new PIXI.Graphics();
        menu_bg.beginFill(0xEEEEEE);
        menu_bg.lineStyle(2, 0xddddfF, 1);
        menu_bg.drawRoundedRect(0, 0, 200, 325, 5);
        menu_bg.endFill();
        var teste_cartas = new support_1.SimpleButton('Cards', 0x00a9ff, 0x99d9ff, 0x0066aa, 150, 50, 3);
        teste_cartas.x = 25;
        teste_cartas.y = 25;
        menu_bg.addChild(teste_cartas);
        teste_cartas.setClickCallback(this.enterCards);
        var teste_fast_cartas = new support_1.SimpleButton('(Fast) Cards', 0x00a9ff, 0x99d9ff, 0x0066aa, 150, 50, 3);
        teste_fast_cartas.x = 25;
        teste_fast_cartas.y = teste_cartas.y + teste_cartas.height + 25;
        menu_bg.addChild(teste_fast_cartas);
        teste_fast_cartas.setClickCallback(this.enterFastCards);
        var teste_text = new support_1.SimpleButton('Text + Image', 0x00a9ff, 0x99d9ff, 0x0066aa, 150, 50, 3);
        teste_text.x = 25;
        teste_text.y = teste_fast_cartas.y + teste_fast_cartas.height + 25;
        menu_bg.addChild(teste_text);
        teste_text.setClickCallback(this.enterTextImage);
        var teste_particles = new support_1.SimpleButton('Particles', 0x00a9ff, 0x99d9ff, 0x0066aa, 150, 50, 3);
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
            font: 'italic 18px Arial',
            fill: 0xFFFFFF,
            align: 'right'
        };
        var text = new PIXI.Text("Game Development Test\nMarcelo F. Rigon\nUsing: Pixi.JS, Typescript, webpack and NPM\nAssets: kenney.nl", style);
        text.x = main_1.BaseApp.instance.renderer.width / 2 + text.width - this.container.x;
        text.y = 0;
        this.container.addChild(text);
    }
    MainMenu.prototype.createLevel = function () {
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            button.activate();
        }
        if (this.coin)
            this.coin.interactive = true;
        main_1.BaseApp.instance.stage.addChild(this.container);
    };
    MainMenu.prototype.destroyLevel = function () {
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            button.deactivate();
        }
        if (this.coin)
            this.coin.interactive = false;
        main_1.BaseApp.instance.stage.removeChild(this.container);
    };
    MainMenu.prototype.enterCards = function () {
        main_1.BaseApp.instance.changeLevel("Cards");
    };
    MainMenu.prototype.enterFastCards = function () {
        main_1.BaseApp.instance.changeLevel("FastCards");
    };
    MainMenu.prototype.enterTextImage = function () {
        main_1.BaseApp.instance.changeLevel("TextImage");
    };
    MainMenu.prototype.enterParticles = function () {
        main_1.BaseApp.instance.changeLevel("Particles");
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;


/***/ }),

/***/ "./src/support.ts":
/*!************************!*\
  !*** ./src/support.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var SimpleButton = /** @class */ (function (_super) {
    __extends(SimpleButton, _super);
    function SimpleButton(label, normal_color, hover_color, border_color, width, height, radius) {
        var _this = _super.call(this) || this;
        _this.onHover = function () {
            _this.clear();
            _this.drawButton(_this.hover_color);
        };
        _this.onExit = function () {
            _this.clear();
            _this.drawButton(_this.normal_color);
        };
        _this.onClick = function () {
            if (_this.click_callback)
                _this.click_callback();
        };
        _this.w = width;
        _this.h = height;
        _this.label = label;
        _this.normal_color = normal_color;
        _this.hover_color = hover_color;
        _this.border_color = border_color;
        _this.border_radius = radius;
        _this.drawText();
        _this.interactive = true;
        _this.buttonMode = true;
        _this.drawButton(_this.normal_color);
        return _this;
    }
    SimpleButton.prototype.drawButton = function (color) {
        this.beginFill(color);
        this.lineStyle(this.border_radius, this.border_color, 1);
        this.drawRoundedRect(0, 0, this.w, this.h, 3);
        this.endFill();
    };
    SimpleButton.prototype.drawText = function () {
        var style = {
            font: 'bold 18px Arial',
            fill: 0xFFFFFF,
            align: 'center',
            stroke: this.border_color,
            strokeThickness: 5
        };
        var text = new PIXI.Text(this.label, style);
        this.addChild(text);
        text.x = this.w / 2 - text.width / 2;
        text.y = this.h / 2 - text.height / 2;
    };
    SimpleButton.prototype.setClickCallback = function (callback) {
        this.click_callback = callback;
    };
    SimpleButton.prototype.activate = function () {
        this.on('click', this.onClick);
        this.on('tap', this.onClick);
        this.on('pointerover', this.onHover);
        this.on('touchstart', this.onHover);
        this.on('pointerout', this.onExit);
        this.on('touchendoutside', this.onExit);
        this.on('touchend', this.onExit);
    };
    SimpleButton.prototype.deactivate = function () {
        this.removeAllListeners();
    };
    return SimpleButton;
}(PIXI.Graphics));
exports.SimpleButton = SimpleButton;
var FlippableSprite = /** @class */ (function (_super) {
    __extends(FlippableSprite, _super);
    function FlippableSprite(texture, backface) {
        var _this = _super.call(this, texture) || this;
        _this.flip_time = 2000;
        _this.flip_height = 10.0;
        _this.flip_slide_x = 100.0;
        _this.flip_rotation = 0.0;
        _this.flip_slide_y = 0.0;
        _this.flip_scale = true;
        _this.base_scale = 1.0;
        _this.side = 0;
        _this.flip_counter = 0.0;
        _this.flip = function () {
            //console.log("Started flip.");
            _this.interactive = false;
            _this.flip_counter = 0.0;
            _this.ticker.start();
            _this.base_scale = _this.scale.x;
            _this.orig_x = _this.x;
            _this.orig_y = _this.y;
            _this.side = (_this.side + 1) % _this.sides.length;
            _this.ticker.add(_this.flipLogic);
        };
        _this.flipLogic = function (delta) {
            _this.flip_counter += _this.ticker.elapsedMS * _this.ticker.speed;
            var perc = _this.flip_counter / _this.flip_time;
            //console.log(this.ticker.elapsedMS," - ", this.flip_counter);
            //x
            if (_this.flip_slide_x != 0.0) {
                _this.x = lerp(_this.orig_x, _this.orig_x + _this.flip_slide_x, perc);
            }
            //rot
            if (_this.flip_rotation != 0.0) {
                _this.rotation = lerp(0, _this.flip_rotation, perc);
            }
            //y
            if (perc <= 0.5) {
                //going up and shrinking
                if (_this.flip_slide_y != 0)
                    _this.y = lerp(_this.orig_y, _this.orig_y - _this.flip_slide_y, Math.sqrt(perc * 2));
                if (_this.flip_scale)
                    _this.scale.x = lerp(_this.base_scale, 0.1, perc * 2);
            }
            else {
                _this.texture = _this.sides[_this.side];
                //going down and expanding
                if (_this.flip_slide_y != 0)
                    _this.y = lerp(_this.orig_y - _this.flip_slide_y, _this.orig_y, Math.pow(perc * 2 - 1.0, 2));
                if (_this.flip_scale)
                    _this.scale.x = lerp(0.1, _this.base_scale, perc * 2 - 1.0);
            }
            if (_this.flip_counter >= _this.flip_time) {
                if (_this.flip_scale)
                    _this.scale.x = _this.base_scale;
                _this.rotation = _this.flip_rotation;
                _this.x = _this.orig_x + _this.flip_slide_x;
                _this.y = _this.orig_y;
                _this.ticker.remove(_this.flipLogic);
                _this.ticker.stop();
                _this.interactive = true;
                //this.rotation = 0;
            }
        };
        _this.ticker = new PIXI.ticker.Ticker();
        _this.ticker.autoStart = false;
        _this.ticker.speed = 1.0;
        _this.pivot.x = _this.width / 2;
        _this.pivot.y = _this.height / 2;
        _this.sides = [];
        if (texture)
            _this.sides.push(texture);
        if (backface)
            _this.sides.push(backface);
        _this.interactive = true;
        _this.on('click', _this.flip);
        _this.on('tap', _this.flip);
        return _this;
    }
    return FlippableSprite;
}(PIXI.Sprite));
exports.FlippableSprite = FlippableSprite;
//basic lerp funtion.
function lerp(a1, a2, t) {
    return a1 * (1 - t) + a2 * t;
}
var OutputContent = /** @class */ (function () {
    function OutputContent() {
    }
    return OutputContent;
}());
exports.OutputContent = OutputContent;
var TextImageMixin = /** @class */ (function (_super) {
    __extends(TextImageMixin, _super);
    function TextImageMixin(contentToPrint) {
        var _this = _super.call(this) || this;
        var last_x = 0;
        var last_y = 0;
        for (var _i = 0, contentToPrint_1 = contentToPrint; _i < contentToPrint_1.length; _i++) {
            var content = contentToPrint_1[_i];
            var obj = void 0;
            if (content.type == "Text")
                obj = _this.createText(content);
            else if (content.type == "Image")
                obj = _this.createImage(content);
            else {
                console.warn("TextImageMixin::constructor - Cannot create content of type: ", content.type);
                continue;
            }
            obj.pivot.y = obj.height;
            obj.pivot.x = 0;
            obj.x = last_x;
            obj.y = last_y;
            last_x += obj.width;
            _this.addChild(obj);
        }
        return _this;
    }
    TextImageMixin.prototype.createText = function (content) {
        return new PIXI.Text(content.content, content.options);
    };
    TextImageMixin.prototype.createImage = function (content) {
        return new PIXI.Sprite(PIXI.Texture.fromImage(content.content));
    };
    return TextImageMixin;
}(PIXI.Container));
exports.TextImageMixin = TextImageMixin;
var VanishingObject = /** @class */ (function () {
    function VanishingObject(obj) {
        var _this = this;
        this.time_to_fade = 10000;
        this.fade_time = 1000;
        this.start_time = 0;
        this.fade_counter = 0;
        this.ticTac = function (delta) {
            _this.start_time += _this.ticker.elapsedMS;
            if (_this.start_time > _this.time_to_fade + _this.fade_time) {
                _this.ticker.stop();
                _this.obj.destroy();
            }
            else {
                if (_this.start_time > _this.time_to_fade) {
                    _this.fade_counter += _this.ticker.elapsedMS;
                    var alpha = lerp(1.0, 0.0, _this.fade_counter / _this.fade_time);
                    _this.obj.alpha = alpha;
                    _this.obj.children.forEach(function (child) {
                        child.alpha = alpha;
                    });
                }
            }
        };
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.autoStart = true;
        this.ticker.start();
        this.ticker.add(this.ticTac);
        this.obj = obj;
        this.fade_counter = 0;
        this.start_time = 0;
    }
    return VanishingObject;
}());
exports.VanishingObject = VanishingObject;


/***/ }),

/***/ "./src/text_image_level.ts":
/*!*********************************!*\
  !*** ./src/text_image_level.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var TOOLS = __webpack_require__(/*! ./support */ "./src/support.ts");
var main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
var TextImageLevel = /** @class */ (function () {
    function TextImageLevel() {
        var _this = this;
        this.level_name = "TextImage";
        this.time_to_create = 500;
        this.counter = 0;
        this.max_font_size = 30;
        this.min_font_size = 12;
        this.content_size = 3;
        this.onTick = function () {
            _this.counter += _this.ticker.elapsedMS;
            if (_this.counter > _this.time_to_create) {
                _this.createRandom();
                _this.counter = 0;
            }
        };
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.autoStart = false;
        this.ticker.stop();
        this.images_name_array = ["pieceWhite_border00.png", "pieceWhite_border01.png", "pieceWhite_border02.png", "pieceWhite_border03.png", "pieceWhite_border04.png", "pieceWhite_border05.png", "pieceWhite_border06.png", "pieceWhite_border07.png", "pieceWhite_border08.png", "pieceWhite_border09.png", "pieceWhite_border10.png", "pieceWhite_border11.png", "pieceWhite_border12.png", "pieceWhite_border13.png", "pieceWhite_border14.png", "pieceWhite_border15.png", "pieceWhite_border16.png", "pieceWhite_border17.png", "pieceWhite_border18.png"];
    }
    TextImageLevel.prototype.createLevel = function () {
        console.log("Text + Image creation started.");
        this.container = new PIXI.Container();
        main_1.BaseApp.instance.stage.addChild(this.container);
        this.ticker.add(this.onTick);
        this.ticker.start();
        //create back option
        var menu_bg = new PIXI.Graphics();
        menu_bg.beginFill(0xEEEEEE);
        menu_bg.lineStyle(2, 0xddddfF, 1);
        menu_bg.drawRoundedRect(100, 100, 200, 100, 5);
        menu_bg.endFill();
        var main_menu_btn = new TOOLS.SimpleButton('Back', 0x00a9ff, 0x99d9ff, 0x0066aa, 150, 50, 3);
        main_menu_btn.x = 125;
        main_menu_btn.y = 125;
        menu_bg.addChild(main_menu_btn);
        main_menu_btn.setClickCallback(this.backToMenu);
        main_menu_btn.activate();
        this.container.addChild(menu_bg);
        this.counter = this.time_to_create;
    };
    TextImageLevel.prototype.backToMenu = function () {
        main_1.BaseApp.instance.changeLevel("MainMenu");
    };
    TextImageLevel.prototype.destroyLevel = function () {
        this.container.destroy({ children: true });
        this.ticker.stop();
    };
    TextImageLevel.prototype.createRandom = function () {
        var content = [];
        for (var i = 0; i < this.content_size; i++) {
            var chance = Math.random();
            var new_content = new TOOLS.OutputContent();
            if (chance > 0.5) {
                //Text
                new_content.type = "Text";
                var style = new PIXI.TextStyle({
                    fontSize: Math.random() * (this.max_font_size - this.min_font_size) + this.min_font_size,
                    fontFamily: "Arial",
                    fill: "#FFFFFF"
                });
                if (chance < 0.1)
                    style.fontWeight = "bold";
                if (chance > 0.4)
                    style.fontStyle = "italic";
                if (chance > 0.75) {
                    if (chance < 0.85)
                        style.fill = 0x333333;
                    else if (chance < 0.95)
                        style.fill = 0x666666;
                    else if (chance > 0.95)
                        style.fill = [0x000000, 0x0033a9];
                }
                new_content.content = "Ahoy!";
                new_content.options = style;
            }
            else {
                //Image
                new_content.type = "Image";
                new_content.content = this.images_name_array[Math.floor(Math.random() * (this.images_name_array.length - 0.1))];
            }
            content.push(new_content);
        }
        //Meta-data OK, real creation.
        var new_obj = new TOOLS.TextImageMixin(content);
        new_obj.x = 300 + Math.random() * (main_1.BaseApp.instance.renderer.width - 350 - new_obj.width);
        new_obj.y = 50 + Math.random() * (main_1.BaseApp.instance.renderer.height - 200 - new_obj.height);
        //obj to vanish after some time.
        new TOOLS.VanishingObject(new_obj);
        this.container.addChild(new_obj);
    };
    return TextImageLevel;
}());
exports.TextImageLevel = TextImageLevel;


/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzX2xldmVscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbl9tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9zdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0X2ltYWdlX2xldmVsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlBJWElcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLHlEQUFnQztBQUNoQyx5RUFBbUU7QUFDbkUsZ0VBQStCO0FBRS9CO0lBV0U7UUFBQSxpQkFHQztRQWJELGVBQVUsR0FBVSxPQUFPLENBQUM7UUFFWCxjQUFTLEdBQVUsR0FBRyxDQUFDO1FBR2hDLGVBQVUs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TyxDQUFDO2dCQUMzQixXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9HO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQjtRQUNELDhCQUE4QjtRQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsY0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEYsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsY0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekYsZ0NBQWdDO1FBQ2hDLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDO0FBakdZLHdDQUFjOzs7Ozs7Ozs7Ozs7QUNKM0Isc0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7U2ltcGxlQnV0dG9uLCBGbGlwcGFibGVTcHJpdGUsIEdhbWVMZXZlbH0gZnJvbSAnLi9zdXBwb3J0JztcclxuaW1wb3J0IHtCYXNlQXBwfSBmcm9tICcuL21haW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRzTGV2ZWwgaW1wbGVtZW50cyAgR2FtZUxldmVsIHtcclxuICBsZXZlbF9uYW1lOnN0cmluZyA9IFwiQ2FyZHNcIjtcclxuICBjb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVja19zaXplOm51bWJlciA9IDE0NDtcclxuICBwcml2YXRlIGRlY2s6RmxpcHBhYmxlU3ByaXRlW107XHJcbiAgcHJpdmF0ZSB0aWNrZXI6UElYSS50aWNrZXIuVGlja2VyO1xyXG4gIHByaXZhdGUgY2FyZF9pbmRleDpudW1iZXIgPSAwO1xyXG4gIGNhcmRfZGVsYXk6bnVtYmVyID0gMTAwMDtcclxuICBjYXJkX2FuaW1fc3BlZWQ6bnVtYmVyID0gMjAwMDtcclxuICBwcml2YXRlIGNhcmRfY291bnRlcjpudW1iZXIgPSAwLjA7XHJcbiAgcHJpdmF0ZSBjYXJkX3N0YXJ0X3RpbWU6bnVtYmVyID0gMC4wO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLnRpY2tlci5UaWNrZXIoKTtcclxuICAgICAgdGhpcy50aWNrZXIuYXV0b1N0YXJ0ID0gZmFsc2U7XHJcbiAgfVxyXG4gIGNyZWF0ZUxldmVsKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcmQgTGV2ZWwgY3JlYXRpb24gc3RhcnRlZC5cIik7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICAgIC8vIGNyZWF0ZSBjYXJkc1xyXG4gICAgICB0aGlzLmRlY2sgPSBbXTtcclxuICAgICAgdmFyIHNwYWNpbmcgPSAzO1xyXG4gICAgICB2YXIgYmFja3MgPSBbXCJjYXJkQmFja19ibHVlNS5wbmdcIiwgXCJjYXJkQmFja19ncmVlbjUucG5nXCIsIFwiY2FyZEJhY2tfcmVkNS5wbmdcIl07XHJcbiAgICAgIHZhciBmcm9udHMgPSBbXCJjYXJkQ2x1YnMyLnBuZ1wiLFwiY2FyZENsdWJzMy5wbmdcIixcImNhcmRDbHViczQucG5nXCIsXCJjYXJkQ2x1YnM1LnBuZ1wiLFwiY2FyZENsdWJzNi5wbmdcIixcImNhcmRDbHViczcucG5nXCIsXCJjYXJkQ2x1YnM4LnBuZ1wiLFwiY2FyZENsdWJzOS5wbmdcIixcImNhcmRDbHViczEwLnBuZ1wiLFwiY2FyZENsdWJzQS5wbmdcIixcImNhcmRDbHVic0oucG5nXCIsXCJjYXJkQ2x1YnNLLnBuZ1wiLFwiY2FyZENsdWJzUS5wbmdcIixcImNhcmREaWFtb25kczIucG5nXCIsXCJjYXJkRGlhbW9uZHMzLnBuZ1wiLFwiY2FyZERpYW1vbmRzNC5wbmdcIixcImNhcmREaWFtb25kczUucG5nXCIsXCJjYXJkRGlhbW9uZHM2LnBuZ1wiLFwiY2FyZERpYW1vbmRzNy5wbmdcIixcImNhcmREaWFtb25kczgucG5nXCIsXCJjYXJkRGlhbW9uZHM5LnBuZ1wiLFwiY2FyZERpYW1vbmRzMTAucG5nXCIsXCJjYXJkRGlhbW9uZHNBLnBuZ1wiLFwiY2FyZERpYW1vbmRzSi5wbmdcIixcImNhcmREaWFtb25kc0sucG5nXCIsXCJjYXJkRGlhbW9uZHNRLnBuZ1wiLFwiY2FyZEhlYXJ0czIucG5nXCIsXCJjYXJkSGVhcnRzMy5wbmdcIixcImNhcmRIZWFydHM0LnBuZ1wiLFwiY2FyZEhlYXJ0czUucG5nXCIsXCJjYXJkSGVhcnRzNi5wbmdcIixcImNhcmRIZWFydHM3LnBuZ1wiLFwiY2FyZEhlYXJ0czgucG5nXCIsXCJjYXJkSGVhcnRzOS5wbmdcIixcImNhcmRIZWFydHMxMC5wbmdcIixcImNhcmRIZWFydHNBLnBuZ1wiLFwiY2FyZEhlYXJ0c0oucG5nXCIsXCJjYXJkSGVhcnRzSy5wbmdcIixcImNhcmRIZWFydHNRLnBuZ1wiLFwiY2FyZEpva2VyLnBuZ1wiLFwiY2FyZFNwYWRlczIucG5nXCIsXCJjYXJkU3BhZGVzMy5wbmdcIixcImNhcmRTcGFkZXM0LnBuZ1wiLFwiY2FyZFNwYWRlczUucG5nXCIsXCJjYXJkU3BhZGVzNi5wbmdcIixcImNhcmRTcGFkZXM3LnBuZ1wiLFwiY2FyZFNwYWRlczgucG5nXCIsXCJjYXJkU3BhZGVzOS5wbmdcIixcImNhcmRTcGFkZXMxMC5wbmdcIixcImNhcmRTcGFkZXNBLnBuZ1wiLFwiY2FyZFNwYWRlc0oucG5nXCIsXCJjYXJkU3BhZGVzSy5wbmdcIixcImNhcmRTcGFkZXNRLnBuZ1wiXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRlY2tfc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgYmFjayA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoYmFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihiYWNrcy5sZW5ndGgtMC4xKSldKTtcclxuICAgICAgICAgIHZhciBmcm9udCA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoZnJvbnRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooZnJvbnRzLmxlbmd0aC0wLjEpKV0pO1xyXG4gICAgICAgICAgdmFyIGNhcmQgPSBuZXcgRmxpcHBhYmxlU3ByaXRlKGZyb250LCBiYWNrKVxyXG4gICAgICAgICAgY2FyZC5mbGlwX3JvdGF0aW9uID0gMDtcclxuICAgICAgICAgIGNhcmQuZmxpcF90aW1lID0gdGhpcy5jYXJkX2FuaW1fc3BlZWQ7XHJcbiAgICAgICAgICBjYXJkLmZsaXBfc2NhbGUgPSB0cnVlO1xyXG4gICAgICAgICAgY2FyZC5zY2FsZS54ID0gMC42O1xyXG4gICAgICAgICAgY2FyZC5zY2FsZS55ID0gMC42O1xyXG4gICAgICAgICAgY2FyZC5mbGlwX3NsaWRlX3ggPSAyMDA7XHJcbiAgICAgICAgICBjYXJkLmZsaXBfc2xpZGVfeSA9IDIwO1xyXG4gICAgICAgICAgY2FyZC54ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC8yIC0gMTAwOy8vICsgaSpzcGFjaW5nO1xyXG4gICAgICAgICAgY2FyZC55ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQvMiArICh0aGlzLmRlY2tfc2l6ZS8yKSAqIHNwYWNpbmcgLSBpKnNwYWNpbmc7XHJcbiAgICAgICAgICB0aGlzLmRlY2sucHVzaChjYXJkKTtcclxuICAgICAgICAgIGNhcmQuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGNhcmQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2FyZF9jb3VudGVyID0gdGhpcy5jYXJkX2RlbGF5O1xyXG4gICAgICB0aGlzLmNhcmRfaW5kZXggPSAtMTtcclxuICAgICAgdGhpcy5jYXJkX3N0YXJ0X3RpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgdGhpcy50aWNrZXIuc3RhcnQoKTtcclxuICAgICAgdGhpcy50aWNrZXIuYWRkKHRoaXMub25UaWNrKTtcclxuXHJcbiAgICAgIC8vY3JlYXRlIGJhY2sgb3B0aW9uXHJcbiAgICAgIHZhciBtZW51X2JnID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgbWVudV9iZy5iZWdpbkZpbGwoMHhFRUVFRUUpO1xyXG4gICAgICBtZW51X2JnLmxpbmVTdHlsZSgyLCAweGRkZGRmRiwgMSk7XHJcbiAgICAgIG1lbnVfYmcuZHJhd1JvdW5kZWRSZWN0KDEwMCwgMTAwLCAyMDAsIDEwMCwgNSk7XHJcbiAgICAgIG1lbnVfYmcuZW5kRmlsbCgpO1xyXG5cclxuICAgICAgdmFyIG1haW5fbWVudV9idG4gPSBuZXcgU2ltcGxlQnV0dG9uKCdCYWNrJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgICBtYWluX21lbnVfYnRuLnggPSAxMjU7XHJcbiAgICAgIG1haW5fbWVudV9idG4ueSA9IDEyNTtcclxuICAgICAgbWVudV9iZy5hZGRDaGlsZChtYWluX21lbnVfYnRuKTtcclxuICAgICAgbWFpbl9tZW51X2J0bi5zZXRDbGlja0NhbGxiYWNrKHRoaXMuYmFja1RvTWVudSk7XHJcbiAgICAgIG1haW5fbWVudV9idG4uYWN0aXZhdGUoKTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWVudV9iZyk7XHJcbiAgICAgIEJhc2VBcHAuaW5zdGFuY2Uuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcmQgTGV2ZWwgY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCIpO1xyXG4gIH1cclxuICBiYWNrVG9NZW51KCkge1xyXG4gICAgICBCYXNlQXBwLmluc3RhbmNlLmNoYW5nZUxldmVsKFwiTWFpbk1lbnVcIik7XHJcbiAgfVxyXG4gIGRlc3Ryb3lMZXZlbCgpIHtcclxuICAgICAgdGhpcy5kZWNrID0gW11cclxuICAgICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgICB0aGlzLnRpY2tlci5yZW1vdmUodGhpcy5vblRpY2spO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5kZXN0cm95KHtjaGlsZHJlbjp0cnVlfSk7XHJcbiAgfVxyXG4gIG9uVGljayA9IChkZWx0YTpudW1iZXIpID0+IHtcclxuICAgIHRoaXMuY2FyZF9jb3VudGVyICs9IHRoaXMudGlja2VyLmVsYXBzZWRNUztcclxuICAgIC8vY29uc29sZS5sb2coXCJUaWNraW5nLi4uIFwiLHRoaXMuY2FyZF9jb3VudGVyLFwiIGluZGV4OiBcIit0aGlzLmNhcmRfaW5kZXgpO1xyXG4gICAgaWYgKHRoaXMuY2FyZF9jb3VudGVyID49IHRoaXMuY2FyZF9kZWxheSkge1xyXG4gICAgICAgIHRoaXMuY2FyZF9jb3VudGVyID0gMC4wO1xyXG4gICAgICAgIC8vIG1vdmUgY3VycmVudCBjYXJkIHRvIHRoZSBiYWNrLlxyXG4gICAgICAgIGlmICh0aGlzLmNhcmRfaW5kZXggPj0gMClcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc2V0Q2hpbGRJbmRleCh0aGlzLmRlY2tbdGhpcy5kZWNrLmxlbmd0aC10aGlzLmNhcmRfaW5kZXgtMV0sdGhpcy5jYXJkX2luZGV4KTtcclxuICAgICAgICB0aGlzLmNhcmRfaW5kZXggKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZF9pbmRleCA9PSB0aGlzLmRlY2subGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICAvL1RoZSBFbmRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXJkIGFuaW1hdGlvbiBjb21wbGV0ZWQgaW4gXCIscGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmNhcmRfc3RhcnRfdGltZSxcIiBtc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlY2tbdGhpcy5kZWNrLmxlbmd0aC10aGlzLmNhcmRfaW5kZXgtMV0uZmxpcCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhc3RDYXJkc0xldmVsIGV4dGVuZHMgQ2FyZHNMZXZlbCB7XHJcbiAgICBsZXZlbF9uYW1lID0gXCJGYXN0Q2FyZHNcIjtcclxuICAgIGNhcmRfZGVsYXkgPSAxMDA7XHJcbiAgICBjYXJkX2FuaW1fc3BlZWQgPSAzMDA7XHJcbn0iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQgKiBhcyBIVUIgZnJvbSAnLi9zdXBwb3J0JztcclxuaW1wb3J0IHtDYXJkc0xldmVsLCBGYXN0Q2FyZHNMZXZlbH0gZnJvbSAnLi9jYXJkc19sZXZlbHMnO1xyXG5pbXBvcnQge1RleHRJbWFnZUxldmVsfSBmcm9tICcuL3RleHRfaW1hZ2VfbGV2ZWwnO1xyXG5pbXBvcnQge01haW5NZW51fSBmcm9tICcuL21haW5fbWVudSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUFwcCBleHRlbmRzIFBJWEkuQXBwbGljYXRpb24ge1xyXG4gIHN0YXRpYyBpbnN0YW5jZTpCYXNlQXBwO1xyXG4gIGN1cnJlbnRfbGV2ZWw6SFVCLkdhbWVMZXZlbDtcclxuICBmcHNfdGV4dDogYW55O1xyXG4gIHN0YWdlOiBhbnk7XHJcbiAgYXZhaWxhYmxlX2xldmVsczogSFVCLkdhbWVMZXZlbFtdO1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIHt0cmFuc3BhcmVudDp0cnVlfSk7XHJcbiAgICBpZiAoQmFzZUFwcC5pbnN0YW5jZSkge1xyXG4gICAgICAvL2dhbWUgYWxyZWFkeSBydW5uaW5nXHJcbiAgICAgIHRoaXMuZGVzdHJveSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vaW5pdGlhbGl6YXRpb25cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBhcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50aWNrZXIuYWRkKHRoaXMucmVuZGVyRlBTKTtcclxuICAgICAgQmFzZUFwcC5pbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmF2YWlsYWJsZV9sZXZlbHMgPSBbXVxyXG4gICAgICB2YXIgaHViID0gbmV3IE1haW5NZW51KCk7XHJcbiAgICAgIHRoaXMuYXZhaWxhYmxlX2xldmVscy5wdXNoKGh1Yik7XHJcbiAgICAgIGZvciAodmFyIGxldmVsIG9mIFtuZXcgQ2FyZHNMZXZlbCgpLCBuZXcgRmFzdENhcmRzTGV2ZWwoKSwgbmV3IFRleHRJbWFnZUxldmVsKCldKSB7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVfbGV2ZWxzLnB1c2gobGV2ZWwpO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9maXJzdCBsZXZlbFxyXG4gICAgICB0aGlzLmN1cnJlbnRfbGV2ZWwgPSBodWI7XHJcbiAgICAgIGh1Yi5jcmVhdGVMZXZlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJGUFMgPSAoZGVsdGE6bnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodGhpcy5mcHNfdGV4dCA9PSBudWxsKSB7XHJcbiAgICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICBmb250IDogJ2JvbGQgMTZweCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbCA6ICcjRjdFRENBJyxcclxuICAgICAgICBzdHJva2UgOiAnIzRhMTg1MCcsXHJcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzIDogNVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmZwc190ZXh0ID0gbmV3IFBJWEkuVGV4dChcIkZQUz02MFwiLCBzdHlsZSk7XHJcbiAgICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5mcHNfdGV4dCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZwc190ZXh0LnggPSBhcHAucmVuZGVyZXIud2lkdGggLSAxNSAtIHRoaXMuZnBzX3RleHQud2lkdGg7XHJcbiAgICB0aGlzLmZwc190ZXh0LnkgPSAxMDtcclxuICAgIHRoaXMuZnBzX3RleHQudGV4dCA9IFwiRlBTID0gXCIrTWF0aC5yb3VuZCh0aGlzLnRpY2tlci5GUFMpO1xyXG4gIH1cclxuICBjaGFuZ2VMZXZlbChsZXZlbF9uYW1lOnN0cmluZyk6dm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlN3aXRjaGluZyBmcm9tIFwiLCB0aGlzLmN1cnJlbnRfbGV2ZWwubGV2ZWxfbmFtZSwgXCIgdG8gXCIsIGxldmVsX25hbWUpO1xyXG4gICAgZm9yICh2YXIgbGV2ZWwgb2YgdGhpcy5hdmFpbGFibGVfbGV2ZWxzKSB7XHJcbiAgICAgIGlmIChsZXZlbC5sZXZlbF9uYW1lID09PSBsZXZlbF9uYW1lKSB7XHJcbiAgICAgICAgLy9mb3VuZCB0aGUgbGV2ZWwsIHJlbW92ZSBvbGQgb25lXHJcbiAgICAgICAgdGhpcy5jdXJyZW50X2xldmVsLmRlc3Ryb3lMZXZlbCgpO1xyXG4gICAgICAgIC8vdXBkYXRlIGFuZCBjcmVhdGUgdGhlIG5ldyBsZXZlbFxyXG4gICAgICAgIHRoaXMuY3VycmVudF9sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIGxldmVsLmNyZWF0ZUxldmVsKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL25vIGxldmVsIGZvdW5kIHdpdGggdGhhdCBuYW1lLlxyXG4gICAgY29uc29sZS5lcnJvcihcIk5vIGxldmVsIGZvdW5kIHdpdGggbmFtZTogXCIrbGV2ZWxfbmFtZStcIi4gQ2Fubm90IGNoYW5nZSBsZXZlbCFcIik7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgYXBwID0gbmV3IEJhc2VBcHAoKTtcclxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0IHtTaW1wbGVCdXR0b24sIEZsaXBwYWJsZVNwcml0ZSwgR2FtZUxldmVsfSBmcm9tICcuL3N1cHBvcnQnO1xyXG5pbXBvcnQge0Jhc2VBcHB9IGZyb20gJy4vbWFpbic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnUgaW1wbGVtZW50cyBHYW1lTGV2ZWwge1xyXG4gIGxldmVsX25hbWU6c3RyaW5nID0gXCJNYWluTWVudVwiO1xyXG4gIGNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgYnV0dG9uczpTaW1wbGVCdXR0b25bXTtcclxuICBjb2luOkZsaXBwYWJsZVNwcml0ZTtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5jb250YWluZXIueCA9IDEwMDtcclxuICAgIHRoaXMuY29udGFpbmVyLnkgPSAxMDA7XHJcblxyXG4gICAgdmFyIG1lbnVfYmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgbWVudV9iZy5iZWdpbkZpbGwoMHhFRUVFRUUpO1xyXG4gICAgbWVudV9iZy5saW5lU3R5bGUoMiwgMHhkZGRkZkYsIDEpO1xyXG4gICAgbWVudV9iZy5kcmF3Um91bmRlZFJlY3QoMCwgMCwgMjAwLCAzMjUsIDUpO1xyXG4gICAgbWVudV9iZy5lbmRGaWxsKCk7XHJcblxyXG4gICAgdmFyIHRlc3RlX2NhcnRhcyA9IG5ldyBTaW1wbGVCdXR0b24oJ0NhcmRzJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgdGVzdGVfY2FydGFzLnggPSAyNTtcclxuICAgIHRlc3RlX2NhcnRhcy55ID0gMjU7XHJcbiAgICBtZW51X2JnLmFkZENoaWxkKHRlc3RlX2NhcnRhcyk7XHJcbiAgICB0ZXN0ZV9jYXJ0YXMuc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmVudGVyQ2FyZHMpO1xyXG5cclxuICAgIHZhciB0ZXN0ZV9mYXN0X2NhcnRhcyA9IG5ldyBTaW1wbGVCdXR0b24oJyhGYXN0KSBDYXJkcycsIDB4MDBhOWZmLCAweDk5ZDlmZiwgMHgwMDY2YWEsIDE1MCwgIDUwLCAzKTtcclxuICAgIHRlc3RlX2Zhc3RfY2FydGFzLnggPSAyNTtcclxuICAgIHRlc3RlX2Zhc3RfY2FydGFzLnkgPSB0ZXN0ZV9jYXJ0YXMueSArIHRlc3RlX2NhcnRhcy5oZWlnaHQgKyAyNTtcclxuICAgIG1lbnVfYmcuYWRkQ2hpbGQodGVzdGVfZmFzdF9jYXJ0YXMpO1xyXG4gICAgdGVzdGVfZmFzdF9jYXJ0YXMuc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmVudGVyRmFzdENhcmRzKTtcclxuXHJcbiAgICB2YXIgdGVzdGVfdGV4dCA9IG5ldyBTaW1wbGVCdXR0b24oJ1RleHQgKyBJbWFnZScsIDB4MDBhOWZmLCAweDk5ZDlmZiwgMHgwMDY2YWEsIDE1MCwgIDUwLCAzKTtcclxuICAgIHRlc3RlX3RleHQueCA9IDI1O1xyXG4gICAgdGVzdGVfdGV4dC55ID0gdGVzdGVfZmFzdF9jYXJ0YXMueSArIHRlc3RlX2Zhc3RfY2FydGFzLmhlaWdodCArIDI1O1xyXG4gICAgbWVudV9iZy5hZGRDaGlsZCh0ZXN0ZV90ZXh0KTtcclxuICAgIHRlc3RlX3RleHQuc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmVudGVyVGV4dEltYWdlKTtcclxuXHJcbiAgICB2YXIgdGVzdGVfcGFydGljbGVzID0gbmV3IFNpbXBsZUJ1dHRvbignUGFydGljbGVzJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgdGVzdGVfcGFydGljbGVzLnggPSAyNTtcclxuICAgIHRlc3RlX3BhcnRpY2xlcy55ID0gdGVzdGVfdGV4dC55ICsgdGVzdGVfdGV4dC5oZWlnaHQgKyAyNTtcclxuICAgIG1lbnVfYmcuYWRkQ2hpbGQodGVzdGVfcGFydGljbGVzKTtcclxuICAgIHRlc3RlX3BhcnRpY2xlcy5zZXRDbGlja0NhbGxiYWNrKHRoaXMuZW50ZXJQYXJ0aWNsZXMpO1xyXG5cclxuICAgIHRoaXMuYnV0dG9ucyA9IFt0ZXN0ZV9jYXJ0YXMsIHRlc3RlX3RleHQsIHRlc3RlX3BhcnRpY2xlcywgdGVzdGVfZmFzdF9jYXJ0YXNdO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWVudV9iZyk7XHJcbiAgICBQSVhJLmxvYWRlclxyXG4gICAgICAgIC5hZGQoJ2Z1bGxfc3ByaXRlcy5qc29uJylcclxuICAgICAgICAuYWRkKCdwYXJ0aWNsZVBhY2suanNvbicpXHJcbiAgICAgICAgLmxvYWQodGhpcy5sb2FkQ29pbik7XHJcblxyXG4gICAgLy9leHRyYSBUZXh0XHJcbiAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udCA6ICdpdGFsaWMgMThweCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbCA6IDB4RkZGRkZGLFxyXG4gICAgICAgIGFsaWduOiAncmlnaHQnXHJcbiAgICB9XHJcbiAgICB2YXIgdGV4dCA9IG5ldyBQSVhJLlRleHQoXCJHYW1lIERldmVsb3BtZW50IFRlc3RcXG5NYXJjZWxvIEYuIFJpZ29uXFxuVXNpbmc6IFBpeGkuSlMsIFR5cGVzY3JpcHQsIHdlYnBhY2sgYW5kIE5QTVxcbkFzc2V0czoga2VubmV5Lm5sXCIsIHN0eWxlKTtcclxuICAgIHRleHQueCA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIud2lkdGgvMiArIHRleHQud2lkdGggLSB0aGlzLmNvbnRhaW5lci54O1xyXG4gICAgdGV4dC55ID0gMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRleHQpO1xyXG5cclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkQ29pbiA9ICgpOnZvaWQgPT4ge1xyXG4gICAgdGhpcy5jb2luID0gbmV3IEZsaXBwYWJsZVNwcml0ZShQSVhJLlRleHR1cmUuZnJvbUltYWdlKCdjaGlwR3JlZW5XaGl0ZV9zaWRlQm9yZGVyLnBuZycpKTtcclxuICAgIHRoaXMuY29pbi5mbGlwX3NsaWRlX3kgPSAxMDA7XHJcbiAgICB0aGlzLmNvaW4uZmxpcF9yb3RhdGlvbiA9IE1hdGguUEkqMjtcclxuICAgIHRoaXMuY29pbi5mbGlwX3NsaWRlX3ggPSAwO1xyXG4gICAgdGhpcy5jb2luLmZsaXBfc2NhbGUgPSBmYWxzZTtcclxuICAgIHRoaXMuY29pbi54ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC8yO1xyXG4gICAgdGhpcy5jb2luLnkgPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLmhlaWdodC8yO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5jb2luKTtcclxuXHJcbiAgICB2YXIgY29pbjIgPSBuZXcgRmxpcHBhYmxlU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJ2NoaXBHcmVlbldoaXRlX3NpZGVCb3JkZXIucG5nJykpO1xyXG4gICAgY29pbjIuZmxpcF9zbGlkZV95ID0gMTAwO1xyXG4gICAgY29pbjIuZmxpcF9yb3RhdGlvbiA9IE1hdGguUEkqMjtcclxuICAgIGNvaW4yLmZsaXBfc2xpZGVfeCA9IDA7XHJcbiAgICBjb2luMi5mbGlwX3NjYWxlID0gZmFsc2U7XHJcbiAgICBjb2luMi5mbGlwX3RpbWUgPSA1MDA7XHJcbiAgICBjb2luMi54ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC8yIC0gODA7XHJcbiAgICBjb2luMi55ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQvMjtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGNvaW4yKTtcclxuICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICBmb250IDogJ2JvbGQgMThweCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbCA6IDB4RkZGRkZGLFxyXG4gICAgfVxyXG4gICAgdmFyIHRleHQgPSBuZXcgUElYSS5UZXh0KFwiQ2xpY2sgbWUhXCIsIHN0eWxlKTtcclxuICAgIHRleHQueCA9IHRoaXMuY29pbi54IC0gdGV4dC53aWR0aC8yO1xyXG4gICAgdGV4dC55ID0gdGhpcy5jb2luLnkgKzMwO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGV4dCk7XHJcbiAgfVxyXG4gIGNyZWF0ZUxldmVsKCk6dm9pZCB7XHJcbiAgICBmb3IgKHZhciBidXR0b24gb2YgdGhpcy5idXR0b25zKSB7XHJcbiAgICAgICAgYnV0dG9uLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb2luKVxyXG4gICAgICAgIHRoaXMuY29pbi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcbiAgZGVzdHJveUxldmVsKCk6dm9pZCB7XHJcbiAgICBmb3IgKHZhciBidXR0b24gb2YgdGhpcy5idXR0b25zKSB7XHJcbiAgICAgICAgYnV0dG9uLmRlYWN0aXZhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb2luKVxyXG4gICAgICAgIHRoaXMuY29pbi5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG4gIGVudGVyQ2FyZHMoKTp2b2lkIHtcclxuICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJDYXJkc1wiKTtcclxuICB9XHJcbiAgZW50ZXJGYXN0Q2FyZHMoKTp2b2lkIHtcclxuICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJGYXN0Q2FyZHNcIik7XHJcbiAgfVxyXG4gIGVudGVyVGV4dEltYWdlKCk6dm9pZCB7XHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLmNoYW5nZUxldmVsKFwiVGV4dEltYWdlXCIpO1xyXG4gIH1cclxuICBlbnRlclBhcnRpY2xlcygpOnZvaWQge1xyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5jaGFuZ2VMZXZlbChcIlBhcnRpY2xlc1wiKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQge0Jhc2VBcHB9IGZyb20gJy4vbWFpbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVMZXZlbCB7XHJcbiAgcmVhZG9ubHkgbGV2ZWxfbmFtZTogc3RyaW5nO1xyXG4gIGNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgY3JlYXRlTGV2ZWwoKTp2b2lkO1xyXG4gIGRlc3Ryb3lMZXZlbCgpOnZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVCdXR0b24gZXh0ZW5kcyBQSVhJLkdyYXBoaWNzIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIG5vcm1hbF9jb2xvcjogbnVtYmVyO1xyXG4gIGhvdmVyX2NvbG9yOiBudW1iZXI7XHJcbiAgYm9yZGVyX2NvbG9yOiBudW1iZXI7XHJcbiAgYm9yZGVyX3JhZGl1czpudW1iZXI7XHJcbiAgY2xpY2tfY2FsbGJhY2s/OiBhbnk7XHJcbiAgdzogbnVtYmVyO1xyXG4gIGg6IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvciAobGFiZWw6c3RyaW5nLCBub3JtYWxfY29sb3I6bnVtYmVyLCBob3Zlcl9jb2xvcjpudW1iZXIsIGJvcmRlcl9jb2xvcjpudW1iZXIsIHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgcmFkaXVzOm51bWJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudyA9IHdpZHRoO1xyXG4gICAgdGhpcy5oID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xyXG4gICAgdGhpcy5ub3JtYWxfY29sb3IgPSBub3JtYWxfY29sb3I7XHJcbiAgICB0aGlzLmhvdmVyX2NvbG9yID0gaG92ZXJfY29sb3I7XHJcbiAgICB0aGlzLmJvcmRlcl9jb2xvciA9IGJvcmRlcl9jb2xvcjtcclxuICAgIHRoaXMuYm9yZGVyX3JhZGl1cyA9IHJhZGl1cztcclxuICAgIHRoaXMuZHJhd1RleHQoKTtcclxuXHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmRyYXdCdXR0b24odGhpcy5ub3JtYWxfY29sb3IpO1xyXG4gIH1cclxuICBkcmF3QnV0dG9uKGNvbG9yOm51bWJlcikge1xyXG4gICAgdGhpcy5iZWdpbkZpbGwoY29sb3IpO1xyXG4gICAgdGhpcy5saW5lU3R5bGUodGhpcy5ib3JkZXJfcmFkaXVzLCB0aGlzLmJvcmRlcl9jb2xvciwgMSk7XHJcbiAgICB0aGlzLmRyYXdSb3VuZGVkUmVjdCgwLCAwLCB0aGlzLncsIHRoaXMuaCwgMyk7XHJcbiAgICB0aGlzLmVuZEZpbGwoKTtcclxuICB9XHJcbiAgZHJhd1RleHQoKSB7XHJcbiAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udCA6ICdib2xkIDE4cHggQXJpYWwnLFxyXG4gICAgICAgIGZpbGwgOiAweEZGRkZGRixcclxuICAgICAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgc3Ryb2tlIDogdGhpcy5ib3JkZXJfY29sb3IsXHJcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzIDogNVxyXG4gICAgfVxyXG4gICAgdmFyIHRleHQgPSBuZXcgUElYSS5UZXh0KHRoaXMubGFiZWwsIHN0eWxlKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGV4dCk7XHJcbiAgICB0ZXh0LnggPSB0aGlzLncvMiAtIHRleHQud2lkdGgvMjtcclxuICAgIHRleHQueSA9IHRoaXMuaC8yIC0gdGV4dC5oZWlnaHQvMjtcclxuICB9XHJcbiAgc2V0Q2xpY2tDYWxsYmFjayhjYWxsYmFjazpGdW5jdGlvbikge1xyXG4gICAgdGhpcy5jbGlja19jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gIH1cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcclxuICAgIHRoaXMub24oJ3RhcCcsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMub25Ib3Zlcik7XHJcbiAgICB0aGlzLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkhvdmVyKTtcclxuICAgIHRoaXMub24oJ3BvaW50ZXJvdXQnLCB0aGlzLm9uRXhpdCk7XHJcbiAgICB0aGlzLm9uKCd0b3VjaGVuZG91dHNpZGUnLCB0aGlzLm9uRXhpdCk7XHJcbiAgICB0aGlzLm9uKCd0b3VjaGVuZCcsIHRoaXMub25FeGl0KTtcclxuICB9XHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIG9uSG92ZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB0aGlzLmRyYXdCdXR0b24odGhpcy5ob3Zlcl9jb2xvcik7XHJcbiAgfVxyXG4gIG9uRXhpdCA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIHRoaXMuZHJhd0J1dHRvbih0aGlzLm5vcm1hbF9jb2xvcik7XHJcbiAgfVxyXG4gIG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5jbGlja19jYWxsYmFjaylcclxuICAgICAgdGhpcy5jbGlja19jYWxsYmFjaygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZsaXBwYWJsZVNwcml0ZSBleHRlbmRzIFBJWEkuU3ByaXRlIHtcclxuICBmbGlwX3RpbWU6bnVtYmVyID0gMjAwMDtcclxuICBmbGlwX2hlaWdodDpudW1iZXIgPSAxMC4wO1xyXG4gIGZsaXBfc2xpZGVfeDpudW1iZXIgPSAxMDAuMDtcclxuICBmbGlwX3JvdGF0aW9uOm51bWJlciA9IDAuMDtcclxuICBmbGlwX3NsaWRlX3k6bnVtYmVyID0gMC4wO1xyXG4gIGZsaXBfc2NhbGU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgc2lkZXM6UElYSS5UZXh0dXJlW107XHJcbiAgdGlja2VyOlBJWEkudGlja2VyLlRpY2tlcjtcclxuICBiYXNlX3NjYWxlOm51bWJlciA9IDEuMDtcclxuICBzaWRlOm51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBvcmlnX3g6bnVtYmVyO1xyXG4gIHByaXZhdGUgb3JpZ195Om51bWJlcjtcclxuICBwcml2YXRlIGZsaXBfY291bnRlcjpudW1iZXIgPSAwLjA7XHJcbiAgY29uc3RydWN0b3IodGV4dHVyZT86UElYSS5UZXh0dXJlIHwgdW5kZWZpbmVkLCBiYWNrZmFjZT86UElYSS5UZXh0dXJlIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBzdXBlcih0ZXh0dXJlKTtcclxuXHJcbiAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLnRpY2tlci5UaWNrZXIoKTtcclxuICAgIHRoaXMudGlja2VyLmF1dG9TdGFydCA9IGZhbHNlO1xyXG4gICAgdGhpcy50aWNrZXIuc3BlZWQgPSAxLjA7XHJcblxyXG4gICAgdGhpcy5waXZvdC54ID0gdGhpcy53aWR0aC8yO1xyXG4gICAgdGhpcy5waXZvdC55ID0gdGhpcy5oZWlnaHQvMjtcclxuXHJcbiAgICB0aGlzLnNpZGVzID0gW107XHJcbiAgICBpZiAodGV4dHVyZSlcclxuICAgICAgdGhpcy5zaWRlcy5wdXNoKHRleHR1cmUpO1xyXG4gICAgaWYgKGJhY2tmYWNlKVxyXG4gICAgICB0aGlzLnNpZGVzLnB1c2goYmFja2ZhY2UpXHJcblxyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm9uKCdjbGljaycsIHRoaXMuZmxpcCk7XHJcbiAgICB0aGlzLm9uKCd0YXAnLCB0aGlzLmZsaXApO1xyXG4gIH1cclxuICBmbGlwPSgpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coXCJTdGFydGVkIGZsaXAuXCIpO1xyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5mbGlwX2NvdW50ZXIgPSAwLjA7XHJcbiAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG4gICAgdGhpcy5iYXNlX3NjYWxlID0gdGhpcy5zY2FsZS54O1xyXG4gICAgdGhpcy5vcmlnX3ggPSB0aGlzLng7XHJcbiAgICB0aGlzLm9yaWdfeSA9IHRoaXMueTtcclxuICAgIHRoaXMuc2lkZSA9ICh0aGlzLnNpZGUgKyAxKSUgdGhpcy5zaWRlcy5sZW5ndGhcclxuICAgIHRoaXMudGlja2VyLmFkZCh0aGlzLmZsaXBMb2dpYyk7XHJcbiAgfVxyXG4gIGZsaXBMb2dpYz0oZGVsdGE6bnVtYmVyKT0+e1xyXG4gICAgdGhpcy5mbGlwX2NvdW50ZXIgKz0gdGhpcy50aWNrZXIuZWxhcHNlZE1TICogdGhpcy50aWNrZXIuc3BlZWQ7XHJcbiAgICB2YXIgcGVyYyA9IHRoaXMuZmxpcF9jb3VudGVyIC8gdGhpcy5mbGlwX3RpbWU7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMudGlja2VyLmVsYXBzZWRNUyxcIiAtIFwiLCB0aGlzLmZsaXBfY291bnRlcik7XHJcbiAgICAvL3hcclxuICAgIGlmICh0aGlzLmZsaXBfc2xpZGVfeCAhPSAwLjApe1xyXG4gICAgICB0aGlzLnggPSBsZXJwKHRoaXMub3JpZ194LCB0aGlzLm9yaWdfeCt0aGlzLmZsaXBfc2xpZGVfeCwgcGVyYyk7XHJcbiAgICB9XHJcbiAgICAvL3JvdFxyXG4gICAgaWYgKHRoaXMuZmxpcF9yb3RhdGlvbiAhPSAwLjApe1xyXG4gICAgICB0aGlzLnJvdGF0aW9uID0gbGVycCgwLHRoaXMuZmxpcF9yb3RhdGlvbixwZXJjKTtcclxuICAgIH1cclxuICAgIC8veVxyXG4gICAgaWYgKHBlcmMgPD0gMC41KSB7XHJcbiAgICAgIC8vZ29pbmcgdXAgYW5kIHNocmlua2luZ1xyXG4gICAgICBpZiAodGhpcy5mbGlwX3NsaWRlX3kgIT0gMClcclxuICAgICAgICB0aGlzLnkgPSBsZXJwKHRoaXMub3JpZ195LCB0aGlzLm9yaWdfeS10aGlzLmZsaXBfc2xpZGVfeSwgTWF0aC5zcXJ0KHBlcmMqMikpO1xyXG4gICAgICBpZiAodGhpcy5mbGlwX3NjYWxlKVxyXG4gICAgICAgIHRoaXMuc2NhbGUueCA9IGxlcnAodGhpcy5iYXNlX3NjYWxlLCAwLjEsIHBlcmMqMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLnNpZGVzW3RoaXMuc2lkZV07XHJcbiAgICAgIC8vZ29pbmcgZG93biBhbmQgZXhwYW5kaW5nXHJcbiAgICAgIGlmICh0aGlzLmZsaXBfc2xpZGVfeSAhPSAwKVxyXG4gICAgICAgIHRoaXMueSA9IGxlcnAodGhpcy5vcmlnX3ktdGhpcy5mbGlwX3NsaWRlX3ksIHRoaXMub3JpZ195LCBNYXRoLnBvdyhwZXJjKjIgLSAxLjAsMikpO1xyXG4gICAgICBpZiAodGhpcy5mbGlwX3NjYWxlKVxyXG4gICAgICAgIHRoaXMuc2NhbGUueCA9IGxlcnAoMC4xLCB0aGlzLmJhc2Vfc2NhbGUsIHBlcmMqMiAtIDEuMCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mbGlwX2NvdW50ZXIgPj0gdGhpcy5mbGlwX3RpbWUpIHtcclxuICAgICAgaWYgKHRoaXMuZmxpcF9zY2FsZSlcclxuICAgICAgICB0aGlzLnNjYWxlLnggPSB0aGlzLmJhc2Vfc2NhbGU7XHJcbiAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLmZsaXBfcm90YXRpb247XHJcbiAgICAgIHRoaXMueCA9IHRoaXMub3JpZ194K3RoaXMuZmxpcF9zbGlkZV94O1xyXG4gICAgICB0aGlzLnkgPSB0aGlzLm9yaWdfeTtcclxuICAgICAgdGhpcy50aWNrZXIucmVtb3ZlKHRoaXMuZmxpcExvZ2ljKTtcclxuICAgICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgLy90aGlzLnJvdGF0aW9uID0gMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vYmFzaWMgbGVycCBmdW50aW9uLlxyXG5mdW5jdGlvbiBsZXJwKGExOm51bWJlcixhMjpudW1iZXIsdDpudW1iZXIpe1xyXG4gIHJldHVybiBhMSooMS10KSArIGEyKnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPdXRwdXRDb250ZW50IHtcclxuICB0eXBlOnN0cmluZztcclxuICBjb250ZW50OnN0cmluZztcclxuICBvcHRpb25zPzpvYmplY3QgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW1hZ2VNaXhpbiBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50VG9QcmludDpPdXRwdXRDb250ZW50W10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBsZXQgbGFzdF94Om51bWJlciA9IDA7XHJcbiAgICBsZXQgbGFzdF95Om51bWJlciA9IDA7XHJcbiAgICBmb3IgKHZhciBjb250ZW50IG9mIGNvbnRlbnRUb1ByaW50KSB7XHJcbiAgICAgIGxldCBvYmo6UElYSS5TcHJpdGU7XHJcbiAgICAgIGlmIChjb250ZW50LnR5cGUgPT0gXCJUZXh0XCIpXHJcbiAgICAgICAgb2JqID0gdGhpcy5jcmVhdGVUZXh0KGNvbnRlbnQpO1xyXG4gICAgICBlbHNlIGlmIChjb250ZW50LnR5cGUgPT0gXCJJbWFnZVwiKVxyXG4gICAgICAgIG9iaiA9IHRoaXMuY3JlYXRlSW1hZ2UoY29udGVudCk7XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVGV4dEltYWdlTWl4aW46OmNvbnN0cnVjdG9yIC0gQ2Fubm90IGNyZWF0ZSBjb250ZW50IG9mIHR5cGU6IFwiLGNvbnRlbnQudHlwZSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgb2JqLnBpdm90LnkgPSBvYmouaGVpZ2h0XHJcbiAgICAgIG9iai5waXZvdC54ID0gMDtcclxuICAgICAgb2JqLnggPSBsYXN0X3g7XHJcbiAgICAgIG9iai55ID0gbGFzdF95O1xyXG5cclxuICAgICAgbGFzdF94ICs9IG9iai53aWR0aDtcclxuICAgICAgdGhpcy5hZGRDaGlsZChvYmopO1xyXG4gICAgfVxyXG4gIH1cclxuICBjcmVhdGVUZXh0KGNvbnRlbnQ6T3V0cHV0Q29udGVudCk6UElYSS5UZXh0IHtcclxuICAgIHJldHVybiBuZXcgUElYSS5UZXh0KGNvbnRlbnQuY29udGVudCwgY29udGVudC5vcHRpb25zKTtcclxuICB9XHJcbiAgY3JlYXRlSW1hZ2UoY29udGVudDpPdXRwdXRDb250ZW50KTpQSVhJLlNwcml0ZSB7XHJcbiAgICByZXR1cm4gbmV3IFBJWEkuU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoY29udGVudC5jb250ZW50KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFuaXNoaW5nT2JqZWN0IHtcclxuICB0aW1lX3RvX2ZhZGU6bnVtYmVyID0gMTAwMDA7XHJcbiAgZmFkZV90aW1lOm51bWJlciA9IDEwMDA7XHJcbiAgcHJpdmF0ZSBzdGFydF90aW1lOm51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBmYWRlX2NvdW50ZXI6bnVtYmVyID0gMDtcclxuICB0aWNrZXI6UElYSS50aWNrZXIuVGlja2VyO1xyXG4gIG9iajogUElYSS5Db250YWluZXI7XHJcbiAgY29uc3RydWN0b3Iob2JqOlBJWEkuQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLnRpY2tlci5UaWNrZXIoKTtcclxuICAgIHRoaXMudGlja2VyLmF1dG9TdGFydCA9IHRydWU7XHJcbiAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG4gICAgdGhpcy50aWNrZXIuYWRkKHRoaXMudGljVGFjKTtcclxuICAgIHRoaXMub2JqID0gb2JqO1xyXG4gICAgdGhpcy5mYWRlX2NvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5zdGFydF90aW1lID0gMDtcclxuICB9XHJcbiAgdGljVGFjID0gKGRlbHRhOm51bWJlcikgPT4ge1xyXG4gICAgdGhpcy5zdGFydF90aW1lICs9IHRoaXMudGlja2VyLmVsYXBzZWRNUztcclxuICAgIGlmICh0aGlzLnN0YXJ0X3RpbWUgPiB0aGlzLnRpbWVfdG9fZmFkZSArIHRoaXMuZmFkZV90aW1lKSB7XHJcbiAgICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICAgICAgdGhpcy5vYmouZGVzdHJveSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc3RhcnRfdGltZSA+IHRoaXMudGltZV90b19mYWRlKSB7XHJcbiAgICAgICAgdGhpcy5mYWRlX2NvdW50ZXIgKz0gdGhpcy50aWNrZXIuZWxhcHNlZE1TO1xyXG4gICAgICAgIHZhciBhbHBoYSA9IGxlcnAoMS4wLCAwLjAsIHRoaXMuZmFkZV9jb3VudGVyL3RoaXMuZmFkZV90aW1lKTtcclxuICAgICAgICB0aGlzLm9iai5hbHBoYSA9IGFscGhhO1xyXG4gICAgICAgIHRoaXMub2JqLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQ6UElYSS5TcHJpdGUpIHtcclxuICAgICAgICAgIGNoaWxkLmFscGhhID0gYWxwaGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCAqIGFzIFRPT0xTIGZyb20gJy4vc3VwcG9ydCc7XHJcbmltcG9ydCB7QmFzZUFwcH0gZnJvbSAnLi9tYWluJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW1hZ2VMZXZlbCBpbXBsZW1lbnRzIFRPT0xTLkdhbWVMZXZlbCB7XHJcbiAgbGV2ZWxfbmFtZTpzdHJpbmcgPSBcIlRleHRJbWFnZVwiO1xyXG4gIGNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgdGlja2VyOiBQSVhJLnRpY2tlci5UaWNrZXI7XHJcbiAgaW1hZ2VzX25hbWVfYXJyYXk6IHN0cmluZ1tdO1xyXG4gIHRpbWVfdG9fY3JlYXRlOm51bWJlciA9IDUwMDtcclxuICBwcml2YXRlIGNvdW50ZXI6bnVtYmVyID0gMDtcclxuICBtYXhfZm9udF9zaXplOm51bWJlciA9IDMwO1xyXG4gIG1pbl9mb250X3NpemU6bnVtYmVyID0gMTI7XHJcbiAgY29udGVudF9zaXplOm51bWJlciA9IDM7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLnRpY2tlci5UaWNrZXIoKTtcclxuICAgIHRoaXMudGlja2VyLmF1dG9TdGFydCA9IGZhbHNlO1xyXG4gICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgdGhpcy5pbWFnZXNfbmFtZV9hcnJheSA9IFtcInBpZWNlV2hpdGVfYm9yZGVyMDAucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjAxLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwMi5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDMucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjA0LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwNS5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDYucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjA3LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwOC5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDkucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjEwLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxMS5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTIucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjEzLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxNC5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTUucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjE2LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxNy5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTgucG5nXCJdO1xyXG4gIH1cclxuICBjcmVhdGVMZXZlbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVGV4dCArIEltYWdlIGNyZWF0aW9uIHN0YXJ0ZWQuXCIpO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuXHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMudGlja2VyLmFkZCh0aGlzLm9uVGljayk7XHJcbiAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG5cclxuICAgIC8vY3JlYXRlIGJhY2sgb3B0aW9uXHJcbiAgICB2YXIgbWVudV9iZyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICBtZW51X2JnLmJlZ2luRmlsbCgweEVFRUVFRSk7XHJcbiAgICBtZW51X2JnLmxpbmVTdHlsZSgyLCAweGRkZGRmRiwgMSk7XHJcbiAgICBtZW51X2JnLmRyYXdSb3VuZGVkUmVjdCgxMDAsIDEwMCwgMjAwLCAxMDAsIDUpO1xyXG4gICAgbWVudV9iZy5lbmRGaWxsKCk7XHJcblxyXG4gICAgdmFyIG1haW5fbWVudV9idG4gPSBuZXcgVE9PTFMuU2ltcGxlQnV0dG9uKCdCYWNrJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgbWFpbl9tZW51X2J0bi54ID0gMTI1O1xyXG4gICAgbWFpbl9tZW51X2J0bi55ID0gMTI1O1xyXG4gICAgbWVudV9iZy5hZGRDaGlsZChtYWluX21lbnVfYnRuKTtcclxuICAgIG1haW5fbWVudV9idG4uc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmJhY2tUb01lbnUpO1xyXG4gICAgbWFpbl9tZW51X2J0bi5hY3RpdmF0ZSgpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWVudV9iZyk7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLnRpbWVfdG9fY3JlYXRlO1xyXG4gIH1cclxuICBiYWNrVG9NZW51KCkge1xyXG4gICAgICBCYXNlQXBwLmluc3RhbmNlLmNoYW5nZUxldmVsKFwiTWFpbk1lbnVcIik7XHJcbiAgfVxyXG4gIGRlc3Ryb3lMZXZlbCgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmRlc3Ryb3koe2NoaWxkcmVuOnRydWV9KTtcclxuICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICB9XHJcbiAgb25UaWNrPSgpID0+e1xyXG4gICAgdGhpcy5jb3VudGVyICs9IHRoaXMudGlja2VyLmVsYXBzZWRNUztcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLnRpbWVfdG9fY3JlYXRlKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlUmFuZG9tKCk7XHJcbiAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNyZWF0ZVJhbmRvbSgpIHtcclxuICAgIGxldCBjb250ZW50OlRPT0xTLk91dHB1dENvbnRlbnRbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5jb250ZW50X3NpemU7IGkrKykge1xyXG4gICAgICBsZXQgY2hhbmNlOm51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgIGxldCBuZXdfY29udGVudDpUT09MUy5PdXRwdXRDb250ZW50ID0gbmV3IFRPT0xTLk91dHB1dENvbnRlbnQoKTtcclxuICAgICAgaWYgKGNoYW5jZSA+IDAuNSkge1xyXG4gICAgICAgIC8vVGV4dFxyXG4gICAgICAgIG5ld19jb250ZW50LnR5cGUgPSBcIlRleHRcIjtcclxuICAgICAgICB2YXIgc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICAgICAgZm9udFNpemU6IE1hdGgucmFuZG9tKCkqKHRoaXMubWF4X2ZvbnRfc2l6ZS10aGlzLm1pbl9mb250X3NpemUpK3RoaXMubWluX2ZvbnRfc2l6ZSxcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgICAgIGZpbGw6IFwiI0ZGRkZGRlwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoY2hhbmNlIDwgMC4xKVxyXG4gICAgICAgICAgc3R5bGUuZm9udFdlaWdodD1cImJvbGRcIjtcclxuICAgICAgICBpZiAoY2hhbmNlID4gMC40KVxyXG4gICAgICAgICAgc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuXHJcbiAgICAgICAgaWYgKGNoYW5jZSA+IDAuNzUpIHtcclxuICAgICAgICAgIGlmIChjaGFuY2UgPCAwLjg1KVxyXG4gICAgICAgICAgICBzdHlsZS5maWxsID0gMHgzMzMzMzM7XHJcbiAgICAgICAgICBlbHNlIGlmIChjaGFuY2UgPCAwLjk1KVxyXG4gICAgICAgICAgICBzdHlsZS5maWxsID0gMHg2NjY2NjY7XHJcbiAgICAgICAgICBlbHNlIGlmIChjaGFuY2UgPiAwLjk1KVxyXG4gICAgICAgICAgICBzdHlsZS5maWxsID0gWzB4MDAwMDAwLDB4MDAzM2E5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3X2NvbnRlbnQuY29udGVudCA9IFwiQWhveSFcIjtcclxuICAgICAgICBuZXdfY29udGVudC5vcHRpb25zID0gc3R5bGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9JbWFnZVxyXG4gICAgICAgIG5ld19jb250ZW50LnR5cGUgPSBcIkltYWdlXCI7XHJcbiAgICAgICAgbmV3X2NvbnRlbnQuY29udGVudCA9IHRoaXMuaW1hZ2VzX25hbWVfYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuaW1hZ2VzX25hbWVfYXJyYXkubGVuZ3RoLTAuMSkpXTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50LnB1c2gobmV3X2NvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgLy9NZXRhLWRhdGEgT0ssIHJlYWwgY3JlYXRpb24uXHJcbiAgICB2YXIgbmV3X29iaiA9IG5ldyBUT09MUy5UZXh0SW1hZ2VNaXhpbihjb250ZW50KTtcclxuICAgIG5ld19vYmoueCA9IDMwMCArIE1hdGgucmFuZG9tKCkqKEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIud2lkdGggLSAzNTAgLSBuZXdfb2JqLndpZHRoKTtcclxuICAgIG5ld19vYmoueSA9IDUwICsgTWF0aC5yYW5kb20oKSooQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQgLSAyMDAgLSBuZXdfb2JqLmhlaWdodCk7XHJcbiAgICAvL29iaiB0byB2YW5pc2ggYWZ0ZXIgc29tZSB0aW1lLlxyXG4gICAgbmV3IFRPT0xTLlZhbmlzaGluZ09iamVjdChuZXdfb2JqKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG5ld19vYmopO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiXSwic291cmNlUm9vdCI6IiJ9