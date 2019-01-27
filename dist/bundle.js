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

/***/ "./node_modules/pixi-particles/dist/pixi-particles.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/pixi-particles/dist/pixi-particles.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!
 * pixi-particles - v3.1.0
 * Compiled Wed, 29 Aug 2018 15:47:46 UTC
 *
 * pixi-particles is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
!function(t){if(true)module.exports=t();else { var e; }}(function(){return function(){function t(e,i,s){function a(n,o){if(!i[n]){if(!e[n]){var h="function"==typeof require&&require;if(!o&&h)return require(n,!0);if(r)return r(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var p=i[n]={exports:{}};e[n][0].call(p.exports,function(t){var i=e[n][1][t];return a(i||t)},p,p.exports,t,e,i,s)}return i[n].exports}for(var r="function"==typeof require&&require,n=0;n<s.length;n++)a(s[n]);return a}return t}()({1:[function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(i,"__esModule",{value:!0});var a=t("./Particle"),r=PIXI.Texture,n=function(t){function e(e){var i=t.call(this,e)||this;return i.textures=null,i.duration=0,i.framerate=0,i.elapsed=0,i.loop=!1,i}return s(e,t),e.prototype.init=function(){this.Particle_init(),this.elapsed=0,this.framerate<0&&(this.duration=this.maxLife,this.framerate=this.textures.length/this.duration)},e.prototype.applyArt=function(t){this.textures=t.textures,this.framerate=t.framerate,this.duration=t.duration,this.loop=t.loop},e.prototype.update=function(t){var e=this.Particle_update(t);if(e>=0){this.elapsed+=t,this.elapsed>this.duration&&(this.loop?this.elapsed=this.elapsed%this.duration:this.elapsed=this.duration-1e-6);var i=this.elapsed*this.framerate+1e-7|0;this.texture=this.textures[i]||PIXI.Texture.EMPTY}return e},e.prototype.destroy=function(){this.Particle_destroy(),this.textures=null},e.parseArt=function(t){for(var e,i,s,a,n,o=[],h=0;h<t.length;++h){e=t[h],o[h]=i={},i.textures=n=[],s=e.textures;for(var l=0;l<s.length;++l)if("string"==typeof(a=s[l]))n.push(r.fromImage(a));else if(a instanceof r)n.push(a);else{var p=a.count||1;for(a="string"==typeof a.texture?r.fromImage(a.texture):a.texture;p>0;--p)n.push(a)}"matchLife"==e.framerate?(i.framerate=-1,i.duration=0,i.loop=!1):(i.loop=!!e.loop,i.framerate=e.framerate>0?e.framerate:60,i.duration=n.length/i.framerate)}return o},e}(a.default);i.default=n},{"./Particle":3}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("./ParticleUtils"),a=t("./Particle"),r=t("./PropertyNode"),n=PIXI.ticker.shared,o=new PIXI.Point,h=function(){function t(t,e,i){this._particleConstructor=a.default,this.particleImages=null,this.startAlpha=null,this.startSpeed=null,this.minimumSpeedMultiplier=1,this.acceleration=null,this.maxSpeed=NaN,this.startScale=null,this.minimumScaleMultiplier=1,this.startColor=null,this.minLifetime=0,this.maxLifetime=0,this.minStartRotation=0,this.maxStartRotation=0,this.noRotation=!1,this.minRotationSpeed=0,this.maxRotationSpeed=0,this.particleBlendMode=0,this.customEase=null,this.extraData=null,this._frequency=1,this.spawnChance=1,this.maxParticles=1e3,this.emitterLifetime=-1,this.spawnPos=null,this.spawnType=null,this._spawnFunc=null,this.spawnRect=null,this.spawnCircle=null,this.particlesPerWave=1,this.particleSpacing=0,this.angleStart=0,this.rotation=0,this.ownerPos=null,this._prevEmitterPos=null,this._prevPosIsValid=!1,this._posChanged=!1,this._parent=null,this.addAtBack=!1,this.particleCount=0,this._emit=!1,this._spawnTimer=0,this._emitterLife=-1,this._activeParticlesFirst=null,this._activeParticlesLast=null,this._poolFirst=null,this._origConfig=null,this._origArt=null,this._autoUpdate=!1,this._destroyWhenComplete=!1,this._completeCallback=null,this.parent=t,e&&i&&this.init(e,i),this.recycle=this.recycle,this.update=this.update,this.rotate=this.rotate,this.updateSpawnPos=this.updateSpawnPos,this.updateOwnerPos=this.updateOwnerPos}return Object.defineProperty(t.prototype,"frequency",{get:function(){return this._frequency},set:function(t){this._frequency="number"==typeof t&&t>0?t:1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"particleConstructor",{get:function(){return this._particleConstructor},set:function(t){if(t!=this._particleConstructor){this._particleConstructor=t,this.cleanup();for(var e=this._poolFirst;e;e=e.next)e.destroy();this._poolFirst=null,this._origConfig&&this._origArt&&this.init(this._origArt,this._origConfig)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},set:function(t){this.cleanup(),this._parent=t},enumerable:!0,configurable:!0}),t.prototype.init=function(t,e){if(t&&e){this.cleanup(),this._origConfig=e,this._origArt=t,t=Array.isArray(t)?t.slice():[t];var i=this._particleConstructor;this.particleImages=i.parseArt?i.parseArt(t):t,e.alpha?this.startAlpha=r.default.createList(e.alpha):this.startAlpha=new r.default(1,0),e.speed?(this.startSpeed=r.default.createList(e.speed),this.minimumSpeedMultiplier=e.speed.minimumSpeedMultiplier||1):(this.minimumSpeedMultiplier=1,this.startSpeed=new r.default(0,0));var a=e.acceleration;a&&(a.x||a.y)?(this.startSpeed.next=null,this.acceleration=new PIXI.Point(a.x,a.y),this.maxSpeed=e.maxSpeed||NaN):this.acceleration=new PIXI.Point,e.scale?(this.startScale=r.default.createList(e.scale),this.minimumScaleMultiplier=e.scale.minimumScaleMultiplier||1):(this.startScale=new r.default(1,0),this.minimumScaleMultiplier=1),e.color?this.startColor=r.default.createList(e.color):this.startColor=new r.default({r:255,g:255,b:255},0),e.startRotation?(this.minStartRotation=e.startRotation.min,this.maxStartRotation=e.startRotation.max):this.minStartRotation=this.maxStartRotation=0,e.noRotation&&(this.minStartRotation||this.maxStartRotation)?this.noRotation=!!e.noRotation:this.noRotation=!1,e.rotationSpeed?(this.minRotationSpeed=e.rotationSpeed.min,this.maxRotationSpeed=e.rotationSpeed.max):this.minRotationSpeed=this.maxRotationSpeed=0,this.minLifetime=e.lifetime.min,this.maxLifetime=e.lifetime.max,this.particleBlendMode=s.default.getBlendMode(e.blendMode),e.ease?this.customEase="function"==typeof e.ease?e.ease:s.default.generateEase(e.ease):this.customEase=null,i.parseData?this.extraData=i.parseData(e.extraData):this.extraData=e.extraData||null,this.spawnRect=this.spawnCircle=null,this.particlesPerWave=1,e.particlesPerWave&&e.particlesPerWave>1&&(this.particlesPerWave=e.particlesPerWave),this.particleSpacing=0,this.angleStart=0;var n;switch(e.spawnType){case"rect":this.spawnType="rect",this._spawnFunc=this._spawnRect;var o=e.spawnRect;this.spawnRect=new PIXI.Rectangle(o.x,o.y,o.w,o.h);break;case"circle":this.spawnType="circle",this._spawnFunc=this._spawnCircle,n=e.spawnCircle,this.spawnCircle=new PIXI.Circle(n.x,n.y,n.r);break;case"ring":this.spawnType="ring",this._spawnFunc=this._spawnRing,n=e.spawnCircle,this.spawnCircle=new PIXI.Circle(n.x,n.y,n.r),this.spawnCircle.minRadius=n.minR;break;case"burst":this.spawnType="burst",this._spawnFunc=this._spawnBurst,this.particleSpacing=e.particleSpacing,this.angleStart=e.angleStart?e.angleStart:0;break;case"point":default:this.spawnType="point",this._spawnFunc=this._spawnPoint}this.frequency=e.frequency,this.spawnChance="number"==typeof e.spawnChance&&e.spawnChance>0?e.spawnChance:1,this.emitterLifetime=e.emitterLifetime||-1,this.maxParticles=e.maxParticles>0?e.maxParticles:1e3,this.addAtBack=!!e.addAtBack,this.rotation=0,this.ownerPos=new PIXI.Point,this.spawnPos=new PIXI.Point(e.pos.x,e.pos.y),this._prevEmitterPos=this.spawnPos.clone(),this._prevPosIsValid=!1,this._spawnTimer=0,this.emit=void 0===e.emit||!!e.emit,this.autoUpdate=void 0!==e.autoUpdate&&!!e.autoUpdate}},t.prototype.recycle=function(t){t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next),t==this._activeParticlesLast&&(this._activeParticlesLast=t.prev),t==this._activeParticlesFirst&&(this._activeParticlesFirst=t.next),t.prev=null,t.next=this._poolFirst,this._poolFirst=t,t.parent&&t.parent.removeChild(t),--this.particleCount},t.prototype.rotate=function(t){if(this.rotation!=t){var e=t-this.rotation;this.rotation=t,s.default.rotatePoint(e,this.spawnPos),this._posChanged=!0}},t.prototype.updateSpawnPos=function(t,e){this._posChanged=!0,this.spawnPos.x=t,this.spawnPos.y=e},t.prototype.updateOwnerPos=function(t,e){this._posChanged=!0,this.ownerPos.x=t,this.ownerPos.y=e},t.prototype.resetPositionTracking=function(){this._prevPosIsValid=!1},Object.defineProperty(t.prototype,"emit",{get:function(){return this._emit},set:function(t){this._emit=!!t,this._emitterLife=this.emitterLifetime},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){this._autoUpdate&&!t?n.remove(this.update,this):!this._autoUpdate&&t&&n.add(this.update,this),this._autoUpdate=!!t},enumerable:!0,configurable:!0}),t.prototype.playOnceAndDestroy=function(t){this.autoUpdate=!0,this.emit=!0,this._destroyWhenComplete=!0,this._completeCallback=t},t.prototype.playOnce=function(t){this.emit=!0,this._completeCallback=t},t.prototype.update=function(t){if(this._autoUpdate&&(t=t/PIXI.settings.TARGET_FPMS/1e3),this._parent){var e,i,s;for(i=this._activeParticlesFirst;i;i=s)s=i.next,i.update(t);var a,r;this._prevPosIsValid&&(a=this._prevEmitterPos.x,r=this._prevEmitterPos.y);var n=this.ownerPos.x+this.spawnPos.x,o=this.ownerPos.y+this.spawnPos.y;if(this._emit)for(this._spawnTimer-=t<0?0:t;this._spawnTimer<=0;){if(this._emitterLife>0&&(this._emitterLife-=this._frequency,this._emitterLife<=0)){this._spawnTimer=0,this._emitterLife=0,this.emit=!1;break}if(this.particleCount>=this.maxParticles)this._spawnTimer+=this._frequency;else{var h=void 0;if(h=this.minLifetime==this.maxLifetime?this.minLifetime:Math.random()*(this.maxLifetime-this.minLifetime)+this.minLifetime,-this._spawnTimer<h){var l=void 0,p=void 0;if(this._prevPosIsValid&&this._posChanged){var c=1+this._spawnTimer/t;l=(n-a)*c+a,p=(o-r)*c+r}else l=n,p=o;e=0;for(var u=Math.min(this.particlesPerWave,this.maxParticles-this.particleCount);e<u;++e)if(!(this.spawnChance<1&&Math.random()>=this.spawnChance)){var d=void 0;if(this._poolFirst?(d=this._poolFirst,this._poolFirst=this._poolFirst.next,d.next=null):d=new this.particleConstructor(this),this.particleImages.length>1?d.applyArt(this.particleImages[Math.floor(Math.random()*this.particleImages.length)]):d.applyArt(this.particleImages[0]),d.alphaList.reset(this.startAlpha),1!=this.minimumSpeedMultiplier&&(d.speedMultiplier=Math.random()*(1-this.minimumSpeedMultiplier)+this.minimumSpeedMultiplier),d.speedList.reset(this.startSpeed),d.acceleration.x=this.acceleration.x,d.acceleration.y=this.acceleration.y,d.maxSpeed=this.maxSpeed,1!=this.minimumScaleMultiplier&&(d.scaleMultiplier=Math.random()*(1-this.minimumScaleMultiplier)+this.minimumScaleMultiplier),d.scaleList.reset(this.startScale),d.colorList.reset(this.startColor),this.minRotationSpeed==this.maxRotationSpeed?d.rotationSpeed=this.minRotationSpeed:d.rotationSpeed=Math.random()*(this.maxRotationSpeed-this.minRotationSpeed)+this.minRotationSpeed,d.noRotation=this.noRotation,d.maxLife=h,d.blendMode=this.particleBlendMode,d.ease=this.customEase,d.extraData=this.extraData,this._spawnFunc(d,l,p,e),d.init(),d.update(-this._spawnTimer),d.parent){var f=this._parent.children;if(f[0]==d)f.shift();else if(f[f.length-1]==d)f.pop();else{var m=f.indexOf(d);f.splice(m,1)}this.addAtBack?f.unshift(d):f.push(d)}else this.addAtBack?this._parent.addChildAt(d,0):this._parent.addChild(d);this._activeParticlesLast?(this._activeParticlesLast.next=d,d.prev=this._activeParticlesLast,this._activeParticlesLast=d):this._activeParticlesLast=this._activeParticlesFirst=d,++this.particleCount}}this._spawnTimer+=this._frequency}}this._posChanged&&(this._prevEmitterPos.x=n,this._prevEmitterPos.y=o,this._prevPosIsValid=!0,this._posChanged=!1),this._emit||this._activeParticlesFirst||(this._completeCallback&&this._completeCallback(),this._destroyWhenComplete&&this.destroy())}},t.prototype._spawnPoint=function(t,e,i){this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,t.position.x=e,t.position.y=i},t.prototype._spawnRect=function(t,e,i){this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,o.x=Math.random()*this.spawnRect.width+this.spawnRect.x,o.y=Math.random()*this.spawnRect.height+this.spawnRect.y,0!==this.rotation&&s.default.rotatePoint(this.rotation,o),t.position.x=e+o.x,t.position.y=i+o.y},t.prototype._spawnCircle=function(t,e,i){this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,o.x=Math.random()*this.spawnCircle.radius,o.y=0,s.default.rotatePoint(360*Math.random(),o),o.x+=this.spawnCircle.x,o.y+=this.spawnCircle.y,0!==this.rotation&&s.default.rotatePoint(this.rotation,o),t.position.x=e+o.x,t.position.y=i+o.y},t.prototype._spawnRing=function(t,e,i){var a=this.spawnCircle;this.minStartRotation==this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,a.minRadius!==a.radius?o.x=Math.random()*(a.radius-a.minRadius)+a.minRadius:o.x=a.radius,o.y=0;var r=360*Math.random();t.rotation+=r,s.default.rotatePoint(r,o),o.x+=this.spawnCircle.x,o.y+=this.spawnCircle.y,0!==this.rotation&&s.default.rotatePoint(this.rotation,o),t.position.x=e+o.x,t.position.y=i+o.y},t.prototype._spawnBurst=function(t,e,i,s){0===this.particleSpacing?t.rotation=360*Math.random():t.rotation=this.angleStart+this.particleSpacing*s+this.rotation,t.position.x=e,t.position.y=i},t.prototype.cleanup=function(){var t,e;for(t=this._activeParticlesFirst;t;t=e)e=t.next,this.recycle(t),t.parent&&t.parent.removeChild(t);this._activeParticlesFirst=this._activeParticlesLast=null,this.particleCount=0},t.prototype.destroy=function(){this.autoUpdate=!1,this.cleanup();for(var t,e=this._poolFirst;e;e=t)t=e.next,e.destroy();this._poolFirst=this._parent=this.particleImages=this.spawnPos=this.ownerPos=this.startColor=this.startScale=this.startAlpha=this.startSpeed=this.customEase=this._completeCallback=null},t}();i.default=h},{"./Particle":3,"./ParticleUtils":4,"./PropertyNode":7}],3:[function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(i,"__esModule",{value:!0});var a=t("./ParticleUtils"),r=t("./PropertyList"),n=PIXI.Sprite,o=function(t){function e(i){var s=t.call(this)||this;return s.emitter=i,s.anchor.x=s.anchor.y=.5,s.velocity=new PIXI.Point,s.maxLife=0,s.age=0,s.ease=null,s.extraData=null,s.alphaList=new r.default,s.speedList=new r.default,s.speedMultiplier=1,s.acceleration=new PIXI.Point,s.maxSpeed=NaN,s.scaleList=new r.default,s.scaleMultiplier=1,s.colorList=new r.default(!0),s._doAlpha=!1,s._doScale=!1,s._doSpeed=!1,s._doAcceleration=!1,s._doColor=!1,s._doNormalMovement=!1,s._oneOverLife=0,s.next=null,s.prev=null,s.init=s.init,s.Particle_init=e.prototype.init,s.update=s.update,s.Particle_update=e.prototype.update,s.Sprite_destroy=t.prototype.destroy,s.Particle_destroy=e.prototype.destroy,s.applyArt=s.applyArt,s.kill=s.kill,s}return s(e,t),e.prototype.init=function(){this.age=0,this.velocity.x=this.speedList.current.value*this.speedMultiplier,this.velocity.y=0,a.default.rotatePoint(this.rotation,this.velocity),this.noRotation?this.rotation=0:this.rotation*=a.default.DEG_TO_RADS,this.rotationSpeed*=a.default.DEG_TO_RADS,this.alpha=this.alphaList.current.value,this.scale.x=this.scale.y=this.scaleList.current.value,this._doAlpha=!!this.alphaList.current.next,this._doSpeed=!!this.speedList.current.next,this._doScale=!!this.scaleList.current.next,this._doColor=!!this.colorList.current.next,this._doAcceleration=0!==this.acceleration.x||0!==this.acceleration.y,this._doNormalMovement=this._doSpeed||0!==this.speedList.current.value||this._doAcceleration,this._oneOverLife=1/this.maxLife;var t=this.colorList.current.value;this.tint=a.default.combineRGBComponents(t.r,t.g,t.b),this.visible=!0},e.prototype.applyArt=function(t){this.texture=t||PIXI.Texture.EMPTY},e.prototype.update=function(t){if(this.age+=t,this.age>=this.maxLife||this.age<0)return this.kill(),-1;var e=this.age*this._oneOverLife;if(this.ease&&(e=4==this.ease.length?this.ease(e,0,1,1):this.ease(e)),this._doAlpha&&(this.alpha=this.alphaList.interpolate(e)),this._doScale){var i=this.scaleList.interpolate(e)*this.scaleMultiplier;this.scale.x=this.scale.y=i}if(this._doNormalMovement){if(this._doSpeed){var s=this.speedList.interpolate(e)*this.speedMultiplier;a.default.normalize(this.velocity),a.default.scaleBy(this.velocity,s)}else if(this._doAcceleration&&(this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.maxSpeed)){var r=a.default.length(this.velocity);r>this.maxSpeed&&a.default.scaleBy(this.velocity,this.maxSpeed/r)}this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t}return this._doColor&&(this.tint=this.colorList.interpolate(e)),0!==this.rotationSpeed?this.rotation+=this.rotationSpeed*t:this.acceleration&&!this.noRotation&&(this.rotation=Math.atan2(this.velocity.y,this.velocity.x)),e},e.prototype.kill=function(){this.emitter.recycle(this)},e.prototype.destroy=function(){this.parent&&this.parent.removeChild(this),this.Sprite_destroy(),this.emitter=this.velocity=this.colorList=this.scaleList=this.alphaList=this.speedList=this.ease=this.next=this.prev=null},e.parseArt=function(t){var e;for(e=t.length;e>=0;--e)"string"==typeof t[e]&&(t[e]=PIXI.Texture.fromImage(t[e]));if(a.default.verbose)for(e=t.length-1;e>0;--e)if(t[e].baseTexture!=t[e-1].baseTexture){window.console&&console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");break}return t},e.parseData=function(t){return t},e}(n);i.default=o},{"./ParticleUtils":4,"./PropertyList":6}],4:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=PIXI.BLEND_MODES,a=t("./PropertyNode"),r={verbose:!1,DEG_TO_RADS:Math.PI/180,rotatePoint:function(t,e){if(t){t*=r.DEG_TO_RADS;var i=Math.sin(t),s=Math.cos(t),a=e.x*s-e.y*i,n=e.x*i+e.y*s;e.x=a,e.y=n}},combineRGBComponents:function(t,e,i){return t<<16|e<<8|i},normalize:function(t){var e=1/r.length(t);t.x*=e,t.y*=e},scaleBy:function(t,e){t.x*=e,t.y*=e},length:function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},hexToRGB:function(t,e){e||(e={}),"#"==t.charAt(0)?t=t.substr(1):0===t.indexOf("0x")&&(t=t.substr(2));var i;return 8==t.length&&(i=t.substr(0,2),t=t.substr(2)),e.r=parseInt(t.substr(0,2),16),e.g=parseInt(t.substr(2,2),16),e.b=parseInt(t.substr(4,2),16),i&&(e.a=parseInt(i,16)),e},generateEase:function(t){var e=t.length,i=1/e;return function(s){var a,r,n=e*s|0;return a=(s-n*i)*e,r=t[n]||t[e-1],r.s+a*(2*(1-a)*(r.cp-r.s)+a*(r.e-r.s))}},getBlendMode:function(t){if(!t)return s.NORMAL;for(t=t.toUpperCase();t.indexOf(" ")>=0;)t=t.replace(" ","_");return s[t]||s.NORMAL},createSteppedGradient:function(t,e){void 0===e&&(e=10),("number"!=typeof e||e<=0)&&(e=10);var i=new a.default(t[0].value,t[0].time);i.isStepped=!0;for(var s=i,n=t[0],o=1,h=t[o],l=1;l<e;++l){for(var p=l/e;p>h.time;)n=h,h=t[++o];p=(p-n.time)/(h.time-n.time);var c=r.hexToRGB(n.value),u=r.hexToRGB(h.value),d={};d.r=(u.r-c.r)*p+c.r,d.g=(u.g-c.g)*p+c.g,d.b=(u.b-c.b)*p+c.b,s.next=new a.default(d,l/e),s=s.next}return i}};i.default=r},{"./PropertyNode":7}],5:[function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(i,"__esModule",{value:!0});var a=t("./ParticleUtils"),r=t("./Particle"),n=new PIXI.Point,o=["pow","sqrt","abs","floor","round","ceil","E","PI","sin","cos","tan","asin","acos","atan","atan2","log"],h=new RegExp(["[01234567890\\.\\*\\-\\+\\/\\(\\)x ,]"].concat(o).join("|"),"g"),l=function(t){for(var e=t.match(h),i=e.length-1;i>=0;--i)o.indexOf(e[i])>=0&&(e[i]="Math."+e[i]);return t=e.join(""),new Function("x","return "+t+";")},p=function(t){function e(e){var i=t.call(this,e)||this;return i.path=null,i.initialRotation=0,i.initialPosition=new PIXI.Point,i.movement=0,i}return s(e,t),e.prototype.init=function(){this.initialRotation=this.rotation,this.Particle_init(),this.path=this.extraData.path,this._doNormalMovement=!this.path,this.movement=0,this.initialPosition.x=this.position.x,this.initialPosition.y=this.position.y},e.prototype.update=function(t){var e=this.Particle_update(t);if(e>=0&&this.path){var i=this.speedList.interpolate(e)*this.speedMultiplier;this.movement+=i*t,n.x=this.movement,n.y=this.path(this.movement),a.default.rotatePoint(this.initialRotation,n),this.position.x=this.initialPosition.x+n.x,this.position.y=this.initialPosition.y+n.y}return e},e.prototype.destroy=function(){this.Particle_destroy(),this.path=this.initialPosition=null},e.parseArt=function(t){return r.default.parseArt(t)},e.parseData=function(t){var e={};if(t&&t.path)try{e.path=l(t.path)}catch(t){a.default.verbose&&console.error("PathParticle: error in parsing path expression"),e.path=null}else a.default.verbose&&console.error("PathParticle requires a path string in extraData!"),e.path=null;return e},e}(r.default);i.default=p},{"./Particle":3,"./ParticleUtils":4}],6:[function(t,e,i){"use strict";function s(t){return this.ease&&(t=this.ease(t)),(this.next.value-this.current.value)*t+this.current.value}function a(t){this.ease&&(t=this.ease(t));var e=this.current.value,i=this.next.value,s=(i.r-e.r)*t+e.r,a=(i.g-e.g)*t+e.g,r=(i.b-e.b)*t+e.b;return l.default.combineRGBComponents(s,a,r)}function r(t){for(this.ease&&(t=this.ease(t));t>this.next.time;)this.current=this.next,this.next=this.next.next;return t=(t-this.current.time)/(this.next.time-this.current.time),(this.next.value-this.current.value)*t+this.current.value}function n(t){for(this.ease&&(t=this.ease(t));t>this.next.time;)this.current=this.next,this.next=this.next.next;t=(t-this.current.time)/(this.next.time-this.current.time);var e=this.current.value,i=this.next.value,s=(i.r-e.r)*t+e.r,a=(i.g-e.g)*t+e.g,r=(i.b-e.b)*t+e.b;return l.default.combineRGBComponents(s,a,r)}function o(t){for(this.ease&&(t=this.ease(t));this.next&&t>this.next.time;)this.current=this.next,this.next=this.next.next;return this.current.value}function h(t){for(this.ease&&(t=this.ease(t));this.next&&t>this.next.time;)this.current=this.next,this.next=this.next.next;var e=this.current.value;return l.default.combineRGBComponents(e.r,e.g,e.b)}Object.defineProperty(i,"__esModule",{value:!0});var l=t("./ParticleUtils"),p=function(){function t(t){void 0===t&&(t=!1),this.current=null,this.next=null,this.isColor=!!t,this.interpolate=null,this.ease=null}return t.prototype.reset=function(t){this.current=t,this.next=t.next,this.next&&this.next.time>=1?this.interpolate=this.isColor?a:s:t.isStepped?this.interpolate=this.isColor?h:o:this.interpolate=this.isColor?n:r,this.ease=this.current.ease},t}();i.default=p},{"./ParticleUtils":4}],7:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("./ParticleUtils"),a=function(){function t(t,e,i){this.value="string"==typeof t?s.default.hexToRGB(t):t,this.time=e,this.next=null,this.isStepped=!1,this.ease=i?"function"==typeof i?i:s.default.generateEase(i):null}return t.createList=function(e){if(Array.isArray(e.list)){var i=e.list,s=void 0,a=void 0;if(a=s=new t(i[0].value,i[0].time,e.ease),i.length>2||2===i.length&&i[1].value!==i[0].value)for(var r=1;r<i.length;++r)s.next=new t(i[r].value,i[r].time),s=s.next;return a.isStepped=!!e.isStepped,a}var n=new t(e.start,0);return e.end!==e.start&&(n.next=new t(e.end,1)),n},t}();i.default=a},{"./ParticleUtils":4}],8:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=t("./ParticleUtils.js");i.ParticleUtils=s.default;var a=t("./Particle.js");i.Particle=a.default;var r=t("./Emitter.js");i.Emitter=r.default;var n=t("./PathParticle.js");i.PathParticle=n.default;var o=t("./AnimatedParticle.js");i.AnimatedParticle=o.default},{"./AnimatedParticle.js":1,"./Emitter.js":2,"./Particle.js":3,"./ParticleUtils.js":4,"./PathParticle.js":5}],9:[function(t,e,i){"use strict";if(Object.defineProperty(i,"__esModule",{value:!0}),"undefined"==typeof PIXI)throw"pixi-particles requires pixi.js to be loaded first";PIXI.particles||(PIXI.particles={});var s=t("./particles");for(var a in s)PIXI.particles[a]=s[a];void 0!==e&&e.exports&&(e.exports=s)},{"./particles":8}]},{},[9])(9)});
//# sourceMappingURL=pixi-particles.min.js.map


/***/ }),

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
var particles_level_1 = __webpack_require__(/*! ./particles_level */ "./src/particles_level.ts");
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
            for (var _i = 0, _a = [new cards_levels_1.CardsLevel(), new cards_levels_1.FastCardsLevel(), new text_image_level_1.TextImageLevel(), new particles_level_1.ParticlesLevel()]; _i < _a.length; _i++) {
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
        var text = new PIXI.Text("Using: Pixi.JS, Typescript, webpack and NPM\nGame Development Test\nMarcelo F. Rigon\nAssets: kenney.nl", style);
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

/***/ "./src/particles_level.ts":
/*!********************************!*\
  !*** ./src/particles_level.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
var TOOLS = __webpack_require__(/*! ./support */ "./src/support.ts");
var main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
var PARTICLES = __webpack_require__(/*! pixi-particles */ "./node_modules/pixi-particles/dist/pixi-particles.min.js");
var ParticlesLevel = /** @class */ (function () {
    function ParticlesLevel() {
        var _this = this;
        this.level_name = "Particles";
        this.onMove = function (e) {
        };
        this.onTick = function (delta) {
            //this.emitter.update(this.ticker.deltaTime);
            var mouseposition = main_1.BaseApp.instance.renderer.plugins.interaction.mouse.global;
            if ((mouseposition.x < 300) || (mouseposition.x > main_1.BaseApp.instance.renderer.width - 200) ||
                (mouseposition.y < 100) || (mouseposition.y > main_1.BaseApp.instance.renderer.height - 100)) {
                _this.emitter.spawnPos.x = main_1.BaseApp.instance.renderer.width / 2;
                _this.emitter.spawnPos.y = main_1.BaseApp.instance.renderer.height / 2;
            }
            else {
                _this.emitter.spawnPos.x = mouseposition.x;
                _this.emitter.spawnPos.y = mouseposition.y;
            }
        };
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.autoStart = false;
        this.ticker.stop();
    }
    ParticlesLevel.prototype.createLevel = function () {
        console.log("Particles creation started.");
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
        this.emitter.spawnPos.x = main_1.BaseApp.instance.renderer.width / 2;
        this.emitter.spawnPos.y = main_1.BaseApp.instance.renderer.height / 2;
        this.emitter.autoUpdate = true;
        this.emitter.emit = true;
        this.container.on('touchmove', this.onMove);
        this.container.on('pointermove', this.onMove);
        this.container.on('mousemove', this.onMove);
    };
    ParticlesLevel.prototype.backToMenu = function () {
        main_1.BaseApp.instance.changeLevel("MainMenu");
    };
    ParticlesLevel.prototype.destroyLevel = function () {
        this.container.destroy({ children: true });
        this.emitter.destroy();
        this.ticker.stop();
    };
    return ParticlesLevel;
}());
exports.ParticlesLevel = ParticlesLevel;


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
exports.lerp = lerp;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BpeGktcGFydGljbGVzL2Rpc3QvcGl4aS1wYXJ0aWNsZXMubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkc19sZXZlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW5fbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGVzX2xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0X2ltYWdlX2xldmVsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlBJWElcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEdBQUcsSUFBb0Qsb0JBQW9CLEtBQUssVUFBOEwsQ0FBQyxZQUFZLGtCQUFrQixrQkFBa0IsZ0JBQWdCLFVBQVUsVUFBVSwwQ0FBMEMsZ0JBQWdCLE9BQUMsT0FBTyxvQkFBb0IsOENBQThDLGtDQUFrQyxZQUFZLFlBQVksbUNBQW1DLGlCQUFpQixlQUFlLHNCQUFzQixvQkFBb0Isa0RBQWtELFdBQVcsWUFBWSxTQUFTLFNBQVMsSUFBSSxtQkFBbUIsYUFBYSx1Q0FBdUMsOEJBQThCLGFBQWEsZ0NBQWdDLGNBQWMsZ0JBQWdCLGlEQUFpRCxxQkFBcUIsYUFBYSxtQkFBbUIsOEVBQThFLEdBQUcsc0NBQXNDLFNBQVMsRUFBRSxtREFBbUQsY0FBYywyQkFBMkIsMEVBQTBFLDBDQUEwQyxxSUFBcUksa0NBQWtDLDhGQUE4RixnQ0FBZ0MsOEJBQThCLFNBQVMsZ0lBQWdJLHlDQUF5QyxrREFBa0QsU0FBUyxnQ0FBZ0MsMkNBQTJDLHdCQUF3QiwyQkFBMkIsV0FBVyxLQUFLLGdCQUFnQiw4QkFBOEIsWUFBWSxXQUFXLHVEQUF1RCxpQ0FBaUMsS0FBSyxpQkFBaUIsa0VBQWtFLElBQUksY0FBYyw0SkFBNEosU0FBUyxHQUFHLFlBQVksWUFBWSxFQUFFLGVBQWUscUJBQXFCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxzSEFBc0gsa0JBQWtCLDB5Q0FBMHlDLHNEQUFzRCxlQUFlLHVCQUF1QixpQkFBaUIsNENBQTRDLCtCQUErQiwyREFBMkQsZUFBZSxpQ0FBaUMsaUJBQWlCLGlDQUFpQywyQ0FBMkMsMEJBQTBCLEVBQUUscUJBQXFCLGlHQUFpRywrQkFBK0IsOENBQThDLGVBQWUsb0JBQW9CLGlCQUFpQiw4QkFBOEIsK0JBQStCLGlDQUFpQyxTQUFTLG1GQUFtRixnQ0FBZ0MsaVVBQWlVLHFCQUFxQixpYUFBaWEsa0JBQWtCLGs1QkFBazVCLE1BQU0sb0JBQW9CLGlFQUFpRSxrQkFBa0IsbURBQW1ELE1BQU0scUlBQXFJLE1BQU0saUtBQWlLLE1BQU0sdUpBQXVKLE1BQU0sNEVBQTRFLHNmQUFzZixpQ0FBaUMsMFNBQTBTLGdDQUFnQyxxQkFBcUIsc0JBQXNCLDRFQUE0RSwwQ0FBMEMsd0RBQXdELDBDQUEwQyx3REFBd0QsOENBQThDLHdCQUF3QiwyQ0FBMkMsZUFBZSxrQkFBa0IsaUJBQWlCLHNEQUFzRCwrQkFBK0Isa0RBQWtELGVBQWUsd0JBQXdCLGlCQUFpQixtSEFBbUgsK0JBQStCLDZDQUE2QyxzRkFBc0Ysa0NBQWtDLHNDQUFzQyxnQ0FBZ0MsdUVBQXVFLFVBQVUsaUNBQWlDLEVBQUUseUJBQXlCLFFBQVEsMEVBQTBFLHdFQUF3RSw0Q0FBNEMsb0JBQW9CLEVBQUUsbUZBQW1GLG9EQUFvRCxNQUFNLDJFQUEyRSxLQUFLLGFBQWEsaUpBQWlKLHNCQUFzQiwyQ0FBMkMsMkJBQTJCLHdCQUF3QixhQUFhLElBQUksK0VBQStFLElBQUksK0RBQStELGFBQWEseW5DQUF5bkMsNEJBQTRCLHFCQUFxQixpQ0FBaUMsS0FBSyxtQkFBbUIsY0FBYyxzQ0FBc0MsMEVBQTBFLHVNQUF1TSxtQ0FBbUMsd1BBQXdQLHlDQUF5QyxxT0FBcU8sd0NBQXdDLHdaQUF3WiwwQ0FBMEMsa2JBQWtiLHdDQUF3Qyx1QkFBdUIsc1NBQXNTLHdCQUF3Qix5TEFBeUwsMkNBQTJDLG9KQUFvSixnQ0FBZ0MsUUFBUSxpQ0FBaUMsRUFBRSwrREFBK0QsK0VBQStFLGdDQUFnQyxrQ0FBa0MsNEJBQTRCLEVBQUUseUJBQXlCLHlMQUF5TCxHQUFHLEdBQUcsWUFBWSxFQUFFLHNEQUFzRCxxQkFBcUIsYUFBYSx1Q0FBdUMsOEJBQThCLGFBQWEsZ0NBQWdDLGNBQWMsZ0JBQWdCLGlEQUFpRCxxQkFBcUIsYUFBYSxtQkFBbUIsOEVBQThFLEdBQUcsc0NBQXNDLFNBQVMsRUFBRSw2RUFBNkUsY0FBYyx5QkFBeUIsNnBCQUE2cEIsMENBQTBDLG90QkFBb3RCLG1DQUFtQyxzRUFBc0Usa0NBQWtDLG1DQUFtQyxnQ0FBZ0Msd0VBQXdFLGlDQUFpQywrSUFBK0kseURBQXlELDRCQUE0QiwyQkFBMkIsa0JBQWtCLHlEQUF5RCxzRUFBc0UsNkhBQTZILHNDQUFzQyxrRUFBa0Usc0VBQXNFLDhOQUE4Tiw2QkFBNkIsMkJBQTJCLGdDQUFnQywyTEFBMkwsd0JBQXdCLE1BQU0sZUFBZSxLQUFLLCtEQUErRCxzQ0FBc0MsSUFBSSw2Q0FBNkMsNkhBQTZILE1BQU0sU0FBUyx5QkFBeUIsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLHVDQUF1QyxxQkFBcUIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLGdEQUFnRCw2REFBNkQsTUFBTSxpQkFBaUIsNERBQTRELGFBQWEsc0NBQXNDLG9CQUFvQix1QkFBdUIsb0JBQW9CLGNBQWMsdUJBQXVCLGNBQWMsb0JBQW9CLGtDQUFrQyx3QkFBd0IsUUFBUSxzRUFBc0UsTUFBTSwyS0FBMkssMEJBQTBCLHFCQUFxQixtQkFBbUIsZ0JBQWdCLDBFQUEwRSwwQkFBMEIsc0JBQXNCLHNCQUFzQixrQkFBa0Isc0JBQXNCLHNCQUFzQixxQ0FBcUMsc0RBQXNELDBDQUEwQyxlQUFlLGtDQUFrQyxJQUFJLEtBQUssY0FBYyxTQUFTLGNBQWMsNkJBQTZCLHFEQUFxRCxpR0FBaUcsV0FBVyxZQUFZLEVBQUUsbUJBQW1CLHFCQUFxQixhQUFhLHVDQUF1Qyw4QkFBOEIsYUFBYSxnQ0FBZ0MsY0FBYyxnQkFBZ0IsaURBQWlELHFCQUFxQixhQUFhLG1CQUFtQiw4RUFBOEUsR0FBRyxzQ0FBc0MsU0FBUyxFQUFFLHdRQUF3USxrQ0FBa0MsS0FBSyw0Q0FBNEMsbURBQW1ELEdBQUcsZUFBZSxjQUFjLDJCQUEyQix1RkFBdUYsMENBQTBDLHNOQUFzTixnQ0FBZ0MsOEJBQThCLG9CQUFvQix5REFBeUQsc01BQXNNLFNBQVMsZ0NBQWdDLDREQUE0RCx3QkFBd0IsNkJBQTZCLHlCQUF5QixTQUFTLGlCQUFpQixpQkFBaUIsU0FBUywrRkFBK0YsdUdBQXVHLFNBQVMsR0FBRyxZQUFZLFlBQVksRUFBRSxtQ0FBbUMscUJBQXFCLGFBQWEsY0FBYyw2RkFBNkYsY0FBYyw0QkFBNEIsaUdBQWlHLDZDQUE2QyxjQUFjLGdDQUFnQyxpQkFBaUIsaURBQWlELDRIQUE0SCxjQUFjLGdDQUFnQyxpQkFBaUIsaURBQWlELDJEQUEyRCxpR0FBaUcsNkNBQTZDLGNBQWMsZ0NBQWdDLDRCQUE0QixpREFBaUQsMEJBQTBCLGNBQWMsZ0NBQWdDLDRCQUE0QixpREFBaUQseUJBQXlCLG1EQUFtRCxzQ0FBc0MsU0FBUyxFQUFFLHdDQUF3QyxjQUFjLDBHQUEwRyxxQ0FBcUMsMk1BQTJNLEdBQUcsR0FBRyxZQUFZLEVBQUUsb0JBQW9CLHFCQUFxQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsd0NBQXdDLGtCQUFrQixxS0FBcUssZ0NBQWdDLDBCQUEwQiwrQkFBK0Isd0dBQXdHLFdBQVcsZ0RBQWdELG1DQUFtQyx1QkFBdUIsa0RBQWtELEdBQUcsR0FBRyxZQUFZLEVBQUUsb0JBQW9CLHFCQUFxQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsOEJBQThCLDBCQUEwQix5QkFBeUIscUJBQXFCLHdCQUF3QixvQkFBb0IsNkJBQTZCLHlCQUF5QixpQ0FBaUMsNkJBQTZCLEVBQUUsMEdBQTBHLHFCQUFxQixhQUFhLHlDQUF5QyxTQUFTLHFGQUFxRixrQ0FBa0MsRUFBRSx1QkFBdUIsc0NBQXNDLHFDQUFxQyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsU0FBUztBQUM1eXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkEseURBQWdDO0FBQ2hDLHlFQUFtRTtBQUNuRSxnRUFBK0I7QUFFL0I7SUFXRTtRQUFBLGlCQUdDO1FBYkQsZUFBVSxHQUFVLE9BQU8sQ0FBQztRQUVYLGNBQVMsR0FBVSxHQUFHLENBQUM7UUFHaEMsZUFBVSxHQUFVLENBQUMsQ0FBQztRQUM5QixlQUFVLEdBQVUsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQVUsSUFBSSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVUsR0FBRyxDQUFDO1FBQzFCLG9CQUFlLEdBQVUsR0FBRyxDQUFDO1FBOERyQyxXQUFNLEdBQUcsVUFBQyxLQUFZO1lBQ3BCLEtBQUksQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDM0MsMEVBQTBFO1lBQzFFLElBQUksS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztnQkFDeEIsaUNBQWlDO2dCQUNqQyxJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxLQUFJLENBQUMsVUFBVSxHQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDaEcsS0FBSSxDQUFDLFVBQVUsRUFBRyxDQUFDO2dCQUNuQixJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUM7b0JBQ3BDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ25CLFNBQVM7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSSxDQUFDLGVBQWUsRUFBQyxLQUFLLENBQUMsQ0FBQztvQkFDM0YsT0FBTztpQkFDVjtnQkFDRCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEQ7UUFDSCxDQUFDO1FBN0VHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0QsZ0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RDLGVBQWU7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDL0UsSUFBSSxNQUFNLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxvQkFBb0IsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxrQkFBa0IsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsa0JBQWtCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4OUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksSUFBSSxHQUFHLElBQUkseUJBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsY0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsZ0JBQWU7WUFDaEUsSUFBSSxDQUFDLENBQUMsR0FBRyxjQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxHQUFDLE9BQU8sQ0FBQztZQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdCLG9CQUFvQjtRQUNwQixJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxzQkFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsY0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELCtCQUFVLEdBQVY7UUFDSSxjQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsaUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQW1CSCxpQkFBQztBQUFELENBQUM7QUExRlksZ0NBQVU7QUE0RnZCO0lBQW9DLGtDQUFVO0lBQTlDO1FBQUEscUVBSUM7UUFIRyxnQkFBVSxHQUFHLFdBQVcsQ0FBQztRQUN6QixnQkFBVSxHQUFHLEdBQUcsQ0FBQztRQUNqQixxQkFBZSxHQUFHLEdBQUcsQ0FBQzs7SUFDMUIsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxDQUptQyxVQUFVLEdBSTdDO0FBSlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRzNCLHlEQUFnQztBQUVoQyx3RkFBMEQ7QUFDMUQsb0dBQWtEO0FBQ2xELGlHQUFpRDtBQUNqRCwrRUFBcUM7QUFFckM7SUFBNkIsMkJBQWdCO0lBTTNDO1FBQUEsWUFDRSxrQkFBTSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLENBQUMsU0F5QmpFO1FBQ0QsZUFBUyxHQUFHLFVBQUMsS0FBWTtZQUN2QixJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN6QixJQUFJLEtBQUssR0FBRztvQkFDVixJQUFJLEVBQUcsaUJBQWlCO29CQUN4QixJQUFJLEVBQUcsU0FBUztvQkFDaEIsTUFBTSxFQUFHLFNBQVM7b0JBQ2xCLGVBQWUsRUFBRyxDQUFDO2lCQUNwQixDQUFDO2dCQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUF2Q0MsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLHNCQUFzQjtZQUN0QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxnQkFBZ0I7WUFDaEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdELENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDO1lBRXhCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFO1lBQzFCLElBQUksR0FBRyxHQUFHLElBQUksb0JBQVEsRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsS0FBa0IsVUFBb0YsRUFBcEYsTUFBQyxJQUFJLHlCQUFVLEVBQUUsRUFBRSxJQUFJLDZCQUFjLEVBQUUsRUFBRSxJQUFJLGlDQUFjLEVBQUUsRUFBRSxJQUFJLGdDQUFjLEVBQUUsQ0FBQyxFQUFwRixjQUFvRixFQUFwRixJQUFvRixFQUFFO2dCQUFuRyxJQUFJLEtBQUs7Z0JBQ1osS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUVuQztZQUVELGFBQWE7WUFDYixLQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUN6QixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkI7O0lBQ0gsQ0FBQztJQWdCRCw2QkFBVyxHQUFYLFVBQVksVUFBaUI7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEYsS0FBa0IsVUFBcUIsRUFBckIsU0FBSSxDQUFDLGdCQUFnQixFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFO1lBQXBDLElBQUksS0FBSztZQUNaLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7Z0JBQ25DLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDbEMsaUNBQWlDO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDM0IsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNwQixPQUFPO2FBQ1I7U0FDRjtRQUNELGdDQUFnQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixHQUFDLFVBQVUsR0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxDQS9ENEIsSUFBSSxDQUFDLFdBQVcsR0ErRDVDO0FBL0RZLDBCQUFPO0FBaUVwQixJQUFJLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN4RXhCLHlEQUFnQztBQUNoQyx5RUFBbUU7QUFDbkUsZ0VBQStCO0FBRS9CO0lBS0U7UUFBQSxpQkFxREM7UUF6REQsZUFBVSxHQUFVLFVBQVUsQ0FBQztRQTBEdkIsYUFBUSxHQUFHO1lBQ2pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx5QkFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztZQUN6RixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDN0IsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUM3QixLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxjQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLGNBQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRW5DLElBQUksS0FBSyxHQUFHLElBQUkseUJBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7WUFDekYsS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDekIsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUN2QixLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN6QixLQUFLLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUN0QixLQUFLLENBQUMsQ0FBQyxHQUFHLGNBQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pELEtBQUssQ0FBQyxDQUFDLEdBQUcsY0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixJQUFJLEtBQUssR0FBRztnQkFDUixJQUFJLEVBQUcsaUJBQWlCO2dCQUN4QixJQUFJLEVBQUcsUUFBUTthQUNsQjtZQUNELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFFLEVBQUUsQ0FBQztZQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBaEZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUV2QixJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxzQkFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvQyxJQUFJLGlCQUFpQixHQUFHLElBQUksc0JBQVksQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLGlCQUFpQixDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNwQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFeEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxzQkFBWSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdGLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFVBQVUsQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbkUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpELElBQUksZUFBZSxHQUFHLElBQUksc0JBQVksQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvRixlQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2QixlQUFlLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDMUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNO2FBQ04sR0FBRyxDQUFDLG1CQUFtQixDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQzthQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpCLFlBQVk7UUFDWixJQUFJLEtBQUssR0FBRztZQUNSLElBQUksRUFBRyxtQkFBbUI7WUFDMUIsSUFBSSxFQUFHLFFBQVE7WUFDZixLQUFLLEVBQUUsT0FBTztTQUNqQjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyx5R0FBeUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzSSxJQUFJLENBQUMsQ0FBQyxHQUFHLGNBQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUE2QkQsOEJBQVcsR0FBWDtRQUNFLEtBQW1CLFVBQVksRUFBWixTQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZLEVBQUU7WUFBNUIsSUFBSSxNQUFNO1lBQ1gsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNqQyxjQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCwrQkFBWSxHQUFaO1FBQ0UsS0FBbUIsVUFBWSxFQUFaLFNBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTtZQUE1QixJQUFJLE1BQU07WUFDWCxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLGNBQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELDZCQUFVLEdBQVY7UUFDRSxjQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUNFLGNBQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0UsY0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDRSxjQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFwSFksNEJBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQix5REFBZ0M7QUFDaEMscUVBQW1DO0FBQ25DLGdFQUErQjtBQUMvQixzSEFBNEM7QUFHNUM7SUFLRTtRQUFBLGlCQUlDO1FBUkQsZUFBVSxHQUFVLFdBQVcsQ0FBQztRQXFHaEMsV0FBTSxHQUFHLFVBQUMsQ0FBbUM7UUFFN0MsQ0FBQztRQUNELFdBQU0sR0FBRyxVQUFDLEtBQVk7WUFDcEIsNkNBQTZDO1lBQzdDLElBQUksYUFBYSxHQUFHLGNBQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMvRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsY0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQztnQkFDbEYsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxjQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZGLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO2dCQUM1RCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsY0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQzthQUU5RDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDM0M7UUFDSCxDQUFDO1FBL0dDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvQ0FBVyxHQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFdEMsY0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQixvQkFBb0I7UUFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWxCLElBQUksYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5RixhQUFhLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0QixhQUFhLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0QixPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdEYsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxDQUFDO2dCQUNWLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osS0FBSyxFQUFFLElBQUk7Z0JBQ1gsd0JBQXdCLEVBQUUsQ0FBQzthQUM1QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsU0FBUztnQkFDbEIsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLEVBQUU7Z0JBQ1Qsd0JBQXdCLEVBQUUsQ0FBQzthQUM1QjtZQUNELGNBQWMsRUFBRTtnQkFDZCxHQUFHLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsQ0FBQyxHQUFHO2FBQ1Y7WUFDRCxVQUFVLEVBQUUsQ0FBQztZQUNiLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsQ0FBQztnQkFDUixLQUFLLEVBQUUsR0FBRzthQUNYO1lBQ0QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLEdBQUc7YUFDWDtZQUNELFdBQVcsRUFBRSxRQUFRO1lBQ3JCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLGlCQUFpQixFQUFFLENBQUMsQ0FBQztZQUNyQixjQUFjLEVBQUUsR0FBRztZQUNuQixLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLENBQUM7YUFDUDtZQUNELFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLGFBQWEsRUFBRTtnQkFDYixHQUFHLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsRUFBRTthQUNSO1NBQ0YsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsbUNBQVUsR0FBVjtRQUNJLGNBQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxxQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQWlCSCxxQkFBQztBQUFELENBQUM7QUF0SFksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0IseURBQWdDO0FBVWhDO0lBQWtDLGdDQUFhO0lBUzdDLHNCQUFhLEtBQVksRUFBRSxZQUFtQixFQUFFLFdBQWtCLEVBQUUsWUFBbUIsRUFBRSxLQUFZLEVBQUUsTUFBYSxFQUFFLE1BQWE7UUFBbkksWUFDRSxpQkFBTyxTQWFSO1FBbUNELGFBQU8sR0FBRztZQUNSLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxZQUFNLEdBQUc7WUFDUCxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsYUFBTyxHQUFHO1lBQ1IsSUFBSSxLQUFJLENBQUMsY0FBYztnQkFDckIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUExREMsS0FBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDZixLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNoQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUM1QixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O0lBQ3JDLENBQUM7SUFDRCxpQ0FBVSxHQUFWLFVBQVcsS0FBWTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxLQUFLLEdBQUc7WUFDUixJQUFJLEVBQUcsaUJBQWlCO1lBQ3hCLElBQUksRUFBRyxRQUFRO1lBQ2YsS0FBSyxFQUFFLFFBQVE7WUFDZixNQUFNLEVBQUcsSUFBSSxDQUFDLFlBQVk7WUFDMUIsZUFBZSxFQUFHLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsdUNBQWdCLEdBQWhCLFVBQWlCLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELGlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBYUgsbUJBQUM7QUFBRCxDQUFDLENBdEVpQyxJQUFJLENBQUMsUUFBUSxHQXNFOUM7QUF0RVksb0NBQVk7QUF3RXpCO0lBQXFDLG1DQUFXO0lBYzlDLHlCQUFZLE9BQWlDLEVBQUUsUUFBa0M7UUFBakYsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FrQmY7UUFoQ0QsZUFBUyxHQUFVLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFVLElBQUksQ0FBQztRQUMxQixrQkFBWSxHQUFVLEtBQUssQ0FBQztRQUM1QixtQkFBYSxHQUFVLEdBQUcsQ0FBQztRQUMzQixrQkFBWSxHQUFVLEdBQUcsQ0FBQztRQUMxQixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFVLEdBQUcsQ0FBQztRQUN4QixVQUFJLEdBQVUsQ0FBQyxDQUFDO1FBR1Isa0JBQVksR0FBVSxHQUFHLENBQUM7UUFxQmxDLFVBQUksR0FBQztZQUNILCtCQUErQjtZQUMvQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixLQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRSxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFDRCxlQUFTLEdBQUMsVUFBQyxLQUFZO1lBQ3JCLEtBQUksQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDL0QsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO1lBQzlDLDhEQUE4RDtZQUM5RCxHQUFHO1lBQ0gsSUFBSSxLQUFJLENBQUMsWUFBWSxJQUFJLEdBQUcsRUFBQztnQkFDM0IsS0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsTUFBTSxHQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDakU7WUFDRCxLQUFLO1lBQ0wsSUFBSSxLQUFJLENBQUMsYUFBYSxJQUFJLEdBQUcsRUFBQztnQkFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFDLEtBQUksQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLENBQUM7YUFDakQ7WUFDRCxHQUFHO1lBQ0gsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUNmLHdCQUF3QjtnQkFDeEIsSUFBSSxLQUFJLENBQUMsWUFBWSxJQUFJLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLE1BQU0sR0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLElBQUksS0FBSSxDQUFDLFVBQVU7b0JBQ2pCLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsMEJBQTBCO2dCQUMxQixJQUFJLEtBQUksQ0FBQyxZQUFZLElBQUksQ0FBQztvQkFDeEIsS0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLEtBQUksQ0FBQyxVQUFVO29CQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxHQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUMzRDtZQUNELElBQUksS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QyxJQUFJLEtBQUksQ0FBQyxVQUFVO29CQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNqQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sR0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN2QyxLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLG9CQUFvQjthQUNyQjtRQUNILENBQUM7UUFsRUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUV4QixLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztRQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztRQUU3QixLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLE9BQU87WUFDVCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLFFBQVE7WUFDVixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFM0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDNUIsQ0FBQztJQW1ESCxzQkFBQztBQUFELENBQUMsQ0FwRm9DLElBQUksQ0FBQyxNQUFNLEdBb0YvQztBQXBGWSwwQ0FBZTtBQXNGNUIscUJBQXFCO0FBQ3JCLFNBQWdCLElBQUksQ0FBQyxFQUFTLEVBQUMsRUFBUyxFQUFDLENBQVE7SUFDL0MsT0FBTyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFDLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRkQsb0JBRUM7QUFFRDtJQUFBO0lBSUEsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQztBQUpZLHNDQUFhO0FBTTFCO0lBQW9DLGtDQUFjO0lBQ2hELHdCQUFZLGNBQThCO1FBQTFDLFlBQ0UsaUJBQU8sU0FxQlI7UUFwQkMsSUFBSSxNQUFNLEdBQVUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksTUFBTSxHQUFVLENBQUMsQ0FBQztRQUN0QixLQUFvQixVQUFjLEVBQWQsaUNBQWMsRUFBZCw0QkFBYyxFQUFkLElBQWMsRUFBRTtZQUEvQixJQUFJLE9BQU87WUFDZCxJQUFJLEdBQUcsU0FBWSxDQUFDO1lBQ3BCLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxNQUFNO2dCQUN4QixHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDNUIsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU87Z0JBQzlCLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRixPQUFPLENBQUMsSUFBSSxDQUFDLCtEQUErRCxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0YsU0FBUzthQUNWO1lBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU07WUFDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ2YsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7WUFFZixNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCOztJQUNILENBQUM7SUFDRCxtQ0FBVSxHQUFWLFVBQVcsT0FBcUI7UUFDOUIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELG9DQUFXLEdBQVgsVUFBWSxPQUFxQjtRQUMvQixPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLENBOUJtQyxJQUFJLENBQUMsU0FBUyxHQThCakQ7QUE5Qlksd0NBQWM7QUFnQzNCO0lBT0UseUJBQVksR0FBa0I7UUFBOUIsaUJBUUM7UUFkRCxpQkFBWSxHQUFVLEtBQUssQ0FBQztRQUM1QixjQUFTLEdBQVUsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIsaUJBQVksR0FBVSxDQUFDLENBQUM7UUFZaEMsV0FBTSxHQUFHLFVBQUMsS0FBWTtZQUNwQixLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3pDLElBQUksS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3hELEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsSUFBSSxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3ZDLEtBQUksQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7b0JBQzNDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQyxZQUFZLEdBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM3RCxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEtBQWlCO3dCQUNsRCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDdEIsQ0FBQyxDQUFDO2lCQUNIO2FBQ0Y7UUFDSCxDQUFDO1FBdkJDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFpQkgsc0JBQUM7QUFBRCxDQUFDO0FBaENZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNuTjVCLHlEQUFnQztBQUNoQyxxRUFBbUM7QUFDbkMsZ0VBQStCO0FBRS9CO0lBVUU7UUFBQSxpQkFLQztRQWRELGVBQVUsR0FBVSxXQUFXLENBQUM7UUFJaEMsbUJBQWMsR0FBVSxHQUFHLENBQUM7UUFDcEIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUMzQixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUMxQixpQkFBWSxHQUFVLENBQUMsQ0FBQztRQXNDeEIsV0FBTSxHQUFDO1lBQ0wsS0FBSSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUN0QyxJQUFJLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdEMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNsQjtRQUNILENBQUM7UUExQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLEVBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzZ0IsQ0FBQztJQUNELG9DQUFXLEdBQVg7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV0QyxjQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXBCLG9CQUFvQjtRQUNwQixJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlGLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLGFBQWEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRCxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxtQ0FBVSxHQUFWO1FBQ0ksY0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELHFDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQVFELHFDQUFZLEdBQVo7UUFDRSxJQUFJLE9BQU8sR0FBeUIsRUFBRSxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELElBQUksTUFBTSxHQUFVLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQyxJQUFJLFdBQVcsR0FBdUIsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDaEUsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNoQixNQUFNO2dCQUNOLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBQyxJQUFJLENBQUMsYUFBYTtvQkFDbEYsVUFBVSxFQUFFLE9BQU87b0JBQ25CLElBQUksRUFBRSxTQUFTO2lCQUNoQixDQUFDO2dCQUNGLElBQUksTUFBTSxHQUFHLEdBQUc7b0JBQ2QsS0FBSyxDQUFDLFVBQVUsR0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksTUFBTSxHQUFHLEdBQUc7b0JBQ2QsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBRTdCLElBQUksTUFBTSxHQUFHLElBQUksRUFBRTtvQkFDakIsSUFBSSxNQUFNLEdBQUcsSUFBSTt3QkFDZixLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQzt5QkFDbkIsSUFBSSxNQUFNLEdBQUcsSUFBSTt3QkFDcEIsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7eUJBQ25CLElBQUksTUFBTSxHQUFHLElBQUk7d0JBQ3BCLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELFdBQVcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUM5QixXQUFXLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUM3QjtpQkFBTTtnQkFDTCxPQUFPO2dCQUNQLFdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2dCQUMzQixXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9HO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQjtRQUNELDhCQUE4QjtRQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsY0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEYsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsY0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekYsZ0NBQWdDO1FBQ2hDLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDO0FBakdZLHdDQUFjOzs7Ozs7Ozs7Ozs7QUNKM0Isc0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIi8qIVxuICogcGl4aS1wYXJ0aWNsZXMgLSB2My4xLjBcbiAqIENvbXBpbGVkIFdlZCwgMjkgQXVnIDIwMTggMTU6NDc6NDYgVVRDXG4gKlxuICogcGl4aS1wYXJ0aWNsZXMgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZVxuICovXG4hZnVuY3Rpb24odCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNle3ZhciBlO2U9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGUucGl4aVBhcnRpY2xlcz10KCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxpLHMpe2Z1bmN0aW9uIGEobixvKXtpZighaVtuXSl7aWYoIWVbbl0pe3ZhciBoPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIW8mJmgpcmV0dXJuIGgobiwhMCk7aWYocilyZXR1cm4gcihuLCEwKTt2YXIgbD1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK24rXCInXCIpO3Rocm93IGwuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixsfXZhciBwPWlbbl09e2V4cG9ydHM6e319O2Vbbl1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24odCl7dmFyIGk9ZVtuXVsxXVt0XTtyZXR1cm4gYShpfHx0KX0scCxwLmV4cG9ydHMsdCxlLGkscyl9cmV0dXJuIGlbbl0uZXhwb3J0c31mb3IodmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxuPTA7bjxzLmxlbmd0aDtuKyspYShzW25dKTtyZXR1cm4gYX1yZXR1cm4gdH0oKSh7MTpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO3ZhciBzPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJih0W2ldPWVbaV0pfTtyZXR1cm4gZnVuY3Rpb24oZSxpKXtmdW5jdGlvbiBzKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxpKSxlLnByb3RvdHlwZT1udWxsPT09aT9PYmplY3QuY3JlYXRlKGkpOihzLnByb3RvdHlwZT1pLnByb3RvdHlwZSxuZXcgcyl9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoXCIuL1BhcnRpY2xlXCIpLHI9UElYSS5UZXh0dXJlLG49ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlKXt2YXIgaT10LmNhbGwodGhpcyxlKXx8dGhpcztyZXR1cm4gaS50ZXh0dXJlcz1udWxsLGkuZHVyYXRpb249MCxpLmZyYW1lcmF0ZT0wLGkuZWxhcHNlZD0wLGkubG9vcD0hMSxpfXJldHVybiBzKGUsdCksZS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3RoaXMuUGFydGljbGVfaW5pdCgpLHRoaXMuZWxhcHNlZD0wLHRoaXMuZnJhbWVyYXRlPDAmJih0aGlzLmR1cmF0aW9uPXRoaXMubWF4TGlmZSx0aGlzLmZyYW1lcmF0ZT10aGlzLnRleHR1cmVzLmxlbmd0aC90aGlzLmR1cmF0aW9uKX0sZS5wcm90b3R5cGUuYXBwbHlBcnQ9ZnVuY3Rpb24odCl7dGhpcy50ZXh0dXJlcz10LnRleHR1cmVzLHRoaXMuZnJhbWVyYXRlPXQuZnJhbWVyYXRlLHRoaXMuZHVyYXRpb249dC5kdXJhdGlvbix0aGlzLmxvb3A9dC5sb29wfSxlLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5QYXJ0aWNsZV91cGRhdGUodCk7aWYoZT49MCl7dGhpcy5lbGFwc2VkKz10LHRoaXMuZWxhcHNlZD50aGlzLmR1cmF0aW9uJiYodGhpcy5sb29wP3RoaXMuZWxhcHNlZD10aGlzLmVsYXBzZWQldGhpcy5kdXJhdGlvbjp0aGlzLmVsYXBzZWQ9dGhpcy5kdXJhdGlvbi0xZS02KTt2YXIgaT10aGlzLmVsYXBzZWQqdGhpcy5mcmFtZXJhdGUrMWUtN3wwO3RoaXMudGV4dHVyZT10aGlzLnRleHR1cmVzW2ldfHxQSVhJLlRleHR1cmUuRU1QVFl9cmV0dXJuIGV9LGUucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLlBhcnRpY2xlX2Rlc3Ryb3koKSx0aGlzLnRleHR1cmVzPW51bGx9LGUucGFyc2VBcnQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLGkscyxhLG4sbz1bXSxoPTA7aDx0Lmxlbmd0aDsrK2gpe2U9dFtoXSxvW2hdPWk9e30saS50ZXh0dXJlcz1uPVtdLHM9ZS50ZXh0dXJlcztmb3IodmFyIGw9MDtsPHMubGVuZ3RoOysrbClpZihcInN0cmluZ1wiPT10eXBlb2YoYT1zW2xdKSluLnB1c2goci5mcm9tSW1hZ2UoYSkpO2Vsc2UgaWYoYSBpbnN0YW5jZW9mIHIpbi5wdXNoKGEpO2Vsc2V7dmFyIHA9YS5jb3VudHx8MTtmb3IoYT1cInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0dXJlP3IuZnJvbUltYWdlKGEudGV4dHVyZSk6YS50ZXh0dXJlO3A+MDstLXApbi5wdXNoKGEpfVwibWF0Y2hMaWZlXCI9PWUuZnJhbWVyYXRlPyhpLmZyYW1lcmF0ZT0tMSxpLmR1cmF0aW9uPTAsaS5sb29wPSExKTooaS5sb29wPSEhZS5sb29wLGkuZnJhbWVyYXRlPWUuZnJhbWVyYXRlPjA/ZS5mcmFtZXJhdGU6NjAsaS5kdXJhdGlvbj1uLmxlbmd0aC9pLmZyYW1lcmF0ZSl9cmV0dXJuIG99LGV9KGEuZGVmYXVsdCk7aS5kZWZhdWx0PW59LHtcIi4vUGFydGljbGVcIjozfV0sMjpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPXQoXCIuL1BhcnRpY2xlVXRpbHNcIiksYT10KFwiLi9QYXJ0aWNsZVwiKSxyPXQoXCIuL1Byb3BlcnR5Tm9kZVwiKSxuPVBJWEkudGlja2VyLnNoYXJlZCxvPW5ldyBQSVhJLlBvaW50LGg9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxpKXt0aGlzLl9wYXJ0aWNsZUNvbnN0cnVjdG9yPWEuZGVmYXVsdCx0aGlzLnBhcnRpY2xlSW1hZ2VzPW51bGwsdGhpcy5zdGFydEFscGhhPW51bGwsdGhpcy5zdGFydFNwZWVkPW51bGwsdGhpcy5taW5pbXVtU3BlZWRNdWx0aXBsaWVyPTEsdGhpcy5hY2NlbGVyYXRpb249bnVsbCx0aGlzLm1heFNwZWVkPU5hTix0aGlzLnN0YXJ0U2NhbGU9bnVsbCx0aGlzLm1pbmltdW1TY2FsZU11bHRpcGxpZXI9MSx0aGlzLnN0YXJ0Q29sb3I9bnVsbCx0aGlzLm1pbkxpZmV0aW1lPTAsdGhpcy5tYXhMaWZldGltZT0wLHRoaXMubWluU3RhcnRSb3RhdGlvbj0wLHRoaXMubWF4U3RhcnRSb3RhdGlvbj0wLHRoaXMubm9Sb3RhdGlvbj0hMSx0aGlzLm1pblJvdGF0aW9uU3BlZWQ9MCx0aGlzLm1heFJvdGF0aW9uU3BlZWQ9MCx0aGlzLnBhcnRpY2xlQmxlbmRNb2RlPTAsdGhpcy5jdXN0b21FYXNlPW51bGwsdGhpcy5leHRyYURhdGE9bnVsbCx0aGlzLl9mcmVxdWVuY3k9MSx0aGlzLnNwYXduQ2hhbmNlPTEsdGhpcy5tYXhQYXJ0aWNsZXM9MWUzLHRoaXMuZW1pdHRlckxpZmV0aW1lPS0xLHRoaXMuc3Bhd25Qb3M9bnVsbCx0aGlzLnNwYXduVHlwZT1udWxsLHRoaXMuX3NwYXduRnVuYz1udWxsLHRoaXMuc3Bhd25SZWN0PW51bGwsdGhpcy5zcGF3bkNpcmNsZT1udWxsLHRoaXMucGFydGljbGVzUGVyV2F2ZT0xLHRoaXMucGFydGljbGVTcGFjaW5nPTAsdGhpcy5hbmdsZVN0YXJ0PTAsdGhpcy5yb3RhdGlvbj0wLHRoaXMub3duZXJQb3M9bnVsbCx0aGlzLl9wcmV2RW1pdHRlclBvcz1udWxsLHRoaXMuX3ByZXZQb3NJc1ZhbGlkPSExLHRoaXMuX3Bvc0NoYW5nZWQ9ITEsdGhpcy5fcGFyZW50PW51bGwsdGhpcy5hZGRBdEJhY2s9ITEsdGhpcy5wYXJ0aWNsZUNvdW50PTAsdGhpcy5fZW1pdD0hMSx0aGlzLl9zcGF3blRpbWVyPTAsdGhpcy5fZW1pdHRlckxpZmU9LTEsdGhpcy5fYWN0aXZlUGFydGljbGVzRmlyc3Q9bnVsbCx0aGlzLl9hY3RpdmVQYXJ0aWNsZXNMYXN0PW51bGwsdGhpcy5fcG9vbEZpcnN0PW51bGwsdGhpcy5fb3JpZ0NvbmZpZz1udWxsLHRoaXMuX29yaWdBcnQ9bnVsbCx0aGlzLl9hdXRvVXBkYXRlPSExLHRoaXMuX2Rlc3Ryb3lXaGVuQ29tcGxldGU9ITEsdGhpcy5fY29tcGxldGVDYWxsYmFjaz1udWxsLHRoaXMucGFyZW50PXQsZSYmaSYmdGhpcy5pbml0KGUsaSksdGhpcy5yZWN5Y2xlPXRoaXMucmVjeWNsZSx0aGlzLnVwZGF0ZT10aGlzLnVwZGF0ZSx0aGlzLnJvdGF0ZT10aGlzLnJvdGF0ZSx0aGlzLnVwZGF0ZVNwYXduUG9zPXRoaXMudXBkYXRlU3Bhd25Qb3MsdGhpcy51cGRhdGVPd25lclBvcz10aGlzLnVwZGF0ZU93bmVyUG9zfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJmcmVxdWVuY3lcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ZyZXF1ZW5jeX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2ZyZXF1ZW5jeT1cIm51bWJlclwiPT10eXBlb2YgdCYmdD4wP3Q6MX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJwYXJ0aWNsZUNvbnN0cnVjdG9yXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wYXJ0aWNsZUNvbnN0cnVjdG9yfSxzZXQ6ZnVuY3Rpb24odCl7aWYodCE9dGhpcy5fcGFydGljbGVDb25zdHJ1Y3Rvcil7dGhpcy5fcGFydGljbGVDb25zdHJ1Y3Rvcj10LHRoaXMuY2xlYW51cCgpO2Zvcih2YXIgZT10aGlzLl9wb29sRmlyc3Q7ZTtlPWUubmV4dCllLmRlc3Ryb3koKTt0aGlzLl9wb29sRmlyc3Q9bnVsbCx0aGlzLl9vcmlnQ29uZmlnJiZ0aGlzLl9vcmlnQXJ0JiZ0aGlzLmluaXQodGhpcy5fb3JpZ0FydCx0aGlzLl9vcmlnQ29uZmlnKX19LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicGFyZW50XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wYXJlbnR9LHNldDpmdW5jdGlvbih0KXt0aGlzLmNsZWFudXAoKSx0aGlzLl9wYXJlbnQ9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKHQsZSl7aWYodCYmZSl7dGhpcy5jbGVhbnVwKCksdGhpcy5fb3JpZ0NvbmZpZz1lLHRoaXMuX29yaWdBcnQ9dCx0PUFycmF5LmlzQXJyYXkodCk/dC5zbGljZSgpOlt0XTt2YXIgaT10aGlzLl9wYXJ0aWNsZUNvbnN0cnVjdG9yO3RoaXMucGFydGljbGVJbWFnZXM9aS5wYXJzZUFydD9pLnBhcnNlQXJ0KHQpOnQsZS5hbHBoYT90aGlzLnN0YXJ0QWxwaGE9ci5kZWZhdWx0LmNyZWF0ZUxpc3QoZS5hbHBoYSk6dGhpcy5zdGFydEFscGhhPW5ldyByLmRlZmF1bHQoMSwwKSxlLnNwZWVkPyh0aGlzLnN0YXJ0U3BlZWQ9ci5kZWZhdWx0LmNyZWF0ZUxpc3QoZS5zcGVlZCksdGhpcy5taW5pbXVtU3BlZWRNdWx0aXBsaWVyPWUuc3BlZWQubWluaW11bVNwZWVkTXVsdGlwbGllcnx8MSk6KHRoaXMubWluaW11bVNwZWVkTXVsdGlwbGllcj0xLHRoaXMuc3RhcnRTcGVlZD1uZXcgci5kZWZhdWx0KDAsMCkpO3ZhciBhPWUuYWNjZWxlcmF0aW9uO2EmJihhLnh8fGEueSk/KHRoaXMuc3RhcnRTcGVlZC5uZXh0PW51bGwsdGhpcy5hY2NlbGVyYXRpb249bmV3IFBJWEkuUG9pbnQoYS54LGEueSksdGhpcy5tYXhTcGVlZD1lLm1heFNwZWVkfHxOYU4pOnRoaXMuYWNjZWxlcmF0aW9uPW5ldyBQSVhJLlBvaW50LGUuc2NhbGU/KHRoaXMuc3RhcnRTY2FsZT1yLmRlZmF1bHQuY3JlYXRlTGlzdChlLnNjYWxlKSx0aGlzLm1pbmltdW1TY2FsZU11bHRpcGxpZXI9ZS5zY2FsZS5taW5pbXVtU2NhbGVNdWx0aXBsaWVyfHwxKToodGhpcy5zdGFydFNjYWxlPW5ldyByLmRlZmF1bHQoMSwwKSx0aGlzLm1pbmltdW1TY2FsZU11bHRpcGxpZXI9MSksZS5jb2xvcj90aGlzLnN0YXJ0Q29sb3I9ci5kZWZhdWx0LmNyZWF0ZUxpc3QoZS5jb2xvcik6dGhpcy5zdGFydENvbG9yPW5ldyByLmRlZmF1bHQoe3I6MjU1LGc6MjU1LGI6MjU1fSwwKSxlLnN0YXJ0Um90YXRpb24/KHRoaXMubWluU3RhcnRSb3RhdGlvbj1lLnN0YXJ0Um90YXRpb24ubWluLHRoaXMubWF4U3RhcnRSb3RhdGlvbj1lLnN0YXJ0Um90YXRpb24ubWF4KTp0aGlzLm1pblN0YXJ0Um90YXRpb249dGhpcy5tYXhTdGFydFJvdGF0aW9uPTAsZS5ub1JvdGF0aW9uJiYodGhpcy5taW5TdGFydFJvdGF0aW9ufHx0aGlzLm1heFN0YXJ0Um90YXRpb24pP3RoaXMubm9Sb3RhdGlvbj0hIWUubm9Sb3RhdGlvbjp0aGlzLm5vUm90YXRpb249ITEsZS5yb3RhdGlvblNwZWVkPyh0aGlzLm1pblJvdGF0aW9uU3BlZWQ9ZS5yb3RhdGlvblNwZWVkLm1pbix0aGlzLm1heFJvdGF0aW9uU3BlZWQ9ZS5yb3RhdGlvblNwZWVkLm1heCk6dGhpcy5taW5Sb3RhdGlvblNwZWVkPXRoaXMubWF4Um90YXRpb25TcGVlZD0wLHRoaXMubWluTGlmZXRpbWU9ZS5saWZldGltZS5taW4sdGhpcy5tYXhMaWZldGltZT1lLmxpZmV0aW1lLm1heCx0aGlzLnBhcnRpY2xlQmxlbmRNb2RlPXMuZGVmYXVsdC5nZXRCbGVuZE1vZGUoZS5ibGVuZE1vZGUpLGUuZWFzZT90aGlzLmN1c3RvbUVhc2U9XCJmdW5jdGlvblwiPT10eXBlb2YgZS5lYXNlP2UuZWFzZTpzLmRlZmF1bHQuZ2VuZXJhdGVFYXNlKGUuZWFzZSk6dGhpcy5jdXN0b21FYXNlPW51bGwsaS5wYXJzZURhdGE/dGhpcy5leHRyYURhdGE9aS5wYXJzZURhdGEoZS5leHRyYURhdGEpOnRoaXMuZXh0cmFEYXRhPWUuZXh0cmFEYXRhfHxudWxsLHRoaXMuc3Bhd25SZWN0PXRoaXMuc3Bhd25DaXJjbGU9bnVsbCx0aGlzLnBhcnRpY2xlc1BlcldhdmU9MSxlLnBhcnRpY2xlc1BlcldhdmUmJmUucGFydGljbGVzUGVyV2F2ZT4xJiYodGhpcy5wYXJ0aWNsZXNQZXJXYXZlPWUucGFydGljbGVzUGVyV2F2ZSksdGhpcy5wYXJ0aWNsZVNwYWNpbmc9MCx0aGlzLmFuZ2xlU3RhcnQ9MDt2YXIgbjtzd2l0Y2goZS5zcGF3blR5cGUpe2Nhc2VcInJlY3RcIjp0aGlzLnNwYXduVHlwZT1cInJlY3RcIix0aGlzLl9zcGF3bkZ1bmM9dGhpcy5fc3Bhd25SZWN0O3ZhciBvPWUuc3Bhd25SZWN0O3RoaXMuc3Bhd25SZWN0PW5ldyBQSVhJLlJlY3RhbmdsZShvLngsby55LG8udyxvLmgpO2JyZWFrO2Nhc2VcImNpcmNsZVwiOnRoaXMuc3Bhd25UeXBlPVwiY2lyY2xlXCIsdGhpcy5fc3Bhd25GdW5jPXRoaXMuX3NwYXduQ2lyY2xlLG49ZS5zcGF3bkNpcmNsZSx0aGlzLnNwYXduQ2lyY2xlPW5ldyBQSVhJLkNpcmNsZShuLngsbi55LG4ucik7YnJlYWs7Y2FzZVwicmluZ1wiOnRoaXMuc3Bhd25UeXBlPVwicmluZ1wiLHRoaXMuX3NwYXduRnVuYz10aGlzLl9zcGF3blJpbmcsbj1lLnNwYXduQ2lyY2xlLHRoaXMuc3Bhd25DaXJjbGU9bmV3IFBJWEkuQ2lyY2xlKG4ueCxuLnksbi5yKSx0aGlzLnNwYXduQ2lyY2xlLm1pblJhZGl1cz1uLm1pblI7YnJlYWs7Y2FzZVwiYnVyc3RcIjp0aGlzLnNwYXduVHlwZT1cImJ1cnN0XCIsdGhpcy5fc3Bhd25GdW5jPXRoaXMuX3NwYXduQnVyc3QsdGhpcy5wYXJ0aWNsZVNwYWNpbmc9ZS5wYXJ0aWNsZVNwYWNpbmcsdGhpcy5hbmdsZVN0YXJ0PWUuYW5nbGVTdGFydD9lLmFuZ2xlU3RhcnQ6MDticmVhaztjYXNlXCJwb2ludFwiOmRlZmF1bHQ6dGhpcy5zcGF3blR5cGU9XCJwb2ludFwiLHRoaXMuX3NwYXduRnVuYz10aGlzLl9zcGF3blBvaW50fXRoaXMuZnJlcXVlbmN5PWUuZnJlcXVlbmN5LHRoaXMuc3Bhd25DaGFuY2U9XCJudW1iZXJcIj09dHlwZW9mIGUuc3Bhd25DaGFuY2UmJmUuc3Bhd25DaGFuY2U+MD9lLnNwYXduQ2hhbmNlOjEsdGhpcy5lbWl0dGVyTGlmZXRpbWU9ZS5lbWl0dGVyTGlmZXRpbWV8fC0xLHRoaXMubWF4UGFydGljbGVzPWUubWF4UGFydGljbGVzPjA/ZS5tYXhQYXJ0aWNsZXM6MWUzLHRoaXMuYWRkQXRCYWNrPSEhZS5hZGRBdEJhY2ssdGhpcy5yb3RhdGlvbj0wLHRoaXMub3duZXJQb3M9bmV3IFBJWEkuUG9pbnQsdGhpcy5zcGF3blBvcz1uZXcgUElYSS5Qb2ludChlLnBvcy54LGUucG9zLnkpLHRoaXMuX3ByZXZFbWl0dGVyUG9zPXRoaXMuc3Bhd25Qb3MuY2xvbmUoKSx0aGlzLl9wcmV2UG9zSXNWYWxpZD0hMSx0aGlzLl9zcGF3blRpbWVyPTAsdGhpcy5lbWl0PXZvaWQgMD09PWUuZW1pdHx8ISFlLmVtaXQsdGhpcy5hdXRvVXBkYXRlPXZvaWQgMCE9PWUuYXV0b1VwZGF0ZSYmISFlLmF1dG9VcGRhdGV9fSx0LnByb3RvdHlwZS5yZWN5Y2xlPWZ1bmN0aW9uKHQpe3QubmV4dCYmKHQubmV4dC5wcmV2PXQucHJldiksdC5wcmV2JiYodC5wcmV2Lm5leHQ9dC5uZXh0KSx0PT10aGlzLl9hY3RpdmVQYXJ0aWNsZXNMYXN0JiYodGhpcy5fYWN0aXZlUGFydGljbGVzTGFzdD10LnByZXYpLHQ9PXRoaXMuX2FjdGl2ZVBhcnRpY2xlc0ZpcnN0JiYodGhpcy5fYWN0aXZlUGFydGljbGVzRmlyc3Q9dC5uZXh0KSx0LnByZXY9bnVsbCx0Lm5leHQ9dGhpcy5fcG9vbEZpcnN0LHRoaXMuX3Bvb2xGaXJzdD10LHQucGFyZW50JiZ0LnBhcmVudC5yZW1vdmVDaGlsZCh0KSwtLXRoaXMucGFydGljbGVDb3VudH0sdC5wcm90b3R5cGUucm90YXRlPWZ1bmN0aW9uKHQpe2lmKHRoaXMucm90YXRpb24hPXQpe3ZhciBlPXQtdGhpcy5yb3RhdGlvbjt0aGlzLnJvdGF0aW9uPXQscy5kZWZhdWx0LnJvdGF0ZVBvaW50KGUsdGhpcy5zcGF3blBvcyksdGhpcy5fcG9zQ2hhbmdlZD0hMH19LHQucHJvdG90eXBlLnVwZGF0ZVNwYXduUG9zPWZ1bmN0aW9uKHQsZSl7dGhpcy5fcG9zQ2hhbmdlZD0hMCx0aGlzLnNwYXduUG9zLng9dCx0aGlzLnNwYXduUG9zLnk9ZX0sdC5wcm90b3R5cGUudXBkYXRlT3duZXJQb3M9ZnVuY3Rpb24odCxlKXt0aGlzLl9wb3NDaGFuZ2VkPSEwLHRoaXMub3duZXJQb3MueD10LHRoaXMub3duZXJQb3MueT1lfSx0LnByb3RvdHlwZS5yZXNldFBvc2l0aW9uVHJhY2tpbmc9ZnVuY3Rpb24oKXt0aGlzLl9wcmV2UG9zSXNWYWxpZD0hMX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZW1pdFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZW1pdH0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2VtaXQ9ISF0LHRoaXMuX2VtaXR0ZXJMaWZlPXRoaXMuZW1pdHRlckxpZmV0aW1lfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImF1dG9VcGRhdGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2F1dG9VcGRhdGV9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9hdXRvVXBkYXRlJiYhdD9uLnJlbW92ZSh0aGlzLnVwZGF0ZSx0aGlzKTohdGhpcy5fYXV0b1VwZGF0ZSYmdCYmbi5hZGQodGhpcy51cGRhdGUsdGhpcyksdGhpcy5fYXV0b1VwZGF0ZT0hIXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUucGxheU9uY2VBbmREZXN0cm95PWZ1bmN0aW9uKHQpe3RoaXMuYXV0b1VwZGF0ZT0hMCx0aGlzLmVtaXQ9ITAsdGhpcy5fZGVzdHJveVdoZW5Db21wbGV0ZT0hMCx0aGlzLl9jb21wbGV0ZUNhbGxiYWNrPXR9LHQucHJvdG90eXBlLnBsYXlPbmNlPWZ1bmN0aW9uKHQpe3RoaXMuZW1pdD0hMCx0aGlzLl9jb21wbGV0ZUNhbGxiYWNrPXR9LHQucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbih0KXtpZih0aGlzLl9hdXRvVXBkYXRlJiYodD10L1BJWEkuc2V0dGluZ3MuVEFSR0VUX0ZQTVMvMWUzKSx0aGlzLl9wYXJlbnQpe3ZhciBlLGkscztmb3IoaT10aGlzLl9hY3RpdmVQYXJ0aWNsZXNGaXJzdDtpO2k9cylzPWkubmV4dCxpLnVwZGF0ZSh0KTt2YXIgYSxyO3RoaXMuX3ByZXZQb3NJc1ZhbGlkJiYoYT10aGlzLl9wcmV2RW1pdHRlclBvcy54LHI9dGhpcy5fcHJldkVtaXR0ZXJQb3MueSk7dmFyIG49dGhpcy5vd25lclBvcy54K3RoaXMuc3Bhd25Qb3MueCxvPXRoaXMub3duZXJQb3MueSt0aGlzLnNwYXduUG9zLnk7aWYodGhpcy5fZW1pdClmb3IodGhpcy5fc3Bhd25UaW1lci09dDwwPzA6dDt0aGlzLl9zcGF3blRpbWVyPD0wOyl7aWYodGhpcy5fZW1pdHRlckxpZmU+MCYmKHRoaXMuX2VtaXR0ZXJMaWZlLT10aGlzLl9mcmVxdWVuY3ksdGhpcy5fZW1pdHRlckxpZmU8PTApKXt0aGlzLl9zcGF3blRpbWVyPTAsdGhpcy5fZW1pdHRlckxpZmU9MCx0aGlzLmVtaXQ9ITE7YnJlYWt9aWYodGhpcy5wYXJ0aWNsZUNvdW50Pj10aGlzLm1heFBhcnRpY2xlcyl0aGlzLl9zcGF3blRpbWVyKz10aGlzLl9mcmVxdWVuY3k7ZWxzZXt2YXIgaD12b2lkIDA7aWYoaD10aGlzLm1pbkxpZmV0aW1lPT10aGlzLm1heExpZmV0aW1lP3RoaXMubWluTGlmZXRpbWU6TWF0aC5yYW5kb20oKSoodGhpcy5tYXhMaWZldGltZS10aGlzLm1pbkxpZmV0aW1lKSt0aGlzLm1pbkxpZmV0aW1lLC10aGlzLl9zcGF3blRpbWVyPGgpe3ZhciBsPXZvaWQgMCxwPXZvaWQgMDtpZih0aGlzLl9wcmV2UG9zSXNWYWxpZCYmdGhpcy5fcG9zQ2hhbmdlZCl7dmFyIGM9MSt0aGlzLl9zcGF3blRpbWVyL3Q7bD0obi1hKSpjK2EscD0oby1yKSpjK3J9ZWxzZSBsPW4scD1vO2U9MDtmb3IodmFyIHU9TWF0aC5taW4odGhpcy5wYXJ0aWNsZXNQZXJXYXZlLHRoaXMubWF4UGFydGljbGVzLXRoaXMucGFydGljbGVDb3VudCk7ZTx1OysrZSlpZighKHRoaXMuc3Bhd25DaGFuY2U8MSYmTWF0aC5yYW5kb20oKT49dGhpcy5zcGF3bkNoYW5jZSkpe3ZhciBkPXZvaWQgMDtpZih0aGlzLl9wb29sRmlyc3Q/KGQ9dGhpcy5fcG9vbEZpcnN0LHRoaXMuX3Bvb2xGaXJzdD10aGlzLl9wb29sRmlyc3QubmV4dCxkLm5leHQ9bnVsbCk6ZD1uZXcgdGhpcy5wYXJ0aWNsZUNvbnN0cnVjdG9yKHRoaXMpLHRoaXMucGFydGljbGVJbWFnZXMubGVuZ3RoPjE/ZC5hcHBseUFydCh0aGlzLnBhcnRpY2xlSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLnBhcnRpY2xlSW1hZ2VzLmxlbmd0aCldKTpkLmFwcGx5QXJ0KHRoaXMucGFydGljbGVJbWFnZXNbMF0pLGQuYWxwaGFMaXN0LnJlc2V0KHRoaXMuc3RhcnRBbHBoYSksMSE9dGhpcy5taW5pbXVtU3BlZWRNdWx0aXBsaWVyJiYoZC5zcGVlZE11bHRpcGxpZXI9TWF0aC5yYW5kb20oKSooMS10aGlzLm1pbmltdW1TcGVlZE11bHRpcGxpZXIpK3RoaXMubWluaW11bVNwZWVkTXVsdGlwbGllciksZC5zcGVlZExpc3QucmVzZXQodGhpcy5zdGFydFNwZWVkKSxkLmFjY2VsZXJhdGlvbi54PXRoaXMuYWNjZWxlcmF0aW9uLngsZC5hY2NlbGVyYXRpb24ueT10aGlzLmFjY2VsZXJhdGlvbi55LGQubWF4U3BlZWQ9dGhpcy5tYXhTcGVlZCwxIT10aGlzLm1pbmltdW1TY2FsZU11bHRpcGxpZXImJihkLnNjYWxlTXVsdGlwbGllcj1NYXRoLnJhbmRvbSgpKigxLXRoaXMubWluaW11bVNjYWxlTXVsdGlwbGllcikrdGhpcy5taW5pbXVtU2NhbGVNdWx0aXBsaWVyKSxkLnNjYWxlTGlzdC5yZXNldCh0aGlzLnN0YXJ0U2NhbGUpLGQuY29sb3JMaXN0LnJlc2V0KHRoaXMuc3RhcnRDb2xvciksdGhpcy5taW5Sb3RhdGlvblNwZWVkPT10aGlzLm1heFJvdGF0aW9uU3BlZWQ/ZC5yb3RhdGlvblNwZWVkPXRoaXMubWluUm90YXRpb25TcGVlZDpkLnJvdGF0aW9uU3BlZWQ9TWF0aC5yYW5kb20oKSoodGhpcy5tYXhSb3RhdGlvblNwZWVkLXRoaXMubWluUm90YXRpb25TcGVlZCkrdGhpcy5taW5Sb3RhdGlvblNwZWVkLGQubm9Sb3RhdGlvbj10aGlzLm5vUm90YXRpb24sZC5tYXhMaWZlPWgsZC5ibGVuZE1vZGU9dGhpcy5wYXJ0aWNsZUJsZW5kTW9kZSxkLmVhc2U9dGhpcy5jdXN0b21FYXNlLGQuZXh0cmFEYXRhPXRoaXMuZXh0cmFEYXRhLHRoaXMuX3NwYXduRnVuYyhkLGwscCxlKSxkLmluaXQoKSxkLnVwZGF0ZSgtdGhpcy5fc3Bhd25UaW1lciksZC5wYXJlbnQpe3ZhciBmPXRoaXMuX3BhcmVudC5jaGlsZHJlbjtpZihmWzBdPT1kKWYuc2hpZnQoKTtlbHNlIGlmKGZbZi5sZW5ndGgtMV09PWQpZi5wb3AoKTtlbHNle3ZhciBtPWYuaW5kZXhPZihkKTtmLnNwbGljZShtLDEpfXRoaXMuYWRkQXRCYWNrP2YudW5zaGlmdChkKTpmLnB1c2goZCl9ZWxzZSB0aGlzLmFkZEF0QmFjaz90aGlzLl9wYXJlbnQuYWRkQ2hpbGRBdChkLDApOnRoaXMuX3BhcmVudC5hZGRDaGlsZChkKTt0aGlzLl9hY3RpdmVQYXJ0aWNsZXNMYXN0Pyh0aGlzLl9hY3RpdmVQYXJ0aWNsZXNMYXN0Lm5leHQ9ZCxkLnByZXY9dGhpcy5fYWN0aXZlUGFydGljbGVzTGFzdCx0aGlzLl9hY3RpdmVQYXJ0aWNsZXNMYXN0PWQpOnRoaXMuX2FjdGl2ZVBhcnRpY2xlc0xhc3Q9dGhpcy5fYWN0aXZlUGFydGljbGVzRmlyc3Q9ZCwrK3RoaXMucGFydGljbGVDb3VudH19dGhpcy5fc3Bhd25UaW1lcis9dGhpcy5fZnJlcXVlbmN5fX10aGlzLl9wb3NDaGFuZ2VkJiYodGhpcy5fcHJldkVtaXR0ZXJQb3MueD1uLHRoaXMuX3ByZXZFbWl0dGVyUG9zLnk9byx0aGlzLl9wcmV2UG9zSXNWYWxpZD0hMCx0aGlzLl9wb3NDaGFuZ2VkPSExKSx0aGlzLl9lbWl0fHx0aGlzLl9hY3RpdmVQYXJ0aWNsZXNGaXJzdHx8KHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2smJnRoaXMuX2NvbXBsZXRlQ2FsbGJhY2soKSx0aGlzLl9kZXN0cm95V2hlbkNvbXBsZXRlJiZ0aGlzLmRlc3Ryb3koKSl9fSx0LnByb3RvdHlwZS5fc3Bhd25Qb2ludD1mdW5jdGlvbih0LGUsaSl7dGhpcy5taW5TdGFydFJvdGF0aW9uPT10aGlzLm1heFN0YXJ0Um90YXRpb24/dC5yb3RhdGlvbj10aGlzLm1pblN0YXJ0Um90YXRpb24rdGhpcy5yb3RhdGlvbjp0LnJvdGF0aW9uPU1hdGgucmFuZG9tKCkqKHRoaXMubWF4U3RhcnRSb3RhdGlvbi10aGlzLm1pblN0YXJ0Um90YXRpb24pK3RoaXMubWluU3RhcnRSb3RhdGlvbit0aGlzLnJvdGF0aW9uLHQucG9zaXRpb24ueD1lLHQucG9zaXRpb24ueT1pfSx0LnByb3RvdHlwZS5fc3Bhd25SZWN0PWZ1bmN0aW9uKHQsZSxpKXt0aGlzLm1pblN0YXJ0Um90YXRpb249PXRoaXMubWF4U3RhcnRSb3RhdGlvbj90LnJvdGF0aW9uPXRoaXMubWluU3RhcnRSb3RhdGlvbit0aGlzLnJvdGF0aW9uOnQucm90YXRpb249TWF0aC5yYW5kb20oKSoodGhpcy5tYXhTdGFydFJvdGF0aW9uLXRoaXMubWluU3RhcnRSb3RhdGlvbikrdGhpcy5taW5TdGFydFJvdGF0aW9uK3RoaXMucm90YXRpb24sby54PU1hdGgucmFuZG9tKCkqdGhpcy5zcGF3blJlY3Qud2lkdGgrdGhpcy5zcGF3blJlY3QueCxvLnk9TWF0aC5yYW5kb20oKSp0aGlzLnNwYXduUmVjdC5oZWlnaHQrdGhpcy5zcGF3blJlY3QueSwwIT09dGhpcy5yb3RhdGlvbiYmcy5kZWZhdWx0LnJvdGF0ZVBvaW50KHRoaXMucm90YXRpb24sbyksdC5wb3NpdGlvbi54PWUrby54LHQucG9zaXRpb24ueT1pK28ueX0sdC5wcm90b3R5cGUuX3NwYXduQ2lyY2xlPWZ1bmN0aW9uKHQsZSxpKXt0aGlzLm1pblN0YXJ0Um90YXRpb249PXRoaXMubWF4U3RhcnRSb3RhdGlvbj90LnJvdGF0aW9uPXRoaXMubWluU3RhcnRSb3RhdGlvbit0aGlzLnJvdGF0aW9uOnQucm90YXRpb249TWF0aC5yYW5kb20oKSoodGhpcy5tYXhTdGFydFJvdGF0aW9uLXRoaXMubWluU3RhcnRSb3RhdGlvbikrdGhpcy5taW5TdGFydFJvdGF0aW9uK3RoaXMucm90YXRpb24sby54PU1hdGgucmFuZG9tKCkqdGhpcy5zcGF3bkNpcmNsZS5yYWRpdXMsby55PTAscy5kZWZhdWx0LnJvdGF0ZVBvaW50KDM2MCpNYXRoLnJhbmRvbSgpLG8pLG8ueCs9dGhpcy5zcGF3bkNpcmNsZS54LG8ueSs9dGhpcy5zcGF3bkNpcmNsZS55LDAhPT10aGlzLnJvdGF0aW9uJiZzLmRlZmF1bHQucm90YXRlUG9pbnQodGhpcy5yb3RhdGlvbixvKSx0LnBvc2l0aW9uLng9ZStvLngsdC5wb3NpdGlvbi55PWkrby55fSx0LnByb3RvdHlwZS5fc3Bhd25SaW5nPWZ1bmN0aW9uKHQsZSxpKXt2YXIgYT10aGlzLnNwYXduQ2lyY2xlO3RoaXMubWluU3RhcnRSb3RhdGlvbj09dGhpcy5tYXhTdGFydFJvdGF0aW9uP3Qucm90YXRpb249dGhpcy5taW5TdGFydFJvdGF0aW9uK3RoaXMucm90YXRpb246dC5yb3RhdGlvbj1NYXRoLnJhbmRvbSgpKih0aGlzLm1heFN0YXJ0Um90YXRpb24tdGhpcy5taW5TdGFydFJvdGF0aW9uKSt0aGlzLm1pblN0YXJ0Um90YXRpb24rdGhpcy5yb3RhdGlvbixhLm1pblJhZGl1cyE9PWEucmFkaXVzP28ueD1NYXRoLnJhbmRvbSgpKihhLnJhZGl1cy1hLm1pblJhZGl1cykrYS5taW5SYWRpdXM6by54PWEucmFkaXVzLG8ueT0wO3ZhciByPTM2MCpNYXRoLnJhbmRvbSgpO3Qucm90YXRpb24rPXIscy5kZWZhdWx0LnJvdGF0ZVBvaW50KHIsbyksby54Kz10aGlzLnNwYXduQ2lyY2xlLngsby55Kz10aGlzLnNwYXduQ2lyY2xlLnksMCE9PXRoaXMucm90YXRpb24mJnMuZGVmYXVsdC5yb3RhdGVQb2ludCh0aGlzLnJvdGF0aW9uLG8pLHQucG9zaXRpb24ueD1lK28ueCx0LnBvc2l0aW9uLnk9aStvLnl9LHQucHJvdG90eXBlLl9zcGF3bkJ1cnN0PWZ1bmN0aW9uKHQsZSxpLHMpezA9PT10aGlzLnBhcnRpY2xlU3BhY2luZz90LnJvdGF0aW9uPTM2MCpNYXRoLnJhbmRvbSgpOnQucm90YXRpb249dGhpcy5hbmdsZVN0YXJ0K3RoaXMucGFydGljbGVTcGFjaW5nKnMrdGhpcy5yb3RhdGlvbix0LnBvc2l0aW9uLng9ZSx0LnBvc2l0aW9uLnk9aX0sdC5wcm90b3R5cGUuY2xlYW51cD1mdW5jdGlvbigpe3ZhciB0LGU7Zm9yKHQ9dGhpcy5fYWN0aXZlUGFydGljbGVzRmlyc3Q7dDt0PWUpZT10Lm5leHQsdGhpcy5yZWN5Y2xlKHQpLHQucGFyZW50JiZ0LnBhcmVudC5yZW1vdmVDaGlsZCh0KTt0aGlzLl9hY3RpdmVQYXJ0aWNsZXNGaXJzdD10aGlzLl9hY3RpdmVQYXJ0aWNsZXNMYXN0PW51bGwsdGhpcy5wYXJ0aWNsZUNvdW50PTB9LHQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmF1dG9VcGRhdGU9ITEsdGhpcy5jbGVhbnVwKCk7Zm9yKHZhciB0LGU9dGhpcy5fcG9vbEZpcnN0O2U7ZT10KXQ9ZS5uZXh0LGUuZGVzdHJveSgpO3RoaXMuX3Bvb2xGaXJzdD10aGlzLl9wYXJlbnQ9dGhpcy5wYXJ0aWNsZUltYWdlcz10aGlzLnNwYXduUG9zPXRoaXMub3duZXJQb3M9dGhpcy5zdGFydENvbG9yPXRoaXMuc3RhcnRTY2FsZT10aGlzLnN0YXJ0QWxwaGE9dGhpcy5zdGFydFNwZWVkPXRoaXMuY3VzdG9tRWFzZT10aGlzLl9jb21wbGV0ZUNhbGxiYWNrPW51bGx9LHR9KCk7aS5kZWZhdWx0PWh9LHtcIi4vUGFydGljbGVcIjozLFwiLi9QYXJ0aWNsZVV0aWxzXCI6NCxcIi4vUHJvcGVydHlOb2RlXCI6N31dLDM6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjt2YXIgcz10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIGkgaW4gZSllLmhhc093blByb3BlcnR5KGkpJiYodFtpXT1lW2ldKX07cmV0dXJuIGZ1bmN0aW9uKGUsaSl7ZnVuY3Rpb24gcygpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsaSksZS5wcm90b3R5cGU9bnVsbD09PWk/T2JqZWN0LmNyZWF0ZShpKToocy5wcm90b3R5cGU9aS5wcm90b3R5cGUsbmV3IHMpfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KFwiLi9QYXJ0aWNsZVV0aWxzXCIpLHI9dChcIi4vUHJvcGVydHlMaXN0XCIpLG49UElYSS5TcHJpdGUsbz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGkpe3ZhciBzPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gcy5lbWl0dGVyPWkscy5hbmNob3IueD1zLmFuY2hvci55PS41LHMudmVsb2NpdHk9bmV3IFBJWEkuUG9pbnQscy5tYXhMaWZlPTAscy5hZ2U9MCxzLmVhc2U9bnVsbCxzLmV4dHJhRGF0YT1udWxsLHMuYWxwaGFMaXN0PW5ldyByLmRlZmF1bHQscy5zcGVlZExpc3Q9bmV3IHIuZGVmYXVsdCxzLnNwZWVkTXVsdGlwbGllcj0xLHMuYWNjZWxlcmF0aW9uPW5ldyBQSVhJLlBvaW50LHMubWF4U3BlZWQ9TmFOLHMuc2NhbGVMaXN0PW5ldyByLmRlZmF1bHQscy5zY2FsZU11bHRpcGxpZXI9MSxzLmNvbG9yTGlzdD1uZXcgci5kZWZhdWx0KCEwKSxzLl9kb0FscGhhPSExLHMuX2RvU2NhbGU9ITEscy5fZG9TcGVlZD0hMSxzLl9kb0FjY2VsZXJhdGlvbj0hMSxzLl9kb0NvbG9yPSExLHMuX2RvTm9ybWFsTW92ZW1lbnQ9ITEscy5fb25lT3ZlckxpZmU9MCxzLm5leHQ9bnVsbCxzLnByZXY9bnVsbCxzLmluaXQ9cy5pbml0LHMuUGFydGljbGVfaW5pdD1lLnByb3RvdHlwZS5pbml0LHMudXBkYXRlPXMudXBkYXRlLHMuUGFydGljbGVfdXBkYXRlPWUucHJvdG90eXBlLnVwZGF0ZSxzLlNwcml0ZV9kZXN0cm95PXQucHJvdG90eXBlLmRlc3Ryb3kscy5QYXJ0aWNsZV9kZXN0cm95PWUucHJvdG90eXBlLmRlc3Ryb3kscy5hcHBseUFydD1zLmFwcGx5QXJ0LHMua2lsbD1zLmtpbGwsc31yZXR1cm4gcyhlLHQpLGUucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt0aGlzLmFnZT0wLHRoaXMudmVsb2NpdHkueD10aGlzLnNwZWVkTGlzdC5jdXJyZW50LnZhbHVlKnRoaXMuc3BlZWRNdWx0aXBsaWVyLHRoaXMudmVsb2NpdHkueT0wLGEuZGVmYXVsdC5yb3RhdGVQb2ludCh0aGlzLnJvdGF0aW9uLHRoaXMudmVsb2NpdHkpLHRoaXMubm9Sb3RhdGlvbj90aGlzLnJvdGF0aW9uPTA6dGhpcy5yb3RhdGlvbio9YS5kZWZhdWx0LkRFR19UT19SQURTLHRoaXMucm90YXRpb25TcGVlZCo9YS5kZWZhdWx0LkRFR19UT19SQURTLHRoaXMuYWxwaGE9dGhpcy5hbHBoYUxpc3QuY3VycmVudC52YWx1ZSx0aGlzLnNjYWxlLng9dGhpcy5zY2FsZS55PXRoaXMuc2NhbGVMaXN0LmN1cnJlbnQudmFsdWUsdGhpcy5fZG9BbHBoYT0hIXRoaXMuYWxwaGFMaXN0LmN1cnJlbnQubmV4dCx0aGlzLl9kb1NwZWVkPSEhdGhpcy5zcGVlZExpc3QuY3VycmVudC5uZXh0LHRoaXMuX2RvU2NhbGU9ISF0aGlzLnNjYWxlTGlzdC5jdXJyZW50Lm5leHQsdGhpcy5fZG9Db2xvcj0hIXRoaXMuY29sb3JMaXN0LmN1cnJlbnQubmV4dCx0aGlzLl9kb0FjY2VsZXJhdGlvbj0wIT09dGhpcy5hY2NlbGVyYXRpb24ueHx8MCE9PXRoaXMuYWNjZWxlcmF0aW9uLnksdGhpcy5fZG9Ob3JtYWxNb3ZlbWVudD10aGlzLl9kb1NwZWVkfHwwIT09dGhpcy5zcGVlZExpc3QuY3VycmVudC52YWx1ZXx8dGhpcy5fZG9BY2NlbGVyYXRpb24sdGhpcy5fb25lT3ZlckxpZmU9MS90aGlzLm1heExpZmU7dmFyIHQ9dGhpcy5jb2xvckxpc3QuY3VycmVudC52YWx1ZTt0aGlzLnRpbnQ9YS5kZWZhdWx0LmNvbWJpbmVSR0JDb21wb25lbnRzKHQucix0LmcsdC5iKSx0aGlzLnZpc2libGU9ITB9LGUucHJvdG90eXBlLmFwcGx5QXJ0PWZ1bmN0aW9uKHQpe3RoaXMudGV4dHVyZT10fHxQSVhJLlRleHR1cmUuRU1QVFl9LGUucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbih0KXtpZih0aGlzLmFnZSs9dCx0aGlzLmFnZT49dGhpcy5tYXhMaWZlfHx0aGlzLmFnZTwwKXJldHVybiB0aGlzLmtpbGwoKSwtMTt2YXIgZT10aGlzLmFnZSp0aGlzLl9vbmVPdmVyTGlmZTtpZih0aGlzLmVhc2UmJihlPTQ9PXRoaXMuZWFzZS5sZW5ndGg/dGhpcy5lYXNlKGUsMCwxLDEpOnRoaXMuZWFzZShlKSksdGhpcy5fZG9BbHBoYSYmKHRoaXMuYWxwaGE9dGhpcy5hbHBoYUxpc3QuaW50ZXJwb2xhdGUoZSkpLHRoaXMuX2RvU2NhbGUpe3ZhciBpPXRoaXMuc2NhbGVMaXN0LmludGVycG9sYXRlKGUpKnRoaXMuc2NhbGVNdWx0aXBsaWVyO3RoaXMuc2NhbGUueD10aGlzLnNjYWxlLnk9aX1pZih0aGlzLl9kb05vcm1hbE1vdmVtZW50KXtpZih0aGlzLl9kb1NwZWVkKXt2YXIgcz10aGlzLnNwZWVkTGlzdC5pbnRlcnBvbGF0ZShlKSp0aGlzLnNwZWVkTXVsdGlwbGllcjthLmRlZmF1bHQubm9ybWFsaXplKHRoaXMudmVsb2NpdHkpLGEuZGVmYXVsdC5zY2FsZUJ5KHRoaXMudmVsb2NpdHkscyl9ZWxzZSBpZih0aGlzLl9kb0FjY2VsZXJhdGlvbiYmKHRoaXMudmVsb2NpdHkueCs9dGhpcy5hY2NlbGVyYXRpb24ueCp0LHRoaXMudmVsb2NpdHkueSs9dGhpcy5hY2NlbGVyYXRpb24ueSp0LHRoaXMubWF4U3BlZWQpKXt2YXIgcj1hLmRlZmF1bHQubGVuZ3RoKHRoaXMudmVsb2NpdHkpO3I+dGhpcy5tYXhTcGVlZCYmYS5kZWZhdWx0LnNjYWxlQnkodGhpcy52ZWxvY2l0eSx0aGlzLm1heFNwZWVkL3IpfXRoaXMucG9zaXRpb24ueCs9dGhpcy52ZWxvY2l0eS54KnQsdGhpcy5wb3NpdGlvbi55Kz10aGlzLnZlbG9jaXR5LnkqdH1yZXR1cm4gdGhpcy5fZG9Db2xvciYmKHRoaXMudGludD10aGlzLmNvbG9yTGlzdC5pbnRlcnBvbGF0ZShlKSksMCE9PXRoaXMucm90YXRpb25TcGVlZD90aGlzLnJvdGF0aW9uKz10aGlzLnJvdGF0aW9uU3BlZWQqdDp0aGlzLmFjY2VsZXJhdGlvbiYmIXRoaXMubm9Sb3RhdGlvbiYmKHRoaXMucm90YXRpb249TWF0aC5hdGFuMih0aGlzLnZlbG9jaXR5LnksdGhpcy52ZWxvY2l0eS54KSksZX0sZS5wcm90b3R5cGUua2lsbD1mdW5jdGlvbigpe3RoaXMuZW1pdHRlci5yZWN5Y2xlKHRoaXMpfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpLHRoaXMuU3ByaXRlX2Rlc3Ryb3koKSx0aGlzLmVtaXR0ZXI9dGhpcy52ZWxvY2l0eT10aGlzLmNvbG9yTGlzdD10aGlzLnNjYWxlTGlzdD10aGlzLmFscGhhTGlzdD10aGlzLnNwZWVkTGlzdD10aGlzLmVhc2U9dGhpcy5uZXh0PXRoaXMucHJldj1udWxsfSxlLnBhcnNlQXJ0PWZ1bmN0aW9uKHQpe3ZhciBlO2ZvcihlPXQubGVuZ3RoO2U+PTA7LS1lKVwic3RyaW5nXCI9PXR5cGVvZiB0W2VdJiYodFtlXT1QSVhJLlRleHR1cmUuZnJvbUltYWdlKHRbZV0pKTtpZihhLmRlZmF1bHQudmVyYm9zZSlmb3IoZT10Lmxlbmd0aC0xO2U+MDstLWUpaWYodFtlXS5iYXNlVGV4dHVyZSE9dFtlLTFdLmJhc2VUZXh0dXJlKXt3aW5kb3cuY29uc29sZSYmY29uc29sZS53YXJuKFwiUGl4aVBhcnRpY2xlczogdXNpbmcgcGFydGljbGUgdGV4dHVyZXMgZnJvbSBkaWZmZXJlbnQgaW1hZ2VzIG1heSBoaW5kZXIgcGVyZm9ybWFuY2UgaW4gV2ViR0xcIik7YnJlYWt9cmV0dXJuIHR9LGUucGFyc2VEYXRhPWZ1bmN0aW9uKHQpe3JldHVybiB0fSxlfShuKTtpLmRlZmF1bHQ9b30se1wiLi9QYXJ0aWNsZVV0aWxzXCI6NCxcIi4vUHJvcGVydHlMaXN0XCI6Nn1dLDQ6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1QSVhJLkJMRU5EX01PREVTLGE9dChcIi4vUHJvcGVydHlOb2RlXCIpLHI9e3ZlcmJvc2U6ITEsREVHX1RPX1JBRFM6TWF0aC5QSS8xODAscm90YXRlUG9pbnQ6ZnVuY3Rpb24odCxlKXtpZih0KXt0Kj1yLkRFR19UT19SQURTO3ZhciBpPU1hdGguc2luKHQpLHM9TWF0aC5jb3ModCksYT1lLngqcy1lLnkqaSxuPWUueCppK2UueSpzO2UueD1hLGUueT1ufX0sY29tYmluZVJHQkNvbXBvbmVudHM6ZnVuY3Rpb24odCxlLGkpe3JldHVybiB0PDwxNnxlPDw4fGl9LG5vcm1hbGl6ZTpmdW5jdGlvbih0KXt2YXIgZT0xL3IubGVuZ3RoKHQpO3QueCo9ZSx0LnkqPWV9LHNjYWxlQnk6ZnVuY3Rpb24odCxlKXt0LngqPWUsdC55Kj1lfSxsZW5ndGg6ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguc3FydCh0LngqdC54K3QueSp0LnkpfSxoZXhUb1JHQjpmdW5jdGlvbih0LGUpe2V8fChlPXt9KSxcIiNcIj09dC5jaGFyQXQoMCk/dD10LnN1YnN0cigxKTowPT09dC5pbmRleE9mKFwiMHhcIikmJih0PXQuc3Vic3RyKDIpKTt2YXIgaTtyZXR1cm4gOD09dC5sZW5ndGgmJihpPXQuc3Vic3RyKDAsMiksdD10LnN1YnN0cigyKSksZS5yPXBhcnNlSW50KHQuc3Vic3RyKDAsMiksMTYpLGUuZz1wYXJzZUludCh0LnN1YnN0cigyLDIpLDE2KSxlLmI9cGFyc2VJbnQodC5zdWJzdHIoNCwyKSwxNiksaSYmKGUuYT1wYXJzZUludChpLDE2KSksZX0sZ2VuZXJhdGVFYXNlOmZ1bmN0aW9uKHQpe3ZhciBlPXQubGVuZ3RoLGk9MS9lO3JldHVybiBmdW5jdGlvbihzKXt2YXIgYSxyLG49ZSpzfDA7cmV0dXJuIGE9KHMtbippKSplLHI9dFtuXXx8dFtlLTFdLHIucythKigyKigxLWEpKihyLmNwLXIucykrYSooci5lLXIucykpfX0sZ2V0QmxlbmRNb2RlOmZ1bmN0aW9uKHQpe2lmKCF0KXJldHVybiBzLk5PUk1BTDtmb3IodD10LnRvVXBwZXJDYXNlKCk7dC5pbmRleE9mKFwiIFwiKT49MDspdD10LnJlcGxhY2UoXCIgXCIsXCJfXCIpO3JldHVybiBzW3RdfHxzLk5PUk1BTH0sY3JlYXRlU3RlcHBlZEdyYWRpZW50OmZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09ZSYmKGU9MTApLChcIm51bWJlclwiIT10eXBlb2YgZXx8ZTw9MCkmJihlPTEwKTt2YXIgaT1uZXcgYS5kZWZhdWx0KHRbMF0udmFsdWUsdFswXS50aW1lKTtpLmlzU3RlcHBlZD0hMDtmb3IodmFyIHM9aSxuPXRbMF0sbz0xLGg9dFtvXSxsPTE7bDxlOysrbCl7Zm9yKHZhciBwPWwvZTtwPmgudGltZTspbj1oLGg9dFsrK29dO3A9KHAtbi50aW1lKS8oaC50aW1lLW4udGltZSk7dmFyIGM9ci5oZXhUb1JHQihuLnZhbHVlKSx1PXIuaGV4VG9SR0IoaC52YWx1ZSksZD17fTtkLnI9KHUuci1jLnIpKnArYy5yLGQuZz0odS5nLWMuZykqcCtjLmcsZC5iPSh1LmItYy5iKSpwK2MuYixzLm5leHQ9bmV3IGEuZGVmYXVsdChkLGwvZSkscz1zLm5leHR9cmV0dXJuIGl9fTtpLmRlZmF1bHQ9cn0se1wiLi9Qcm9wZXJ0eU5vZGVcIjo3fV0sNTpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO3ZhciBzPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJih0W2ldPWVbaV0pfTtyZXR1cm4gZnVuY3Rpb24oZSxpKXtmdW5jdGlvbiBzKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxpKSxlLnByb3RvdHlwZT1udWxsPT09aT9PYmplY3QuY3JlYXRlKGkpOihzLnByb3RvdHlwZT1pLnByb3RvdHlwZSxuZXcgcyl9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoXCIuL1BhcnRpY2xlVXRpbHNcIikscj10KFwiLi9QYXJ0aWNsZVwiKSxuPW5ldyBQSVhJLlBvaW50LG89W1wicG93XCIsXCJzcXJ0XCIsXCJhYnNcIixcImZsb29yXCIsXCJyb3VuZFwiLFwiY2VpbFwiLFwiRVwiLFwiUElcIixcInNpblwiLFwiY29zXCIsXCJ0YW5cIixcImFzaW5cIixcImFjb3NcIixcImF0YW5cIixcImF0YW4yXCIsXCJsb2dcIl0saD1uZXcgUmVnRXhwKFtcIlswMTIzNDU2Nzg5MFxcXFwuXFxcXCpcXFxcLVxcXFwrXFxcXC9cXFxcKFxcXFwpeCAsXVwiXS5jb25jYXQobykuam9pbihcInxcIiksXCJnXCIpLGw9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXQubWF0Y2goaCksaT1lLmxlbmd0aC0xO2k+PTA7LS1pKW8uaW5kZXhPZihlW2ldKT49MCYmKGVbaV09XCJNYXRoLlwiK2VbaV0pO3JldHVybiB0PWUuam9pbihcIlwiKSxuZXcgRnVuY3Rpb24oXCJ4XCIsXCJyZXR1cm4gXCIrdCtcIjtcIil9LHA9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlKXt2YXIgaT10LmNhbGwodGhpcyxlKXx8dGhpcztyZXR1cm4gaS5wYXRoPW51bGwsaS5pbml0aWFsUm90YXRpb249MCxpLmluaXRpYWxQb3NpdGlvbj1uZXcgUElYSS5Qb2ludCxpLm1vdmVtZW50PTAsaX1yZXR1cm4gcyhlLHQpLGUucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt0aGlzLmluaXRpYWxSb3RhdGlvbj10aGlzLnJvdGF0aW9uLHRoaXMuUGFydGljbGVfaW5pdCgpLHRoaXMucGF0aD10aGlzLmV4dHJhRGF0YS5wYXRoLHRoaXMuX2RvTm9ybWFsTW92ZW1lbnQ9IXRoaXMucGF0aCx0aGlzLm1vdmVtZW50PTAsdGhpcy5pbml0aWFsUG9zaXRpb24ueD10aGlzLnBvc2l0aW9uLngsdGhpcy5pbml0aWFsUG9zaXRpb24ueT10aGlzLnBvc2l0aW9uLnl9LGUucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLlBhcnRpY2xlX3VwZGF0ZSh0KTtpZihlPj0wJiZ0aGlzLnBhdGgpe3ZhciBpPXRoaXMuc3BlZWRMaXN0LmludGVycG9sYXRlKGUpKnRoaXMuc3BlZWRNdWx0aXBsaWVyO3RoaXMubW92ZW1lbnQrPWkqdCxuLng9dGhpcy5tb3ZlbWVudCxuLnk9dGhpcy5wYXRoKHRoaXMubW92ZW1lbnQpLGEuZGVmYXVsdC5yb3RhdGVQb2ludCh0aGlzLmluaXRpYWxSb3RhdGlvbixuKSx0aGlzLnBvc2l0aW9uLng9dGhpcy5pbml0aWFsUG9zaXRpb24ueCtuLngsdGhpcy5wb3NpdGlvbi55PXRoaXMuaW5pdGlhbFBvc2l0aW9uLnkrbi55fXJldHVybiBlfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5QYXJ0aWNsZV9kZXN0cm95KCksdGhpcy5wYXRoPXRoaXMuaW5pdGlhbFBvc2l0aW9uPW51bGx9LGUucGFyc2VBcnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHIuZGVmYXVsdC5wYXJzZUFydCh0KX0sZS5wYXJzZURhdGE9ZnVuY3Rpb24odCl7dmFyIGU9e307aWYodCYmdC5wYXRoKXRyeXtlLnBhdGg9bCh0LnBhdGgpfWNhdGNoKHQpe2EuZGVmYXVsdC52ZXJib3NlJiZjb25zb2xlLmVycm9yKFwiUGF0aFBhcnRpY2xlOiBlcnJvciBpbiBwYXJzaW5nIHBhdGggZXhwcmVzc2lvblwiKSxlLnBhdGg9bnVsbH1lbHNlIGEuZGVmYXVsdC52ZXJib3NlJiZjb25zb2xlLmVycm9yKFwiUGF0aFBhcnRpY2xlIHJlcXVpcmVzIGEgcGF0aCBzdHJpbmcgaW4gZXh0cmFEYXRhIVwiKSxlLnBhdGg9bnVsbDtyZXR1cm4gZX0sZX0oci5kZWZhdWx0KTtpLmRlZmF1bHQ9cH0se1wiLi9QYXJ0aWNsZVwiOjMsXCIuL1BhcnRpY2xlVXRpbHNcIjo0fV0sNjpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHModCl7cmV0dXJuIHRoaXMuZWFzZSYmKHQ9dGhpcy5lYXNlKHQpKSwodGhpcy5uZXh0LnZhbHVlLXRoaXMuY3VycmVudC52YWx1ZSkqdCt0aGlzLmN1cnJlbnQudmFsdWV9ZnVuY3Rpb24gYSh0KXt0aGlzLmVhc2UmJih0PXRoaXMuZWFzZSh0KSk7dmFyIGU9dGhpcy5jdXJyZW50LnZhbHVlLGk9dGhpcy5uZXh0LnZhbHVlLHM9KGkuci1lLnIpKnQrZS5yLGE9KGkuZy1lLmcpKnQrZS5nLHI9KGkuYi1lLmIpKnQrZS5iO3JldHVybiBsLmRlZmF1bHQuY29tYmluZVJHQkNvbXBvbmVudHMocyxhLHIpfWZ1bmN0aW9uIHIodCl7Zm9yKHRoaXMuZWFzZSYmKHQ9dGhpcy5lYXNlKHQpKTt0PnRoaXMubmV4dC50aW1lOyl0aGlzLmN1cnJlbnQ9dGhpcy5uZXh0LHRoaXMubmV4dD10aGlzLm5leHQubmV4dDtyZXR1cm4gdD0odC10aGlzLmN1cnJlbnQudGltZSkvKHRoaXMubmV4dC50aW1lLXRoaXMuY3VycmVudC50aW1lKSwodGhpcy5uZXh0LnZhbHVlLXRoaXMuY3VycmVudC52YWx1ZSkqdCt0aGlzLmN1cnJlbnQudmFsdWV9ZnVuY3Rpb24gbih0KXtmb3IodGhpcy5lYXNlJiYodD10aGlzLmVhc2UodCkpO3Q+dGhpcy5uZXh0LnRpbWU7KXRoaXMuY3VycmVudD10aGlzLm5leHQsdGhpcy5uZXh0PXRoaXMubmV4dC5uZXh0O3Q9KHQtdGhpcy5jdXJyZW50LnRpbWUpLyh0aGlzLm5leHQudGltZS10aGlzLmN1cnJlbnQudGltZSk7dmFyIGU9dGhpcy5jdXJyZW50LnZhbHVlLGk9dGhpcy5uZXh0LnZhbHVlLHM9KGkuci1lLnIpKnQrZS5yLGE9KGkuZy1lLmcpKnQrZS5nLHI9KGkuYi1lLmIpKnQrZS5iO3JldHVybiBsLmRlZmF1bHQuY29tYmluZVJHQkNvbXBvbmVudHMocyxhLHIpfWZ1bmN0aW9uIG8odCl7Zm9yKHRoaXMuZWFzZSYmKHQ9dGhpcy5lYXNlKHQpKTt0aGlzLm5leHQmJnQ+dGhpcy5uZXh0LnRpbWU7KXRoaXMuY3VycmVudD10aGlzLm5leHQsdGhpcy5uZXh0PXRoaXMubmV4dC5uZXh0O3JldHVybiB0aGlzLmN1cnJlbnQudmFsdWV9ZnVuY3Rpb24gaCh0KXtmb3IodGhpcy5lYXNlJiYodD10aGlzLmVhc2UodCkpO3RoaXMubmV4dCYmdD50aGlzLm5leHQudGltZTspdGhpcy5jdXJyZW50PXRoaXMubmV4dCx0aGlzLm5leHQ9dGhpcy5uZXh0Lm5leHQ7dmFyIGU9dGhpcy5jdXJyZW50LnZhbHVlO3JldHVybiBsLmRlZmF1bHQuY29tYmluZVJHQkNvbXBvbmVudHMoZS5yLGUuZyxlLmIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBsPXQoXCIuL1BhcnRpY2xlVXRpbHNcIikscD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dm9pZCAwPT09dCYmKHQ9ITEpLHRoaXMuY3VycmVudD1udWxsLHRoaXMubmV4dD1udWxsLHRoaXMuaXNDb2xvcj0hIXQsdGhpcy5pbnRlcnBvbGF0ZT1udWxsLHRoaXMuZWFzZT1udWxsfXJldHVybiB0LnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbih0KXt0aGlzLmN1cnJlbnQ9dCx0aGlzLm5leHQ9dC5uZXh0LHRoaXMubmV4dCYmdGhpcy5uZXh0LnRpbWU+PTE/dGhpcy5pbnRlcnBvbGF0ZT10aGlzLmlzQ29sb3I/YTpzOnQuaXNTdGVwcGVkP3RoaXMuaW50ZXJwb2xhdGU9dGhpcy5pc0NvbG9yP2g6bzp0aGlzLmludGVycG9sYXRlPXRoaXMuaXNDb2xvcj9uOnIsdGhpcy5lYXNlPXRoaXMuY3VycmVudC5lYXNlfSx0fSgpO2kuZGVmYXVsdD1wfSx7XCIuL1BhcnRpY2xlVXRpbHNcIjo0fV0sNzpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPXQoXCIuL1BhcnRpY2xlVXRpbHNcIiksYT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLGkpe3RoaXMudmFsdWU9XCJzdHJpbmdcIj09dHlwZW9mIHQ/cy5kZWZhdWx0LmhleFRvUkdCKHQpOnQsdGhpcy50aW1lPWUsdGhpcy5uZXh0PW51bGwsdGhpcy5pc1N0ZXBwZWQ9ITEsdGhpcy5lYXNlPWk/XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pOnMuZGVmYXVsdC5nZW5lcmF0ZUVhc2UoaSk6bnVsbH1yZXR1cm4gdC5jcmVhdGVMaXN0PWZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZS5saXN0KSl7dmFyIGk9ZS5saXN0LHM9dm9pZCAwLGE9dm9pZCAwO2lmKGE9cz1uZXcgdChpWzBdLnZhbHVlLGlbMF0udGltZSxlLmVhc2UpLGkubGVuZ3RoPjJ8fDI9PT1pLmxlbmd0aCYmaVsxXS52YWx1ZSE9PWlbMF0udmFsdWUpZm9yKHZhciByPTE7cjxpLmxlbmd0aDsrK3Ipcy5uZXh0PW5ldyB0KGlbcl0udmFsdWUsaVtyXS50aW1lKSxzPXMubmV4dDtyZXR1cm4gYS5pc1N0ZXBwZWQ9ISFlLmlzU3RlcHBlZCxhfXZhciBuPW5ldyB0KGUuc3RhcnQsMCk7cmV0dXJuIGUuZW5kIT09ZS5zdGFydCYmKG4ubmV4dD1uZXcgdChlLmVuZCwxKSksbn0sdH0oKTtpLmRlZmF1bHQ9YX0se1wiLi9QYXJ0aWNsZVV0aWxzXCI6NH1dLDg6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz10KFwiLi9QYXJ0aWNsZVV0aWxzLmpzXCIpO2kuUGFydGljbGVVdGlscz1zLmRlZmF1bHQ7dmFyIGE9dChcIi4vUGFydGljbGUuanNcIik7aS5QYXJ0aWNsZT1hLmRlZmF1bHQ7dmFyIHI9dChcIi4vRW1pdHRlci5qc1wiKTtpLkVtaXR0ZXI9ci5kZWZhdWx0O3ZhciBuPXQoXCIuL1BhdGhQYXJ0aWNsZS5qc1wiKTtpLlBhdGhQYXJ0aWNsZT1uLmRlZmF1bHQ7dmFyIG89dChcIi4vQW5pbWF0ZWRQYXJ0aWNsZS5qc1wiKTtpLkFuaW1hdGVkUGFydGljbGU9by5kZWZhdWx0fSx7XCIuL0FuaW1hdGVkUGFydGljbGUuanNcIjoxLFwiLi9FbWl0dGVyLmpzXCI6MixcIi4vUGFydGljbGUuanNcIjozLFwiLi9QYXJ0aWNsZVV0aWxzLmpzXCI6NCxcIi4vUGF0aFBhcnRpY2xlLmpzXCI6NX1dLDk6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtpZihPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxcInVuZGVmaW5lZFwiPT10eXBlb2YgUElYSSl0aHJvd1wicGl4aS1wYXJ0aWNsZXMgcmVxdWlyZXMgcGl4aS5qcyB0byBiZSBsb2FkZWQgZmlyc3RcIjtQSVhJLnBhcnRpY2xlc3x8KFBJWEkucGFydGljbGVzPXt9KTt2YXIgcz10KFwiLi9wYXJ0aWNsZXNcIik7Zm9yKHZhciBhIGluIHMpUElYSS5wYXJ0aWNsZXNbYV09c1thXTt2b2lkIDAhPT1lJiZlLmV4cG9ydHMmJihlLmV4cG9ydHM9cyl9LHtcIi4vcGFydGljbGVzXCI6OH1dfSx7fSxbOV0pKDkpfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXhpLXBhcnRpY2xlcy5taW4uanMubWFwXG4iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQge1NpbXBsZUJ1dHRvbiwgRmxpcHBhYmxlU3ByaXRlLCBHYW1lTGV2ZWx9IGZyb20gJy4vc3VwcG9ydCc7XHJcbmltcG9ydCB7QmFzZUFwcH0gZnJvbSAnLi9tYWluJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkc0xldmVsIGltcGxlbWVudHMgIEdhbWVMZXZlbCB7XHJcbiAgbGV2ZWxfbmFtZTpzdHJpbmcgPSBcIkNhcmRzXCI7XHJcbiAgY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IGRlY2tfc2l6ZTpudW1iZXIgPSAxNDQ7XHJcbiAgcHJpdmF0ZSBkZWNrOkZsaXBwYWJsZVNwcml0ZVtdO1xyXG4gIHByaXZhdGUgdGlja2VyOlBJWEkudGlja2VyLlRpY2tlcjtcclxuICBwcml2YXRlIGNhcmRfaW5kZXg6bnVtYmVyID0gMDtcclxuICBjYXJkX2RlbGF5Om51bWJlciA9IDEwMDA7XHJcbiAgY2FyZF9hbmltX3NwZWVkOm51bWJlciA9IDIwMDA7XHJcbiAgcHJpdmF0ZSBjYXJkX2NvdW50ZXI6bnVtYmVyID0gMC4wO1xyXG4gIHByaXZhdGUgY2FyZF9zdGFydF90aW1lOm51bWJlciA9IDAuMDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy50aWNrZXIgPSBuZXcgUElYSS50aWNrZXIuVGlja2VyKCk7XHJcbiAgICAgIHRoaXMudGlja2VyLmF1dG9TdGFydCA9IGZhbHNlO1xyXG4gIH1cclxuICBjcmVhdGVMZXZlbCgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJkIExldmVsIGNyZWF0aW9uIHN0YXJ0ZWQuXCIpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgICAvLyBjcmVhdGUgY2FyZHNcclxuICAgICAgdGhpcy5kZWNrID0gW107XHJcbiAgICAgIHZhciBzcGFjaW5nID0gMztcclxuICAgICAgdmFyIGJhY2tzID0gW1wiY2FyZEJhY2tfYmx1ZTUucG5nXCIsIFwiY2FyZEJhY2tfZ3JlZW41LnBuZ1wiLCBcImNhcmRCYWNrX3JlZDUucG5nXCJdO1xyXG4gICAgICB2YXIgZnJvbnRzID0gW1wiY2FyZENsdWJzMi5wbmdcIixcImNhcmRDbHViczMucG5nXCIsXCJjYXJkQ2x1YnM0LnBuZ1wiLFwiY2FyZENsdWJzNS5wbmdcIixcImNhcmRDbHViczYucG5nXCIsXCJjYXJkQ2x1YnM3LnBuZ1wiLFwiY2FyZENsdWJzOC5wbmdcIixcImNhcmRDbHViczkucG5nXCIsXCJjYXJkQ2x1YnMxMC5wbmdcIixcImNhcmRDbHVic0EucG5nXCIsXCJjYXJkQ2x1YnNKLnBuZ1wiLFwiY2FyZENsdWJzSy5wbmdcIixcImNhcmRDbHVic1EucG5nXCIsXCJjYXJkRGlhbW9uZHMyLnBuZ1wiLFwiY2FyZERpYW1vbmRzMy5wbmdcIixcImNhcmREaWFtb25kczQucG5nXCIsXCJjYXJkRGlhbW9uZHM1LnBuZ1wiLFwiY2FyZERpYW1vbmRzNi5wbmdcIixcImNhcmREaWFtb25kczcucG5nXCIsXCJjYXJkRGlhbW9uZHM4LnBuZ1wiLFwiY2FyZERpYW1vbmRzOS5wbmdcIixcImNhcmREaWFtb25kczEwLnBuZ1wiLFwiY2FyZERpYW1vbmRzQS5wbmdcIixcImNhcmREaWFtb25kc0oucG5nXCIsXCJjYXJkRGlhbW9uZHNLLnBuZ1wiLFwiY2FyZERpYW1vbmRzUS5wbmdcIixcImNhcmRIZWFydHMyLnBuZ1wiLFwiY2FyZEhlYXJ0czMucG5nXCIsXCJjYXJkSGVhcnRzNC5wbmdcIixcImNhcmRIZWFydHM1LnBuZ1wiLFwiY2FyZEhlYXJ0czYucG5nXCIsXCJjYXJkSGVhcnRzNy5wbmdcIixcImNhcmRIZWFydHM4LnBuZ1wiLFwiY2FyZEhlYXJ0czkucG5nXCIsXCJjYXJkSGVhcnRzMTAucG5nXCIsXCJjYXJkSGVhcnRzQS5wbmdcIixcImNhcmRIZWFydHNKLnBuZ1wiLFwiY2FyZEhlYXJ0c0sucG5nXCIsXCJjYXJkSGVhcnRzUS5wbmdcIixcImNhcmRKb2tlci5wbmdcIixcImNhcmRTcGFkZXMyLnBuZ1wiLFwiY2FyZFNwYWRlczMucG5nXCIsXCJjYXJkU3BhZGVzNC5wbmdcIixcImNhcmRTcGFkZXM1LnBuZ1wiLFwiY2FyZFNwYWRlczYucG5nXCIsXCJjYXJkU3BhZGVzNy5wbmdcIixcImNhcmRTcGFkZXM4LnBuZ1wiLFwiY2FyZFNwYWRlczkucG5nXCIsXCJjYXJkU3BhZGVzMTAucG5nXCIsXCJjYXJkU3BhZGVzQS5wbmdcIixcImNhcmRTcGFkZXNKLnBuZ1wiLFwiY2FyZFNwYWRlc0sucG5nXCIsXCJjYXJkU3BhZGVzUS5wbmdcIl07XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kZWNrX3NpemU7IGkrKykge1xyXG4gICAgICAgICAgdmFyIGJhY2sgPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKGJhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooYmFja3MubGVuZ3RoLTAuMSkpXSk7XHJcbiAgICAgICAgICB2YXIgZnJvbnQgPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKGZyb250c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKGZyb250cy5sZW5ndGgtMC4xKSldKTtcclxuICAgICAgICAgIHZhciBjYXJkID0gbmV3IEZsaXBwYWJsZVNwcml0ZShmcm9udCwgYmFjaylcclxuICAgICAgICAgIGNhcmQuZmxpcF9yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgICBjYXJkLmZsaXBfdGltZSA9IHRoaXMuY2FyZF9hbmltX3NwZWVkO1xyXG4gICAgICAgICAgY2FyZC5mbGlwX3NjYWxlID0gdHJ1ZTtcclxuICAgICAgICAgIGNhcmQuc2NhbGUueCA9IDAuNjtcclxuICAgICAgICAgIGNhcmQuc2NhbGUueSA9IDAuNjtcclxuICAgICAgICAgIGNhcmQuZmxpcF9zbGlkZV94ID0gMjAwO1xyXG4gICAgICAgICAgY2FyZC5mbGlwX3NsaWRlX3kgPSAyMDtcclxuICAgICAgICAgIGNhcmQueCA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIud2lkdGgvMiAtIDEwMDsvLyArIGkqc3BhY2luZztcclxuICAgICAgICAgIGNhcmQueSA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIuaGVpZ2h0LzIgKyAodGhpcy5kZWNrX3NpemUvMikgKiBzcGFjaW5nIC0gaSpzcGFjaW5nO1xyXG4gICAgICAgICAgdGhpcy5kZWNrLnB1c2goY2FyZCk7XHJcbiAgICAgICAgICBjYXJkLmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjYXJkKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNhcmRfY291bnRlciA9IHRoaXMuY2FyZF9kZWxheTtcclxuICAgICAgdGhpcy5jYXJkX2luZGV4ID0gLTE7XHJcbiAgICAgIHRoaXMuY2FyZF9zdGFydF90aW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgIHRoaXMudGlja2VyLnN0YXJ0KCk7XHJcbiAgICAgIHRoaXMudGlja2VyLmFkZCh0aGlzLm9uVGljayk7XHJcblxyXG4gICAgICAvL2NyZWF0ZSBiYWNrIG9wdGlvblxyXG4gICAgICB2YXIgbWVudV9iZyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgIG1lbnVfYmcuYmVnaW5GaWxsKDB4RUVFRUVFKTtcclxuICAgICAgbWVudV9iZy5saW5lU3R5bGUoMiwgMHhkZGRkZkYsIDEpO1xyXG4gICAgICBtZW51X2JnLmRyYXdSb3VuZGVkUmVjdCgxMDAsIDEwMCwgMjAwLCAxMDAsIDUpO1xyXG4gICAgICBtZW51X2JnLmVuZEZpbGwoKTtcclxuXHJcbiAgICAgIHZhciBtYWluX21lbnVfYnRuID0gbmV3IFNpbXBsZUJ1dHRvbignQmFjaycsIDB4MDBhOWZmLCAweDk5ZDlmZiwgMHgwMDY2YWEsIDE1MCwgIDUwLCAzKTtcclxuICAgICAgbWFpbl9tZW51X2J0bi54ID0gMTI1O1xyXG4gICAgICBtYWluX21lbnVfYnRuLnkgPSAxMjU7XHJcbiAgICAgIG1lbnVfYmcuYWRkQ2hpbGQobWFpbl9tZW51X2J0bik7XHJcbiAgICAgIG1haW5fbWVudV9idG4uc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmJhY2tUb01lbnUpO1xyXG4gICAgICBtYWluX21lbnVfYnRuLmFjdGl2YXRlKCk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG1lbnVfYmcpO1xyXG4gICAgICBCYXNlQXBwLmluc3RhbmNlLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJkIExldmVsIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcclxuICB9XHJcbiAgYmFja1RvTWVudSgpIHtcclxuICAgICAgQmFzZUFwcC5pbnN0YW5jZS5jaGFuZ2VMZXZlbChcIk1haW5NZW51XCIpO1xyXG4gIH1cclxuICBkZXN0cm95TGV2ZWwoKSB7XHJcbiAgICAgIHRoaXMuZGVjayA9IFtdXHJcbiAgICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICAgICAgdGhpcy50aWNrZXIucmVtb3ZlKHRoaXMub25UaWNrKTtcclxuICAgICAgdGhpcy5jb250YWluZXIuZGVzdHJveSh7Y2hpbGRyZW46dHJ1ZX0pO1xyXG4gIH1cclxuICBvblRpY2sgPSAoZGVsdGE6bnVtYmVyKSA9PiB7XHJcbiAgICB0aGlzLmNhcmRfY291bnRlciArPSB0aGlzLnRpY2tlci5lbGFwc2VkTVM7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiVGlja2luZy4uLiBcIix0aGlzLmNhcmRfY291bnRlcixcIiBpbmRleDogXCIrdGhpcy5jYXJkX2luZGV4KTtcclxuICAgIGlmICh0aGlzLmNhcmRfY291bnRlciA+PSB0aGlzLmNhcmRfZGVsYXkpIHtcclxuICAgICAgICB0aGlzLmNhcmRfY291bnRlciA9IDAuMDtcclxuICAgICAgICAvLyBtb3ZlIGN1cnJlbnQgY2FyZCB0byB0aGUgYmFjay5cclxuICAgICAgICBpZiAodGhpcy5jYXJkX2luZGV4ID49IDApXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnNldENoaWxkSW5kZXgodGhpcy5kZWNrW3RoaXMuZGVjay5sZW5ndGgtdGhpcy5jYXJkX2luZGV4LTFdLHRoaXMuY2FyZF9pbmRleCk7XHJcbiAgICAgICAgdGhpcy5jYXJkX2luZGV4ICsrO1xyXG4gICAgICAgIGlmICh0aGlzLmNhcmRfaW5kZXggPT0gdGhpcy5kZWNrLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICAgICAgICAgICAgLy9UaGUgRW5kXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FyZCBhbmltYXRpb24gY29tcGxldGVkIGluIFwiLHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5jYXJkX3N0YXJ0X3RpbWUsXCIgbXNcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWNrW3RoaXMuZGVjay5sZW5ndGgtdGhpcy5jYXJkX2luZGV4LTFdLmZsaXAoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGYXN0Q2FyZHNMZXZlbCBleHRlbmRzIENhcmRzTGV2ZWwge1xyXG4gICAgbGV2ZWxfbmFtZSA9IFwiRmFzdENhcmRzXCI7XHJcbiAgICBjYXJkX2RlbGF5ID0gMTAwO1xyXG4gICAgY2FyZF9hbmltX3NwZWVkID0gMzAwO1xyXG59IiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0ICogYXMgSFVCIGZyb20gJy4vc3VwcG9ydCc7XHJcbmltcG9ydCB7Q2FyZHNMZXZlbCwgRmFzdENhcmRzTGV2ZWx9IGZyb20gJy4vY2FyZHNfbGV2ZWxzJztcclxuaW1wb3J0IHtUZXh0SW1hZ2VMZXZlbH0gZnJvbSAnLi90ZXh0X2ltYWdlX2xldmVsJztcclxuaW1wb3J0IHtQYXJ0aWNsZXNMZXZlbH0gZnJvbSAnLi9wYXJ0aWNsZXNfbGV2ZWwnO1xyXG5pbXBvcnQge01haW5NZW51fSBmcm9tICcuL21haW5fbWVudSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUFwcCBleHRlbmRzIFBJWEkuQXBwbGljYXRpb24ge1xyXG4gIHN0YXRpYyBpbnN0YW5jZTpCYXNlQXBwO1xyXG4gIGN1cnJlbnRfbGV2ZWw6SFVCLkdhbWVMZXZlbDtcclxuICBmcHNfdGV4dDogYW55O1xyXG4gIHN0YWdlOiBhbnk7XHJcbiAgYXZhaWxhYmxlX2xldmVsczogSFVCLkdhbWVMZXZlbFtdO1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIHt0cmFuc3BhcmVudDp0cnVlfSk7XHJcbiAgICBpZiAoQmFzZUFwcC5pbnN0YW5jZSkge1xyXG4gICAgICAvL2dhbWUgYWxyZWFkeSBydW5uaW5nXHJcbiAgICAgIHRoaXMuZGVzdHJveSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vaW5pdGlhbGl6YXRpb25cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBhcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50aWNrZXIuYWRkKHRoaXMucmVuZGVyRlBTKTtcclxuICAgICAgQmFzZUFwcC5pbnN0YW5jZSA9IHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmF2YWlsYWJsZV9sZXZlbHMgPSBbXVxyXG4gICAgICB2YXIgaHViID0gbmV3IE1haW5NZW51KCk7XHJcbiAgICAgIHRoaXMuYXZhaWxhYmxlX2xldmVscy5wdXNoKGh1Yik7XHJcbiAgICAgIGZvciAodmFyIGxldmVsIG9mIFtuZXcgQ2FyZHNMZXZlbCgpLCBuZXcgRmFzdENhcmRzTGV2ZWwoKSwgbmV3IFRleHRJbWFnZUxldmVsKCksIG5ldyBQYXJ0aWNsZXNMZXZlbCgpXSkge1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlX2xldmVscy5wdXNoKGxldmVsKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vZmlyc3QgbGV2ZWxcclxuICAgICAgdGhpcy5jdXJyZW50X2xldmVsID0gaHViO1xyXG4gICAgICBodWIuY3JlYXRlTGV2ZWwoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyRlBTID0gKGRlbHRhOm51bWJlcikgPT4ge1xyXG4gICAgaWYgKHRoaXMuZnBzX3RleHQgPT0gbnVsbCkge1xyXG4gICAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udCA6ICdib2xkIDE2cHggQXJpYWwnLFxyXG4gICAgICAgIGZpbGwgOiAnI0Y3RURDQScsXHJcbiAgICAgICAgc3Ryb2tlIDogJyM0YTE4NTAnLFxyXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzcyA6IDVcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5mcHNfdGV4dCA9IG5ldyBQSVhJLlRleHQoXCJGUFM9NjBcIiwgc3R5bGUpO1xyXG4gICAgICB0aGlzLnN0YWdlLmFkZENoaWxkKHRoaXMuZnBzX3RleHQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mcHNfdGV4dC54ID0gYXBwLnJlbmRlcmVyLndpZHRoIC0gMTUgLSB0aGlzLmZwc190ZXh0LndpZHRoO1xyXG4gICAgdGhpcy5mcHNfdGV4dC55ID0gMTA7XHJcbiAgICB0aGlzLmZwc190ZXh0LnRleHQgPSBcIkZQUyA9IFwiK01hdGgucm91bmQodGhpcy50aWNrZXIuRlBTKTtcclxuICB9XHJcbiAgY2hhbmdlTGV2ZWwobGV2ZWxfbmFtZTpzdHJpbmcpOnZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCJTd2l0Y2hpbmcgZnJvbSBcIiwgdGhpcy5jdXJyZW50X2xldmVsLmxldmVsX25hbWUsIFwiIHRvIFwiLCBsZXZlbF9uYW1lKTtcclxuICAgIGZvciAodmFyIGxldmVsIG9mIHRoaXMuYXZhaWxhYmxlX2xldmVscykge1xyXG4gICAgICBpZiAobGV2ZWwubGV2ZWxfbmFtZSA9PT0gbGV2ZWxfbmFtZSkge1xyXG4gICAgICAgIC8vZm91bmQgdGhlIGxldmVsLCByZW1vdmUgb2xkIG9uZVxyXG4gICAgICAgIHRoaXMuY3VycmVudF9sZXZlbC5kZXN0cm95TGV2ZWwoKTtcclxuICAgICAgICAvL3VwZGF0ZSBhbmQgY3JlYXRlIHRoZSBuZXcgbGV2ZWxcclxuICAgICAgICB0aGlzLmN1cnJlbnRfbGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICBsZXZlbC5jcmVhdGVMZXZlbCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9ubyBsZXZlbCBmb3VuZCB3aXRoIHRoYXQgbmFtZS5cclxuICAgIGNvbnNvbGUuZXJyb3IoXCJObyBsZXZlbCBmb3VuZCB3aXRoIG5hbWU6IFwiK2xldmVsX25hbWUrXCIuIENhbm5vdCBjaGFuZ2UgbGV2ZWwhXCIpO1xyXG4gIH1cclxufVxyXG5cclxudmFyIGFwcCA9IG5ldyBCYXNlQXBwKCk7XHJcbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7U2ltcGxlQnV0dG9uLCBGbGlwcGFibGVTcHJpdGUsIEdhbWVMZXZlbH0gZnJvbSAnLi9zdXBwb3J0JztcclxuaW1wb3J0IHtCYXNlQXBwfSBmcm9tICcuL21haW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5NZW51IGltcGxlbWVudHMgR2FtZUxldmVsIHtcclxuICBsZXZlbF9uYW1lOnN0cmluZyA9IFwiTWFpbk1lbnVcIjtcclxuICBjb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gIGJ1dHRvbnM6U2ltcGxlQnV0dG9uW107XHJcbiAgY29pbjpGbGlwcGFibGVTcHJpdGU7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLnggPSAxMDA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci55ID0gMTAwO1xyXG5cclxuICAgIHZhciBtZW51X2JnID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgIG1lbnVfYmcuYmVnaW5GaWxsKDB4RUVFRUVFKTtcclxuICAgIG1lbnVfYmcubGluZVN0eWxlKDIsIDB4ZGRkZGZGLCAxKTtcclxuICAgIG1lbnVfYmcuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIDIwMCwgMzI1LCA1KTtcclxuICAgIG1lbnVfYmcuZW5kRmlsbCgpO1xyXG5cclxuICAgIHZhciB0ZXN0ZV9jYXJ0YXMgPSBuZXcgU2ltcGxlQnV0dG9uKCdDYXJkcycsIDB4MDBhOWZmLCAweDk5ZDlmZiwgMHgwMDY2YWEsIDE1MCwgIDUwLCAzKTtcclxuICAgIHRlc3RlX2NhcnRhcy54ID0gMjU7XHJcbiAgICB0ZXN0ZV9jYXJ0YXMueSA9IDI1O1xyXG4gICAgbWVudV9iZy5hZGRDaGlsZCh0ZXN0ZV9jYXJ0YXMpO1xyXG4gICAgdGVzdGVfY2FydGFzLnNldENsaWNrQ2FsbGJhY2sodGhpcy5lbnRlckNhcmRzKTtcclxuXHJcbiAgICB2YXIgdGVzdGVfZmFzdF9jYXJ0YXMgPSBuZXcgU2ltcGxlQnV0dG9uKCcoRmFzdCkgQ2FyZHMnLCAweDAwYTlmZiwgMHg5OWQ5ZmYsIDB4MDA2NmFhLCAxNTAsICA1MCwgMyk7XHJcbiAgICB0ZXN0ZV9mYXN0X2NhcnRhcy54ID0gMjU7XHJcbiAgICB0ZXN0ZV9mYXN0X2NhcnRhcy55ID0gdGVzdGVfY2FydGFzLnkgKyB0ZXN0ZV9jYXJ0YXMuaGVpZ2h0ICsgMjU7XHJcbiAgICBtZW51X2JnLmFkZENoaWxkKHRlc3RlX2Zhc3RfY2FydGFzKTtcclxuICAgIHRlc3RlX2Zhc3RfY2FydGFzLnNldENsaWNrQ2FsbGJhY2sodGhpcy5lbnRlckZhc3RDYXJkcyk7XHJcblxyXG4gICAgdmFyIHRlc3RlX3RleHQgPSBuZXcgU2ltcGxlQnV0dG9uKCdUZXh0ICsgSW1hZ2UnLCAweDAwYTlmZiwgMHg5OWQ5ZmYsIDB4MDA2NmFhLCAxNTAsICA1MCwgMyk7XHJcbiAgICB0ZXN0ZV90ZXh0LnggPSAyNTtcclxuICAgIHRlc3RlX3RleHQueSA9IHRlc3RlX2Zhc3RfY2FydGFzLnkgKyB0ZXN0ZV9mYXN0X2NhcnRhcy5oZWlnaHQgKyAyNTtcclxuICAgIG1lbnVfYmcuYWRkQ2hpbGQodGVzdGVfdGV4dCk7XHJcbiAgICB0ZXN0ZV90ZXh0LnNldENsaWNrQ2FsbGJhY2sodGhpcy5lbnRlclRleHRJbWFnZSk7XHJcblxyXG4gICAgdmFyIHRlc3RlX3BhcnRpY2xlcyA9IG5ldyBTaW1wbGVCdXR0b24oJ1BhcnRpY2xlcycsIDB4MDBhOWZmLCAweDk5ZDlmZiwgMHgwMDY2YWEsIDE1MCwgIDUwLCAzKTtcclxuICAgIHRlc3RlX3BhcnRpY2xlcy54ID0gMjU7XHJcbiAgICB0ZXN0ZV9wYXJ0aWNsZXMueSA9IHRlc3RlX3RleHQueSArIHRlc3RlX3RleHQuaGVpZ2h0ICsgMjU7XHJcbiAgICBtZW51X2JnLmFkZENoaWxkKHRlc3RlX3BhcnRpY2xlcyk7XHJcbiAgICB0ZXN0ZV9wYXJ0aWNsZXMuc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmVudGVyUGFydGljbGVzKTtcclxuXHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBbdGVzdGVfY2FydGFzLCB0ZXN0ZV90ZXh0LCB0ZXN0ZV9wYXJ0aWNsZXMsIHRlc3RlX2Zhc3RfY2FydGFzXTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG1lbnVfYmcpO1xyXG4gICAgUElYSS5sb2FkZXJcclxuICAgICAgICAuYWRkKCdmdWxsX3Nwcml0ZXMuanNvbicpXHJcbiAgICAgICAgLmFkZCgncGFydGljbGVQYWNrLmpzb24nKVxyXG4gICAgICAgIC5sb2FkKHRoaXMubG9hZENvaW4pO1xyXG5cclxuICAgIC8vZXh0cmEgVGV4dFxyXG4gICAgdmFyIHN0eWxlID0ge1xyXG4gICAgICAgIGZvbnQgOiAnaXRhbGljIDE4cHggQXJpYWwnLFxyXG4gICAgICAgIGZpbGwgOiAweEZGRkZGRixcclxuICAgICAgICBhbGlnbjogJ3JpZ2h0J1xyXG4gICAgfVxyXG4gICAgdmFyIHRleHQgPSBuZXcgUElYSS5UZXh0KFwiVXNpbmc6IFBpeGkuSlMsIFR5cGVzY3JpcHQsIHdlYnBhY2sgYW5kIE5QTVxcbkdhbWUgRGV2ZWxvcG1lbnQgVGVzdFxcbk1hcmNlbG8gRi4gUmlnb25cXG5Bc3NldHM6IGtlbm5leS5ubFwiLCBzdHlsZSk7XHJcbiAgICB0ZXh0LnggPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLndpZHRoLzIgKyB0ZXh0LndpZHRoIC0gdGhpcy5jb250YWluZXIueDtcclxuICAgIHRleHQueSA9IDA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0ZXh0KTtcclxuXHJcbiAgfVxyXG4gIHByaXZhdGUgbG9hZENvaW4gPSAoKTp2b2lkID0+IHtcclxuICAgIHRoaXMuY29pbiA9IG5ldyBGbGlwcGFibGVTcHJpdGUoUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnY2hpcEdyZWVuV2hpdGVfc2lkZUJvcmRlci5wbmcnKSk7XHJcbiAgICB0aGlzLmNvaW4uZmxpcF9zbGlkZV95ID0gMTAwO1xyXG4gICAgdGhpcy5jb2luLmZsaXBfcm90YXRpb24gPSBNYXRoLlBJKjI7XHJcbiAgICB0aGlzLmNvaW4uZmxpcF9zbGlkZV94ID0gMDtcclxuICAgIHRoaXMuY29pbi5mbGlwX3NjYWxlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvaW4ueCA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIud2lkdGgvMjtcclxuICAgIHRoaXMuY29pbi55ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQvMjtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRoaXMuY29pbik7XHJcblxyXG4gICAgdmFyIGNvaW4yID0gbmV3IEZsaXBwYWJsZVNwcml0ZShQSVhJLlRleHR1cmUuZnJvbUltYWdlKCdjaGlwR3JlZW5XaGl0ZV9zaWRlQm9yZGVyLnBuZycpKTtcclxuICAgIGNvaW4yLmZsaXBfc2xpZGVfeSA9IDEwMDtcclxuICAgIGNvaW4yLmZsaXBfcm90YXRpb24gPSBNYXRoLlBJKjI7XHJcbiAgICBjb2luMi5mbGlwX3NsaWRlX3ggPSAwO1xyXG4gICAgY29pbjIuZmxpcF9zY2FsZSA9IGZhbHNlO1xyXG4gICAgY29pbjIuZmxpcF90aW1lID0gNTAwO1xyXG4gICAgY29pbjIueCA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIud2lkdGgvMiAtIDgwO1xyXG4gICAgY29pbjIueSA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIuaGVpZ2h0LzI7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChjb2luMik7XHJcbiAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udCA6ICdib2xkIDE4cHggQXJpYWwnLFxyXG4gICAgICAgIGZpbGwgOiAweEZGRkZGRixcclxuICAgIH1cclxuICAgIHZhciB0ZXh0ID0gbmV3IFBJWEkuVGV4dChcIkNsaWNrIG1lIVwiLCBzdHlsZSk7XHJcbiAgICB0ZXh0LnggPSB0aGlzLmNvaW4ueCAtIHRleHQud2lkdGgvMjtcclxuICAgIHRleHQueSA9IHRoaXMuY29pbi55ICszMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRleHQpO1xyXG4gIH1cclxuICBjcmVhdGVMZXZlbCgpOnZvaWQge1xyXG4gICAgZm9yICh2YXIgYnV0dG9uIG9mIHRoaXMuYnV0dG9ucykge1xyXG4gICAgICAgIGJ1dHRvbi5hY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY29pbilcclxuICAgICAgICB0aGlzLmNvaW4uaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG4gIGRlc3Ryb3lMZXZlbCgpOnZvaWQge1xyXG4gICAgZm9yICh2YXIgYnV0dG9uIG9mIHRoaXMuYnV0dG9ucykge1xyXG4gICAgICAgIGJ1dHRvbi5kZWFjdGl2YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29pbilcclxuICAgICAgICB0aGlzLmNvaW4uaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgIEJhc2VBcHAuaW5zdGFuY2Uuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuICBlbnRlckNhcmRzKCk6dm9pZCB7XHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLmNoYW5nZUxldmVsKFwiQ2FyZHNcIik7XHJcbiAgfVxyXG4gIGVudGVyRmFzdENhcmRzKCk6dm9pZCB7XHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLmNoYW5nZUxldmVsKFwiRmFzdENhcmRzXCIpO1xyXG4gIH1cclxuICBlbnRlclRleHRJbWFnZSgpOnZvaWQge1xyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5jaGFuZ2VMZXZlbChcIlRleHRJbWFnZVwiKTtcclxuICB9XHJcbiAgZW50ZXJQYXJ0aWNsZXMoKTp2b2lkIHtcclxuICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJQYXJ0aWNsZXNcIik7XHJcbiAgfVxyXG59IiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0ICogYXMgVE9PTFMgZnJvbSAnLi9zdXBwb3J0JztcclxuaW1wb3J0IHtCYXNlQXBwfSBmcm9tICcuL21haW4nO1xyXG5pbXBvcnQgKiBhcyBQQVJUSUNMRVMgZnJvbSAncGl4aS1wYXJ0aWNsZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZXNMZXZlbCBpbXBsZW1lbnRzIFRPT0xTLkdhbWVMZXZlbCB7XHJcbiAgbGV2ZWxfbmFtZTpzdHJpbmcgPSBcIlBhcnRpY2xlc1wiO1xyXG4gIGNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgdGlja2VyOiBQSVhJLnRpY2tlci5UaWNrZXI7XHJcbiAgZW1pdHRlcjpQQVJUSUNMRVMuRW1pdHRlcjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGlja2VyID0gbmV3IFBJWEkudGlja2VyLlRpY2tlcigpO1xyXG4gICAgdGhpcy50aWNrZXIuYXV0b1N0YXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpY2tlci5zdG9wKCk7XHJcbiAgfVxyXG4gIGNyZWF0ZUxldmVsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJQYXJ0aWNsZXMgY3JlYXRpb24gc3RhcnRlZC5cIik7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cclxuICAgIEJhc2VBcHAuaW5zdGFuY2Uuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgdGhpcy50aWNrZXIuYWRkKHRoaXMub25UaWNrKTtcclxuICAgIHRoaXMudGlja2VyLnN0YXJ0KCk7XHJcblxyXG4gICAgLy9jcmVhdGUgYmFjayBvcHRpb25cclxuICAgIHZhciBtZW51X2JnID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgIG1lbnVfYmcuYmVnaW5GaWxsKDB4RUVFRUVFKTtcclxuICAgIG1lbnVfYmcubGluZVN0eWxlKDIsIDB4ZGRkZGZGLCAxKTtcclxuICAgIG1lbnVfYmcuZHJhd1JvdW5kZWRSZWN0KDEwMCwgMTAwLCAyMDAsIDEwMCwgNSk7XHJcbiAgICBtZW51X2JnLmVuZEZpbGwoKTtcclxuXHJcbiAgICB2YXIgbWFpbl9tZW51X2J0biA9IG5ldyBUT09MUy5TaW1wbGVCdXR0b24oJ0JhY2snLCAweDAwYTlmZiwgMHg5OWQ5ZmYsIDB4MDA2NmFhLCAxNTAsICA1MCwgMyk7XHJcbiAgICBtYWluX21lbnVfYnRuLnggPSAxMjU7XHJcbiAgICBtYWluX21lbnVfYnRuLnkgPSAxMjU7XHJcbiAgICBtZW51X2JnLmFkZENoaWxkKG1haW5fbWVudV9idG4pO1xyXG4gICAgbWFpbl9tZW51X2J0bi5zZXRDbGlja0NhbGxiYWNrKHRoaXMuYmFja1RvTWVudSk7XHJcbiAgICBtYWluX21lbnVfYnRuLmFjdGl2YXRlKCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtZW51X2JnKTtcclxuXHJcbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgUEFSVElDTEVTLkVtaXR0ZXIodGhpcy5jb250YWluZXIsIFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJ2ZpcmVfMDIucG5nJyksIHtcclxuICAgICAgICAgIFwiYWxwaGFcIjoge1xyXG4gICAgICAgICAgICBcInN0YXJ0XCI6IDEsXHJcbiAgICAgICAgICAgIFwiZW5kXCI6IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcInNjYWxlXCI6IHtcclxuICAgICAgICAgICAgXCJzdGFydFwiOiAwLjQsXHJcbiAgICAgICAgICAgIFwiZW5kXCI6IDAuMDEsXHJcbiAgICAgICAgICAgIFwibWluaW11bVNjYWxlTXVsdGlwbGllclwiOiAyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJjb2xvclwiOiB7XHJcbiAgICAgICAgICAgIFwic3RhcnRcIjogXCIjZjAwOTE5XCIsXHJcbiAgICAgICAgICAgIFwiZW5kXCI6IFwiI2UwYTU2MlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJzcGVlZFwiOiB7XHJcbiAgICAgICAgICAgIFwic3RhcnRcIjogMjUsXHJcbiAgICAgICAgICAgIFwiZW5kXCI6IDgwLFxyXG4gICAgICAgICAgICBcIm1pbmltdW1TcGVlZE11bHRpcGxpZXJcIjogMVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWNjZWxlcmF0aW9uXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDAsXHJcbiAgICAgICAgICAgIFwieVwiOiAtNTAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJtYXhTcGVlZFwiOiAwLFxyXG4gICAgICAgICAgXCJzdGFydFJvdGF0aW9uXCI6IHtcclxuICAgICAgICAgICAgXCJtaW5cIjogMCxcclxuICAgICAgICAgICAgXCJtYXhcIjogMzYwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJub1JvdGF0aW9uXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJyb3RhdGlvblNwZWVkXCI6IHtcclxuICAgICAgICAgICAgXCJtaW5cIjogMCxcclxuICAgICAgICAgICAgXCJtYXhcIjogMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwibGlmZXRpbWVcIjoge1xyXG4gICAgICAgICAgICBcIm1pblwiOiAwLjIsXHJcbiAgICAgICAgICAgIFwibWF4XCI6IDEuMlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICBcImZyZXF1ZW5jeVwiOiAwLjAwMSxcclxuICAgICAgICAgIFwiZW1pdHRlckxpZmV0aW1lXCI6IC0xLFxyXG4gICAgICAgICAgXCJtYXhQYXJ0aWNsZXNcIjogNTAwLFxyXG4gICAgICAgICAgXCJwb3NcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogMCxcclxuICAgICAgICAgICAgXCJ5XCI6IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImFkZEF0QmFja1wiOiBmYWxzZSxcclxuICAgICAgICAgIFwic3Bhd25UeXBlXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICBcInNwYXduQ2lyY2xlXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDAsXHJcbiAgICAgICAgICAgIFwieVwiOiAwLFxyXG4gICAgICAgICAgICBcInJcIjogMTJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIHRoaXMuZW1pdHRlci5zcGF3blBvcy54ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC8yO1xyXG4gICAgdGhpcy5lbWl0dGVyLnNwYXduUG9zLnkgPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLmhlaWdodC8yO1xyXG4gICAgdGhpcy5lbWl0dGVyLmF1dG9VcGRhdGUgPSB0cnVlO1xyXG4gICAgdGhpcy5lbWl0dGVyLmVtaXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250YWluZXIub24oJ3RvdWNobW92ZScsIHRoaXMub25Nb3ZlKTtcclxuICAgIHRoaXMuY29udGFpbmVyLm9uKCdwb2ludGVybW92ZScsIHRoaXMub25Nb3ZlKTtcclxuICAgIHRoaXMuY29udGFpbmVyLm9uKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW92ZSk7XHJcbiAgfVxyXG4gIGJhY2tUb01lbnUoKSB7XHJcbiAgICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJNYWluTWVudVwiKTtcclxuICB9XHJcbiAgZGVzdHJveUxldmVsKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuZGVzdHJveSh7Y2hpbGRyZW46dHJ1ZX0pO1xyXG4gICAgdGhpcy5lbWl0dGVyLmRlc3Ryb3koKTtcclxuICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICB9XHJcbiAgb25Nb3ZlID0gKGU6UElYSS5pbnRlcmFjdGlvbi5JbnRlcmFjdGlvbkV2ZW50KSA9PiB7XHJcblxyXG4gIH1cclxuICBvblRpY2sgPSAoZGVsdGE6bnVtYmVyKSA9PntcclxuICAgIC8vdGhpcy5lbWl0dGVyLnVwZGF0ZSh0aGlzLnRpY2tlci5kZWx0YVRpbWUpO1xyXG4gICAgdmFyIG1vdXNlcG9zaXRpb24gPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLnBsdWdpbnMuaW50ZXJhY3Rpb24ubW91c2UuZ2xvYmFsO1xyXG4gICAgaWYgKChtb3VzZXBvc2l0aW9uLnggPCAzMDApIHx8IChtb3VzZXBvc2l0aW9uLnggPiBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLndpZHRoLTIwMCkgfHxcclxuICAgICAgICAobW91c2Vwb3NpdGlvbi55IDwgMTAwKSB8fCAobW91c2Vwb3NpdGlvbi55ID4gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQtMTAwKSkge1xyXG4gICAgICB0aGlzLmVtaXR0ZXIuc3Bhd25Qb3MueCA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIud2lkdGgvMjtcclxuICAgICAgdGhpcy5lbWl0dGVyLnNwYXduUG9zLnkgPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLmhlaWdodC8yO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW1pdHRlci5zcGF3blBvcy54ID0gbW91c2Vwb3NpdGlvbi54O1xyXG4gICAgICB0aGlzLmVtaXR0ZXIuc3Bhd25Qb3MueSA9IG1vdXNlcG9zaXRpb24ueTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0IHtCYXNlQXBwfSBmcm9tICcuL21haW4nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHYW1lTGV2ZWwge1xyXG4gIHJlYWRvbmx5IGxldmVsX25hbWU6IHN0cmluZztcclxuICBjb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gIGNyZWF0ZUxldmVsKCk6dm9pZDtcclxuICBkZXN0cm95TGV2ZWwoKTp2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlQnV0dG9uIGV4dGVuZHMgUElYSS5HcmFwaGljcyB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBub3JtYWxfY29sb3I6IG51bWJlcjtcclxuICBob3Zlcl9jb2xvcjogbnVtYmVyO1xyXG4gIGJvcmRlcl9jb2xvcjogbnVtYmVyO1xyXG4gIGJvcmRlcl9yYWRpdXM6bnVtYmVyO1xyXG4gIGNsaWNrX2NhbGxiYWNrPzogYW55O1xyXG4gIHc6IG51bWJlcjtcclxuICBoOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IgKGxhYmVsOnN0cmluZywgbm9ybWFsX2NvbG9yOm51bWJlciwgaG92ZXJfY29sb3I6bnVtYmVyLCBib3JkZXJfY29sb3I6bnVtYmVyLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIsIHJhZGl1czpudW1iZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLncgPSB3aWR0aDtcclxuICAgIHRoaXMuaCA9IGhlaWdodDtcclxuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgIHRoaXMubm9ybWFsX2NvbG9yID0gbm9ybWFsX2NvbG9yO1xyXG4gICAgdGhpcy5ob3Zlcl9jb2xvciA9IGhvdmVyX2NvbG9yO1xyXG4gICAgdGhpcy5ib3JkZXJfY29sb3IgPSBib3JkZXJfY29sb3I7XHJcbiAgICB0aGlzLmJvcmRlcl9yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB0aGlzLmRyYXdUZXh0KCk7XHJcblxyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmF3QnV0dG9uKHRoaXMubm9ybWFsX2NvbG9yKTtcclxuICB9XHJcbiAgZHJhd0J1dHRvbihjb2xvcjpudW1iZXIpIHtcclxuICAgIHRoaXMuYmVnaW5GaWxsKGNvbG9yKTtcclxuICAgIHRoaXMubGluZVN0eWxlKHRoaXMuYm9yZGVyX3JhZGl1cywgdGhpcy5ib3JkZXJfY29sb3IsIDEpO1xyXG4gICAgdGhpcy5kcmF3Um91bmRlZFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgsIDMpO1xyXG4gICAgdGhpcy5lbmRGaWxsKCk7XHJcbiAgfVxyXG4gIGRyYXdUZXh0KCkge1xyXG4gICAgdmFyIHN0eWxlID0ge1xyXG4gICAgICAgIGZvbnQgOiAnYm9sZCAxOHB4IEFyaWFsJyxcclxuICAgICAgICBmaWxsIDogMHhGRkZGRkYsXHJcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHN0cm9rZSA6IHRoaXMuYm9yZGVyX2NvbG9yLFxyXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzcyA6IDVcclxuICAgIH1cclxuICAgIHZhciB0ZXh0ID0gbmV3IFBJWEkuVGV4dCh0aGlzLmxhYmVsLCBzdHlsZSk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRleHQpO1xyXG4gICAgdGV4dC54ID0gdGhpcy53LzIgLSB0ZXh0LndpZHRoLzI7XHJcbiAgICB0ZXh0LnkgPSB0aGlzLmgvMiAtIHRleHQuaGVpZ2h0LzI7XHJcbiAgfVxyXG4gIHNldENsaWNrQ2FsbGJhY2soY2FsbGJhY2s6RnVuY3Rpb24pIHtcclxuICAgIHRoaXMuY2xpY2tfY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICB9XHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLm9uKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLm9uKCd0YXAnLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5vbigncG9pbnRlcm92ZXInLCB0aGlzLm9uSG92ZXIpO1xyXG4gICAgdGhpcy5vbigndG91Y2hzdGFydCcsIHRoaXMub25Ib3Zlcik7XHJcbiAgICB0aGlzLm9uKCdwb2ludGVyb3V0JywgdGhpcy5vbkV4aXQpO1xyXG4gICAgdGhpcy5vbigndG91Y2hlbmRvdXRzaWRlJywgdGhpcy5vbkV4aXQpO1xyXG4gICAgdGhpcy5vbigndG91Y2hlbmQnLCB0aGlzLm9uRXhpdCk7XHJcbiAgfVxyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG4gIH1cclxuICBvbkhvdmVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gICAgdGhpcy5kcmF3QnV0dG9uKHRoaXMuaG92ZXJfY29sb3IpO1xyXG4gIH1cclxuICBvbkV4aXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB0aGlzLmRyYXdCdXR0b24odGhpcy5ub3JtYWxfY29sb3IpO1xyXG4gIH1cclxuICBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2xpY2tfY2FsbGJhY2spXHJcbiAgICAgIHRoaXMuY2xpY2tfY2FsbGJhY2soKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGbGlwcGFibGVTcHJpdGUgZXh0ZW5kcyBQSVhJLlNwcml0ZSB7XHJcbiAgZmxpcF90aW1lOm51bWJlciA9IDIwMDA7XHJcbiAgZmxpcF9oZWlnaHQ6bnVtYmVyID0gMTAuMDtcclxuICBmbGlwX3NsaWRlX3g6bnVtYmVyID0gMTAwLjA7XHJcbiAgZmxpcF9yb3RhdGlvbjpudW1iZXIgPSAwLjA7XHJcbiAgZmxpcF9zbGlkZV95Om51bWJlciA9IDAuMDtcclxuICBmbGlwX3NjYWxlOmJvb2xlYW4gPSB0cnVlO1xyXG4gIHNpZGVzOlBJWEkuVGV4dHVyZVtdO1xyXG4gIHRpY2tlcjpQSVhJLnRpY2tlci5UaWNrZXI7XHJcbiAgYmFzZV9zY2FsZTpudW1iZXIgPSAxLjA7XHJcbiAgc2lkZTpudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgb3JpZ194Om51bWJlcjtcclxuICBwcml2YXRlIG9yaWdfeTpudW1iZXI7XHJcbiAgcHJpdmF0ZSBmbGlwX2NvdW50ZXI6bnVtYmVyID0gMC4wO1xyXG4gIGNvbnN0cnVjdG9yKHRleHR1cmU/OlBJWEkuVGV4dHVyZSB8IHVuZGVmaW5lZCwgYmFja2ZhY2U/OlBJWEkuVGV4dHVyZSB8IHVuZGVmaW5lZCkge1xyXG4gICAgc3VwZXIodGV4dHVyZSk7XHJcblxyXG4gICAgdGhpcy50aWNrZXIgPSBuZXcgUElYSS50aWNrZXIuVGlja2VyKCk7XHJcbiAgICB0aGlzLnRpY2tlci5hdXRvU3RhcnQgPSBmYWxzZTtcclxuICAgIHRoaXMudGlja2VyLnNwZWVkID0gMS4wO1xyXG5cclxuICAgIHRoaXMucGl2b3QueCA9IHRoaXMud2lkdGgvMjtcclxuICAgIHRoaXMucGl2b3QueSA9IHRoaXMuaGVpZ2h0LzI7XHJcblxyXG4gICAgdGhpcy5zaWRlcyA9IFtdO1xyXG4gICAgaWYgKHRleHR1cmUpXHJcbiAgICAgIHRoaXMuc2lkZXMucHVzaCh0ZXh0dXJlKTtcclxuICAgIGlmIChiYWNrZmFjZSlcclxuICAgICAgdGhpcy5zaWRlcy5wdXNoKGJhY2tmYWNlKVxyXG5cclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5vbignY2xpY2snLCB0aGlzLmZsaXApO1xyXG4gICAgdGhpcy5vbigndGFwJywgdGhpcy5mbGlwKTtcclxuICB9XHJcbiAgZmxpcD0oKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiU3RhcnRlZCBmbGlwLlwiKTtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZmxpcF9jb3VudGVyID0gMC4wO1xyXG4gICAgdGhpcy50aWNrZXIuc3RhcnQoKTtcclxuICAgIHRoaXMuYmFzZV9zY2FsZSA9IHRoaXMuc2NhbGUueDtcclxuICAgIHRoaXMub3JpZ194ID0gdGhpcy54O1xyXG4gICAgdGhpcy5vcmlnX3kgPSB0aGlzLnk7XHJcbiAgICB0aGlzLnNpZGUgPSAodGhpcy5zaWRlICsgMSklIHRoaXMuc2lkZXMubGVuZ3RoXHJcbiAgICB0aGlzLnRpY2tlci5hZGQodGhpcy5mbGlwTG9naWMpO1xyXG4gIH1cclxuICBmbGlwTG9naWM9KGRlbHRhOm51bWJlcik9PntcclxuICAgIHRoaXMuZmxpcF9jb3VudGVyICs9IHRoaXMudGlja2VyLmVsYXBzZWRNUyAqIHRoaXMudGlja2VyLnNwZWVkO1xyXG4gICAgdmFyIHBlcmMgPSB0aGlzLmZsaXBfY291bnRlciAvIHRoaXMuZmxpcF90aW1lO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnRpY2tlci5lbGFwc2VkTVMsXCIgLSBcIiwgdGhpcy5mbGlwX2NvdW50ZXIpO1xyXG4gICAgLy94XHJcbiAgICBpZiAodGhpcy5mbGlwX3NsaWRlX3ggIT0gMC4wKXtcclxuICAgICAgdGhpcy54ID0gbGVycCh0aGlzLm9yaWdfeCwgdGhpcy5vcmlnX3grdGhpcy5mbGlwX3NsaWRlX3gsIHBlcmMpO1xyXG4gICAgfVxyXG4gICAgLy9yb3RcclxuICAgIGlmICh0aGlzLmZsaXBfcm90YXRpb24gIT0gMC4wKXtcclxuICAgICAgdGhpcy5yb3RhdGlvbiA9IGxlcnAoMCx0aGlzLmZsaXBfcm90YXRpb24scGVyYyk7XHJcbiAgICB9XHJcbiAgICAvL3lcclxuICAgIGlmIChwZXJjIDw9IDAuNSkge1xyXG4gICAgICAvL2dvaW5nIHVwIGFuZCBzaHJpbmtpbmdcclxuICAgICAgaWYgKHRoaXMuZmxpcF9zbGlkZV95ICE9IDApXHJcbiAgICAgICAgdGhpcy55ID0gbGVycCh0aGlzLm9yaWdfeSwgdGhpcy5vcmlnX3ktdGhpcy5mbGlwX3NsaWRlX3ksIE1hdGguc3FydChwZXJjKjIpKTtcclxuICAgICAgaWYgKHRoaXMuZmxpcF9zY2FsZSlcclxuICAgICAgICB0aGlzLnNjYWxlLnggPSBsZXJwKHRoaXMuYmFzZV9zY2FsZSwgMC4xLCBwZXJjKjIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zaWRlc1t0aGlzLnNpZGVdO1xyXG4gICAgICAvL2dvaW5nIGRvd24gYW5kIGV4cGFuZGluZ1xyXG4gICAgICBpZiAodGhpcy5mbGlwX3NsaWRlX3kgIT0gMClcclxuICAgICAgICB0aGlzLnkgPSBsZXJwKHRoaXMub3JpZ195LXRoaXMuZmxpcF9zbGlkZV95LCB0aGlzLm9yaWdfeSwgTWF0aC5wb3cocGVyYyoyIC0gMS4wLDIpKTtcclxuICAgICAgaWYgKHRoaXMuZmxpcF9zY2FsZSlcclxuICAgICAgICB0aGlzLnNjYWxlLnggPSBsZXJwKDAuMSwgdGhpcy5iYXNlX3NjYWxlLCBwZXJjKjIgLSAxLjApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmxpcF9jb3VudGVyID49IHRoaXMuZmxpcF90aW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLmZsaXBfc2NhbGUpXHJcbiAgICAgICAgdGhpcy5zY2FsZS54ID0gdGhpcy5iYXNlX3NjYWxlO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5mbGlwX3JvdGF0aW9uO1xyXG4gICAgICB0aGlzLnggPSB0aGlzLm9yaWdfeCt0aGlzLmZsaXBfc2xpZGVfeDtcclxuICAgICAgdGhpcy55ID0gdGhpcy5vcmlnX3k7XHJcbiAgICAgIHRoaXMudGlja2VyLnJlbW92ZSh0aGlzLmZsaXBMb2dpYyk7XHJcbiAgICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIC8vdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2Jhc2ljIGxlcnAgZnVudGlvbi5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYTE6bnVtYmVyLGEyOm51bWJlcix0Om51bWJlcil7XHJcbiAgcmV0dXJuIGExKigxLXQpICsgYTIqdDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE91dHB1dENvbnRlbnQge1xyXG4gIHR5cGU6c3RyaW5nO1xyXG4gIGNvbnRlbnQ6c3RyaW5nO1xyXG4gIG9wdGlvbnM/Om9iamVjdCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRJbWFnZU1peGluIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRUb1ByaW50Ok91dHB1dENvbnRlbnRbXSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGxldCBsYXN0X3g6bnVtYmVyID0gMDtcclxuICAgIGxldCBsYXN0X3k6bnVtYmVyID0gMDtcclxuICAgIGZvciAodmFyIGNvbnRlbnQgb2YgY29udGVudFRvUHJpbnQpIHtcclxuICAgICAgbGV0IG9iajpQSVhJLlNwcml0ZTtcclxuICAgICAgaWYgKGNvbnRlbnQudHlwZSA9PSBcIlRleHRcIilcclxuICAgICAgICBvYmogPSB0aGlzLmNyZWF0ZVRleHQoY29udGVudCk7XHJcbiAgICAgIGVsc2UgaWYgKGNvbnRlbnQudHlwZSA9PSBcIkltYWdlXCIpXHJcbiAgICAgICAgb2JqID0gdGhpcy5jcmVhdGVJbWFnZShjb250ZW50KTtcclxuICAgICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJUZXh0SW1hZ2VNaXhpbjo6Y29uc3RydWN0b3IgLSBDYW5ub3QgY3JlYXRlIGNvbnRlbnQgb2YgdHlwZTogXCIsY29udGVudC50eXBlKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBvYmoucGl2b3QueSA9IG9iai5oZWlnaHRcclxuICAgICAgb2JqLnBpdm90LnggPSAwO1xyXG4gICAgICBvYmoueCA9IGxhc3RfeDtcclxuICAgICAgb2JqLnkgPSBsYXN0X3k7XHJcblxyXG4gICAgICBsYXN0X3ggKz0gb2JqLndpZHRoO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKG9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNyZWF0ZVRleHQoY29udGVudDpPdXRwdXRDb250ZW50KTpQSVhJLlRleHQge1xyXG4gICAgcmV0dXJuIG5ldyBQSVhJLlRleHQoY29udGVudC5jb250ZW50LCBjb250ZW50Lm9wdGlvbnMpO1xyXG4gIH1cclxuICBjcmVhdGVJbWFnZShjb250ZW50Ok91dHB1dENvbnRlbnQpOlBJWEkuU3ByaXRlIHtcclxuICAgIHJldHVybiBuZXcgUElYSS5TcHJpdGUoUElYSS5UZXh0dXJlLmZyb21JbWFnZShjb250ZW50LmNvbnRlbnQpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYW5pc2hpbmdPYmplY3Qge1xyXG4gIHRpbWVfdG9fZmFkZTpudW1iZXIgPSAxMDAwMDtcclxuICBmYWRlX3RpbWU6bnVtYmVyID0gMTAwMDtcclxuICBwcml2YXRlIHN0YXJ0X3RpbWU6bnVtYmVyID0gMDtcclxuICBwcml2YXRlIGZhZGVfY291bnRlcjpudW1iZXIgPSAwO1xyXG4gIHRpY2tlcjpQSVhJLnRpY2tlci5UaWNrZXI7XHJcbiAgb2JqOiBQSVhJLkNvbnRhaW5lcjtcclxuICBjb25zdHJ1Y3RvcihvYmo6UElYSS5Db250YWluZXIpIHtcclxuICAgIHRoaXMudGlja2VyID0gbmV3IFBJWEkudGlja2VyLlRpY2tlcigpO1xyXG4gICAgdGhpcy50aWNrZXIuYXV0b1N0YXJ0ID0gdHJ1ZTtcclxuICAgIHRoaXMudGlja2VyLnN0YXJ0KCk7XHJcbiAgICB0aGlzLnRpY2tlci5hZGQodGhpcy50aWNUYWMpO1xyXG4gICAgdGhpcy5vYmogPSBvYmo7XHJcbiAgICB0aGlzLmZhZGVfY291bnRlciA9IDA7XHJcbiAgICB0aGlzLnN0YXJ0X3RpbWUgPSAwO1xyXG4gIH1cclxuICB0aWNUYWMgPSAoZGVsdGE6bnVtYmVyKSA9PiB7XHJcbiAgICB0aGlzLnN0YXJ0X3RpbWUgKz0gdGhpcy50aWNrZXIuZWxhcHNlZE1TO1xyXG4gICAgaWYgKHRoaXMuc3RhcnRfdGltZSA+IHRoaXMudGltZV90b19mYWRlICsgdGhpcy5mYWRlX3RpbWUpIHtcclxuICAgICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgICB0aGlzLm9iai5kZXN0cm95KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGFydF90aW1lID4gdGhpcy50aW1lX3RvX2ZhZGUpIHtcclxuICAgICAgICB0aGlzLmZhZGVfY291bnRlciArPSB0aGlzLnRpY2tlci5lbGFwc2VkTVM7XHJcbiAgICAgICAgdmFyIGFscGhhID0gbGVycCgxLjAsIDAuMCwgdGhpcy5mYWRlX2NvdW50ZXIvdGhpcy5mYWRlX3RpbWUpO1xyXG4gICAgICAgIHRoaXMub2JqLmFscGhhID0gYWxwaGE7XHJcbiAgICAgICAgdGhpcy5vYmouY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZDpQSVhJLlNwcml0ZSkge1xyXG4gICAgICAgICAgY2hpbGQuYWxwaGEgPSBhbHBoYTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0ICogYXMgVE9PTFMgZnJvbSAnLi9zdXBwb3J0JztcclxuaW1wb3J0IHtCYXNlQXBwfSBmcm9tICcuL21haW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRJbWFnZUxldmVsIGltcGxlbWVudHMgVE9PTFMuR2FtZUxldmVsIHtcclxuICBsZXZlbF9uYW1lOnN0cmluZyA9IFwiVGV4dEltYWdlXCI7XHJcbiAgY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuICB0aWNrZXI6IFBJWEkudGlja2VyLlRpY2tlcjtcclxuICBpbWFnZXNfbmFtZV9hcnJheTogc3RyaW5nW107XHJcbiAgdGltZV90b19jcmVhdGU6bnVtYmVyID0gNTAwO1xyXG4gIHByaXZhdGUgY291bnRlcjpudW1iZXIgPSAwO1xyXG4gIG1heF9mb250X3NpemU6bnVtYmVyID0gMzA7XHJcbiAgbWluX2ZvbnRfc2l6ZTpudW1iZXIgPSAxMjtcclxuICBjb250ZW50X3NpemU6bnVtYmVyID0gMztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGlja2VyID0gbmV3IFBJWEkudGlja2VyLlRpY2tlcigpO1xyXG4gICAgdGhpcy50aWNrZXIuYXV0b1N0YXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpY2tlci5zdG9wKCk7XHJcbiAgICB0aGlzLmltYWdlc19uYW1lX2FycmF5ID0gW1wicGllY2VXaGl0ZV9ib3JkZXIwMC5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDEucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjAyLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwMy5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDQucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjA1LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwNi5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDcucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjA4LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwOS5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTAucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjExLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxMi5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTMucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjE0LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxNS5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTYucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjE3LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxOC5wbmdcIl07XHJcbiAgfVxyXG4gIGNyZWF0ZUxldmVsKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJUZXh0ICsgSW1hZ2UgY3JlYXRpb24gc3RhcnRlZC5cIik7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cclxuICAgIEJhc2VBcHAuaW5zdGFuY2Uuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgdGhpcy50aWNrZXIuYWRkKHRoaXMub25UaWNrKTtcclxuICAgIHRoaXMudGlja2VyLnN0YXJ0KCk7XHJcblxyXG4gICAgLy9jcmVhdGUgYmFjayBvcHRpb25cclxuICAgIHZhciBtZW51X2JnID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgIG1lbnVfYmcuYmVnaW5GaWxsKDB4RUVFRUVFKTtcclxuICAgIG1lbnVfYmcubGluZVN0eWxlKDIsIDB4ZGRkZGZGLCAxKTtcclxuICAgIG1lbnVfYmcuZHJhd1JvdW5kZWRSZWN0KDEwMCwgMTAwLCAyMDAsIDEwMCwgNSk7XHJcbiAgICBtZW51X2JnLmVuZEZpbGwoKTtcclxuXHJcbiAgICB2YXIgbWFpbl9tZW51X2J0biA9IG5ldyBUT09MUy5TaW1wbGVCdXR0b24oJ0JhY2snLCAweDAwYTlmZiwgMHg5OWQ5ZmYsIDB4MDA2NmFhLCAxNTAsICA1MCwgMyk7XHJcbiAgICBtYWluX21lbnVfYnRuLnggPSAxMjU7XHJcbiAgICBtYWluX21lbnVfYnRuLnkgPSAxMjU7XHJcbiAgICBtZW51X2JnLmFkZENoaWxkKG1haW5fbWVudV9idG4pO1xyXG4gICAgbWFpbl9tZW51X2J0bi5zZXRDbGlja0NhbGxiYWNrKHRoaXMuYmFja1RvTWVudSk7XHJcbiAgICBtYWluX21lbnVfYnRuLmFjdGl2YXRlKCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtZW51X2JnKTtcclxuICAgIHRoaXMuY291bnRlciA9IHRoaXMudGltZV90b19jcmVhdGU7XHJcbiAgfVxyXG4gIGJhY2tUb01lbnUoKSB7XHJcbiAgICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJNYWluTWVudVwiKTtcclxuICB9XHJcbiAgZGVzdHJveUxldmVsKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuZGVzdHJveSh7Y2hpbGRyZW46dHJ1ZX0pO1xyXG4gICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gIH1cclxuICBvblRpY2s9KCkgPT57XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gdGhpcy50aWNrZXIuZWxhcHNlZE1TO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+IHRoaXMudGltZV90b19jcmVhdGUpIHtcclxuICAgICAgdGhpcy5jcmVhdGVSYW5kb20oKTtcclxuICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgY3JlYXRlUmFuZG9tKCkge1xyXG4gICAgbGV0IGNvbnRlbnQ6VE9PTFMuT3V0cHV0Q29udGVudFtdID0gW107XHJcbiAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCB0aGlzLmNvbnRlbnRfc2l6ZTsgaSsrKSB7XHJcbiAgICAgIGxldCBjaGFuY2U6bnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgbGV0IG5ld19jb250ZW50OlRPT0xTLk91dHB1dENvbnRlbnQgPSBuZXcgVE9PTFMuT3V0cHV0Q29udGVudCgpO1xyXG4gICAgICBpZiAoY2hhbmNlID4gMC41KSB7XHJcbiAgICAgICAgLy9UZXh0XHJcbiAgICAgICAgbmV3X2NvbnRlbnQudHlwZSA9IFwiVGV4dFwiO1xyXG4gICAgICAgIHZhciBzdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZSh7XHJcbiAgICAgICAgICBmb250U2l6ZTogTWF0aC5yYW5kb20oKSoodGhpcy5tYXhfZm9udF9zaXplLXRoaXMubWluX2ZvbnRfc2l6ZSkrdGhpcy5taW5fZm9udF9zaXplLFxyXG4gICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG4gICAgICAgICAgZmlsbDogXCIjRkZGRkZGXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChjaGFuY2UgPCAwLjEpXHJcbiAgICAgICAgICBzdHlsZS5mb250V2VpZ2h0PVwiYm9sZFwiO1xyXG4gICAgICAgIGlmIChjaGFuY2UgPiAwLjQpXHJcbiAgICAgICAgICBzdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG5cclxuICAgICAgICBpZiAoY2hhbmNlID4gMC43NSkge1xyXG4gICAgICAgICAgaWYgKGNoYW5jZSA8IDAuODUpXHJcbiAgICAgICAgICAgIHN0eWxlLmZpbGwgPSAweDMzMzMzMztcclxuICAgICAgICAgIGVsc2UgaWYgKGNoYW5jZSA8IDAuOTUpXHJcbiAgICAgICAgICAgIHN0eWxlLmZpbGwgPSAweDY2NjY2NjtcclxuICAgICAgICAgIGVsc2UgaWYgKGNoYW5jZSA+IDAuOTUpXHJcbiAgICAgICAgICAgIHN0eWxlLmZpbGwgPSBbMHgwMDAwMDAsMHgwMDMzYTldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdfY29udGVudC5jb250ZW50ID0gXCJBaG95IVwiO1xyXG4gICAgICAgIG5ld19jb250ZW50Lm9wdGlvbnMgPSBzdHlsZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL0ltYWdlXHJcbiAgICAgICAgbmV3X2NvbnRlbnQudHlwZSA9IFwiSW1hZ2VcIjtcclxuICAgICAgICBuZXdfY29udGVudC5jb250ZW50ID0gdGhpcy5pbWFnZXNfbmFtZV9hcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5pbWFnZXNfbmFtZV9hcnJheS5sZW5ndGgtMC4xKSldO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRlbnQucHVzaChuZXdfY29udGVudCk7XHJcbiAgICB9XHJcbiAgICAvL01ldGEtZGF0YSBPSywgcmVhbCBjcmVhdGlvbi5cclxuICAgIHZhciBuZXdfb2JqID0gbmV3IFRPT0xTLlRleHRJbWFnZU1peGluKGNvbnRlbnQpO1xyXG4gICAgbmV3X29iai54ID0gMzAwICsgTWF0aC5yYW5kb20oKSooQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aCAtIDM1MCAtIG5ld19vYmoud2lkdGgpO1xyXG4gICAgbmV3X29iai55ID0gNTAgKyBNYXRoLnJhbmRvbSgpKihCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLmhlaWdodCAtIDIwMCAtIG5ld19vYmouaGVpZ2h0KTtcclxuICAgIC8vb2JqIHRvIHZhbmlzaCBhZnRlciBzb21lIHRpbWUuXHJcbiAgICBuZXcgVE9PTFMuVmFuaXNoaW5nT2JqZWN0KG5ld19vYmopO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobmV3X29iaik7XHJcbiAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBQSVhJOyJdLCJzb3VyY2VSb290IjoiIn0=