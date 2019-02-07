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

/***/ "./src/bee.ts":
/*!********************!*\
  !*** ./src/bee.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
class Bee extends PIXI.Sprite {
    constructor(startPos, endPos, motionTime) {
        super(PIXI.Texture.fromImage("pieceWhite_border16.png"));
        this._currentTime = 0;
        this._forward = true;
        this.tick = (delta) => {
            var t = 0.0;
            if (this._forward) {
                this._currentTime += this._timer.elapsedMS * this._timer.speed;
                if (this._currentTime >= this._totalTime) {
                    this._currentTime = this._totalTime;
                    t = 1.0;
                    this._forward = false;
                }
                else {
                    t = this._currentTime / this._totalTime;
                }
            }
            else {
                this._currentTime -= this._timer.elapsedMS * this._timer.speed;
                if (this._currentTime <= 0.0) {
                    this._currentTime = 0.0;
                    t = 0.0;
                    this._forward = true;
                }
                else {
                    t = this._currentTime / this._totalTime;
                }
            }
            let t3 = Math.pow(t, 3);
            let t2 = Math.pow(t, 2);
            let a0 = (2 * t3 - 3 * t2 + 1);
            let a1 = (t3 - 2 * t2 + t);
            let a2 = (-2 * t3 + 3 * t2);
            let a3 = (t3 - t2);
            this.x = a0 * this._start.x + a1 * this._t0.x + a2 * this._end.x + a3 * this._t1.x;
            this.y = a0 * this._start.y + a1 * this._t0.y + a2 * this._end.y + a3 * this._t1.y;
        };
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
        this._t0 = new PIXI.Point(0, 0);
        this._t1 = new PIXI.Point(0, 0);
        //main axis
        if (Math.abs(this._start.x - this._end.x) > Math.abs(this._start.y - this._end.y)) {
            //x is bigger
            this._t0 = new PIXI.Point(0.4, 0.1);
            this._t1 = new PIXI.Point(-0.4, -0.1);
        }
        else {
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
        this._t1.x = this._end.x + 0.4 * (this._start.x - this._end.x);
        this._t1.y = this._end.y + 0.4 * (this._start.y - this._end.y);
    }
}
exports.Bee = Bee;


/***/ }),

/***/ "./src/cards_levels.ts":
/*!*****************************!*\
  !*** ./src/cards_levels.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
const support_1 = __webpack_require__(/*! ./support */ "./src/support.ts");
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
class CardsLevel {
    constructor() {
        this.level_name = "Cards";
        this.deck_size = 144;
        this.card_index = 0;
        this.card_delay = 1000;
        this.card_anim_speed = 2000;
        this.card_counter = 0.0;
        this.card_start_time = 0.0;
        this.onTick = (delta) => {
            this.card_counter += this.ticker.elapsedMS;
            //console.log("Ticking... ",this.card_counter," index: "+this.card_index);
            if (this.card_counter >= this.card_delay) {
                this.card_counter = 0.0;
                // move current card to the back.
                if (this.card_index >= 0)
                    this.container.setChildIndex(this.deck[this.deck.length - this.card_index - 1], this.card_index);
                this.card_index++;
                if (this.card_index == this.deck.length) {
                    this.ticker.stop();
                    //The End
                    console.log("Card animation completed in ", performance.now() - this.card_start_time, " ms");
                    return;
                }
                this.deck[this.deck.length - this.card_index - 1].flip();
            }
        };
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
    }
    backToMenu() {
        main_1.BaseApp.instance.changeLevel("MainMenu");
    }
    destroyLevel() {
        this.deck = [];
        this.ticker.stop();
        this.ticker.remove(this.onTick);
        this.container.destroy({ children: true });
    }
}
exports.CardsLevel = CardsLevel;
class FastCardsLevel extends CardsLevel {
    constructor() {
        super(...arguments);
        this.level_name = "FastCards";
        this.card_delay = 100;
        this.card_anim_speed = 300;
    }
}
exports.FastCardsLevel = FastCardsLevel;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
const cards_levels_1 = __webpack_require__(/*! ./cards_levels */ "./src/cards_levels.ts");
const text_image_level_1 = __webpack_require__(/*! ./text_image_level */ "./src/text_image_level.ts");
const particles_level_1 = __webpack_require__(/*! ./particles_level */ "./src/particles_level.ts");
const main_menu_1 = __webpack_require__(/*! ./main_menu */ "./src/main_menu.ts");
class BaseApp extends PIXI.Application {
    constructor() {
        super(window.innerWidth, window.innerHeight, { transparent: true });
        this.renderFPS = (delta) => {
            if (this.fps_text == null) {
                var style = {
                    font: 'bold 16px Arial',
                    fill: '#F7EDCA',
                    stroke: '#4a1850',
                    strokeThickness: 5
                };
                this.fps_text = new PIXI.Text("FPS=60", style);
                this.stage.addChild(this.fps_text);
            }
            this.fps_text.x = app.renderer.width - 15 - this.fps_text.width;
            this.fps_text.y = 10;
            this.fps_text.text = "FPS = " + Math.round(this.ticker.FPS);
        };
        if (BaseApp.instance) {
            //game already running
            this.destroy(true);
        }
        else {
            //initialization
            document.body.appendChild(this.view);
            window.addEventListener("resize", function () {
                app.renderer.resize(window.innerWidth, window.innerHeight);
            });
            this.ticker.add(this.renderFPS);
            BaseApp.instance = this;
            this.available_levels = [];
            var hub = new main_menu_1.MainMenu();
            this.available_levels.push(hub);
            for (var level of [new cards_levels_1.CardsLevel(), new cards_levels_1.FastCardsLevel(), new text_image_level_1.TextImageLevel(), new particles_level_1.ParticlesLevel()]) {
                this.available_levels.push(level);
            }
            //first level
            this.current_level = hub;
            hub.createLevel();
        }
    }
    changeLevel(level_name) {
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
        console.error("No level found with name: " + level_name + ". Cannot change level!");
    }
}
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
const PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
const support_1 = __webpack_require__(/*! ./support */ "./src/support.ts");
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
const bee_1 = __webpack_require__(/*! ./bee */ "./src/bee.ts");
class MainMenu {
    constructor() {
        this.level_name = "MainMenu";
        this.loadCoin = () => {
            this.coin = new support_1.FlippableSprite(PIXI.Texture.fromImage('chipGreenWhite_sideBorder.png'));
            this.coin.flip_slide_y = 100;
            this.coin.flip_rotation = Math.PI * 2;
            this.coin.flip_slide_x = 0;
            this.coin.flip_scale = false;
            this.coin.x = main_1.BaseApp.instance.renderer.width / 2;
            this.coin.y = main_1.BaseApp.instance.renderer.height / 2;
            this.container.addChild(this.coin);
            var coin2 = new support_1.FlippableSprite(PIXI.Texture.fromImage('chipGreenWhite_sideBorder.png'));
            coin2.flip_slide_y = 100;
            coin2.flip_rotation = Math.PI * 2;
            coin2.flip_slide_x = 0;
            coin2.flip_scale = false;
            coin2.flip_time = 500;
            coin2.x = main_1.BaseApp.instance.renderer.width / 2 - 80;
            coin2.y = main_1.BaseApp.instance.renderer.height / 2;
            this.container.addChild(coin2);
            var style = {
                font: 'bold 18px Arial',
                fill: 0xFFFFFF,
            };
            var text = new PIXI.Text("Click me!", style);
            text.x = this.coin.x - text.width / 2;
            text.y = this.coin.y + 30;
            this.container.addChild(text);
            this.container.addChild(new bee_1.Bee(new PIXI.Point(400, 500), new PIXI.Point(800, 50), 5000.0));
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
    createLevel() {
        for (var button of this.buttons) {
            button.activate();
        }
        if (this.coin)
            this.coin.interactive = true;
        main_1.BaseApp.instance.stage.addChild(this.container);
    }
    destroyLevel() {
        for (var button of this.buttons) {
            button.deactivate();
        }
        if (this.coin)
            this.coin.interactive = false;
        main_1.BaseApp.instance.stage.removeChild(this.container);
    }
    enterCards() {
        main_1.BaseApp.instance.changeLevel("Cards");
    }
    enterFastCards() {
        main_1.BaseApp.instance.changeLevel("FastCards");
    }
    enterTextImage() {
        main_1.BaseApp.instance.changeLevel("TextImage");
    }
    enterParticles() {
        main_1.BaseApp.instance.changeLevel("Particles");
    }
}
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
const PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
const TOOLS = __webpack_require__(/*! ./support */ "./src/support.ts");
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
const PARTICLES = __webpack_require__(/*! pixi-particles */ "./node_modules/pixi-particles/dist/pixi-particles.min.js");
class ParticlesLevel {
    constructor() {
        this.level_name = "Particles";
        this.onTick = (delta) => {
            //this.emitter.update(this.ticker.deltaTime);
            var mousePos = main_1.BaseApp.instance.renderer.plugins.interaction.mouse.global;
            var px = mousePos.x;
            var py = mousePos.y;
            this.updateEmitter(px, py);
        };
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.autoStart = false;
        this.ticker.stop();
    }
    createLevel() {
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
    }
    backToMenu() {
        main_1.BaseApp.instance.changeLevel("MainMenu");
    }
    destroyLevel() {
        this.container.destroy({ children: true });
        this.emitter.destroy();
        this.ticker.stop();
    }
    updateEmitter(px, py) {
        if ((px < 300) || (px > main_1.BaseApp.instance.renderer.width - 200) ||
            (py < 100) || (py > main_1.BaseApp.instance.renderer.height - 100)) {
            this.emitter.spawnPos.x = main_1.BaseApp.instance.renderer.width / 2;
            this.emitter.spawnPos.y = main_1.BaseApp.instance.renderer.height / 2;
        }
        else {
            this.emitter.spawnPos.x = px;
            this.emitter.spawnPos.y = py;
        }
    }
}
exports.ParticlesLevel = ParticlesLevel;


/***/ }),

/***/ "./src/support.ts":
/*!************************!*\
  !*** ./src/support.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
class SimpleButton extends PIXI.Graphics {
    constructor(label, normal_color, hover_color, border_color, width, height, radius) {
        super();
        this.onHover = () => {
            this.clear();
            this.drawButton(this.hover_color);
        };
        this.onExit = () => {
            this.clear();
            this.drawButton(this.normal_color);
        };
        this.onClick = () => {
            if (this.click_callback)
                this.click_callback();
        };
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
    drawButton(color) {
        this.beginFill(color);
        this.lineStyle(this.border_radius, this.border_color, 1);
        this.drawRoundedRect(0, 0, this.w, this.h, 3);
        this.endFill();
    }
    drawText() {
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
    }
    setClickCallback(callback) {
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
}
exports.SimpleButton = SimpleButton;
class FlippableSprite extends PIXI.Sprite {
    constructor(texture, backface) {
        super(texture);
        this.flip_time = 2000;
        this.flip_height = 10.0;
        this.flip_slide_x = 100.0;
        this.flip_rotation = 0.0;
        this.flip_slide_y = 0.0;
        this.flip_scale = true;
        this.base_scale = 1.0;
        this.side = 0;
        this.flip_counter = 0.0;
        this.flip = () => {
            //console.log("Started flip.");
            this.interactive = false;
            this.flip_counter = 0.0;
            this.ticker.start();
            this.base_scale = this.scale.x;
            this.orig_x = this.x;
            this.orig_y = this.y;
            this.side = (this.side + 1) % this.sides.length;
            this.ticker.add(this.flipLogic);
        };
        this.flipLogic = (delta) => {
            this.flip_counter += this.ticker.elapsedMS * this.ticker.speed;
            var perc = this.flip_counter / this.flip_time;
            //console.log(this.ticker.elapsedMS," - ", this.flip_counter);
            //x
            if (this.flip_slide_x != 0.0) {
                this.x = lerp(this.orig_x, this.orig_x + this.flip_slide_x, perc);
            }
            //rot
            if (this.flip_rotation != 0.0) {
                this.rotation = lerp(0, this.flip_rotation, perc);
            }
            //y
            if (perc <= 0.5) {
                //going up and shrinking
                if (this.flip_slide_y != 0)
                    this.y = lerp(this.orig_y, this.orig_y - this.flip_slide_y, Math.sqrt(perc * 2));
                if (this.flip_scale)
                    this.scale.x = lerp(this.base_scale, 0.1, perc * 2);
            }
            else {
                this.texture = this.sides[this.side];
                //going down and expanding
                if (this.flip_slide_y != 0)
                    this.y = lerp(this.orig_y - this.flip_slide_y, this.orig_y, Math.pow(perc * 2 - 1.0, 2));
                if (this.flip_scale)
                    this.scale.x = lerp(0.1, this.base_scale, perc * 2 - 1.0);
            }
            if (this.flip_counter >= this.flip_time) {
                if (this.flip_scale)
                    this.scale.x = this.base_scale;
                this.rotation = this.flip_rotation;
                this.x = this.orig_x + this.flip_slide_x;
                this.y = this.orig_y;
                this.ticker.remove(this.flipLogic);
                this.ticker.stop();
                this.interactive = true;
                //this.rotation = 0;
            }
        };
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.autoStart = false;
        this.ticker.speed = 1.0;
        this.pivot.x = this.width / 2;
        this.pivot.y = this.height / 2;
        this.sides = [];
        if (texture)
            this.sides.push(texture);
        if (backface)
            this.sides.push(backface);
        this.interactive = true;
        this.on('click', this.flip);
        this.on('tap', this.flip);
    }
}
exports.FlippableSprite = FlippableSprite;
//basic lerp funtion.
function lerp(a1, a2, t) {
    return a1 * (1 - t) + a2 * t;
}
exports.lerp = lerp;
class OutputContent {
}
exports.OutputContent = OutputContent;
class TextImageMixin extends PIXI.Container {
    constructor(contentToPrint) {
        super();
        let last_x = 0;
        let last_y = 0;
        for (var content of contentToPrint) {
            let obj;
            if (content.type == "Text")
                obj = this.createText(content);
            else if (content.type == "Image")
                obj = this.createImage(content);
            else {
                console.warn("TextImageMixin::constructor - Cannot create content of type: ", content.type);
                continue;
            }
            obj.pivot.y = obj.height;
            obj.pivot.x = 0;
            obj.x = last_x;
            obj.y = last_y;
            last_x += obj.width;
            this.addChild(obj);
        }
    }
    createText(content) {
        return new PIXI.Text(content.content, content.options);
    }
    createImage(content) {
        return new PIXI.Sprite(PIXI.Texture.fromImage(content.content));
    }
}
exports.TextImageMixin = TextImageMixin;
class VanishingObject {
    constructor(obj) {
        this.time_to_fade = 10000;
        this.fade_time = 1000;
        this.start_time = 0;
        this.fade_counter = 0;
        this.ticTac = (delta) => {
            this.start_time += this.ticker.elapsedMS;
            if (this.start_time > this.time_to_fade + this.fade_time) {
                this.ticker.stop();
                this.obj.destroy();
            }
            else {
                if (this.start_time > this.time_to_fade) {
                    this.fade_counter += this.ticker.elapsedMS;
                    var alpha = lerp(1.0, 0.0, this.fade_counter / this.fade_time);
                    this.obj.alpha = alpha;
                    this.obj.children.forEach(function (child) {
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
}
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
const PIXI = __webpack_require__(/*! pixi.js */ "pixi.js");
const TOOLS = __webpack_require__(/*! ./support */ "./src/support.ts");
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
class TextImageLevel {
    constructor() {
        this.level_name = "TextImage";
        this.time_to_create = 2000;
        this.counter = 0;
        this.max_font_size = 30;
        this.min_font_size = 12;
        this.content_size = 3;
        this.onTick = () => {
            this.counter += this.ticker.elapsedMS;
            if (this.counter > this.time_to_create) {
                this.createRandom();
                this.counter = 0;
            }
        };
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.autoStart = false;
        this.ticker.stop();
        this.images_name_array = ["pieceWhite_border00.png", "pieceWhite_border01.png", "pieceWhite_border02.png", "pieceWhite_border03.png", "pieceWhite_border04.png", "pieceWhite_border05.png", "pieceWhite_border06.png", "pieceWhite_border07.png", "pieceWhite_border08.png", "pieceWhite_border09.png", "pieceWhite_border10.png", "pieceWhite_border11.png", "pieceWhite_border12.png", "pieceWhite_border13.png", "pieceWhite_border14.png", "pieceWhite_border15.png", "pieceWhite_border16.png", "pieceWhite_border17.png", "pieceWhite_border18.png"];
    }
    createLevel() {
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
    }
    backToMenu() {
        main_1.BaseApp.instance.changeLevel("MainMenu");
    }
    destroyLevel() {
        this.container.destroy({ children: true });
        this.ticker.stop();
    }
    createRandom() {
        let content = [];
        for (let i = 0; i < this.content_size; i++) {
            let chance = Math.random();
            let new_content = new TOOLS.OutputContent();
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
    }
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BpeGktcGFydGljbGVzL2Rpc3QvcGl4aS1wYXJ0aWNsZXMubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzX2xldmVscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbl9tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0aWNsZXNfbGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHRfaW1hZ2VfbGV2ZWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUElYSVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xG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QyxLQUFLLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RixPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxjQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RixnQ0FBZ0M7UUFDaEMsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDRjtBQWpHRCx3Q0FpR0M7Ozs7Ozs7Ozs7OztBQ3JHRCxzQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiLyohXG4gKiBwaXhpLXBhcnRpY2xlcyAtIHYzLjEuMFxuICogQ29tcGlsZWQgV2VkLCAyOSBBdWcgMjAxOCAxNTo0Nzo0NiBVVENcbiAqXG4gKiBwaXhpLXBhcnRpY2xlcyBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKi9cbiFmdW5jdGlvbih0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIGU7ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZS5waXhpUGFydGljbGVzPXQoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLGkscyl7ZnVuY3Rpb24gYShuLG8pe2lmKCFpW25dKXtpZighZVtuXSl7dmFyIGg9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighbyYmaClyZXR1cm4gaChuLCEwKTtpZihyKXJldHVybiByKG4sITApO3ZhciBsPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbitcIidcIik7dGhyb3cgbC5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGx9dmFyIHA9aVtuXT17ZXhwb3J0czp7fX07ZVtuXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbih0KXt2YXIgaT1lW25dWzFdW3RdO3JldHVybiBhKGl8fHQpfSxwLHAuZXhwb3J0cyx0LGUsaSxzKX1yZXR1cm4gaVtuXS5leHBvcnRzfWZvcih2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLG49MDtuPHMubGVuZ3RoO24rKylhKHNbbl0pO3JldHVybiBhfXJldHVybiB0fSgpKHsxOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHM9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShpKSYmKHRbaV09ZVtpXSl9O3JldHVybiBmdW5jdGlvbihlLGkpe2Z1bmN0aW9uIHMoKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLGkpLGUucHJvdG90eXBlPW51bGw9PT1pP09iamVjdC5jcmVhdGUoaSk6KHMucHJvdG90eXBlPWkucHJvdG90eXBlLG5ldyBzKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dChcIi4vUGFydGljbGVcIikscj1QSVhJLlRleHR1cmUsbj1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUpe3ZhciBpPXQuY2FsbCh0aGlzLGUpfHx0aGlzO3JldHVybiBpLnRleHR1cmVzPW51bGwsaS5kdXJhdGlvbj0wLGkuZnJhbWVyYXRlPTAsaS5lbGFwc2VkPTAsaS5sb29wPSExLGl9cmV0dXJuIHMoZSx0KSxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dGhpcy5QYXJ0aWNsZV9pbml0KCksdGhpcy5lbGFwc2VkPTAsdGhpcy5mcmFtZXJhdGU8MCYmKHRoaXMuZHVyYXRpb249dGhpcy5tYXhMaWZlLHRoaXMuZnJhbWVyYXRlPXRoaXMudGV4dHVyZXMubGVuZ3RoL3RoaXMuZHVyYXRpb24pfSxlLnByb3RvdHlwZS5hcHBseUFydD1mdW5jdGlvbih0KXt0aGlzLnRleHR1cmVzPXQudGV4dHVyZXMsdGhpcy5mcmFtZXJhdGU9dC5mcmFtZXJhdGUsdGhpcy5kdXJhdGlvbj10LmR1cmF0aW9uLHRoaXMubG9vcD10Lmxvb3B9LGUucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLlBhcnRpY2xlX3VwZGF0ZSh0KTtpZihlPj0wKXt0aGlzLmVsYXBzZWQrPXQsdGhpcy5lbGFwc2VkPnRoaXMuZHVyYXRpb24mJih0aGlzLmxvb3A/dGhpcy5lbGFwc2VkPXRoaXMuZWxhcHNlZCV0aGlzLmR1cmF0aW9uOnRoaXMuZWxhcHNlZD10aGlzLmR1cmF0aW9uLTFlLTYpO3ZhciBpPXRoaXMuZWxhcHNlZCp0aGlzLmZyYW1lcmF0ZSsxZS03fDA7dGhpcy50ZXh0dXJlPXRoaXMudGV4dHVyZXNbaV18fFBJWEkuVGV4dHVyZS5FTVBUWX1yZXR1cm4gZX0sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuUGFydGljbGVfZGVzdHJveSgpLHRoaXMudGV4dHVyZXM9bnVsbH0sZS5wYXJzZUFydD1mdW5jdGlvbih0KXtmb3IodmFyIGUsaSxzLGEsbixvPVtdLGg9MDtoPHQubGVuZ3RoOysraCl7ZT10W2hdLG9baF09aT17fSxpLnRleHR1cmVzPW49W10scz1lLnRleHR1cmVzO2Zvcih2YXIgbD0wO2w8cy5sZW5ndGg7KytsKWlmKFwic3RyaW5nXCI9PXR5cGVvZihhPXNbbF0pKW4ucHVzaChyLmZyb21JbWFnZShhKSk7ZWxzZSBpZihhIGluc3RhbmNlb2YgciluLnB1c2goYSk7ZWxzZXt2YXIgcD1hLmNvdW50fHwxO2ZvcihhPVwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHR1cmU/ci5mcm9tSW1hZ2UoYS50ZXh0dXJlKTphLnRleHR1cmU7cD4wOy0tcCluLnB1c2goYSl9XCJtYXRjaExpZmVcIj09ZS5mcmFtZXJhdGU/KGkuZnJhbWVyYXRlPS0xLGkuZHVyYXRpb249MCxpLmxvb3A9ITEpOihpLmxvb3A9ISFlLmxvb3AsaS5mcmFtZXJhdGU9ZS5mcmFtZXJhdGU+MD9lLmZyYW1lcmF0ZTo2MCxpLmR1cmF0aW9uPW4ubGVuZ3RoL2kuZnJhbWVyYXRlKX1yZXR1cm4gb30sZX0oYS5kZWZhdWx0KTtpLmRlZmF1bHQ9bn0se1wiLi9QYXJ0aWNsZVwiOjN9XSwyOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9dChcIi4vUGFydGljbGVVdGlsc1wiKSxhPXQoXCIuL1BhcnRpY2xlXCIpLHI9dChcIi4vUHJvcGVydHlOb2RlXCIpLG49UElYSS50aWNrZXIuc2hhcmVkLG89bmV3IFBJWEkuUG9pbnQsaD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLGkpe3RoaXMuX3BhcnRpY2xlQ29uc3RydWN0b3I9YS5kZWZhdWx0LHRoaXMucGFydGljbGVJbWFnZXM9bnVsbCx0aGlzLnN0YXJ0QWxwaGE9bnVsbCx0aGlzLnN0YXJ0U3BlZWQ9bnVsbCx0aGlzLm1pbmltdW1TcGVlZE11bHRpcGxpZXI9MSx0aGlzLmFjY2VsZXJhdGlvbj1udWxsLHRoaXMubWF4U3BlZWQ9TmFOLHRoaXMuc3RhcnRTY2FsZT1udWxsLHRoaXMubWluaW11bVNjYWxlTXVsdGlwbGllcj0xLHRoaXMuc3RhcnRDb2xvcj1udWxsLHRoaXMubWluTGlmZXRpbWU9MCx0aGlzLm1heExpZmV0aW1lPTAsdGhpcy5taW5TdGFydFJvdGF0aW9uPTAsdGhpcy5tYXhTdGFydFJvdGF0aW9uPTAsdGhpcy5ub1JvdGF0aW9uPSExLHRoaXMubWluUm90YXRpb25TcGVlZD0wLHRoaXMubWF4Um90YXRpb25TcGVlZD0wLHRoaXMucGFydGljbGVCbGVuZE1vZGU9MCx0aGlzLmN1c3RvbUVhc2U9bnVsbCx0aGlzLmV4dHJhRGF0YT1udWxsLHRoaXMuX2ZyZXF1ZW5jeT0xLHRoaXMuc3Bhd25DaGFuY2U9MSx0aGlzLm1heFBhcnRpY2xlcz0xZTMsdGhpcy5lbWl0dGVyTGlmZXRpbWU9LTEsdGhpcy5zcGF3blBvcz1udWxsLHRoaXMuc3Bhd25UeXBlPW51bGwsdGhpcy5fc3Bhd25GdW5jPW51bGwsdGhpcy5zcGF3blJlY3Q9bnVsbCx0aGlzLnNwYXduQ2lyY2xlPW51bGwsdGhpcy5wYXJ0aWNsZXNQZXJXYXZlPTEsdGhpcy5wYXJ0aWNsZVNwYWNpbmc9MCx0aGlzLmFuZ2xlU3RhcnQ9MCx0aGlzLnJvdGF0aW9uPTAsdGhpcy5vd25lclBvcz1udWxsLHRoaXMuX3ByZXZFbWl0dGVyUG9zPW51bGwsdGhpcy5fcHJldlBvc0lzVmFsaWQ9ITEsdGhpcy5fcG9zQ2hhbmdlZD0hMSx0aGlzLl9wYXJlbnQ9bnVsbCx0aGlzLmFkZEF0QmFjaz0hMSx0aGlzLnBhcnRpY2xlQ291bnQ9MCx0aGlzLl9lbWl0PSExLHRoaXMuX3NwYXduVGltZXI9MCx0aGlzLl9lbWl0dGVyTGlmZT0tMSx0aGlzLl9hY3RpdmVQYXJ0aWNsZXNGaXJzdD1udWxsLHRoaXMuX2FjdGl2ZVBhcnRpY2xlc0xhc3Q9bnVsbCx0aGlzLl9wb29sRmlyc3Q9bnVsbCx0aGlzLl9vcmlnQ29uZmlnPW51bGwsdGhpcy5fb3JpZ0FydD1udWxsLHRoaXMuX2F1dG9VcGRhdGU9ITEsdGhpcy5fZGVzdHJveVdoZW5Db21wbGV0ZT0hMSx0aGlzLl9jb21wbGV0ZUNhbGxiYWNrPW51bGwsdGhpcy5wYXJlbnQ9dCxlJiZpJiZ0aGlzLmluaXQoZSxpKSx0aGlzLnJlY3ljbGU9dGhpcy5yZWN5Y2xlLHRoaXMudXBkYXRlPXRoaXMudXBkYXRlLHRoaXMucm90YXRlPXRoaXMucm90YXRlLHRoaXMudXBkYXRlU3Bhd25Qb3M9dGhpcy51cGRhdGVTcGF3blBvcyx0aGlzLnVwZGF0ZU93bmVyUG9zPXRoaXMudXBkYXRlT3duZXJQb3N9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImZyZXF1ZW5jeVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZnJlcXVlbmN5fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fZnJlcXVlbmN5PVwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PjA/dDoxfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInBhcnRpY2xlQ29uc3RydWN0b3JcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3BhcnRpY2xlQ29uc3RydWN0b3J9LHNldDpmdW5jdGlvbih0KXtpZih0IT10aGlzLl9wYXJ0aWNsZUNvbnN0cnVjdG9yKXt0aGlzLl9wYXJ0aWNsZUNvbnN0cnVjdG9yPXQsdGhpcy5jbGVhbnVwKCk7Zm9yKHZhciBlPXRoaXMuX3Bvb2xGaXJzdDtlO2U9ZS5uZXh0KWUuZGVzdHJveSgpO3RoaXMuX3Bvb2xGaXJzdD1udWxsLHRoaXMuX29yaWdDb25maWcmJnRoaXMuX29yaWdBcnQmJnRoaXMuaW5pdCh0aGlzLl9vcmlnQXJ0LHRoaXMuX29yaWdDb25maWcpfX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJwYXJlbnRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3BhcmVudH0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuY2xlYW51cCgpLHRoaXMuX3BhcmVudD10fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24odCxlKXtpZih0JiZlKXt0aGlzLmNsZWFudXAoKSx0aGlzLl9vcmlnQ29uZmlnPWUsdGhpcy5fb3JpZ0FydD10LHQ9QXJyYXkuaXNBcnJheSh0KT90LnNsaWNlKCk6W3RdO3ZhciBpPXRoaXMuX3BhcnRpY2xlQ29uc3RydWN0b3I7dGhpcy5wYXJ0aWNsZUltYWdlcz1pLnBhcnNlQXJ0P2kucGFyc2VBcnQodCk6dCxlLmFscGhhP3RoaXMuc3RhcnRBbHBoYT1yLmRlZmF1bHQuY3JlYXRlTGlzdChlLmFscGhhKTp0aGlzLnN0YXJ0QWxwaGE9bmV3IHIuZGVmYXVsdCgxLDApLGUuc3BlZWQ/KHRoaXMuc3RhcnRTcGVlZD1yLmRlZmF1bHQuY3JlYXRlTGlzdChlLnNwZWVkKSx0aGlzLm1pbmltdW1TcGVlZE11bHRpcGxpZXI9ZS5zcGVlZC5taW5pbXVtU3BlZWRNdWx0aXBsaWVyfHwxKToodGhpcy5taW5pbXVtU3BlZWRNdWx0aXBsaWVyPTEsdGhpcy5zdGFydFNwZWVkPW5ldyByLmRlZmF1bHQoMCwwKSk7dmFyIGE9ZS5hY2NlbGVyYXRpb247YSYmKGEueHx8YS55KT8odGhpcy5zdGFydFNwZWVkLm5leHQ9bnVsbCx0aGlzLmFjY2VsZXJhdGlvbj1uZXcgUElYSS5Qb2ludChhLngsYS55KSx0aGlzLm1heFNwZWVkPWUubWF4U3BlZWR8fE5hTik6dGhpcy5hY2NlbGVyYXRpb249bmV3IFBJWEkuUG9pbnQsZS5zY2FsZT8odGhpcy5zdGFydFNjYWxlPXIuZGVmYXVsdC5jcmVhdGVMaXN0KGUuc2NhbGUpLHRoaXMubWluaW11bVNjYWxlTXVsdGlwbGllcj1lLnNjYWxlLm1pbmltdW1TY2FsZU11bHRpcGxpZXJ8fDEpOih0aGlzLnN0YXJ0U2NhbGU9bmV3IHIuZGVmYXVsdCgxLDApLHRoaXMubWluaW11bVNjYWxlTXVsdGlwbGllcj0xKSxlLmNvbG9yP3RoaXMuc3RhcnRDb2xvcj1yLmRlZmF1bHQuY3JlYXRlTGlzdChlLmNvbG9yKTp0aGlzLnN0YXJ0Q29sb3I9bmV3IHIuZGVmYXVsdCh7cjoyNTUsZzoyNTUsYjoyNTV9LDApLGUuc3RhcnRSb3RhdGlvbj8odGhpcy5taW5TdGFydFJvdGF0aW9uPWUuc3RhcnRSb3RhdGlvbi5taW4sdGhpcy5tYXhTdGFydFJvdGF0aW9uPWUuc3RhcnRSb3RhdGlvbi5tYXgpOnRoaXMubWluU3RhcnRSb3RhdGlvbj10aGlzLm1heFN0YXJ0Um90YXRpb249MCxlLm5vUm90YXRpb24mJih0aGlzLm1pblN0YXJ0Um90YXRpb258fHRoaXMubWF4U3RhcnRSb3RhdGlvbik/dGhpcy5ub1JvdGF0aW9uPSEhZS5ub1JvdGF0aW9uOnRoaXMubm9Sb3RhdGlvbj0hMSxlLnJvdGF0aW9uU3BlZWQ/KHRoaXMubWluUm90YXRpb25TcGVlZD1lLnJvdGF0aW9uU3BlZWQubWluLHRoaXMubWF4Um90YXRpb25TcGVlZD1lLnJvdGF0aW9uU3BlZWQubWF4KTp0aGlzLm1pblJvdGF0aW9uU3BlZWQ9dGhpcy5tYXhSb3RhdGlvblNwZWVkPTAsdGhpcy5taW5MaWZldGltZT1lLmxpZmV0aW1lLm1pbix0aGlzLm1heExpZmV0aW1lPWUubGlmZXRpbWUubWF4LHRoaXMucGFydGljbGVCbGVuZE1vZGU9cy5kZWZhdWx0LmdldEJsZW5kTW9kZShlLmJsZW5kTW9kZSksZS5lYXNlP3RoaXMuY3VzdG9tRWFzZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmVhc2U/ZS5lYXNlOnMuZGVmYXVsdC5nZW5lcmF0ZUVhc2UoZS5lYXNlKTp0aGlzLmN1c3RvbUVhc2U9bnVsbCxpLnBhcnNlRGF0YT90aGlzLmV4dHJhRGF0YT1pLnBhcnNlRGF0YShlLmV4dHJhRGF0YSk6dGhpcy5leHRyYURhdGE9ZS5leHRyYURhdGF8fG51bGwsdGhpcy5zcGF3blJlY3Q9dGhpcy5zcGF3bkNpcmNsZT1udWxsLHRoaXMucGFydGljbGVzUGVyV2F2ZT0xLGUucGFydGljbGVzUGVyV2F2ZSYmZS5wYXJ0aWNsZXNQZXJXYXZlPjEmJih0aGlzLnBhcnRpY2xlc1BlcldhdmU9ZS5wYXJ0aWNsZXNQZXJXYXZlKSx0aGlzLnBhcnRpY2xlU3BhY2luZz0wLHRoaXMuYW5nbGVTdGFydD0wO3ZhciBuO3N3aXRjaChlLnNwYXduVHlwZSl7Y2FzZVwicmVjdFwiOnRoaXMuc3Bhd25UeXBlPVwicmVjdFwiLHRoaXMuX3NwYXduRnVuYz10aGlzLl9zcGF3blJlY3Q7dmFyIG89ZS5zcGF3blJlY3Q7dGhpcy5zcGF3blJlY3Q9bmV3IFBJWEkuUmVjdGFuZ2xlKG8ueCxvLnksby53LG8uaCk7YnJlYWs7Y2FzZVwiY2lyY2xlXCI6dGhpcy5zcGF3blR5cGU9XCJjaXJjbGVcIix0aGlzLl9zcGF3bkZ1bmM9dGhpcy5fc3Bhd25DaXJjbGUsbj1lLnNwYXduQ2lyY2xlLHRoaXMuc3Bhd25DaXJjbGU9bmV3IFBJWEkuQ2lyY2xlKG4ueCxuLnksbi5yKTticmVhaztjYXNlXCJyaW5nXCI6dGhpcy5zcGF3blR5cGU9XCJyaW5nXCIsdGhpcy5fc3Bhd25GdW5jPXRoaXMuX3NwYXduUmluZyxuPWUuc3Bhd25DaXJjbGUsdGhpcy5zcGF3bkNpcmNsZT1uZXcgUElYSS5DaXJjbGUobi54LG4ueSxuLnIpLHRoaXMuc3Bhd25DaXJjbGUubWluUmFkaXVzPW4ubWluUjticmVhaztjYXNlXCJidXJzdFwiOnRoaXMuc3Bhd25UeXBlPVwiYnVyc3RcIix0aGlzLl9zcGF3bkZ1bmM9dGhpcy5fc3Bhd25CdXJzdCx0aGlzLnBhcnRpY2xlU3BhY2luZz1lLnBhcnRpY2xlU3BhY2luZyx0aGlzLmFuZ2xlU3RhcnQ9ZS5hbmdsZVN0YXJ0P2UuYW5nbGVTdGFydDowO2JyZWFrO2Nhc2VcInBvaW50XCI6ZGVmYXVsdDp0aGlzLnNwYXduVHlwZT1cInBvaW50XCIsdGhpcy5fc3Bhd25GdW5jPXRoaXMuX3NwYXduUG9pbnR9dGhpcy5mcmVxdWVuY3k9ZS5mcmVxdWVuY3ksdGhpcy5zcGF3bkNoYW5jZT1cIm51bWJlclwiPT10eXBlb2YgZS5zcGF3bkNoYW5jZSYmZS5zcGF3bkNoYW5jZT4wP2Uuc3Bhd25DaGFuY2U6MSx0aGlzLmVtaXR0ZXJMaWZldGltZT1lLmVtaXR0ZXJMaWZldGltZXx8LTEsdGhpcy5tYXhQYXJ0aWNsZXM9ZS5tYXhQYXJ0aWNsZXM+MD9lLm1heFBhcnRpY2xlczoxZTMsdGhpcy5hZGRBdEJhY2s9ISFlLmFkZEF0QmFjayx0aGlzLnJvdGF0aW9uPTAsdGhpcy5vd25lclBvcz1uZXcgUElYSS5Qb2ludCx0aGlzLnNwYXduUG9zPW5ldyBQSVhJLlBvaW50KGUucG9zLngsZS5wb3MueSksdGhpcy5fcHJldkVtaXR0ZXJQb3M9dGhpcy5zcGF3blBvcy5jbG9uZSgpLHRoaXMuX3ByZXZQb3NJc1ZhbGlkPSExLHRoaXMuX3NwYXduVGltZXI9MCx0aGlzLmVtaXQ9dm9pZCAwPT09ZS5lbWl0fHwhIWUuZW1pdCx0aGlzLmF1dG9VcGRhdGU9dm9pZCAwIT09ZS5hdXRvVXBkYXRlJiYhIWUuYXV0b1VwZGF0ZX19LHQucHJvdG90eXBlLnJlY3ljbGU9ZnVuY3Rpb24odCl7dC5uZXh0JiYodC5uZXh0LnByZXY9dC5wcmV2KSx0LnByZXYmJih0LnByZXYubmV4dD10Lm5leHQpLHQ9PXRoaXMuX2FjdGl2ZVBhcnRpY2xlc0xhc3QmJih0aGlzLl9hY3RpdmVQYXJ0aWNsZXNMYXN0PXQucHJldiksdD09dGhpcy5fYWN0aXZlUGFydGljbGVzRmlyc3QmJih0aGlzLl9hY3RpdmVQYXJ0aWNsZXNGaXJzdD10Lm5leHQpLHQucHJldj1udWxsLHQubmV4dD10aGlzLl9wb29sRmlyc3QsdGhpcy5fcG9vbEZpcnN0PXQsdC5wYXJlbnQmJnQucGFyZW50LnJlbW92ZUNoaWxkKHQpLC0tdGhpcy5wYXJ0aWNsZUNvdW50fSx0LnByb3RvdHlwZS5yb3RhdGU9ZnVuY3Rpb24odCl7aWYodGhpcy5yb3RhdGlvbiE9dCl7dmFyIGU9dC10aGlzLnJvdGF0aW9uO3RoaXMucm90YXRpb249dCxzLmRlZmF1bHQucm90YXRlUG9pbnQoZSx0aGlzLnNwYXduUG9zKSx0aGlzLl9wb3NDaGFuZ2VkPSEwfX0sdC5wcm90b3R5cGUudXBkYXRlU3Bhd25Qb3M9ZnVuY3Rpb24odCxlKXt0aGlzLl9wb3NDaGFuZ2VkPSEwLHRoaXMuc3Bhd25Qb3MueD10LHRoaXMuc3Bhd25Qb3MueT1lfSx0LnByb3RvdHlwZS51cGRhdGVPd25lclBvcz1mdW5jdGlvbih0LGUpe3RoaXMuX3Bvc0NoYW5nZWQ9ITAsdGhpcy5vd25lclBvcy54PXQsdGhpcy5vd25lclBvcy55PWV9LHQucHJvdG90eXBlLnJlc2V0UG9zaXRpb25UcmFja2luZz1mdW5jdGlvbigpe3RoaXMuX3ByZXZQb3NJc1ZhbGlkPSExfSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJlbWl0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9lbWl0fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fZW1pdD0hIXQsdGhpcy5fZW1pdHRlckxpZmU9dGhpcy5lbWl0dGVyTGlmZXRpbWV9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiYXV0b1VwZGF0ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYXV0b1VwZGF0ZX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2F1dG9VcGRhdGUmJiF0P24ucmVtb3ZlKHRoaXMudXBkYXRlLHRoaXMpOiF0aGlzLl9hdXRvVXBkYXRlJiZ0JiZuLmFkZCh0aGlzLnVwZGF0ZSx0aGlzKSx0aGlzLl9hdXRvVXBkYXRlPSEhdH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5wbGF5T25jZUFuZERlc3Ryb3k9ZnVuY3Rpb24odCl7dGhpcy5hdXRvVXBkYXRlPSEwLHRoaXMuZW1pdD0hMCx0aGlzLl9kZXN0cm95V2hlbkNvbXBsZXRlPSEwLHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2s9dH0sdC5wcm90b3R5cGUucGxheU9uY2U9ZnVuY3Rpb24odCl7dGhpcy5lbWl0PSEwLHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2s9dH0sdC5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKHQpe2lmKHRoaXMuX2F1dG9VcGRhdGUmJih0PXQvUElYSS5zZXR0aW5ncy5UQVJHRVRfRlBNUy8xZTMpLHRoaXMuX3BhcmVudCl7dmFyIGUsaSxzO2ZvcihpPXRoaXMuX2FjdGl2ZVBhcnRpY2xlc0ZpcnN0O2k7aT1zKXM9aS5uZXh0LGkudXBkYXRlKHQpO3ZhciBhLHI7dGhpcy5fcHJldlBvc0lzVmFsaWQmJihhPXRoaXMuX3ByZXZFbWl0dGVyUG9zLngscj10aGlzLl9wcmV2RW1pdHRlclBvcy55KTt2YXIgbj10aGlzLm93bmVyUG9zLngrdGhpcy5zcGF3blBvcy54LG89dGhpcy5vd25lclBvcy55K3RoaXMuc3Bhd25Qb3MueTtpZih0aGlzLl9lbWl0KWZvcih0aGlzLl9zcGF3blRpbWVyLT10PDA/MDp0O3RoaXMuX3NwYXduVGltZXI8PTA7KXtpZih0aGlzLl9lbWl0dGVyTGlmZT4wJiYodGhpcy5fZW1pdHRlckxpZmUtPXRoaXMuX2ZyZXF1ZW5jeSx0aGlzLl9lbWl0dGVyTGlmZTw9MCkpe3RoaXMuX3NwYXduVGltZXI9MCx0aGlzLl9lbWl0dGVyTGlmZT0wLHRoaXMuZW1pdD0hMTticmVha31pZih0aGlzLnBhcnRpY2xlQ291bnQ+PXRoaXMubWF4UGFydGljbGVzKXRoaXMuX3NwYXduVGltZXIrPXRoaXMuX2ZyZXF1ZW5jeTtlbHNle3ZhciBoPXZvaWQgMDtpZihoPXRoaXMubWluTGlmZXRpbWU9PXRoaXMubWF4TGlmZXRpbWU/dGhpcy5taW5MaWZldGltZTpNYXRoLnJhbmRvbSgpKih0aGlzLm1heExpZmV0aW1lLXRoaXMubWluTGlmZXRpbWUpK3RoaXMubWluTGlmZXRpbWUsLXRoaXMuX3NwYXduVGltZXI8aCl7dmFyIGw9dm9pZCAwLHA9dm9pZCAwO2lmKHRoaXMuX3ByZXZQb3NJc1ZhbGlkJiZ0aGlzLl9wb3NDaGFuZ2VkKXt2YXIgYz0xK3RoaXMuX3NwYXduVGltZXIvdDtsPShuLWEpKmMrYSxwPShvLXIpKmMrcn1lbHNlIGw9bixwPW87ZT0wO2Zvcih2YXIgdT1NYXRoLm1pbih0aGlzLnBhcnRpY2xlc1BlcldhdmUsdGhpcy5tYXhQYXJ0aWNsZXMtdGhpcy5wYXJ0aWNsZUNvdW50KTtlPHU7KytlKWlmKCEodGhpcy5zcGF3bkNoYW5jZTwxJiZNYXRoLnJhbmRvbSgpPj10aGlzLnNwYXduQ2hhbmNlKSl7dmFyIGQ9dm9pZCAwO2lmKHRoaXMuX3Bvb2xGaXJzdD8oZD10aGlzLl9wb29sRmlyc3QsdGhpcy5fcG9vbEZpcnN0PXRoaXMuX3Bvb2xGaXJzdC5uZXh0LGQubmV4dD1udWxsKTpkPW5ldyB0aGlzLnBhcnRpY2xlQ29uc3RydWN0b3IodGhpcyksdGhpcy5wYXJ0aWNsZUltYWdlcy5sZW5ndGg+MT9kLmFwcGx5QXJ0KHRoaXMucGFydGljbGVJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMucGFydGljbGVJbWFnZXMubGVuZ3RoKV0pOmQuYXBwbHlBcnQodGhpcy5wYXJ0aWNsZUltYWdlc1swXSksZC5hbHBoYUxpc3QucmVzZXQodGhpcy5zdGFydEFscGhhKSwxIT10aGlzLm1pbmltdW1TcGVlZE11bHRpcGxpZXImJihkLnNwZWVkTXVsdGlwbGllcj1NYXRoLnJhbmRvbSgpKigxLXRoaXMubWluaW11bVNwZWVkTXVsdGlwbGllcikrdGhpcy5taW5pbXVtU3BlZWRNdWx0aXBsaWVyKSxkLnNwZWVkTGlzdC5yZXNldCh0aGlzLnN0YXJ0U3BlZWQpLGQuYWNjZWxlcmF0aW9uLng9dGhpcy5hY2NlbGVyYXRpb24ueCxkLmFjY2VsZXJhdGlvbi55PXRoaXMuYWNjZWxlcmF0aW9uLnksZC5tYXhTcGVlZD10aGlzLm1heFNwZWVkLDEhPXRoaXMubWluaW11bVNjYWxlTXVsdGlwbGllciYmKGQuc2NhbGVNdWx0aXBsaWVyPU1hdGgucmFuZG9tKCkqKDEtdGhpcy5taW5pbXVtU2NhbGVNdWx0aXBsaWVyKSt0aGlzLm1pbmltdW1TY2FsZU11bHRpcGxpZXIpLGQuc2NhbGVMaXN0LnJlc2V0KHRoaXMuc3RhcnRTY2FsZSksZC5jb2xvckxpc3QucmVzZXQodGhpcy5zdGFydENvbG9yKSx0aGlzLm1pblJvdGF0aW9uU3BlZWQ9PXRoaXMubWF4Um90YXRpb25TcGVlZD9kLnJvdGF0aW9uU3BlZWQ9dGhpcy5taW5Sb3RhdGlvblNwZWVkOmQucm90YXRpb25TcGVlZD1NYXRoLnJhbmRvbSgpKih0aGlzLm1heFJvdGF0aW9uU3BlZWQtdGhpcy5taW5Sb3RhdGlvblNwZWVkKSt0aGlzLm1pblJvdGF0aW9uU3BlZWQsZC5ub1JvdGF0aW9uPXRoaXMubm9Sb3RhdGlvbixkLm1heExpZmU9aCxkLmJsZW5kTW9kZT10aGlzLnBhcnRpY2xlQmxlbmRNb2RlLGQuZWFzZT10aGlzLmN1c3RvbUVhc2UsZC5leHRyYURhdGE9dGhpcy5leHRyYURhdGEsdGhpcy5fc3Bhd25GdW5jKGQsbCxwLGUpLGQuaW5pdCgpLGQudXBkYXRlKC10aGlzLl9zcGF3blRpbWVyKSxkLnBhcmVudCl7dmFyIGY9dGhpcy5fcGFyZW50LmNoaWxkcmVuO2lmKGZbMF09PWQpZi5zaGlmdCgpO2Vsc2UgaWYoZltmLmxlbmd0aC0xXT09ZClmLnBvcCgpO2Vsc2V7dmFyIG09Zi5pbmRleE9mKGQpO2Yuc3BsaWNlKG0sMSl9dGhpcy5hZGRBdEJhY2s/Zi51bnNoaWZ0KGQpOmYucHVzaChkKX1lbHNlIHRoaXMuYWRkQXRCYWNrP3RoaXMuX3BhcmVudC5hZGRDaGlsZEF0KGQsMCk6dGhpcy5fcGFyZW50LmFkZENoaWxkKGQpO3RoaXMuX2FjdGl2ZVBhcnRpY2xlc0xhc3Q/KHRoaXMuX2FjdGl2ZVBhcnRpY2xlc0xhc3QubmV4dD1kLGQucHJldj10aGlzLl9hY3RpdmVQYXJ0aWNsZXNMYXN0LHRoaXMuX2FjdGl2ZVBhcnRpY2xlc0xhc3Q9ZCk6dGhpcy5fYWN0aXZlUGFydGljbGVzTGFzdD10aGlzLl9hY3RpdmVQYXJ0aWNsZXNGaXJzdD1kLCsrdGhpcy5wYXJ0aWNsZUNvdW50fX10aGlzLl9zcGF3blRpbWVyKz10aGlzLl9mcmVxdWVuY3l9fXRoaXMuX3Bvc0NoYW5nZWQmJih0aGlzLl9wcmV2RW1pdHRlclBvcy54PW4sdGhpcy5fcHJldkVtaXR0ZXJQb3MueT1vLHRoaXMuX3ByZXZQb3NJc1ZhbGlkPSEwLHRoaXMuX3Bvc0NoYW5nZWQ9ITEpLHRoaXMuX2VtaXR8fHRoaXMuX2FjdGl2ZVBhcnRpY2xlc0ZpcnN0fHwodGhpcy5fY29tcGxldGVDYWxsYmFjayYmdGhpcy5fY29tcGxldGVDYWxsYmFjaygpLHRoaXMuX2Rlc3Ryb3lXaGVuQ29tcGxldGUmJnRoaXMuZGVzdHJveSgpKX19LHQucHJvdG90eXBlLl9zcGF3blBvaW50PWZ1bmN0aW9uKHQsZSxpKXt0aGlzLm1pblN0YXJ0Um90YXRpb249PXRoaXMubWF4U3RhcnRSb3RhdGlvbj90LnJvdGF0aW9uPXRoaXMubWluU3RhcnRSb3RhdGlvbit0aGlzLnJvdGF0aW9uOnQucm90YXRpb249TWF0aC5yYW5kb20oKSoodGhpcy5tYXhTdGFydFJvdGF0aW9uLXRoaXMubWluU3RhcnRSb3RhdGlvbikrdGhpcy5taW5TdGFydFJvdGF0aW9uK3RoaXMucm90YXRpb24sdC5wb3NpdGlvbi54PWUsdC5wb3NpdGlvbi55PWl9LHQucHJvdG90eXBlLl9zcGF3blJlY3Q9ZnVuY3Rpb24odCxlLGkpe3RoaXMubWluU3RhcnRSb3RhdGlvbj09dGhpcy5tYXhTdGFydFJvdGF0aW9uP3Qucm90YXRpb249dGhpcy5taW5TdGFydFJvdGF0aW9uK3RoaXMucm90YXRpb246dC5yb3RhdGlvbj1NYXRoLnJhbmRvbSgpKih0aGlzLm1heFN0YXJ0Um90YXRpb24tdGhpcy5taW5TdGFydFJvdGF0aW9uKSt0aGlzLm1pblN0YXJ0Um90YXRpb24rdGhpcy5yb3RhdGlvbixvLng9TWF0aC5yYW5kb20oKSp0aGlzLnNwYXduUmVjdC53aWR0aCt0aGlzLnNwYXduUmVjdC54LG8ueT1NYXRoLnJhbmRvbSgpKnRoaXMuc3Bhd25SZWN0LmhlaWdodCt0aGlzLnNwYXduUmVjdC55LDAhPT10aGlzLnJvdGF0aW9uJiZzLmRlZmF1bHQucm90YXRlUG9pbnQodGhpcy5yb3RhdGlvbixvKSx0LnBvc2l0aW9uLng9ZStvLngsdC5wb3NpdGlvbi55PWkrby55fSx0LnByb3RvdHlwZS5fc3Bhd25DaXJjbGU9ZnVuY3Rpb24odCxlLGkpe3RoaXMubWluU3RhcnRSb3RhdGlvbj09dGhpcy5tYXhTdGFydFJvdGF0aW9uP3Qucm90YXRpb249dGhpcy5taW5TdGFydFJvdGF0aW9uK3RoaXMucm90YXRpb246dC5yb3RhdGlvbj1NYXRoLnJhbmRvbSgpKih0aGlzLm1heFN0YXJ0Um90YXRpb24tdGhpcy5taW5TdGFydFJvdGF0aW9uKSt0aGlzLm1pblN0YXJ0Um90YXRpb24rdGhpcy5yb3RhdGlvbixvLng9TWF0aC5yYW5kb20oKSp0aGlzLnNwYXduQ2lyY2xlLnJhZGl1cyxvLnk9MCxzLmRlZmF1bHQucm90YXRlUG9pbnQoMzYwKk1hdGgucmFuZG9tKCksbyksby54Kz10aGlzLnNwYXduQ2lyY2xlLngsby55Kz10aGlzLnNwYXduQ2lyY2xlLnksMCE9PXRoaXMucm90YXRpb24mJnMuZGVmYXVsdC5yb3RhdGVQb2ludCh0aGlzLnJvdGF0aW9uLG8pLHQucG9zaXRpb24ueD1lK28ueCx0LnBvc2l0aW9uLnk9aStvLnl9LHQucHJvdG90eXBlLl9zcGF3blJpbmc9ZnVuY3Rpb24odCxlLGkpe3ZhciBhPXRoaXMuc3Bhd25DaXJjbGU7dGhpcy5taW5TdGFydFJvdGF0aW9uPT10aGlzLm1heFN0YXJ0Um90YXRpb24/dC5yb3RhdGlvbj10aGlzLm1pblN0YXJ0Um90YXRpb24rdGhpcy5yb3RhdGlvbjp0LnJvdGF0aW9uPU1hdGgucmFuZG9tKCkqKHRoaXMubWF4U3RhcnRSb3RhdGlvbi10aGlzLm1pblN0YXJ0Um90YXRpb24pK3RoaXMubWluU3RhcnRSb3RhdGlvbit0aGlzLnJvdGF0aW9uLGEubWluUmFkaXVzIT09YS5yYWRpdXM/by54PU1hdGgucmFuZG9tKCkqKGEucmFkaXVzLWEubWluUmFkaXVzKSthLm1pblJhZGl1czpvLng9YS5yYWRpdXMsby55PTA7dmFyIHI9MzYwKk1hdGgucmFuZG9tKCk7dC5yb3RhdGlvbis9cixzLmRlZmF1bHQucm90YXRlUG9pbnQocixvKSxvLngrPXRoaXMuc3Bhd25DaXJjbGUueCxvLnkrPXRoaXMuc3Bhd25DaXJjbGUueSwwIT09dGhpcy5yb3RhdGlvbiYmcy5kZWZhdWx0LnJvdGF0ZVBvaW50KHRoaXMucm90YXRpb24sbyksdC5wb3NpdGlvbi54PWUrby54LHQucG9zaXRpb24ueT1pK28ueX0sdC5wcm90b3R5cGUuX3NwYXduQnVyc3Q9ZnVuY3Rpb24odCxlLGkscyl7MD09PXRoaXMucGFydGljbGVTcGFjaW5nP3Qucm90YXRpb249MzYwKk1hdGgucmFuZG9tKCk6dC5yb3RhdGlvbj10aGlzLmFuZ2xlU3RhcnQrdGhpcy5wYXJ0aWNsZVNwYWNpbmcqcyt0aGlzLnJvdGF0aW9uLHQucG9zaXRpb24ueD1lLHQucG9zaXRpb24ueT1pfSx0LnByb3RvdHlwZS5jbGVhbnVwPWZ1bmN0aW9uKCl7dmFyIHQsZTtmb3IodD10aGlzLl9hY3RpdmVQYXJ0aWNsZXNGaXJzdDt0O3Q9ZSllPXQubmV4dCx0aGlzLnJlY3ljbGUodCksdC5wYXJlbnQmJnQucGFyZW50LnJlbW92ZUNoaWxkKHQpO3RoaXMuX2FjdGl2ZVBhcnRpY2xlc0ZpcnN0PXRoaXMuX2FjdGl2ZVBhcnRpY2xlc0xhc3Q9bnVsbCx0aGlzLnBhcnRpY2xlQ291bnQ9MH0sdC5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuYXV0b1VwZGF0ZT0hMSx0aGlzLmNsZWFudXAoKTtmb3IodmFyIHQsZT10aGlzLl9wb29sRmlyc3Q7ZTtlPXQpdD1lLm5leHQsZS5kZXN0cm95KCk7dGhpcy5fcG9vbEZpcnN0PXRoaXMuX3BhcmVudD10aGlzLnBhcnRpY2xlSW1hZ2VzPXRoaXMuc3Bhd25Qb3M9dGhpcy5vd25lclBvcz10aGlzLnN0YXJ0Q29sb3I9dGhpcy5zdGFydFNjYWxlPXRoaXMuc3RhcnRBbHBoYT10aGlzLnN0YXJ0U3BlZWQ9dGhpcy5jdXN0b21FYXNlPXRoaXMuX2NvbXBsZXRlQ2FsbGJhY2s9bnVsbH0sdH0oKTtpLmRlZmF1bHQ9aH0se1wiLi9QYXJ0aWNsZVwiOjMsXCIuL1BhcnRpY2xlVXRpbHNcIjo0LFwiLi9Qcm9wZXJ0eU5vZGVcIjo3fV0sMzpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO3ZhciBzPXRoaXMmJnRoaXMuX19leHRlbmRzfHxmdW5jdGlvbigpe3ZhciB0PU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJih0W2ldPWVbaV0pfTtyZXR1cm4gZnVuY3Rpb24oZSxpKXtmdW5jdGlvbiBzKCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXQoZSxpKSxlLnByb3RvdHlwZT1udWxsPT09aT9PYmplY3QuY3JlYXRlKGkpOihzLnByb3RvdHlwZT1pLnByb3RvdHlwZSxuZXcgcyl9fSgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPXQoXCIuL1BhcnRpY2xlVXRpbHNcIikscj10KFwiLi9Qcm9wZXJ0eUxpc3RcIiksbj1QSVhJLlNwcml0ZSxvPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoaSl7dmFyIHM9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBzLmVtaXR0ZXI9aSxzLmFuY2hvci54PXMuYW5jaG9yLnk9LjUscy52ZWxvY2l0eT1uZXcgUElYSS5Qb2ludCxzLm1heExpZmU9MCxzLmFnZT0wLHMuZWFzZT1udWxsLHMuZXh0cmFEYXRhPW51bGwscy5hbHBoYUxpc3Q9bmV3IHIuZGVmYXVsdCxzLnNwZWVkTGlzdD1uZXcgci5kZWZhdWx0LHMuc3BlZWRNdWx0aXBsaWVyPTEscy5hY2NlbGVyYXRpb249bmV3IFBJWEkuUG9pbnQscy5tYXhTcGVlZD1OYU4scy5zY2FsZUxpc3Q9bmV3IHIuZGVmYXVsdCxzLnNjYWxlTXVsdGlwbGllcj0xLHMuY29sb3JMaXN0PW5ldyByLmRlZmF1bHQoITApLHMuX2RvQWxwaGE9ITEscy5fZG9TY2FsZT0hMSxzLl9kb1NwZWVkPSExLHMuX2RvQWNjZWxlcmF0aW9uPSExLHMuX2RvQ29sb3I9ITEscy5fZG9Ob3JtYWxNb3ZlbWVudD0hMSxzLl9vbmVPdmVyTGlmZT0wLHMubmV4dD1udWxsLHMucHJldj1udWxsLHMuaW5pdD1zLmluaXQscy5QYXJ0aWNsZV9pbml0PWUucHJvdG90eXBlLmluaXQscy51cGRhdGU9cy51cGRhdGUscy5QYXJ0aWNsZV91cGRhdGU9ZS5wcm90b3R5cGUudXBkYXRlLHMuU3ByaXRlX2Rlc3Ryb3k9dC5wcm90b3R5cGUuZGVzdHJveSxzLlBhcnRpY2xlX2Rlc3Ryb3k9ZS5wcm90b3R5cGUuZGVzdHJveSxzLmFwcGx5QXJ0PXMuYXBwbHlBcnQscy5raWxsPXMua2lsbCxzfXJldHVybiBzKGUsdCksZS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3RoaXMuYWdlPTAsdGhpcy52ZWxvY2l0eS54PXRoaXMuc3BlZWRMaXN0LmN1cnJlbnQudmFsdWUqdGhpcy5zcGVlZE11bHRpcGxpZXIsdGhpcy52ZWxvY2l0eS55PTAsYS5kZWZhdWx0LnJvdGF0ZVBvaW50KHRoaXMucm90YXRpb24sdGhpcy52ZWxvY2l0eSksdGhpcy5ub1JvdGF0aW9uP3RoaXMucm90YXRpb249MDp0aGlzLnJvdGF0aW9uKj1hLmRlZmF1bHQuREVHX1RPX1JBRFMsdGhpcy5yb3RhdGlvblNwZWVkKj1hLmRlZmF1bHQuREVHX1RPX1JBRFMsdGhpcy5hbHBoYT10aGlzLmFscGhhTGlzdC5jdXJyZW50LnZhbHVlLHRoaXMuc2NhbGUueD10aGlzLnNjYWxlLnk9dGhpcy5zY2FsZUxpc3QuY3VycmVudC52YWx1ZSx0aGlzLl9kb0FscGhhPSEhdGhpcy5hbHBoYUxpc3QuY3VycmVudC5uZXh0LHRoaXMuX2RvU3BlZWQ9ISF0aGlzLnNwZWVkTGlzdC5jdXJyZW50Lm5leHQsdGhpcy5fZG9TY2FsZT0hIXRoaXMuc2NhbGVMaXN0LmN1cnJlbnQubmV4dCx0aGlzLl9kb0NvbG9yPSEhdGhpcy5jb2xvckxpc3QuY3VycmVudC5uZXh0LHRoaXMuX2RvQWNjZWxlcmF0aW9uPTAhPT10aGlzLmFjY2VsZXJhdGlvbi54fHwwIT09dGhpcy5hY2NlbGVyYXRpb24ueSx0aGlzLl9kb05vcm1hbE1vdmVtZW50PXRoaXMuX2RvU3BlZWR8fDAhPT10aGlzLnNwZWVkTGlzdC5jdXJyZW50LnZhbHVlfHx0aGlzLl9kb0FjY2VsZXJhdGlvbix0aGlzLl9vbmVPdmVyTGlmZT0xL3RoaXMubWF4TGlmZTt2YXIgdD10aGlzLmNvbG9yTGlzdC5jdXJyZW50LnZhbHVlO3RoaXMudGludD1hLmRlZmF1bHQuY29tYmluZVJHQkNvbXBvbmVudHModC5yLHQuZyx0LmIpLHRoaXMudmlzaWJsZT0hMH0sZS5wcm90b3R5cGUuYXBwbHlBcnQ9ZnVuY3Rpb24odCl7dGhpcy50ZXh0dXJlPXR8fFBJWEkuVGV4dHVyZS5FTVBUWX0sZS5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKHQpe2lmKHRoaXMuYWdlKz10LHRoaXMuYWdlPj10aGlzLm1heExpZmV8fHRoaXMuYWdlPDApcmV0dXJuIHRoaXMua2lsbCgpLC0xO3ZhciBlPXRoaXMuYWdlKnRoaXMuX29uZU92ZXJMaWZlO2lmKHRoaXMuZWFzZSYmKGU9ND09dGhpcy5lYXNlLmxlbmd0aD90aGlzLmVhc2UoZSwwLDEsMSk6dGhpcy5lYXNlKGUpKSx0aGlzLl9kb0FscGhhJiYodGhpcy5hbHBoYT10aGlzLmFscGhhTGlzdC5pbnRlcnBvbGF0ZShlKSksdGhpcy5fZG9TY2FsZSl7dmFyIGk9dGhpcy5zY2FsZUxpc3QuaW50ZXJwb2xhdGUoZSkqdGhpcy5zY2FsZU11bHRpcGxpZXI7dGhpcy5zY2FsZS54PXRoaXMuc2NhbGUueT1pfWlmKHRoaXMuX2RvTm9ybWFsTW92ZW1lbnQpe2lmKHRoaXMuX2RvU3BlZWQpe3ZhciBzPXRoaXMuc3BlZWRMaXN0LmludGVycG9sYXRlKGUpKnRoaXMuc3BlZWRNdWx0aXBsaWVyO2EuZGVmYXVsdC5ub3JtYWxpemUodGhpcy52ZWxvY2l0eSksYS5kZWZhdWx0LnNjYWxlQnkodGhpcy52ZWxvY2l0eSxzKX1lbHNlIGlmKHRoaXMuX2RvQWNjZWxlcmF0aW9uJiYodGhpcy52ZWxvY2l0eS54Kz10aGlzLmFjY2VsZXJhdGlvbi54KnQsdGhpcy52ZWxvY2l0eS55Kz10aGlzLmFjY2VsZXJhdGlvbi55KnQsdGhpcy5tYXhTcGVlZCkpe3ZhciByPWEuZGVmYXVsdC5sZW5ndGgodGhpcy52ZWxvY2l0eSk7cj50aGlzLm1heFNwZWVkJiZhLmRlZmF1bHQuc2NhbGVCeSh0aGlzLnZlbG9jaXR5LHRoaXMubWF4U3BlZWQvcil9dGhpcy5wb3NpdGlvbi54Kz10aGlzLnZlbG9jaXR5LngqdCx0aGlzLnBvc2l0aW9uLnkrPXRoaXMudmVsb2NpdHkueSp0fXJldHVybiB0aGlzLl9kb0NvbG9yJiYodGhpcy50aW50PXRoaXMuY29sb3JMaXN0LmludGVycG9sYXRlKGUpKSwwIT09dGhpcy5yb3RhdGlvblNwZWVkP3RoaXMucm90YXRpb24rPXRoaXMucm90YXRpb25TcGVlZCp0OnRoaXMuYWNjZWxlcmF0aW9uJiYhdGhpcy5ub1JvdGF0aW9uJiYodGhpcy5yb3RhdGlvbj1NYXRoLmF0YW4yKHRoaXMudmVsb2NpdHkueSx0aGlzLnZlbG9jaXR5LngpKSxlfSxlLnByb3RvdHlwZS5raWxsPWZ1bmN0aW9uKCl7dGhpcy5lbWl0dGVyLnJlY3ljbGUodGhpcyl9LGUucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyksdGhpcy5TcHJpdGVfZGVzdHJveSgpLHRoaXMuZW1pdHRlcj10aGlzLnZlbG9jaXR5PXRoaXMuY29sb3JMaXN0PXRoaXMuc2NhbGVMaXN0PXRoaXMuYWxwaGFMaXN0PXRoaXMuc3BlZWRMaXN0PXRoaXMuZWFzZT10aGlzLm5leHQ9dGhpcy5wcmV2PW51bGx9LGUucGFyc2VBcnQ9ZnVuY3Rpb24odCl7dmFyIGU7Zm9yKGU9dC5sZW5ndGg7ZT49MDstLWUpXCJzdHJpbmdcIj09dHlwZW9mIHRbZV0mJih0W2VdPVBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UodFtlXSkpO2lmKGEuZGVmYXVsdC52ZXJib3NlKWZvcihlPXQubGVuZ3RoLTE7ZT4wOy0tZSlpZih0W2VdLmJhc2VUZXh0dXJlIT10W2UtMV0uYmFzZVRleHR1cmUpe3dpbmRvdy5jb25zb2xlJiZjb25zb2xlLndhcm4oXCJQaXhpUGFydGljbGVzOiB1c2luZyBwYXJ0aWNsZSB0ZXh0dXJlcyBmcm9tIGRpZmZlcmVudCBpbWFnZXMgbWF5IGhpbmRlciBwZXJmb3JtYW5jZSBpbiBXZWJHTFwiKTticmVha31yZXR1cm4gdH0sZS5wYXJzZURhdGE9ZnVuY3Rpb24odCl7cmV0dXJuIHR9LGV9KG4pO2kuZGVmYXVsdD1vfSx7XCIuL1BhcnRpY2xlVXRpbHNcIjo0LFwiLi9Qcm9wZXJ0eUxpc3RcIjo2fV0sNDpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPVBJWEkuQkxFTkRfTU9ERVMsYT10KFwiLi9Qcm9wZXJ0eU5vZGVcIikscj17dmVyYm9zZTohMSxERUdfVE9fUkFEUzpNYXRoLlBJLzE4MCxyb3RhdGVQb2ludDpmdW5jdGlvbih0LGUpe2lmKHQpe3QqPXIuREVHX1RPX1JBRFM7dmFyIGk9TWF0aC5zaW4odCkscz1NYXRoLmNvcyh0KSxhPWUueCpzLWUueSppLG49ZS54KmkrZS55KnM7ZS54PWEsZS55PW59fSxjb21iaW5lUkdCQ29tcG9uZW50czpmdW5jdGlvbih0LGUsaSl7cmV0dXJuIHQ8PDE2fGU8PDh8aX0sbm9ybWFsaXplOmZ1bmN0aW9uKHQpe3ZhciBlPTEvci5sZW5ndGgodCk7dC54Kj1lLHQueSo9ZX0sc2NhbGVCeTpmdW5jdGlvbih0LGUpe3QueCo9ZSx0LnkqPWV9LGxlbmd0aDpmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5zcXJ0KHQueCp0LngrdC55KnQueSl9LGhleFRvUkdCOmZ1bmN0aW9uKHQsZSl7ZXx8KGU9e30pLFwiI1wiPT10LmNoYXJBdCgwKT90PXQuc3Vic3RyKDEpOjA9PT10LmluZGV4T2YoXCIweFwiKSYmKHQ9dC5zdWJzdHIoMikpO3ZhciBpO3JldHVybiA4PT10Lmxlbmd0aCYmKGk9dC5zdWJzdHIoMCwyKSx0PXQuc3Vic3RyKDIpKSxlLnI9cGFyc2VJbnQodC5zdWJzdHIoMCwyKSwxNiksZS5nPXBhcnNlSW50KHQuc3Vic3RyKDIsMiksMTYpLGUuYj1wYXJzZUludCh0LnN1YnN0cig0LDIpLDE2KSxpJiYoZS5hPXBhcnNlSW50KGksMTYpKSxlfSxnZW5lcmF0ZUVhc2U6ZnVuY3Rpb24odCl7dmFyIGU9dC5sZW5ndGgsaT0xL2U7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciBhLHIsbj1lKnN8MDtyZXR1cm4gYT0ocy1uKmkpKmUscj10W25dfHx0W2UtMV0sci5zK2EqKDIqKDEtYSkqKHIuY3Atci5zKSthKihyLmUtci5zKSl9fSxnZXRCbGVuZE1vZGU6ZnVuY3Rpb24odCl7aWYoIXQpcmV0dXJuIHMuTk9STUFMO2Zvcih0PXQudG9VcHBlckNhc2UoKTt0LmluZGV4T2YoXCIgXCIpPj0wOyl0PXQucmVwbGFjZShcIiBcIixcIl9cIik7cmV0dXJuIHNbdF18fHMuTk9STUFMfSxjcmVhdGVTdGVwcGVkR3JhZGllbnQ6ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT1lJiYoZT0xMCksKFwibnVtYmVyXCIhPXR5cGVvZiBlfHxlPD0wKSYmKGU9MTApO3ZhciBpPW5ldyBhLmRlZmF1bHQodFswXS52YWx1ZSx0WzBdLnRpbWUpO2kuaXNTdGVwcGVkPSEwO2Zvcih2YXIgcz1pLG49dFswXSxvPTEsaD10W29dLGw9MTtsPGU7KytsKXtmb3IodmFyIHA9bC9lO3A+aC50aW1lOyluPWgsaD10Wysrb107cD0ocC1uLnRpbWUpLyhoLnRpbWUtbi50aW1lKTt2YXIgYz1yLmhleFRvUkdCKG4udmFsdWUpLHU9ci5oZXhUb1JHQihoLnZhbHVlKSxkPXt9O2Qucj0odS5yLWMucikqcCtjLnIsZC5nPSh1LmctYy5nKSpwK2MuZyxkLmI9KHUuYi1jLmIpKnArYy5iLHMubmV4dD1uZXcgYS5kZWZhdWx0KGQsbC9lKSxzPXMubmV4dH1yZXR1cm4gaX19O2kuZGVmYXVsdD1yfSx7XCIuL1Byb3BlcnR5Tm9kZVwiOjd9XSw1OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHM9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShpKSYmKHRbaV09ZVtpXSl9O3JldHVybiBmdW5jdGlvbihlLGkpe2Z1bmN0aW9uIHMoKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLGkpLGUucHJvdG90eXBlPW51bGw9PT1pP09iamVjdC5jcmVhdGUoaSk6KHMucHJvdG90eXBlPWkucHJvdG90eXBlLG5ldyBzKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dChcIi4vUGFydGljbGVVdGlsc1wiKSxyPXQoXCIuL1BhcnRpY2xlXCIpLG49bmV3IFBJWEkuUG9pbnQsbz1bXCJwb3dcIixcInNxcnRcIixcImFic1wiLFwiZmxvb3JcIixcInJvdW5kXCIsXCJjZWlsXCIsXCJFXCIsXCJQSVwiLFwic2luXCIsXCJjb3NcIixcInRhblwiLFwiYXNpblwiLFwiYWNvc1wiLFwiYXRhblwiLFwiYXRhbjJcIixcImxvZ1wiXSxoPW5ldyBSZWdFeHAoW1wiWzAxMjM0NTY3ODkwXFxcXC5cXFxcKlxcXFwtXFxcXCtcXFxcL1xcXFwoXFxcXCl4ICxdXCJdLmNvbmNhdChvKS5qb2luKFwifFwiKSxcImdcIiksbD1mdW5jdGlvbih0KXtmb3IodmFyIGU9dC5tYXRjaChoKSxpPWUubGVuZ3RoLTE7aT49MDstLWkpby5pbmRleE9mKGVbaV0pPj0wJiYoZVtpXT1cIk1hdGguXCIrZVtpXSk7cmV0dXJuIHQ9ZS5qb2luKFwiXCIpLG5ldyBGdW5jdGlvbihcInhcIixcInJldHVybiBcIit0K1wiO1wiKX0scD1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUpe3ZhciBpPXQuY2FsbCh0aGlzLGUpfHx0aGlzO3JldHVybiBpLnBhdGg9bnVsbCxpLmluaXRpYWxSb3RhdGlvbj0wLGkuaW5pdGlhbFBvc2l0aW9uPW5ldyBQSVhJLlBvaW50LGkubW92ZW1lbnQ9MCxpfXJldHVybiBzKGUsdCksZS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3RoaXMuaW5pdGlhbFJvdGF0aW9uPXRoaXMucm90YXRpb24sdGhpcy5QYXJ0aWNsZV9pbml0KCksdGhpcy5wYXRoPXRoaXMuZXh0cmFEYXRhLnBhdGgsdGhpcy5fZG9Ob3JtYWxNb3ZlbWVudD0hdGhpcy5wYXRoLHRoaXMubW92ZW1lbnQ9MCx0aGlzLmluaXRpYWxQb3NpdGlvbi54PXRoaXMucG9zaXRpb24ueCx0aGlzLmluaXRpYWxQb3NpdGlvbi55PXRoaXMucG9zaXRpb24ueX0sZS5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuUGFydGljbGVfdXBkYXRlKHQpO2lmKGU+PTAmJnRoaXMucGF0aCl7dmFyIGk9dGhpcy5zcGVlZExpc3QuaW50ZXJwb2xhdGUoZSkqdGhpcy5zcGVlZE11bHRpcGxpZXI7dGhpcy5tb3ZlbWVudCs9aSp0LG4ueD10aGlzLm1vdmVtZW50LG4ueT10aGlzLnBhdGgodGhpcy5tb3ZlbWVudCksYS5kZWZhdWx0LnJvdGF0ZVBvaW50KHRoaXMuaW5pdGlhbFJvdGF0aW9uLG4pLHRoaXMucG9zaXRpb24ueD10aGlzLmluaXRpYWxQb3NpdGlvbi54K24ueCx0aGlzLnBvc2l0aW9uLnk9dGhpcy5pbml0aWFsUG9zaXRpb24ueStuLnl9cmV0dXJuIGV9LGUucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLlBhcnRpY2xlX2Rlc3Ryb3koKSx0aGlzLnBhdGg9dGhpcy5pbml0aWFsUG9zaXRpb249bnVsbH0sZS5wYXJzZUFydD1mdW5jdGlvbih0KXtyZXR1cm4gci5kZWZhdWx0LnBhcnNlQXJ0KHQpfSxlLnBhcnNlRGF0YT1mdW5jdGlvbih0KXt2YXIgZT17fTtpZih0JiZ0LnBhdGgpdHJ5e2UucGF0aD1sKHQucGF0aCl9Y2F0Y2godCl7YS5kZWZhdWx0LnZlcmJvc2UmJmNvbnNvbGUuZXJyb3IoXCJQYXRoUGFydGljbGU6IGVycm9yIGluIHBhcnNpbmcgcGF0aCBleHByZXNzaW9uXCIpLGUucGF0aD1udWxsfWVsc2UgYS5kZWZhdWx0LnZlcmJvc2UmJmNvbnNvbGUuZXJyb3IoXCJQYXRoUGFydGljbGUgcmVxdWlyZXMgYSBwYXRoIHN0cmluZyBpbiBleHRyYURhdGEhXCIpLGUucGF0aD1udWxsO3JldHVybiBlfSxlfShyLmRlZmF1bHQpO2kuZGVmYXVsdD1wfSx7XCIuL1BhcnRpY2xlXCI6MyxcIi4vUGFydGljbGVVdGlsc1wiOjR9XSw2OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyh0KXtyZXR1cm4gdGhpcy5lYXNlJiYodD10aGlzLmVhc2UodCkpLCh0aGlzLm5leHQudmFsdWUtdGhpcy5jdXJyZW50LnZhbHVlKSp0K3RoaXMuY3VycmVudC52YWx1ZX1mdW5jdGlvbiBhKHQpe3RoaXMuZWFzZSYmKHQ9dGhpcy5lYXNlKHQpKTt2YXIgZT10aGlzLmN1cnJlbnQudmFsdWUsaT10aGlzLm5leHQudmFsdWUscz0oaS5yLWUucikqdCtlLnIsYT0oaS5nLWUuZykqdCtlLmcscj0oaS5iLWUuYikqdCtlLmI7cmV0dXJuIGwuZGVmYXVsdC5jb21iaW5lUkdCQ29tcG9uZW50cyhzLGEscil9ZnVuY3Rpb24gcih0KXtmb3IodGhpcy5lYXNlJiYodD10aGlzLmVhc2UodCkpO3Q+dGhpcy5uZXh0LnRpbWU7KXRoaXMuY3VycmVudD10aGlzLm5leHQsdGhpcy5uZXh0PXRoaXMubmV4dC5uZXh0O3JldHVybiB0PSh0LXRoaXMuY3VycmVudC50aW1lKS8odGhpcy5uZXh0LnRpbWUtdGhpcy5jdXJyZW50LnRpbWUpLCh0aGlzLm5leHQudmFsdWUtdGhpcy5jdXJyZW50LnZhbHVlKSp0K3RoaXMuY3VycmVudC52YWx1ZX1mdW5jdGlvbiBuKHQpe2Zvcih0aGlzLmVhc2UmJih0PXRoaXMuZWFzZSh0KSk7dD50aGlzLm5leHQudGltZTspdGhpcy5jdXJyZW50PXRoaXMubmV4dCx0aGlzLm5leHQ9dGhpcy5uZXh0Lm5leHQ7dD0odC10aGlzLmN1cnJlbnQudGltZSkvKHRoaXMubmV4dC50aW1lLXRoaXMuY3VycmVudC50aW1lKTt2YXIgZT10aGlzLmN1cnJlbnQudmFsdWUsaT10aGlzLm5leHQudmFsdWUscz0oaS5yLWUucikqdCtlLnIsYT0oaS5nLWUuZykqdCtlLmcscj0oaS5iLWUuYikqdCtlLmI7cmV0dXJuIGwuZGVmYXVsdC5jb21iaW5lUkdCQ29tcG9uZW50cyhzLGEscil9ZnVuY3Rpb24gbyh0KXtmb3IodGhpcy5lYXNlJiYodD10aGlzLmVhc2UodCkpO3RoaXMubmV4dCYmdD50aGlzLm5leHQudGltZTspdGhpcy5jdXJyZW50PXRoaXMubmV4dCx0aGlzLm5leHQ9dGhpcy5uZXh0Lm5leHQ7cmV0dXJuIHRoaXMuY3VycmVudC52YWx1ZX1mdW5jdGlvbiBoKHQpe2Zvcih0aGlzLmVhc2UmJih0PXRoaXMuZWFzZSh0KSk7dGhpcy5uZXh0JiZ0PnRoaXMubmV4dC50aW1lOyl0aGlzLmN1cnJlbnQ9dGhpcy5uZXh0LHRoaXMubmV4dD10aGlzLm5leHQubmV4dDt2YXIgZT10aGlzLmN1cnJlbnQudmFsdWU7cmV0dXJuIGwuZGVmYXVsdC5jb21iaW5lUkdCQ29tcG9uZW50cyhlLnIsZS5nLGUuYil9T2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGw9dChcIi4vUGFydGljbGVVdGlsc1wiKSxwPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt2b2lkIDA9PT10JiYodD0hMSksdGhpcy5jdXJyZW50PW51bGwsdGhpcy5uZXh0PW51bGwsdGhpcy5pc0NvbG9yPSEhdCx0aGlzLmludGVycG9sYXRlPW51bGwsdGhpcy5lYXNlPW51bGx9cmV0dXJuIHQucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKHQpe3RoaXMuY3VycmVudD10LHRoaXMubmV4dD10Lm5leHQsdGhpcy5uZXh0JiZ0aGlzLm5leHQudGltZT49MT90aGlzLmludGVycG9sYXRlPXRoaXMuaXNDb2xvcj9hOnM6dC5pc1N0ZXBwZWQ/dGhpcy5pbnRlcnBvbGF0ZT10aGlzLmlzQ29sb3I/aDpvOnRoaXMuaW50ZXJwb2xhdGU9dGhpcy5pc0NvbG9yP246cix0aGlzLmVhc2U9dGhpcy5jdXJyZW50LmVhc2V9LHR9KCk7aS5kZWZhdWx0PXB9LHtcIi4vUGFydGljbGVVdGlsc1wiOjR9XSw3OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9dChcIi4vUGFydGljbGVVdGlsc1wiKSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsaSl7dGhpcy52YWx1ZT1cInN0cmluZ1wiPT10eXBlb2YgdD9zLmRlZmF1bHQuaGV4VG9SR0IodCk6dCx0aGlzLnRpbWU9ZSx0aGlzLm5leHQ9bnVsbCx0aGlzLmlzU3RlcHBlZD0hMSx0aGlzLmVhc2U9aT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2k6cy5kZWZhdWx0LmdlbmVyYXRlRWFzZShpKTpudWxsfXJldHVybiB0LmNyZWF0ZUxpc3Q9ZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlLmxpc3QpKXt2YXIgaT1lLmxpc3Qscz12b2lkIDAsYT12b2lkIDA7aWYoYT1zPW5ldyB0KGlbMF0udmFsdWUsaVswXS50aW1lLGUuZWFzZSksaS5sZW5ndGg+Mnx8Mj09PWkubGVuZ3RoJiZpWzFdLnZhbHVlIT09aVswXS52YWx1ZSlmb3IodmFyIHI9MTtyPGkubGVuZ3RoOysrcilzLm5leHQ9bmV3IHQoaVtyXS52YWx1ZSxpW3JdLnRpbWUpLHM9cy5uZXh0O3JldHVybiBhLmlzU3RlcHBlZD0hIWUuaXNTdGVwcGVkLGF9dmFyIG49bmV3IHQoZS5zdGFydCwwKTtyZXR1cm4gZS5lbmQhPT1lLnN0YXJ0JiYobi5uZXh0PW5ldyB0KGUuZW5kLDEpKSxufSx0fSgpO2kuZGVmYXVsdD1hfSx7XCIuL1BhcnRpY2xlVXRpbHNcIjo0fV0sODpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPXQoXCIuL1BhcnRpY2xlVXRpbHMuanNcIik7aS5QYXJ0aWNsZVV0aWxzPXMuZGVmYXVsdDt2YXIgYT10KFwiLi9QYXJ0aWNsZS5qc1wiKTtpLlBhcnRpY2xlPWEuZGVmYXVsdDt2YXIgcj10KFwiLi9FbWl0dGVyLmpzXCIpO2kuRW1pdHRlcj1yLmRlZmF1bHQ7dmFyIG49dChcIi4vUGF0aFBhcnRpY2xlLmpzXCIpO2kuUGF0aFBhcnRpY2xlPW4uZGVmYXVsdDt2YXIgbz10KFwiLi9BbmltYXRlZFBhcnRpY2xlLmpzXCIpO2kuQW5pbWF0ZWRQYXJ0aWNsZT1vLmRlZmF1bHR9LHtcIi4vQW5pbWF0ZWRQYXJ0aWNsZS5qc1wiOjEsXCIuL0VtaXR0ZXIuanNcIjoyLFwiLi9QYXJ0aWNsZS5qc1wiOjMsXCIuL1BhcnRpY2xlVXRpbHMuanNcIjo0LFwiLi9QYXRoUGFydGljbGUuanNcIjo1fV0sOTpbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2lmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLFwidW5kZWZpbmVkXCI9PXR5cGVvZiBQSVhJKXRocm93XCJwaXhpLXBhcnRpY2xlcyByZXF1aXJlcyBwaXhpLmpzIHRvIGJlIGxvYWRlZCBmaXJzdFwiO1BJWEkucGFydGljbGVzfHwoUElYSS5wYXJ0aWNsZXM9e30pO3ZhciBzPXQoXCIuL3BhcnRpY2xlc1wiKTtmb3IodmFyIGEgaW4gcylQSVhJLnBhcnRpY2xlc1thXT1zW2FdO3ZvaWQgMCE9PWUmJmUuZXhwb3J0cyYmKGUuZXhwb3J0cz1zKX0se1wiLi9wYXJ0aWNsZXNcIjo4fV19LHt9LFs5XSkoOSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpeGktcGFydGljbGVzLm1pbi5qcy5tYXBcbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmVlIGV4dGVuZHMgUElYSS5TcHJpdGUge1xyXG4gIF9zdGFydDpQSVhJLlBvaW50O1xyXG4gIF9lbmQ6UElYSS5Qb2ludDtcclxuICBfdG90YWxUaW1lOm51bWJlcjtcclxuICBfY3VycmVudFRpbWU6bnVtYmVyID0gMDtcclxuICBfdGltZXI6UElYSS50aWNrZXIuVGlja2VyO1xyXG4gIF9mb3J3YXJkOmJvb2xlYW4gPSB0cnVlO1xyXG4gIF90MDpQSVhJLlBvaW50O1xyXG4gIF90MTpQSVhJLlBvaW50O1xyXG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9zOlBJWEkuUG9pbnQsIGVuZFBvczpQSVhJLlBvaW50LCBtb3Rpb25UaW1lOm51bWJlcikge1xyXG4gICAgc3VwZXIoUElYSS5UZXh0dXJlLmZyb21JbWFnZShcInBpZWNlV2hpdGVfYm9yZGVyMTYucG5nXCIpKTtcclxuICAgIHRoaXMuX3N0YXJ0ID0gc3RhcnRQb3M7XHJcbiAgICB0aGlzLl9lbmQgPSBlbmRQb3M7XHJcbiAgICB0aGlzLl90b3RhbFRpbWUgPSBtb3Rpb25UaW1lO1xyXG4gICAgdGhpcy5fY3VycmVudFRpbWUgPSAwLjA7XHJcblxyXG4gICAgdGhpcy5jYWxjdWxhdGVUYW5nZW50cygpO1xyXG5cclxuICAgIHRoaXMuX3RpbWVyID0gbmV3IFBJWEkudGlja2VyLlRpY2tlcigpO1xyXG4gICAgdGhpcy5fdGltZXIuYXV0b1N0YXJ0ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3RpbWVyLnNwZWVkID0gMS4wO1xyXG4gICAgdGhpcy5fdGltZXIuYWRkKHRoaXMudGljayk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVUYW5nZW50cygpIHtcclxuICAgIHRoaXMuX3QwID0gbmV3IFBJWEkuUG9pbnQoMCwwKTtcclxuICAgIHRoaXMuX3QxID0gbmV3IFBJWEkuUG9pbnQoMCwwKTtcclxuICAgIC8vbWFpbiBheGlzXHJcbiAgICBpZiAoTWF0aC5hYnModGhpcy5fc3RhcnQueCAtIHRoaXMuX2VuZC54KSA+IE1hdGguYWJzKHRoaXMuX3N0YXJ0LnkgLSB0aGlzLl9lbmQueSkpIHtcclxuICAgICAgLy94IGlzIGJpZ2dlclxyXG4gICAgICB0aGlzLl90MCA9IG5ldyBQSVhJLlBvaW50KDAuNCwwLjEpO1xyXG4gICAgICB0aGlzLl90MSA9ICBuZXcgUElYSS5Qb2ludCgtMC40LC0wLjEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdDAgPSBuZXcgUElYSS5Qb2ludCgwLjksIDAuNik7XHJcbiAgICAgIHRoaXMuX3QxID0gbmV3IFBJWEkuUG9pbnQoLTAuOSwgLTAuNik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy9jaGVjayBtb3Rpb24gZGlyZWN0aW9uXHJcbiAgICAvLyBpZiAodGhpcy5fc3RhcnQueCA+IHRoaXMuX2VuZC54KSB7XHJcbiAgICAvLyAgIC8vbW92aW5nIHRvIHRoZSBsZWZ0XHJcbiAgICAvLyAgIHRoaXMuX3QwLnggPSAtMSAqIHRoaXMuX3QwLng7XHJcbiAgICAvLyAgIHRoaXMuX3QxLnggPSAtMSAqIHRoaXMuX3QxLng7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYgKHRoaXMuX3N0YXJ0LnkgPiB0aGlzLl9lbmQueSkge1xyXG4gICAgLy8gICAvL21vdmluZyB0byB0aGUgZG93blxyXG4gICAgLy8gICB0aGlzLl90MC55ID0gLTEgKiB0aGlzLl90MC55O1xyXG4gICAgLy8gICB0aGlzLl90MS55ID0gLTEgKiB0aGlzLl90MS55O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHRoaXMuX3QwLnggPSB0aGlzLl9zdGFydC54ICsgMC40ICogKHRoaXMuX2VuZC54IC0gdGhpcy5fc3RhcnQueCk7XHJcbiAgICB0aGlzLl90MC55ID0gdGhpcy5fc3RhcnQueSArIDAuNCAqICh0aGlzLl9lbmQueSAtIHRoaXMuX3N0YXJ0LnkpO1xyXG5cclxuICAgIHRoaXMuX3QxLnggPSB0aGlzLl9lbmQueCArIDAuNCAqICh0aGlzLl9zdGFydC54IC0gdGhpcy5fZW5kLngpXHJcbiAgICB0aGlzLl90MS55ID0gdGhpcy5fZW5kLnkgKyAwLjQgKiAodGhpcy5fc3RhcnQueSAtIHRoaXMuX2VuZC55KVxyXG4gIH1cclxuXHJcbiAgdGljaz0oZGVsdGE6bnVtYmVyKSA9PiB7XHJcbiAgICB2YXIgdCA9IDAuMDtcclxuICAgIGlmICh0aGlzLl9mb3J3YXJkKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRUaW1lICs9IHRoaXMuX3RpbWVyLmVsYXBzZWRNUyAqIHRoaXMuX3RpbWVyLnNwZWVkO1xyXG4gICAgICBpZiAodGhpcy5fY3VycmVudFRpbWUgPj0gdGhpcy5fdG90YWxUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSB0aGlzLl90b3RhbFRpbWU7XHJcbiAgICAgICAgdCA9IDEuMDtcclxuICAgICAgICB0aGlzLl9mb3J3YXJkID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdCA9IHRoaXMuX2N1cnJlbnRUaW1lIC8gdGhpcy5fdG90YWxUaW1lO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VGltZSAtPSB0aGlzLl90aW1lci5lbGFwc2VkTVMgKiB0aGlzLl90aW1lci5zcGVlZDtcclxuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRUaW1lIDw9IDAuMCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gMC4wO1xyXG4gICAgICAgIHQgPSAwLjA7XHJcbiAgICAgICAgdGhpcy5fZm9yd2FyZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdCA9IHRoaXMuX2N1cnJlbnRUaW1lIC8gdGhpcy5fdG90YWxUaW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHQzOm51bWJlciA9IE1hdGgucG93KHQsMyk7XHJcbiAgICBsZXQgdDI6bnVtYmVyID0gTWF0aC5wb3codCwyKTtcclxuXHJcbiAgICBsZXQgYTA6bnVtYmVyID0gKDIgKiB0MyAtIDMgKiB0MiArIDEpO1xyXG4gICAgbGV0IGExOm51bWJlciA9ICh0MyAtIDIgKiB0MiArIHQpO1xyXG4gICAgbGV0IGEyOm51bWJlciA9ICgtMiAqIHQzICsgMyAqIHQyKTtcclxuICAgIGxldCBhMzpudW1iZXIgPSAodDMgLSB0Mik7XHJcblxyXG4gICAgdGhpcy54ID0gYTAgKiB0aGlzLl9zdGFydC54ICsgYTEgKiB0aGlzLl90MC54ICsgYTIgKiB0aGlzLl9lbmQueCArIGEzICogdGhpcy5fdDEueDtcclxuICAgIHRoaXMueSA9IGEwICogdGhpcy5fc3RhcnQueSArIGExICogdGhpcy5fdDAueSArIGEyICogdGhpcy5fZW5kLnkgKyBhMyAqIHRoaXMuX3QxLnk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7U2ltcGxlQnV0dG9uLCBGbGlwcGFibGVTcHJpdGUsIEdhbWVMZXZlbH0gZnJvbSAnLi9zdXBwb3J0JztcclxuaW1wb3J0IHtCYXNlQXBwfSBmcm9tICcuL21haW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRzTGV2ZWwgaW1wbGVtZW50cyAgR2FtZUxldmVsIHtcclxuICBsZXZlbF9uYW1lOnN0cmluZyA9IFwiQ2FyZHNcIjtcclxuICBjb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVja19zaXplOm51bWJlciA9IDE0NDtcclxuICBwcml2YXRlIGRlY2s6RmxpcHBhYmxlU3ByaXRlW107XHJcbiAgcHJpdmF0ZSB0aWNrZXI6UElYSS50aWNrZXIuVGlja2VyO1xyXG4gIHByaXZhdGUgY2FyZF9pbmRleDpudW1iZXIgPSAwO1xyXG4gIGNhcmRfZGVsYXk6bnVtYmVyID0gMTAwMDtcclxuICBjYXJkX2FuaW1fc3BlZWQ6bnVtYmVyID0gMjAwMDtcclxuICBwcml2YXRlIGNhcmRfY291bnRlcjpudW1iZXIgPSAwLjA7XHJcbiAgcHJpdmF0ZSBjYXJkX3N0YXJ0X3RpbWU6bnVtYmVyID0gMC4wO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLnRpY2tlci5UaWNrZXIoKTtcclxuICAgICAgdGhpcy50aWNrZXIuYXV0b1N0YXJ0ID0gZmFsc2U7XHJcbiAgfVxyXG4gIGNyZWF0ZUxldmVsKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcmQgTGV2ZWwgY3JlYXRpb24gc3RhcnRlZC5cIik7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICAgIC8vIGNyZWF0ZSBjYXJkc1xyXG4gICAgICB0aGlzLmRlY2sgPSBbXTtcclxuICAgICAgdmFyIHNwYWNpbmcgPSAzO1xyXG4gICAgICB2YXIgYmFja3MgPSBbXCJjYXJkQmFja19ibHVlNS5wbmdcIiwgXCJjYXJkQmFja19ncmVlbjUucG5nXCIsIFwiY2FyZEJhY2tfcmVkNS5wbmdcIl07XHJcbiAgICAgIHZhciBmcm9udHMgPSBbXCJjYXJkQ2x1YnMyLnBuZ1wiLFwiY2FyZENsdWJzMy5wbmdcIixcImNhcmRDbHViczQucG5nXCIsXCJjYXJkQ2x1YnM1LnBuZ1wiLFwiY2FyZENsdWJzNi5wbmdcIixcImNhcmRDbHViczcucG5nXCIsXCJjYXJkQ2x1YnM4LnBuZ1wiLFwiY2FyZENsdWJzOS5wbmdcIixcImNhcmRDbHViczEwLnBuZ1wiLFwiY2FyZENsdWJzQS5wbmdcIixcImNhcmRDbHVic0oucG5nXCIsXCJjYXJkQ2x1YnNLLnBuZ1wiLFwiY2FyZENsdWJzUS5wbmdcIixcImNhcmREaWFtb25kczIucG5nXCIsXCJjYXJkRGlhbW9uZHMzLnBuZ1wiLFwiY2FyZERpYW1vbmRzNC5wbmdcIixcImNhcmREaWFtb25kczUucG5nXCIsXCJjYXJkRGlhbW9uZHM2LnBuZ1wiLFwiY2FyZERpYW1vbmRzNy5wbmdcIixcImNhcmREaWFtb25kczgucG5nXCIsXCJjYXJkRGlhbW9uZHM5LnBuZ1wiLFwiY2FyZERpYW1vbmRzMTAucG5nXCIsXCJjYXJkRGlhbW9uZHNBLnBuZ1wiLFwiY2FyZERpYW1vbmRzSi5wbmdcIixcImNhcmREaWFtb25kc0sucG5nXCIsXCJjYXJkRGlhbW9uZHNRLnBuZ1wiLFwiY2FyZEhlYXJ0czIucG5nXCIsXCJjYXJkSGVhcnRzMy5wbmdcIixcImNhcmRIZWFydHM0LnBuZ1wiLFwiY2FyZEhlYXJ0czUucG5nXCIsXCJjYXJkSGVhcnRzNi5wbmdcIixcImNhcmRIZWFydHM3LnBuZ1wiLFwiY2FyZEhlYXJ0czgucG5nXCIsXCJjYXJkSGVhcnRzOS5wbmdcIixcImNhcmRIZWFydHMxMC5wbmdcIixcImNhcmRIZWFydHNBLnBuZ1wiLFwiY2FyZEhlYXJ0c0oucG5nXCIsXCJjYXJkSGVhcnRzSy5wbmdcIixcImNhcmRIZWFydHNRLnBuZ1wiLFwiY2FyZEpva2VyLnBuZ1wiLFwiY2FyZFNwYWRlczIucG5nXCIsXCJjYXJkU3BhZGVzMy5wbmdcIixcImNhcmRTcGFkZXM0LnBuZ1wiLFwiY2FyZFNwYWRlczUucG5nXCIsXCJjYXJkU3BhZGVzNi5wbmdcIixcImNhcmRTcGFkZXM3LnBuZ1wiLFwiY2FyZFNwYWRlczgucG5nXCIsXCJjYXJkU3BhZGVzOS5wbmdcIixcImNhcmRTcGFkZXMxMC5wbmdcIixcImNhcmRTcGFkZXNBLnBuZ1wiLFwiY2FyZFNwYWRlc0oucG5nXCIsXCJjYXJkU3BhZGVzSy5wbmdcIixcImNhcmRTcGFkZXNRLnBuZ1wiXTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRlY2tfc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgYmFjayA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoYmFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihiYWNrcy5sZW5ndGgtMC4xKSldKTtcclxuICAgICAgICAgIHZhciBmcm9udCA9IFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoZnJvbnRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooZnJvbnRzLmxlbmd0aC0wLjEpKV0pO1xyXG4gICAgICAgICAgdmFyIGNhcmQgPSBuZXcgRmxpcHBhYmxlU3ByaXRlKGZyb250LCBiYWNrKVxyXG4gICAgICAgICAgY2FyZC5mbGlwX3JvdGF0aW9uID0gMDtcclxuICAgICAgICAgIGNhcmQuZmxpcF90aW1lID0gdGhpcy5jYXJkX2FuaW1fc3BlZWQ7XHJcbiAgICAgICAgICBjYXJkLmZsaXBfc2NhbGUgPSB0cnVlO1xyXG4gICAgICAgICAgY2FyZC5zY2FsZS54ID0gMC42O1xyXG4gICAgICAgICAgY2FyZC5zY2FsZS55ID0gMC42O1xyXG4gICAgICAgICAgY2FyZC5mbGlwX3NsaWRlX3ggPSAyMDA7XHJcbiAgICAgICAgICBjYXJkLmZsaXBfc2xpZGVfeSA9IDIwO1xyXG4gICAgICAgICAgY2FyZC54ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC8yIC0gMTAwOy8vICsgaSpzcGFjaW5nO1xyXG4gICAgICAgICAgY2FyZC55ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQvMiArICh0aGlzLmRlY2tfc2l6ZS8yKSAqIHNwYWNpbmcgLSBpKnNwYWNpbmc7XHJcbiAgICAgICAgICB0aGlzLmRlY2sucHVzaChjYXJkKTtcclxuICAgICAgICAgIGNhcmQuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGNhcmQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2FyZF9jb3VudGVyID0gdGhpcy5jYXJkX2RlbGF5O1xyXG4gICAgICB0aGlzLmNhcmRfaW5kZXggPSAtMTtcclxuICAgICAgdGhpcy5jYXJkX3N0YXJ0X3RpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgdGhpcy50aWNrZXIuc3RhcnQoKTtcclxuICAgICAgdGhpcy50aWNrZXIuYWRkKHRoaXMub25UaWNrKTtcclxuXHJcbiAgICAgIC8vY3JlYXRlIGJhY2sgb3B0aW9uXHJcbiAgICAgIHZhciBtZW51X2JnID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgbWVudV9iZy5iZWdpbkZpbGwoMHhFRUVFRUUpO1xyXG4gICAgICBtZW51X2JnLmxpbmVTdHlsZSgyLCAweGRkZGRmRiwgMSk7XHJcbiAgICAgIG1lbnVfYmcuZHJhd1JvdW5kZWRSZWN0KDEwMCwgMTAwLCAyMDAsIDEwMCwgNSk7XHJcbiAgICAgIG1lbnVfYmcuZW5kRmlsbCgpO1xyXG5cclxuICAgICAgdmFyIG1haW5fbWVudV9idG4gPSBuZXcgU2ltcGxlQnV0dG9uKCdCYWNrJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgICBtYWluX21lbnVfYnRuLnggPSAxMjU7XHJcbiAgICAgIG1haW5fbWVudV9idG4ueSA9IDEyNTtcclxuICAgICAgbWVudV9iZy5hZGRDaGlsZChtYWluX21lbnVfYnRuKTtcclxuICAgICAgbWFpbl9tZW51X2J0bi5zZXRDbGlja0NhbGxiYWNrKHRoaXMuYmFja1RvTWVudSk7XHJcbiAgICAgIG1haW5fbWVudV9idG4uYWN0aXZhdGUoKTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWVudV9iZyk7XHJcbiAgICAgIEJhc2VBcHAuaW5zdGFuY2Uuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcmQgTGV2ZWwgY3JlYXRlZCBzdWNjZXNzZnVsbHkuXCIpO1xyXG4gIH1cclxuICBiYWNrVG9NZW51KCkge1xyXG4gICAgICBCYXNlQXBwLmluc3RhbmNlLmNoYW5nZUxldmVsKFwiTWFpbk1lbnVcIik7XHJcbiAgfVxyXG4gIGRlc3Ryb3lMZXZlbCgpIHtcclxuICAgICAgdGhpcy5kZWNrID0gW11cclxuICAgICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgICB0aGlzLnRpY2tlci5yZW1vdmUodGhpcy5vblRpY2spO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5kZXN0cm95KHtjaGlsZHJlbjp0cnVlfSk7XHJcbiAgfVxyXG4gIG9uVGljayA9IChkZWx0YTpudW1iZXIpID0+IHtcclxuICAgIHRoaXMuY2FyZF9jb3VudGVyICs9IHRoaXMudGlja2VyLmVsYXBzZWRNUztcclxuICAgIC8vY29uc29sZS5sb2coXCJUaWNraW5nLi4uIFwiLHRoaXMuY2FyZF9jb3VudGVyLFwiIGluZGV4OiBcIit0aGlzLmNhcmRfaW5kZXgpO1xyXG4gICAgaWYgKHRoaXMuY2FyZF9jb3VudGVyID49IHRoaXMuY2FyZF9kZWxheSkge1xyXG4gICAgICAgIHRoaXMuY2FyZF9jb3VudGVyID0gMC4wO1xyXG4gICAgICAgIC8vIG1vdmUgY3VycmVudCBjYXJkIHRvIHRoZSBiYWNrLlxyXG4gICAgICAgIGlmICh0aGlzLmNhcmRfaW5kZXggPj0gMClcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc2V0Q2hpbGRJbmRleCh0aGlzLmRlY2tbdGhpcy5kZWNrLmxlbmd0aC10aGlzLmNhcmRfaW5kZXgtMV0sdGhpcy5jYXJkX2luZGV4KTtcclxuICAgICAgICB0aGlzLmNhcmRfaW5kZXggKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZF9pbmRleCA9PSB0aGlzLmRlY2subGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICAvL1RoZSBFbmRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXJkIGFuaW1hdGlvbiBjb21wbGV0ZWQgaW4gXCIscGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmNhcmRfc3RhcnRfdGltZSxcIiBtc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlY2tbdGhpcy5kZWNrLmxlbmd0aC10aGlzLmNhcmRfaW5kZXgtMV0uZmxpcCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhc3RDYXJkc0xldmVsIGV4dGVuZHMgQ2FyZHNMZXZlbCB7XHJcbiAgICBsZXZlbF9uYW1lID0gXCJGYXN0Q2FyZHNcIjtcclxuICAgIGNhcmRfZGVsYXkgPSAxMDA7XHJcbiAgICBjYXJkX2FuaW1fc3BlZWQgPSAzMDA7XHJcbn0iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQgKiBhcyBIVUIgZnJvbSAnLi9zdXBwb3J0JztcclxuaW1wb3J0IHtDYXJkc0xldmVsLCBGYXN0Q2FyZHNMZXZlbH0gZnJvbSAnLi9jYXJkc19sZXZlbHMnO1xyXG5pbXBvcnQge1RleHRJbWFnZUxldmVsfSBmcm9tICcuL3RleHRfaW1hZ2VfbGV2ZWwnO1xyXG5pbXBvcnQge1BhcnRpY2xlc0xldmVsfSBmcm9tICcuL3BhcnRpY2xlc19sZXZlbCc7XHJcbmltcG9ydCB7TWFpbk1lbnV9IGZyb20gJy4vbWFpbl9tZW51JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQXBwIGV4dGVuZHMgUElYSS5BcHBsaWNhdGlvbiB7XHJcbiAgc3RhdGljIGluc3RhbmNlOkJhc2VBcHA7XHJcbiAgY3VycmVudF9sZXZlbDpIVUIuR2FtZUxldmVsO1xyXG4gIGZwc190ZXh0OiBhbnk7XHJcbiAgc3RhZ2U6IGFueTtcclxuICBhdmFpbGFibGVfbGV2ZWxzOiBIVUIuR2FtZUxldmVsW107XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwge3RyYW5zcGFyZW50OnRydWV9KTtcclxuICAgIGlmIChCYXNlQXBwLmluc3RhbmNlKSB7XHJcbiAgICAgIC8vZ2FtZSBhbHJlYWR5IHJ1bm5pbmdcclxuICAgICAgdGhpcy5kZXN0cm95KHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9pbml0aWFsaXphdGlvblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudmlldyk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGFwcC5yZW5kZXJlci5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnRpY2tlci5hZGQodGhpcy5yZW5kZXJGUFMpO1xyXG4gICAgICBCYXNlQXBwLmluc3RhbmNlID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuYXZhaWxhYmxlX2xldmVscyA9IFtdXHJcbiAgICAgIHZhciBodWIgPSBuZXcgTWFpbk1lbnUoKTtcclxuICAgICAgdGhpcy5hdmFpbGFibGVfbGV2ZWxzLnB1c2goaHViKTtcclxuICAgICAgZm9yICh2YXIgbGV2ZWwgb2YgW25ldyBDYXJkc0xldmVsKCksIG5ldyBGYXN0Q2FyZHNMZXZlbCgpLCBuZXcgVGV4dEltYWdlTGV2ZWwoKSwgbmV3IFBhcnRpY2xlc0xldmVsKCldKSB7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVfbGV2ZWxzLnB1c2gobGV2ZWwpO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9maXJzdCBsZXZlbFxyXG4gICAgICB0aGlzLmN1cnJlbnRfbGV2ZWwgPSBodWI7XHJcbiAgICAgIGh1Yi5jcmVhdGVMZXZlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJGUFMgPSAoZGVsdGE6bnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodGhpcy5mcHNfdGV4dCA9PSBudWxsKSB7XHJcbiAgICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICBmb250IDogJ2JvbGQgMTZweCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbCA6ICcjRjdFRENBJyxcclxuICAgICAgICBzdHJva2UgOiAnIzRhMTg1MCcsXHJcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzIDogNVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmZwc190ZXh0ID0gbmV3IFBJWEkuVGV4dChcIkZQUz02MFwiLCBzdHlsZSk7XHJcbiAgICAgIHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5mcHNfdGV4dCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZwc190ZXh0LnggPSBhcHAucmVuZGVyZXIud2lkdGggLSAxNSAtIHRoaXMuZnBzX3RleHQud2lkdGg7XHJcbiAgICB0aGlzLmZwc190ZXh0LnkgPSAxMDtcclxuICAgIHRoaXMuZnBzX3RleHQudGV4dCA9IFwiRlBTID0gXCIrTWF0aC5yb3VuZCh0aGlzLnRpY2tlci5GUFMpO1xyXG4gIH1cclxuICBjaGFuZ2VMZXZlbChsZXZlbF9uYW1lOnN0cmluZyk6dm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlN3aXRjaGluZyBmcm9tIFwiLCB0aGlzLmN1cnJlbnRfbGV2ZWwubGV2ZWxfbmFtZSwgXCIgdG8gXCIsIGxldmVsX25hbWUpO1xyXG4gICAgZm9yICh2YXIgbGV2ZWwgb2YgdGhpcy5hdmFpbGFibGVfbGV2ZWxzKSB7XHJcbiAgICAgIGlmIChsZXZlbC5sZXZlbF9uYW1lID09PSBsZXZlbF9uYW1lKSB7XHJcbiAgICAgICAgLy9mb3VuZCB0aGUgbGV2ZWwsIHJlbW92ZSBvbGQgb25lXHJcbiAgICAgICAgdGhpcy5jdXJyZW50X2xldmVsLmRlc3Ryb3lMZXZlbCgpO1xyXG4gICAgICAgIC8vdXBkYXRlIGFuZCBjcmVhdGUgdGhlIG5ldyBsZXZlbFxyXG4gICAgICAgIHRoaXMuY3VycmVudF9sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIGxldmVsLmNyZWF0ZUxldmVsKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL25vIGxldmVsIGZvdW5kIHdpdGggdGhhdCBuYW1lLlxyXG4gICAgY29uc29sZS5lcnJvcihcIk5vIGxldmVsIGZvdW5kIHdpdGggbmFtZTogXCIrbGV2ZWxfbmFtZStcIi4gQ2Fubm90IGNoYW5nZSBsZXZlbCFcIik7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgYXBwID0gbmV3IEJhc2VBcHAoKTtcclxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0IHtTaW1wbGVCdXR0b24sIEZsaXBwYWJsZVNwcml0ZSwgR2FtZUxldmVsfSBmcm9tICcuL3N1cHBvcnQnO1xyXG5pbXBvcnQge0Jhc2VBcHB9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCB7QmVlfSBmcm9tICcuL2JlZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnUgaW1wbGVtZW50cyBHYW1lTGV2ZWwge1xyXG4gIGxldmVsX25hbWU6c3RyaW5nID0gXCJNYWluTWVudVwiO1xyXG4gIGNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgYnV0dG9uczpTaW1wbGVCdXR0b25bXTtcclxuICBjb2luOkZsaXBwYWJsZVNwcml0ZTtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5jb250YWluZXIueCA9IDEwMDtcclxuICAgIHRoaXMuY29udGFpbmVyLnkgPSAxMDA7XHJcblxyXG4gICAgdmFyIG1lbnVfYmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgbWVudV9iZy5iZWdpbkZpbGwoMHhFRUVFRUUpO1xyXG4gICAgbWVudV9iZy5saW5lU3R5bGUoMiwgMHhkZGRkZkYsIDEpO1xyXG4gICAgbWVudV9iZy5kcmF3Um91bmRlZFJlY3QoMCwgMCwgMjAwLCAzMjUsIDUpO1xyXG4gICAgbWVudV9iZy5lbmRGaWxsKCk7XHJcblxyXG4gICAgdmFyIHRlc3RlX2NhcnRhcyA9IG5ldyBTaW1wbGVCdXR0b24oJ0NhcmRzJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgdGVzdGVfY2FydGFzLnggPSAyNTtcclxuICAgIHRlc3RlX2NhcnRhcy55ID0gMjU7XHJcbiAgICBtZW51X2JnLmFkZENoaWxkKHRlc3RlX2NhcnRhcyk7XHJcbiAgICB0ZXN0ZV9jYXJ0YXMuc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmVudGVyQ2FyZHMpO1xyXG5cclxuICAgIHZhciB0ZXN0ZV9mYXN0X2NhcnRhcyA9IG5ldyBTaW1wbGVCdXR0b24oJyhGYXN0KSBDYXJkcycsIDB4MDBhOWZmLCAweDk5ZDlmZiwgMHgwMDY2YWEsIDE1MCwgIDUwLCAzKTtcclxuICAgIHRlc3RlX2Zhc3RfY2FydGFzLnggPSAyNTtcclxuICAgIHRlc3RlX2Zhc3RfY2FydGFzLnkgPSB0ZXN0ZV9jYXJ0YXMueSArIHRlc3RlX2NhcnRhcy5oZWlnaHQgKyAyNTtcclxuICAgIG1lbnVfYmcuYWRkQ2hpbGQodGVzdGVfZmFzdF9jYXJ0YXMpO1xyXG4gICAgdGVzdGVfZmFzdF9jYXJ0YXMuc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmVudGVyRmFzdENhcmRzKTtcclxuXHJcbiAgICB2YXIgdGVzdGVfdGV4dCA9IG5ldyBTaW1wbGVCdXR0b24oJ1RleHQgKyBJbWFnZScsIDB4MDBhOWZmLCAweDk5ZDlmZiwgMHgwMDY2YWEsIDE1MCwgIDUwLCAzKTtcclxuICAgIHRlc3RlX3RleHQueCA9IDI1O1xyXG4gICAgdGVzdGVfdGV4dC55ID0gdGVzdGVfZmFzdF9jYXJ0YXMueSArIHRlc3RlX2Zhc3RfY2FydGFzLmhlaWdodCArIDI1O1xyXG4gICAgbWVudV9iZy5hZGRDaGlsZCh0ZXN0ZV90ZXh0KTtcclxuICAgIHRlc3RlX3RleHQuc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmVudGVyVGV4dEltYWdlKTtcclxuXHJcbiAgICB2YXIgdGVzdGVfcGFydGljbGVzID0gbmV3IFNpbXBsZUJ1dHRvbignUGFydGljbGVzJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgdGVzdGVfcGFydGljbGVzLnggPSAyNTtcclxuICAgIHRlc3RlX3BhcnRpY2xlcy55ID0gdGVzdGVfdGV4dC55ICsgdGVzdGVfdGV4dC5oZWlnaHQgKyAyNTtcclxuICAgIG1lbnVfYmcuYWRkQ2hpbGQodGVzdGVfcGFydGljbGVzKTtcclxuICAgIHRlc3RlX3BhcnRpY2xlcy5zZXRDbGlja0NhbGxiYWNrKHRoaXMuZW50ZXJQYXJ0aWNsZXMpO1xyXG5cclxuICAgIHRoaXMuYnV0dG9ucyA9IFt0ZXN0ZV9jYXJ0YXMsIHRlc3RlX3RleHQsIHRlc3RlX3BhcnRpY2xlcywgdGVzdGVfZmFzdF9jYXJ0YXNdO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWVudV9iZyk7XHJcbiAgICBQSVhJLmxvYWRlclxyXG4gICAgICAgIC5hZGQoJ2Z1bGxfc3ByaXRlcy5qc29uJylcclxuICAgICAgICAuYWRkKCdwYXJ0aWNsZVBhY2suanNvbicpXHJcbiAgICAgICAgLmxvYWQodGhpcy5sb2FkQ29pbik7XHJcblxyXG4gICAgLy9leHRyYSBUZXh0XHJcbiAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udCA6ICdpdGFsaWMgMThweCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbCA6IDB4RkZGRkZGLFxyXG4gICAgICAgIGFsaWduOiAncmlnaHQnXHJcbiAgICB9XHJcbiAgICB2YXIgdGV4dCA9IG5ldyBQSVhJLlRleHQoXCJVc2luZzogUGl4aS5KUywgVHlwZXNjcmlwdCwgd2VicGFjayBhbmQgTlBNXFxuR2FtZSBEZXZlbG9wbWVudCBUZXN0XFxuTWFyY2VsbyBGLiBSaWdvblxcbkFzc2V0czoga2VubmV5Lm5sXCIsIHN0eWxlKTtcclxuICAgIHRleHQueCA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIud2lkdGgvMiArIHRleHQud2lkdGggLSB0aGlzLmNvbnRhaW5lci54O1xyXG4gICAgdGV4dC55ID0gMDtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHRleHQpO1xyXG5cclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkQ29pbiA9ICgpOnZvaWQgPT4ge1xyXG4gICAgdGhpcy5jb2luID0gbmV3IEZsaXBwYWJsZVNwcml0ZShQSVhJLlRleHR1cmUuZnJvbUltYWdlKCdjaGlwR3JlZW5XaGl0ZV9zaWRlQm9yZGVyLnBuZycpKTtcclxuICAgIHRoaXMuY29pbi5mbGlwX3NsaWRlX3kgPSAxMDA7XHJcbiAgICB0aGlzLmNvaW4uZmxpcF9yb3RhdGlvbiA9IE1hdGguUEkqMjtcclxuICAgIHRoaXMuY29pbi5mbGlwX3NsaWRlX3ggPSAwO1xyXG4gICAgdGhpcy5jb2luLmZsaXBfc2NhbGUgPSBmYWxzZTtcclxuICAgIHRoaXMuY29pbi54ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC8yO1xyXG4gICAgdGhpcy5jb2luLnkgPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLmhlaWdodC8yO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5jb2luKTtcclxuXHJcbiAgICB2YXIgY29pbjIgPSBuZXcgRmxpcHBhYmxlU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJ2NoaXBHcmVlbldoaXRlX3NpZGVCb3JkZXIucG5nJykpO1xyXG4gICAgY29pbjIuZmxpcF9zbGlkZV95ID0gMTAwO1xyXG4gICAgY29pbjIuZmxpcF9yb3RhdGlvbiA9IE1hdGguUEkqMjtcclxuICAgIGNvaW4yLmZsaXBfc2xpZGVfeCA9IDA7XHJcbiAgICBjb2luMi5mbGlwX3NjYWxlID0gZmFsc2U7XHJcbiAgICBjb2luMi5mbGlwX3RpbWUgPSA1MDA7XHJcbiAgICBjb2luMi54ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC8yIC0gODA7XHJcbiAgICBjb2luMi55ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQvMjtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKGNvaW4yKTtcclxuICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICBmb250IDogJ2JvbGQgMThweCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbCA6IDB4RkZGRkZGLFxyXG4gICAgfVxyXG4gICAgdmFyIHRleHQgPSBuZXcgUElYSS5UZXh0KFwiQ2xpY2sgbWUhXCIsIHN0eWxlKTtcclxuICAgIHRleHQueCA9IHRoaXMuY29pbi54IC0gdGV4dC53aWR0aC8yO1xyXG4gICAgdGV4dC55ID0gdGhpcy5jb2luLnkgKzMwO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGV4dCk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobmV3IEJlZShuZXcgUElYSS5Qb2ludCg0MDAsNTAwKSwgbmV3IFBJWEkuUG9pbnQoODAwLDUwKSwgNTAwMC4wKSk7XHJcbiAgfVxyXG4gIGNyZWF0ZUxldmVsKCk6dm9pZCB7XHJcbiAgICBmb3IgKHZhciBidXR0b24gb2YgdGhpcy5idXR0b25zKSB7XHJcbiAgICAgICAgYnV0dG9uLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb2luKVxyXG4gICAgICAgIHRoaXMuY29pbi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcbiAgZGVzdHJveUxldmVsKCk6dm9pZCB7XHJcbiAgICBmb3IgKHZhciBidXR0b24gb2YgdGhpcy5idXR0b25zKSB7XHJcbiAgICAgICAgYnV0dG9uLmRlYWN0aXZhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb2luKVxyXG4gICAgICAgIHRoaXMuY29pbi5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgfVxyXG4gIGVudGVyQ2FyZHMoKTp2b2lkIHtcclxuICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJDYXJkc1wiKTtcclxuICB9XHJcbiAgZW50ZXJGYXN0Q2FyZHMoKTp2b2lkIHtcclxuICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJGYXN0Q2FyZHNcIik7XHJcbiAgfVxyXG4gIGVudGVyVGV4dEltYWdlKCk6dm9pZCB7XHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLmNoYW5nZUxldmVsKFwiVGV4dEltYWdlXCIpO1xyXG4gIH1cclxuICBlbnRlclBhcnRpY2xlcygpOnZvaWQge1xyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5jaGFuZ2VMZXZlbChcIlBhcnRpY2xlc1wiKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQgKiBhcyBUT09MUyBmcm9tICcuL3N1cHBvcnQnO1xyXG5pbXBvcnQge0Jhc2VBcHB9IGZyb20gJy4vbWFpbic7XHJcbmltcG9ydCAqIGFzIFBBUlRJQ0xFUyBmcm9tICdwaXhpLXBhcnRpY2xlcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlc0xldmVsIGltcGxlbWVudHMgVE9PTFMuR2FtZUxldmVsIHtcclxuICBsZXZlbF9uYW1lOnN0cmluZyA9IFwiUGFydGljbGVzXCI7XHJcbiAgY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuICB0aWNrZXI6IFBJWEkudGlja2VyLlRpY2tlcjtcclxuICBlbWl0dGVyOlBBUlRJQ0xFUy5FbWl0dGVyO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aWNrZXIgPSBuZXcgUElYSS50aWNrZXIuVGlja2VyKCk7XHJcbiAgICB0aGlzLnRpY2tlci5hdXRvU3RhcnQgPSBmYWxzZTtcclxuICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICB9XHJcbiAgY3JlYXRlTGV2ZWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlBhcnRpY2xlcyBjcmVhdGlvbiBzdGFydGVkLlwiKTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnRpY2tlci5hZGQodGhpcy5vblRpY2spO1xyXG4gICAgdGhpcy50aWNrZXIuc3RhcnQoKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBiYWNrIG9wdGlvblxyXG4gICAgdmFyIG1lbnVfYmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgbWVudV9iZy5iZWdpbkZpbGwoMHhFRUVFRUUpO1xyXG4gICAgbWVudV9iZy5saW5lU3R5bGUoMiwgMHhkZGRkZkYsIDEpO1xyXG4gICAgbWVudV9iZy5kcmF3Um91bmRlZFJlY3QoMTAwLCAxMDAsIDIwMCwgMTAwLCA1KTtcclxuICAgIG1lbnVfYmcuZW5kRmlsbCgpO1xyXG5cclxuICAgIHZhciBtYWluX21lbnVfYnRuID0gbmV3IFRPT0xTLlNpbXBsZUJ1dHRvbignQmFjaycsIDB4MDBhOWZmLCAweDk5ZDlmZiwgMHgwMDY2YWEsIDE1MCwgIDUwLCAzKTtcclxuICAgIG1haW5fbWVudV9idG4ueCA9IDEyNTtcclxuICAgIG1haW5fbWVudV9idG4ueSA9IDEyNTtcclxuICAgIG1lbnVfYmcuYWRkQ2hpbGQobWFpbl9tZW51X2J0bik7XHJcbiAgICBtYWluX21lbnVfYnRuLnNldENsaWNrQ2FsbGJhY2sodGhpcy5iYWNrVG9NZW51KTtcclxuICAgIG1haW5fbWVudV9idG4uYWN0aXZhdGUoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG1lbnVfYmcpO1xyXG5cclxuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBQQVJUSUNMRVMuRW1pdHRlcih0aGlzLmNvbnRhaW5lciwgUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnZmlyZV8wMi5wbmcnKSwge1xyXG4gICAgICAgICAgXCJhbHBoYVwiOiB7XHJcbiAgICAgICAgICAgIFwic3RhcnRcIjogMSxcclxuICAgICAgICAgICAgXCJlbmRcIjogMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwic2NhbGVcIjoge1xyXG4gICAgICAgICAgICBcInN0YXJ0XCI6IDAuNCxcclxuICAgICAgICAgICAgXCJlbmRcIjogMC4wMSxcclxuICAgICAgICAgICAgXCJtaW5pbXVtU2NhbGVNdWx0aXBsaWVyXCI6IDJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICAgICAgXCJzdGFydFwiOiBcIiNmMDA5MTlcIixcclxuICAgICAgICAgICAgXCJlbmRcIjogXCIjZTBhNTYyXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcInNwZWVkXCI6IHtcclxuICAgICAgICAgICAgXCJzdGFydFwiOiAyNSxcclxuICAgICAgICAgICAgXCJlbmRcIjogODAsXHJcbiAgICAgICAgICAgIFwibWluaW11bVNwZWVkTXVsdGlwbGllclwiOiAxXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhY2NlbGVyYXRpb25cIjoge1xyXG4gICAgICAgICAgICBcInhcIjogMCxcclxuICAgICAgICAgICAgXCJ5XCI6IC01MDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcIm1heFNwZWVkXCI6IDAsXHJcbiAgICAgICAgICBcInN0YXJ0Um90YXRpb25cIjoge1xyXG4gICAgICAgICAgICBcIm1pblwiOiAwLFxyXG4gICAgICAgICAgICBcIm1heFwiOiAzNjBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcIm5vUm90YXRpb25cIjogZmFsc2UsXHJcbiAgICAgICAgICBcInJvdGF0aW9uU3BlZWRcIjoge1xyXG4gICAgICAgICAgICBcIm1pblwiOiAwLFxyXG4gICAgICAgICAgICBcIm1heFwiOiAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJsaWZldGltZVwiOiB7XHJcbiAgICAgICAgICAgIFwibWluXCI6IDAuMixcclxuICAgICAgICAgICAgXCJtYXhcIjogMS4yXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJibGVuZE1vZGVcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgIFwiZnJlcXVlbmN5XCI6IDAuMDAxLFxyXG4gICAgICAgICAgXCJlbWl0dGVyTGlmZXRpbWVcIjogLTEsXHJcbiAgICAgICAgICBcIm1heFBhcnRpY2xlc1wiOiA1MDAsXHJcbiAgICAgICAgICBcInBvc1wiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAwLFxyXG4gICAgICAgICAgICBcInlcIjogMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYWRkQXRCYWNrXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJzcGF3blR5cGVcIjogXCJjaXJjbGVcIixcclxuICAgICAgICAgIFwic3Bhd25DaXJjbGVcIjoge1xyXG4gICAgICAgICAgICBcInhcIjogMCxcclxuICAgICAgICAgICAgXCJ5XCI6IDAsXHJcbiAgICAgICAgICAgIFwiclwiOiAxMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgdGhpcy5lbWl0dGVyLnNwYXduUG9zLnggPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLndpZHRoLzI7XHJcbiAgICB0aGlzLmVtaXR0ZXIuc3Bhd25Qb3MueSA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIuaGVpZ2h0LzI7XHJcbiAgICB0aGlzLmVtaXR0ZXIuYXV0b1VwZGF0ZSA9IHRydWU7XHJcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCA9IHRydWU7XHJcbiAgfVxyXG4gIGJhY2tUb01lbnUoKSB7XHJcbiAgICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJNYWluTWVudVwiKTtcclxuICB9XHJcbiAgZGVzdHJveUxldmVsKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuZGVzdHJveSh7Y2hpbGRyZW46dHJ1ZX0pO1xyXG4gICAgdGhpcy5lbWl0dGVyLmRlc3Ryb3koKTtcclxuICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICB9XHJcbiAgdXBkYXRlRW1pdHRlcihweDpudW1iZXIsIHB5Om51bWJlcikge1xyXG4gICAgaWYgKChweCA8IDMwMCkgfHwgKHB4ID4gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC0yMDApIHx8XHJcbiAgICAgICAgKHB5IDwgMTAwKSB8fCAocHkgPiBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLmhlaWdodC0xMDApKSB7XHJcbiAgICAgIHRoaXMuZW1pdHRlci5zcGF3blBvcy54ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC8yO1xyXG4gICAgICB0aGlzLmVtaXR0ZXIuc3Bhd25Qb3MueSA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIuaGVpZ2h0LzI7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbWl0dGVyLnNwYXduUG9zLnggPSBweDtcclxuICAgICAgdGhpcy5lbWl0dGVyLnNwYXduUG9zLnkgPSBweTtcclxuICAgIH1cclxuICB9XHJcbiAgb25UaWNrID0gKGRlbHRhOm51bWJlcikgPT57XHJcbiAgICAvL3RoaXMuZW1pdHRlci51cGRhdGUodGhpcy50aWNrZXIuZGVsdGFUaW1lKTtcclxuICAgIHZhciBtb3VzZVBvcyA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIucGx1Z2lucy5pbnRlcmFjdGlvbi5tb3VzZS5nbG9iYWw7XHJcbiAgICB2YXIgcHggPSBtb3VzZVBvcy54O1xyXG4gICAgdmFyIHB5ID0gbW91c2VQb3MueTtcclxuICAgIHRoaXMudXBkYXRlRW1pdHRlcihweCxweSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCB7QmFzZUFwcH0gZnJvbSAnLi9tYWluJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUxldmVsIHtcclxuICByZWFkb25seSBsZXZlbF9uYW1lOiBzdHJpbmc7XHJcbiAgY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuICBjcmVhdGVMZXZlbCgpOnZvaWQ7XHJcbiAgZGVzdHJveUxldmVsKCk6dm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUJ1dHRvbiBleHRlbmRzIFBJWEkuR3JhcGhpY3Mge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgbm9ybWFsX2NvbG9yOiBudW1iZXI7XHJcbiAgaG92ZXJfY29sb3I6IG51bWJlcjtcclxuICBib3JkZXJfY29sb3I6IG51bWJlcjtcclxuICBib3JkZXJfcmFkaXVzOm51bWJlcjtcclxuICBjbGlja19jYWxsYmFjaz86IGFueTtcclxuICB3OiBudW1iZXI7XHJcbiAgaDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yIChsYWJlbDpzdHJpbmcsIG5vcm1hbF9jb2xvcjpudW1iZXIsIGhvdmVyX2NvbG9yOm51bWJlciwgYm9yZGVyX2NvbG9yOm51bWJlciwgd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyLCByYWRpdXM6bnVtYmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy53ID0gd2lkdGg7XHJcbiAgICB0aGlzLmggPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICB0aGlzLm5vcm1hbF9jb2xvciA9IG5vcm1hbF9jb2xvcjtcclxuICAgIHRoaXMuaG92ZXJfY29sb3IgPSBob3Zlcl9jb2xvcjtcclxuICAgIHRoaXMuYm9yZGVyX2NvbG9yID0gYm9yZGVyX2NvbG9yO1xyXG4gICAgdGhpcy5ib3JkZXJfcmFkaXVzID0gcmFkaXVzO1xyXG4gICAgdGhpcy5kcmF3VGV4dCgpO1xyXG5cclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuZHJhd0J1dHRvbih0aGlzLm5vcm1hbF9jb2xvcik7XHJcbiAgfVxyXG4gIGRyYXdCdXR0b24oY29sb3I6bnVtYmVyKSB7XHJcbiAgICB0aGlzLmJlZ2luRmlsbChjb2xvcik7XHJcbiAgICB0aGlzLmxpbmVTdHlsZSh0aGlzLmJvcmRlcl9yYWRpdXMsIHRoaXMuYm9yZGVyX2NvbG9yLCAxKTtcclxuICAgIHRoaXMuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIHRoaXMudywgdGhpcy5oLCAzKTtcclxuICAgIHRoaXMuZW5kRmlsbCgpO1xyXG4gIH1cclxuICBkcmF3VGV4dCgpIHtcclxuICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICBmb250IDogJ2JvbGQgMThweCBBcmlhbCcsXHJcbiAgICAgICAgZmlsbCA6IDB4RkZGRkZGLFxyXG4gICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICBzdHJva2UgOiB0aGlzLmJvcmRlcl9jb2xvcixcclxuICAgICAgICBzdHJva2VUaGlja25lc3MgOiA1XHJcbiAgICB9XHJcbiAgICB2YXIgdGV4dCA9IG5ldyBQSVhJLlRleHQodGhpcy5sYWJlbCwgc3R5bGUpO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0ZXh0KTtcclxuICAgIHRleHQueCA9IHRoaXMudy8yIC0gdGV4dC53aWR0aC8yO1xyXG4gICAgdGV4dC55ID0gdGhpcy5oLzIgLSB0ZXh0LmhlaWdodC8yO1xyXG4gIH1cclxuICBzZXRDbGlja0NhbGxiYWNrKGNhbGxiYWNrOkZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLmNsaWNrX2NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgfVxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5vbigndGFwJywgdGhpcy5vbkNsaWNrKTtcclxuICAgIHRoaXMub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5vbkhvdmVyKTtcclxuICAgIHRoaXMub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uSG92ZXIpO1xyXG4gICAgdGhpcy5vbigncG9pbnRlcm91dCcsIHRoaXMub25FeGl0KTtcclxuICAgIHRoaXMub24oJ3RvdWNoZW5kb3V0c2lkZScsIHRoaXMub25FeGl0KTtcclxuICAgIHRoaXMub24oJ3RvdWNoZW5kJywgdGhpcy5vbkV4aXQpO1xyXG4gIH1cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuICB9XHJcbiAgb25Ib3ZlciA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIHRoaXMuZHJhd0J1dHRvbih0aGlzLmhvdmVyX2NvbG9yKTtcclxuICB9XHJcbiAgb25FeGl0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gICAgdGhpcy5kcmF3QnV0dG9uKHRoaXMubm9ybWFsX2NvbG9yKTtcclxuICB9XHJcbiAgb25DbGljayA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmNsaWNrX2NhbGxiYWNrKVxyXG4gICAgICB0aGlzLmNsaWNrX2NhbGxiYWNrKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmxpcHBhYmxlU3ByaXRlIGV4dGVuZHMgUElYSS5TcHJpdGUge1xyXG4gIGZsaXBfdGltZTpudW1iZXIgPSAyMDAwO1xyXG4gIGZsaXBfaGVpZ2h0Om51bWJlciA9IDEwLjA7XHJcbiAgZmxpcF9zbGlkZV94Om51bWJlciA9IDEwMC4wO1xyXG4gIGZsaXBfcm90YXRpb246bnVtYmVyID0gMC4wO1xyXG4gIGZsaXBfc2xpZGVfeTpudW1iZXIgPSAwLjA7XHJcbiAgZmxpcF9zY2FsZTpib29sZWFuID0gdHJ1ZTtcclxuICBzaWRlczpQSVhJLlRleHR1cmVbXTtcclxuICB0aWNrZXI6UElYSS50aWNrZXIuVGlja2VyO1xyXG4gIGJhc2Vfc2NhbGU6bnVtYmVyID0gMS4wO1xyXG4gIHNpZGU6bnVtYmVyID0gMDtcclxuICBwcml2YXRlIG9yaWdfeDpudW1iZXI7XHJcbiAgcHJpdmF0ZSBvcmlnX3k6bnVtYmVyO1xyXG4gIHByaXZhdGUgZmxpcF9jb3VudGVyOm51bWJlciA9IDAuMDtcclxuICBjb25zdHJ1Y3Rvcih0ZXh0dXJlPzpQSVhJLlRleHR1cmUgfCB1bmRlZmluZWQsIGJhY2tmYWNlPzpQSVhJLlRleHR1cmUgfCB1bmRlZmluZWQpIHtcclxuICAgIHN1cGVyKHRleHR1cmUpO1xyXG5cclxuICAgIHRoaXMudGlja2VyID0gbmV3IFBJWEkudGlja2VyLlRpY2tlcigpO1xyXG4gICAgdGhpcy50aWNrZXIuYXV0b1N0YXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpY2tlci5zcGVlZCA9IDEuMDtcclxuXHJcbiAgICB0aGlzLnBpdm90LnggPSB0aGlzLndpZHRoLzI7XHJcbiAgICB0aGlzLnBpdm90LnkgPSB0aGlzLmhlaWdodC8yO1xyXG5cclxuICAgIHRoaXMuc2lkZXMgPSBbXTtcclxuICAgIGlmICh0ZXh0dXJlKVxyXG4gICAgICB0aGlzLnNpZGVzLnB1c2godGV4dHVyZSk7XHJcbiAgICBpZiAoYmFja2ZhY2UpXHJcbiAgICAgIHRoaXMuc2lkZXMucHVzaChiYWNrZmFjZSlcclxuXHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMub24oJ2NsaWNrJywgdGhpcy5mbGlwKTtcclxuICAgIHRoaXMub24oJ3RhcCcsIHRoaXMuZmxpcCk7XHJcbiAgfVxyXG4gIGZsaXA9KCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIlN0YXJ0ZWQgZmxpcC5cIik7XHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLmZsaXBfY291bnRlciA9IDAuMDtcclxuICAgIHRoaXMudGlja2VyLnN0YXJ0KCk7XHJcbiAgICB0aGlzLmJhc2Vfc2NhbGUgPSB0aGlzLnNjYWxlLng7XHJcbiAgICB0aGlzLm9yaWdfeCA9IHRoaXMueDtcclxuICAgIHRoaXMub3JpZ195ID0gdGhpcy55O1xyXG4gICAgdGhpcy5zaWRlID0gKHRoaXMuc2lkZSArIDEpJSB0aGlzLnNpZGVzLmxlbmd0aFxyXG4gICAgdGhpcy50aWNrZXIuYWRkKHRoaXMuZmxpcExvZ2ljKTtcclxuICB9XHJcbiAgZmxpcExvZ2ljPShkZWx0YTpudW1iZXIpPT57XHJcbiAgICB0aGlzLmZsaXBfY291bnRlciArPSB0aGlzLnRpY2tlci5lbGFwc2VkTVMgKiB0aGlzLnRpY2tlci5zcGVlZDtcclxuICAgIHZhciBwZXJjID0gdGhpcy5mbGlwX2NvdW50ZXIgLyB0aGlzLmZsaXBfdGltZTtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy50aWNrZXIuZWxhcHNlZE1TLFwiIC0gXCIsIHRoaXMuZmxpcF9jb3VudGVyKTtcclxuICAgIC8veFxyXG4gICAgaWYgKHRoaXMuZmxpcF9zbGlkZV94ICE9IDAuMCl7XHJcbiAgICAgIHRoaXMueCA9IGxlcnAodGhpcy5vcmlnX3gsIHRoaXMub3JpZ194K3RoaXMuZmxpcF9zbGlkZV94LCBwZXJjKTtcclxuICAgIH1cclxuICAgIC8vcm90XHJcbiAgICBpZiAodGhpcy5mbGlwX3JvdGF0aW9uICE9IDAuMCl7XHJcbiAgICAgIHRoaXMucm90YXRpb24gPSBsZXJwKDAsdGhpcy5mbGlwX3JvdGF0aW9uLHBlcmMpO1xyXG4gICAgfVxyXG4gICAgLy95XHJcbiAgICBpZiAocGVyYyA8PSAwLjUpIHtcclxuICAgICAgLy9nb2luZyB1cCBhbmQgc2hyaW5raW5nXHJcbiAgICAgIGlmICh0aGlzLmZsaXBfc2xpZGVfeSAhPSAwKVxyXG4gICAgICAgIHRoaXMueSA9IGxlcnAodGhpcy5vcmlnX3ksIHRoaXMub3JpZ195LXRoaXMuZmxpcF9zbGlkZV95LCBNYXRoLnNxcnQocGVyYyoyKSk7XHJcbiAgICAgIGlmICh0aGlzLmZsaXBfc2NhbGUpXHJcbiAgICAgICAgdGhpcy5zY2FsZS54ID0gbGVycCh0aGlzLmJhc2Vfc2NhbGUsIDAuMSwgcGVyYyoyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuc2lkZXNbdGhpcy5zaWRlXTtcclxuICAgICAgLy9nb2luZyBkb3duIGFuZCBleHBhbmRpbmdcclxuICAgICAgaWYgKHRoaXMuZmxpcF9zbGlkZV95ICE9IDApXHJcbiAgICAgICAgdGhpcy55ID0gbGVycCh0aGlzLm9yaWdfeS10aGlzLmZsaXBfc2xpZGVfeSwgdGhpcy5vcmlnX3ksIE1hdGgucG93KHBlcmMqMiAtIDEuMCwyKSk7XHJcbiAgICAgIGlmICh0aGlzLmZsaXBfc2NhbGUpXHJcbiAgICAgICAgdGhpcy5zY2FsZS54ID0gbGVycCgwLjEsIHRoaXMuYmFzZV9zY2FsZSwgcGVyYyoyIC0gMS4wKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZsaXBfY291bnRlciA+PSB0aGlzLmZsaXBfdGltZSkge1xyXG4gICAgICBpZiAodGhpcy5mbGlwX3NjYWxlKVxyXG4gICAgICAgIHRoaXMuc2NhbGUueCA9IHRoaXMuYmFzZV9zY2FsZTtcclxuICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMuZmxpcF9yb3RhdGlvbjtcclxuICAgICAgdGhpcy54ID0gdGhpcy5vcmlnX3grdGhpcy5mbGlwX3NsaWRlX3g7XHJcbiAgICAgIHRoaXMueSA9IHRoaXMub3JpZ195O1xyXG4gICAgICB0aGlzLnRpY2tlci5yZW1vdmUodGhpcy5mbGlwTG9naWMpO1xyXG4gICAgICB0aGlzLnRpY2tlci5zdG9wKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAvL3RoaXMucm90YXRpb24gPSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9iYXNpYyBsZXJwIGZ1bnRpb24uXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGExOm51bWJlcixhMjpudW1iZXIsdDpudW1iZXIpe1xyXG4gIHJldHVybiBhMSooMS10KSArIGEyKnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPdXRwdXRDb250ZW50IHtcclxuICB0eXBlOnN0cmluZztcclxuICBjb250ZW50OnN0cmluZztcclxuICBvcHRpb25zPzpvYmplY3QgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW1hZ2VNaXhpbiBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50VG9QcmludDpPdXRwdXRDb250ZW50W10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBsZXQgbGFzdF94Om51bWJlciA9IDA7XHJcbiAgICBsZXQgbGFzdF95Om51bWJlciA9IDA7XHJcbiAgICBmb3IgKHZhciBjb250ZW50IG9mIGNvbnRlbnRUb1ByaW50KSB7XHJcbiAgICAgIGxldCBvYmo6UElYSS5TcHJpdGU7XHJcbiAgICAgIGlmIChjb250ZW50LnR5cGUgPT0gXCJUZXh0XCIpXHJcbiAgICAgICAgb2JqID0gdGhpcy5jcmVhdGVUZXh0KGNvbnRlbnQpO1xyXG4gICAgICBlbHNlIGlmIChjb250ZW50LnR5cGUgPT0gXCJJbWFnZVwiKVxyXG4gICAgICAgIG9iaiA9IHRoaXMuY3JlYXRlSW1hZ2UoY29udGVudCk7XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVGV4dEltYWdlTWl4aW46OmNvbnN0cnVjdG9yIC0gQ2Fubm90IGNyZWF0ZSBjb250ZW50IG9mIHR5cGU6IFwiLGNvbnRlbnQudHlwZSk7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgb2JqLnBpdm90LnkgPSBvYmouaGVpZ2h0XHJcbiAgICAgIG9iai5waXZvdC54ID0gMDtcclxuICAgICAgb2JqLnggPSBsYXN0X3g7XHJcbiAgICAgIG9iai55ID0gbGFzdF95O1xyXG5cclxuICAgICAgbGFzdF94ICs9IG9iai53aWR0aDtcclxuICAgICAgdGhpcy5hZGRDaGlsZChvYmopO1xyXG4gICAgfVxyXG4gIH1cclxuICBjcmVhdGVUZXh0KGNvbnRlbnQ6T3V0cHV0Q29udGVudCk6UElYSS5UZXh0IHtcclxuICAgIHJldHVybiBuZXcgUElYSS5UZXh0KGNvbnRlbnQuY29udGVudCwgY29udGVudC5vcHRpb25zKTtcclxuICB9XHJcbiAgY3JlYXRlSW1hZ2UoY29udGVudDpPdXRwdXRDb250ZW50KTpQSVhJLlNwcml0ZSB7XHJcbiAgICByZXR1cm4gbmV3IFBJWEkuU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoY29udGVudC5jb250ZW50KSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFuaXNoaW5nT2JqZWN0IHtcclxuICB0aW1lX3RvX2ZhZGU6bnVtYmVyID0gMTAwMDA7XHJcbiAgZmFkZV90aW1lOm51bWJlciA9IDEwMDA7XHJcbiAgcHJpdmF0ZSBzdGFydF90aW1lOm51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBmYWRlX2NvdW50ZXI6bnVtYmVyID0gMDtcclxuICB0aWNrZXI6UElYSS50aWNrZXIuVGlja2VyO1xyXG4gIG9iajogUElYSS5Db250YWluZXI7XHJcbiAgY29uc3RydWN0b3Iob2JqOlBJWEkuQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLnRpY2tlci5UaWNrZXIoKTtcclxuICAgIHRoaXMudGlja2VyLmF1dG9TdGFydCA9IHRydWU7XHJcbiAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG4gICAgdGhpcy50aWNrZXIuYWRkKHRoaXMudGljVGFjKTtcclxuICAgIHRoaXMub2JqID0gb2JqO1xyXG4gICAgdGhpcy5mYWRlX2NvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5zdGFydF90aW1lID0gMDtcclxuICB9XHJcbiAgdGljVGFjID0gKGRlbHRhOm51bWJlcikgPT4ge1xyXG4gICAgdGhpcy5zdGFydF90aW1lICs9IHRoaXMudGlja2VyLmVsYXBzZWRNUztcclxuICAgIGlmICh0aGlzLnN0YXJ0X3RpbWUgPiB0aGlzLnRpbWVfdG9fZmFkZSArIHRoaXMuZmFkZV90aW1lKSB7XHJcbiAgICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICAgICAgdGhpcy5vYmouZGVzdHJveSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc3RhcnRfdGltZSA+IHRoaXMudGltZV90b19mYWRlKSB7XHJcbiAgICAgICAgdGhpcy5mYWRlX2NvdW50ZXIgKz0gdGhpcy50aWNrZXIuZWxhcHNlZE1TO1xyXG4gICAgICAgIHZhciBhbHBoYSA9IGxlcnAoMS4wLCAwLjAsIHRoaXMuZmFkZV9jb3VudGVyL3RoaXMuZmFkZV90aW1lKTtcclxuICAgICAgICB0aGlzLm9iai5hbHBoYSA9IGFscGhhO1xyXG4gICAgICAgIHRoaXMub2JqLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQ6UElYSS5TcHJpdGUpIHtcclxuICAgICAgICAgIGNoaWxkLmFscGhhID0gYWxwaGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCAqIGFzIFRPT0xTIGZyb20gJy4vc3VwcG9ydCc7XHJcbmltcG9ydCB7QmFzZUFwcH0gZnJvbSAnLi9tYWluJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW1hZ2VMZXZlbCBpbXBsZW1lbnRzIFRPT0xTLkdhbWVMZXZlbCB7XHJcbiAgbGV2ZWxfbmFtZTpzdHJpbmcgPSBcIlRleHRJbWFnZVwiO1xyXG4gIGNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgdGlja2VyOiBQSVhJLnRpY2tlci5UaWNrZXI7XHJcbiAgaW1hZ2VzX25hbWVfYXJyYXk6IHN0cmluZ1tdO1xyXG4gIHRpbWVfdG9fY3JlYXRlOm51bWJlciA9IDIwMDA7XHJcbiAgcHJpdmF0ZSBjb3VudGVyOm51bWJlciA9IDA7XHJcbiAgbWF4X2ZvbnRfc2l6ZTpudW1iZXIgPSAzMDtcclxuICBtaW5fZm9udF9zaXplOm51bWJlciA9IDEyO1xyXG4gIGNvbnRlbnRfc2l6ZTpudW1iZXIgPSAzO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aWNrZXIgPSBuZXcgUElYSS50aWNrZXIuVGlja2VyKCk7XHJcbiAgICB0aGlzLnRpY2tlci5hdXRvU3RhcnQgPSBmYWxzZTtcclxuICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICAgIHRoaXMuaW1hZ2VzX25hbWVfYXJyYXkgPSBbXCJwaWVjZVdoaXRlX2JvcmRlcjAwLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwMS5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDIucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjAzLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwNC5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDUucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjA2LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwNy5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDgucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjA5LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxMC5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTEucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjEyLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxMy5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTQucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjE1LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxNi5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTcucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjE4LnBuZ1wiXTtcclxuICB9XHJcbiAgY3JlYXRlTGV2ZWwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRleHQgKyBJbWFnZSBjcmVhdGlvbiBzdGFydGVkLlwiKTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnRpY2tlci5hZGQodGhpcy5vblRpY2spO1xyXG4gICAgdGhpcy50aWNrZXIuc3RhcnQoKTtcclxuXHJcbiAgICAvL2NyZWF0ZSBiYWNrIG9wdGlvblxyXG4gICAgdmFyIG1lbnVfYmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgbWVudV9iZy5iZWdpbkZpbGwoMHhFRUVFRUUpO1xyXG4gICAgbWVudV9iZy5saW5lU3R5bGUoMiwgMHhkZGRkZkYsIDEpO1xyXG4gICAgbWVudV9iZy5kcmF3Um91bmRlZFJlY3QoMTAwLCAxMDAsIDIwMCwgMTAwLCA1KTtcclxuICAgIG1lbnVfYmcuZW5kRmlsbCgpO1xyXG5cclxuICAgIHZhciBtYWluX21lbnVfYnRuID0gbmV3IFRPT0xTLlNpbXBsZUJ1dHRvbignQmFjaycsIDB4MDBhOWZmLCAweDk5ZDlmZiwgMHgwMDY2YWEsIDE1MCwgIDUwLCAzKTtcclxuICAgIG1haW5fbWVudV9idG4ueCA9IDEyNTtcclxuICAgIG1haW5fbWVudV9idG4ueSA9IDEyNTtcclxuICAgIG1lbnVfYmcuYWRkQ2hpbGQobWFpbl9tZW51X2J0bik7XHJcbiAgICBtYWluX21lbnVfYnRuLnNldENsaWNrQ2FsbGJhY2sodGhpcy5iYWNrVG9NZW51KTtcclxuICAgIG1haW5fbWVudV9idG4uYWN0aXZhdGUoKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG1lbnVfYmcpO1xyXG4gICAgdGhpcy5jb3VudGVyID0gdGhpcy50aW1lX3RvX2NyZWF0ZTtcclxuICB9XHJcbiAgYmFja1RvTWVudSgpIHtcclxuICAgICAgQmFzZUFwcC5pbnN0YW5jZS5jaGFuZ2VMZXZlbChcIk1haW5NZW51XCIpO1xyXG4gIH1cclxuICBkZXN0cm95TGV2ZWwoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5kZXN0cm95KHtjaGlsZHJlbjp0cnVlfSk7XHJcbiAgICB0aGlzLnRpY2tlci5zdG9wKCk7XHJcbiAgfVxyXG4gIG9uVGljaz0oKSA9PntcclxuICAgIHRoaXMuY291bnRlciArPSB0aGlzLnRpY2tlci5lbGFwc2VkTVM7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID4gdGhpcy50aW1lX3RvX2NyZWF0ZSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZVJhbmRvbSgpO1xyXG4gICAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBjcmVhdGVSYW5kb20oKSB7XHJcbiAgICBsZXQgY29udGVudDpUT09MUy5PdXRwdXRDb250ZW50W10gPSBbXTtcclxuICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuY29udGVudF9zaXplOyBpKyspIHtcclxuICAgICAgbGV0IGNoYW5jZTpudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICBsZXQgbmV3X2NvbnRlbnQ6VE9PTFMuT3V0cHV0Q29udGVudCA9IG5ldyBUT09MUy5PdXRwdXRDb250ZW50KCk7XHJcbiAgICAgIGlmIChjaGFuY2UgPiAwLjUpIHtcclxuICAgICAgICAvL1RleHRcclxuICAgICAgICBuZXdfY29udGVudC50eXBlID0gXCJUZXh0XCI7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHtcclxuICAgICAgICAgIGZvbnRTaXplOiBNYXRoLnJhbmRvbSgpKih0aGlzLm1heF9mb250X3NpemUtdGhpcy5taW5fZm9udF9zaXplKSt0aGlzLm1pbl9mb250X3NpemUsXHJcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgICAgICBmaWxsOiBcIiNGRkZGRkZcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGNoYW5jZSA8IDAuMSlcclxuICAgICAgICAgIHN0eWxlLmZvbnRXZWlnaHQ9XCJib2xkXCI7XHJcbiAgICAgICAgaWYgKGNoYW5jZSA+IDAuNClcclxuICAgICAgICAgIHN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcblxyXG4gICAgICAgIGlmIChjaGFuY2UgPiAwLjc1KSB7XHJcbiAgICAgICAgICBpZiAoY2hhbmNlIDwgMC44NSlcclxuICAgICAgICAgICAgc3R5bGUuZmlsbCA9IDB4MzMzMzMzO1xyXG4gICAgICAgICAgZWxzZSBpZiAoY2hhbmNlIDwgMC45NSlcclxuICAgICAgICAgICAgc3R5bGUuZmlsbCA9IDB4NjY2NjY2O1xyXG4gICAgICAgICAgZWxzZSBpZiAoY2hhbmNlID4gMC45NSlcclxuICAgICAgICAgICAgc3R5bGUuZmlsbCA9IFsweDAwMDAwMCwweDAwMzNhOV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld19jb250ZW50LmNvbnRlbnQgPSBcIkFob3khXCI7XHJcbiAgICAgICAgbmV3X2NvbnRlbnQub3B0aW9ucyA9IHN0eWxlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vSW1hZ2VcclxuICAgICAgICBuZXdfY29udGVudC50eXBlID0gXCJJbWFnZVwiO1xyXG4gICAgICAgIG5ld19jb250ZW50LmNvbnRlbnQgPSB0aGlzLmltYWdlc19uYW1lX2FycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLmltYWdlc19uYW1lX2FycmF5Lmxlbmd0aC0wLjEpKV07XHJcbiAgICAgIH1cclxuICAgICAgY29udGVudC5wdXNoKG5ld19jb250ZW50KTtcclxuICAgIH1cclxuICAgIC8vTWV0YS1kYXRhIE9LLCByZWFsIGNyZWF0aW9uLlxyXG4gICAgdmFyIG5ld19vYmogPSBuZXcgVE9PTFMuVGV4dEltYWdlTWl4aW4oY29udGVudCk7XHJcbiAgICBuZXdfb2JqLnggPSAzMDAgKyBNYXRoLnJhbmRvbSgpKihCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLndpZHRoIC0gMzUwIC0gbmV3X29iai53aWR0aCk7XHJcbiAgICBuZXdfb2JqLnkgPSA1MCArIE1hdGgucmFuZG9tKCkqKEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIuaGVpZ2h0IC0gMjAwIC0gbmV3X29iai5oZWlnaHQpO1xyXG4gICAgLy9vYmogdG8gdmFuaXNoIGFmdGVyIHNvbWUgdGltZS5cclxuICAgIG5ldyBUT09MUy5WYW5pc2hpbmdPYmplY3QobmV3X29iaik7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChuZXdfb2JqKTtcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFBJWEk7Il0sInNvdXJjZVJvb3QiOiIifQ==