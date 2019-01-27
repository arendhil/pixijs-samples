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
        this.onTick = function (delta) {
            //this.emitter.update(this.ticker.deltaTime);
            var mousePos = main_1.BaseApp.instance.renderer.plugins.interaction.mouse.global;
            var px = mousePos.x;
            var py = mousePos.y;
            _this.updateEmitter(px, py);
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
    };
    ParticlesLevel.prototype.backToMenu = function () {
        main_1.BaseApp.instance.changeLevel("MainMenu");
    };
    ParticlesLevel.prototype.destroyLevel = function () {
        this.container.destroy({ children: true });
        this.emitter.destroy();
        this.ticker.stop();
    };
    ParticlesLevel.prototype.updateEmitter = function (px, py) {
        if ((px < 300) || (px > main_1.BaseApp.instance.renderer.width - 200) ||
            (py < 100) || (py > main_1.BaseApp.instance.renderer.height - 100)) {
            this.emitter.spawnPos.x = main_1.BaseApp.instance.renderer.width / 2;
            this.emitter.spawnPos.y = main_1.BaseApp.instance.renderer.height / 2;
        }
        else {
            this.emitter.spawnPos.x = px;
            this.emitter.spawnPos.y = py;
        }
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
        this.time_to_create = 2000;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BpeGktcGFydGljbGVzL2Rpc3QvcGl4aS1wYXJ0aWNsZXMubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkc19sZXZlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW5fbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFydGljbGVzX2xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXBwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0X2ltYWdlX2xldmVsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlBJWElcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvRztZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0I7UUFDRCw4QkFBOEI7UUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLGNBQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLGNBQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pGLGdDQUFnQztRQUNoQyxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQztBQWpHWSx3Q0FBYzs7Ozs7Ozs7Ozs7O0FDSjNCLHNCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCIvKiFcbiAqIHBpeGktcGFydGljbGVzIC0gdjMuMS4wXG4gKiBDb21waWxlZCBXZWQsIDI5IEF1ZyAyMDE4IDE1OjQ3OjQ2IFVUQ1xuICpcbiAqIHBpeGktcGFydGljbGVzIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqL1xuIWZ1bmN0aW9uKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgZTtlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxlLnBpeGlQYXJ0aWNsZXM9dCgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUsaSxzKXtmdW5jdGlvbiBhKG4sbyl7aWYoIWlbbl0pe2lmKCFlW25dKXt2YXIgaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFvJiZoKXJldHVybiBoKG4sITApO2lmKHIpcmV0dXJuIHIobiwhMCk7dmFyIGw9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIituK1wiJ1wiKTt0aHJvdyBsLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsbH12YXIgcD1pW25dPXtleHBvcnRzOnt9fTtlW25dWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHQpe3ZhciBpPWVbbl1bMV1bdF07cmV0dXJuIGEoaXx8dCl9LHAscC5leHBvcnRzLHQsZSxpLHMpfXJldHVybiBpW25dLmV4cG9ydHN9Zm9yKHZhciByPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsbj0wO248cy5sZW5ndGg7bisrKWEoc1tuXSk7cmV0dXJuIGF9cmV0dXJuIHR9KCkoezE6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjt2YXIgcz10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIGkgaW4gZSllLmhhc093blByb3BlcnR5KGkpJiYodFtpXT1lW2ldKX07cmV0dXJuIGZ1bmN0aW9uKGUsaSl7ZnVuY3Rpb24gcygpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsaSksZS5wcm90b3R5cGU9bnVsbD09PWk/T2JqZWN0LmNyZWF0ZShpKToocy5wcm90b3R5cGU9aS5wcm90b3R5cGUsbmV3IHMpfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KFwiLi9QYXJ0aWNsZVwiKSxyPVBJWEkuVGV4dHVyZSxuPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSl7dmFyIGk9dC5jYWxsKHRoaXMsZSl8fHRoaXM7cmV0dXJuIGkudGV4dHVyZXM9bnVsbCxpLmR1cmF0aW9uPTAsaS5mcmFtZXJhdGU9MCxpLmVsYXBzZWQ9MCxpLmxvb3A9ITEsaX1yZXR1cm4gcyhlLHQpLGUucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oKXt0aGlzLlBhcnRpY2xlX2luaXQoKSx0aGlzLmVsYXBzZWQ9MCx0aGlzLmZyYW1lcmF0ZTwwJiYodGhpcy5kdXJhdGlvbj10aGlzLm1heExpZmUsdGhpcy5mcmFtZXJhdGU9dGhpcy50ZXh0dXJlcy5sZW5ndGgvdGhpcy5kdXJhdGlvbil9LGUucHJvdG90eXBlLmFwcGx5QXJ0PWZ1bmN0aW9uKHQpe3RoaXMudGV4dHVyZXM9dC50ZXh0dXJlcyx0aGlzLmZyYW1lcmF0ZT10LmZyYW1lcmF0ZSx0aGlzLmR1cmF0aW9uPXQuZHVyYXRpb24sdGhpcy5sb29wPXQubG9vcH0sZS5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuUGFydGljbGVfdXBkYXRlKHQpO2lmKGU+PTApe3RoaXMuZWxhcHNlZCs9dCx0aGlzLmVsYXBzZWQ+dGhpcy5kdXJhdGlvbiYmKHRoaXMubG9vcD90aGlzLmVsYXBzZWQ9dGhpcy5lbGFwc2VkJXRoaXMuZHVyYXRpb246dGhpcy5lbGFwc2VkPXRoaXMuZHVyYXRpb24tMWUtNik7dmFyIGk9dGhpcy5lbGFwc2VkKnRoaXMuZnJhbWVyYXRlKzFlLTd8MDt0aGlzLnRleHR1cmU9dGhpcy50ZXh0dXJlc1tpXXx8UElYSS5UZXh0dXJlLkVNUFRZfXJldHVybiBlfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5QYXJ0aWNsZV9kZXN0cm95KCksdGhpcy50ZXh0dXJlcz1udWxsfSxlLnBhcnNlQXJ0PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxpLHMsYSxuLG89W10saD0wO2g8dC5sZW5ndGg7KytoKXtlPXRbaF0sb1toXT1pPXt9LGkudGV4dHVyZXM9bj1bXSxzPWUudGV4dHVyZXM7Zm9yKHZhciBsPTA7bDxzLmxlbmd0aDsrK2wpaWYoXCJzdHJpbmdcIj09dHlwZW9mKGE9c1tsXSkpbi5wdXNoKHIuZnJvbUltYWdlKGEpKTtlbHNlIGlmKGEgaW5zdGFuY2VvZiByKW4ucHVzaChhKTtlbHNle3ZhciBwPWEuY291bnR8fDE7Zm9yKGE9XCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dHVyZT9yLmZyb21JbWFnZShhLnRleHR1cmUpOmEudGV4dHVyZTtwPjA7LS1wKW4ucHVzaChhKX1cIm1hdGNoTGlmZVwiPT1lLmZyYW1lcmF0ZT8oaS5mcmFtZXJhdGU9LTEsaS5kdXJhdGlvbj0wLGkubG9vcD0hMSk6KGkubG9vcD0hIWUubG9vcCxpLmZyYW1lcmF0ZT1lLmZyYW1lcmF0ZT4wP2UuZnJhbWVyYXRlOjYwLGkuZHVyYXRpb249bi5sZW5ndGgvaS5mcmFtZXJhdGUpfXJldHVybiBvfSxlfShhLmRlZmF1bHQpO2kuZGVmYXVsdD1ufSx7XCIuL1BhcnRpY2xlXCI6M31dLDI6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz10KFwiLi9QYXJ0aWNsZVV0aWxzXCIpLGE9dChcIi4vUGFydGljbGVcIikscj10KFwiLi9Qcm9wZXJ0eU5vZGVcIiksbj1QSVhJLnRpY2tlci5zaGFyZWQsbz1uZXcgUElYSS5Qb2ludCxoPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsaSl7dGhpcy5fcGFydGljbGVDb25zdHJ1Y3Rvcj1hLmRlZmF1bHQsdGhpcy5wYXJ0aWNsZUltYWdlcz1udWxsLHRoaXMuc3RhcnRBbHBoYT1udWxsLHRoaXMuc3RhcnRTcGVlZD1udWxsLHRoaXMubWluaW11bVNwZWVkTXVsdGlwbGllcj0xLHRoaXMuYWNjZWxlcmF0aW9uPW51bGwsdGhpcy5tYXhTcGVlZD1OYU4sdGhpcy5zdGFydFNjYWxlPW51bGwsdGhpcy5taW5pbXVtU2NhbGVNdWx0aXBsaWVyPTEsdGhpcy5zdGFydENvbG9yPW51bGwsdGhpcy5taW5MaWZldGltZT0wLHRoaXMubWF4TGlmZXRpbWU9MCx0aGlzLm1pblN0YXJ0Um90YXRpb249MCx0aGlzLm1heFN0YXJ0Um90YXRpb249MCx0aGlzLm5vUm90YXRpb249ITEsdGhpcy5taW5Sb3RhdGlvblNwZWVkPTAsdGhpcy5tYXhSb3RhdGlvblNwZWVkPTAsdGhpcy5wYXJ0aWNsZUJsZW5kTW9kZT0wLHRoaXMuY3VzdG9tRWFzZT1udWxsLHRoaXMuZXh0cmFEYXRhPW51bGwsdGhpcy5fZnJlcXVlbmN5PTEsdGhpcy5zcGF3bkNoYW5jZT0xLHRoaXMubWF4UGFydGljbGVzPTFlMyx0aGlzLmVtaXR0ZXJMaWZldGltZT0tMSx0aGlzLnNwYXduUG9zPW51bGwsdGhpcy5zcGF3blR5cGU9bnVsbCx0aGlzLl9zcGF3bkZ1bmM9bnVsbCx0aGlzLnNwYXduUmVjdD1udWxsLHRoaXMuc3Bhd25DaXJjbGU9bnVsbCx0aGlzLnBhcnRpY2xlc1BlcldhdmU9MSx0aGlzLnBhcnRpY2xlU3BhY2luZz0wLHRoaXMuYW5nbGVTdGFydD0wLHRoaXMucm90YXRpb249MCx0aGlzLm93bmVyUG9zPW51bGwsdGhpcy5fcHJldkVtaXR0ZXJQb3M9bnVsbCx0aGlzLl9wcmV2UG9zSXNWYWxpZD0hMSx0aGlzLl9wb3NDaGFuZ2VkPSExLHRoaXMuX3BhcmVudD1udWxsLHRoaXMuYWRkQXRCYWNrPSExLHRoaXMucGFydGljbGVDb3VudD0wLHRoaXMuX2VtaXQ9ITEsdGhpcy5fc3Bhd25UaW1lcj0wLHRoaXMuX2VtaXR0ZXJMaWZlPS0xLHRoaXMuX2FjdGl2ZVBhcnRpY2xlc0ZpcnN0PW51bGwsdGhpcy5fYWN0aXZlUGFydGljbGVzTGFzdD1udWxsLHRoaXMuX3Bvb2xGaXJzdD1udWxsLHRoaXMuX29yaWdDb25maWc9bnVsbCx0aGlzLl9vcmlnQXJ0PW51bGwsdGhpcy5fYXV0b1VwZGF0ZT0hMSx0aGlzLl9kZXN0cm95V2hlbkNvbXBsZXRlPSExLHRoaXMuX2NvbXBsZXRlQ2FsbGJhY2s9bnVsbCx0aGlzLnBhcmVudD10LGUmJmkmJnRoaXMuaW5pdChlLGkpLHRoaXMucmVjeWNsZT10aGlzLnJlY3ljbGUsdGhpcy51cGRhdGU9dGhpcy51cGRhdGUsdGhpcy5yb3RhdGU9dGhpcy5yb3RhdGUsdGhpcy51cGRhdGVTcGF3blBvcz10aGlzLnVwZGF0ZVNwYXduUG9zLHRoaXMudXBkYXRlT3duZXJQb3M9dGhpcy51cGRhdGVPd25lclBvc31yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZnJlcXVlbmN5XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mcmVxdWVuY3l9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9mcmVxdWVuY3k9XCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+MD90OjF9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicGFydGljbGVDb25zdHJ1Y3RvclwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcGFydGljbGVDb25zdHJ1Y3Rvcn0sc2V0OmZ1bmN0aW9uKHQpe2lmKHQhPXRoaXMuX3BhcnRpY2xlQ29uc3RydWN0b3Ipe3RoaXMuX3BhcnRpY2xlQ29uc3RydWN0b3I9dCx0aGlzLmNsZWFudXAoKTtmb3IodmFyIGU9dGhpcy5fcG9vbEZpcnN0O2U7ZT1lLm5leHQpZS5kZXN0cm95KCk7dGhpcy5fcG9vbEZpcnN0PW51bGwsdGhpcy5fb3JpZ0NvbmZpZyYmdGhpcy5fb3JpZ0FydCYmdGhpcy5pbml0KHRoaXMuX29yaWdBcnQsdGhpcy5fb3JpZ0NvbmZpZyl9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInBhcmVudFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcGFyZW50fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5jbGVhbnVwKCksdGhpcy5fcGFyZW50PXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbih0LGUpe2lmKHQmJmUpe3RoaXMuY2xlYW51cCgpLHRoaXMuX29yaWdDb25maWc9ZSx0aGlzLl9vcmlnQXJ0PXQsdD1BcnJheS5pc0FycmF5KHQpP3Quc2xpY2UoKTpbdF07dmFyIGk9dGhpcy5fcGFydGljbGVDb25zdHJ1Y3Rvcjt0aGlzLnBhcnRpY2xlSW1hZ2VzPWkucGFyc2VBcnQ/aS5wYXJzZUFydCh0KTp0LGUuYWxwaGE/dGhpcy5zdGFydEFscGhhPXIuZGVmYXVsdC5jcmVhdGVMaXN0KGUuYWxwaGEpOnRoaXMuc3RhcnRBbHBoYT1uZXcgci5kZWZhdWx0KDEsMCksZS5zcGVlZD8odGhpcy5zdGFydFNwZWVkPXIuZGVmYXVsdC5jcmVhdGVMaXN0KGUuc3BlZWQpLHRoaXMubWluaW11bVNwZWVkTXVsdGlwbGllcj1lLnNwZWVkLm1pbmltdW1TcGVlZE11bHRpcGxpZXJ8fDEpOih0aGlzLm1pbmltdW1TcGVlZE11bHRpcGxpZXI9MSx0aGlzLnN0YXJ0U3BlZWQ9bmV3IHIuZGVmYXVsdCgwLDApKTt2YXIgYT1lLmFjY2VsZXJhdGlvbjthJiYoYS54fHxhLnkpPyh0aGlzLnN0YXJ0U3BlZWQubmV4dD1udWxsLHRoaXMuYWNjZWxlcmF0aW9uPW5ldyBQSVhJLlBvaW50KGEueCxhLnkpLHRoaXMubWF4U3BlZWQ9ZS5tYXhTcGVlZHx8TmFOKTp0aGlzLmFjY2VsZXJhdGlvbj1uZXcgUElYSS5Qb2ludCxlLnNjYWxlPyh0aGlzLnN0YXJ0U2NhbGU9ci5kZWZhdWx0LmNyZWF0ZUxpc3QoZS5zY2FsZSksdGhpcy5taW5pbXVtU2NhbGVNdWx0aXBsaWVyPWUuc2NhbGUubWluaW11bVNjYWxlTXVsdGlwbGllcnx8MSk6KHRoaXMuc3RhcnRTY2FsZT1uZXcgci5kZWZhdWx0KDEsMCksdGhpcy5taW5pbXVtU2NhbGVNdWx0aXBsaWVyPTEpLGUuY29sb3I/dGhpcy5zdGFydENvbG9yPXIuZGVmYXVsdC5jcmVhdGVMaXN0KGUuY29sb3IpOnRoaXMuc3RhcnRDb2xvcj1uZXcgci5kZWZhdWx0KHtyOjI1NSxnOjI1NSxiOjI1NX0sMCksZS5zdGFydFJvdGF0aW9uPyh0aGlzLm1pblN0YXJ0Um90YXRpb249ZS5zdGFydFJvdGF0aW9uLm1pbix0aGlzLm1heFN0YXJ0Um90YXRpb249ZS5zdGFydFJvdGF0aW9uLm1heCk6dGhpcy5taW5TdGFydFJvdGF0aW9uPXRoaXMubWF4U3RhcnRSb3RhdGlvbj0wLGUubm9Sb3RhdGlvbiYmKHRoaXMubWluU3RhcnRSb3RhdGlvbnx8dGhpcy5tYXhTdGFydFJvdGF0aW9uKT90aGlzLm5vUm90YXRpb249ISFlLm5vUm90YXRpb246dGhpcy5ub1JvdGF0aW9uPSExLGUucm90YXRpb25TcGVlZD8odGhpcy5taW5Sb3RhdGlvblNwZWVkPWUucm90YXRpb25TcGVlZC5taW4sdGhpcy5tYXhSb3RhdGlvblNwZWVkPWUucm90YXRpb25TcGVlZC5tYXgpOnRoaXMubWluUm90YXRpb25TcGVlZD10aGlzLm1heFJvdGF0aW9uU3BlZWQ9MCx0aGlzLm1pbkxpZmV0aW1lPWUubGlmZXRpbWUubWluLHRoaXMubWF4TGlmZXRpbWU9ZS5saWZldGltZS5tYXgsdGhpcy5wYXJ0aWNsZUJsZW5kTW9kZT1zLmRlZmF1bHQuZ2V0QmxlbmRNb2RlKGUuYmxlbmRNb2RlKSxlLmVhc2U/dGhpcy5jdXN0b21FYXNlPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUuZWFzZT9lLmVhc2U6cy5kZWZhdWx0LmdlbmVyYXRlRWFzZShlLmVhc2UpOnRoaXMuY3VzdG9tRWFzZT1udWxsLGkucGFyc2VEYXRhP3RoaXMuZXh0cmFEYXRhPWkucGFyc2VEYXRhKGUuZXh0cmFEYXRhKTp0aGlzLmV4dHJhRGF0YT1lLmV4dHJhRGF0YXx8bnVsbCx0aGlzLnNwYXduUmVjdD10aGlzLnNwYXduQ2lyY2xlPW51bGwsdGhpcy5wYXJ0aWNsZXNQZXJXYXZlPTEsZS5wYXJ0aWNsZXNQZXJXYXZlJiZlLnBhcnRpY2xlc1BlcldhdmU+MSYmKHRoaXMucGFydGljbGVzUGVyV2F2ZT1lLnBhcnRpY2xlc1BlcldhdmUpLHRoaXMucGFydGljbGVTcGFjaW5nPTAsdGhpcy5hbmdsZVN0YXJ0PTA7dmFyIG47c3dpdGNoKGUuc3Bhd25UeXBlKXtjYXNlXCJyZWN0XCI6dGhpcy5zcGF3blR5cGU9XCJyZWN0XCIsdGhpcy5fc3Bhd25GdW5jPXRoaXMuX3NwYXduUmVjdDt2YXIgbz1lLnNwYXduUmVjdDt0aGlzLnNwYXduUmVjdD1uZXcgUElYSS5SZWN0YW5nbGUoby54LG8ueSxvLncsby5oKTticmVhaztjYXNlXCJjaXJjbGVcIjp0aGlzLnNwYXduVHlwZT1cImNpcmNsZVwiLHRoaXMuX3NwYXduRnVuYz10aGlzLl9zcGF3bkNpcmNsZSxuPWUuc3Bhd25DaXJjbGUsdGhpcy5zcGF3bkNpcmNsZT1uZXcgUElYSS5DaXJjbGUobi54LG4ueSxuLnIpO2JyZWFrO2Nhc2VcInJpbmdcIjp0aGlzLnNwYXduVHlwZT1cInJpbmdcIix0aGlzLl9zcGF3bkZ1bmM9dGhpcy5fc3Bhd25SaW5nLG49ZS5zcGF3bkNpcmNsZSx0aGlzLnNwYXduQ2lyY2xlPW5ldyBQSVhJLkNpcmNsZShuLngsbi55LG4uciksdGhpcy5zcGF3bkNpcmNsZS5taW5SYWRpdXM9bi5taW5SO2JyZWFrO2Nhc2VcImJ1cnN0XCI6dGhpcy5zcGF3blR5cGU9XCJidXJzdFwiLHRoaXMuX3NwYXduRnVuYz10aGlzLl9zcGF3bkJ1cnN0LHRoaXMucGFydGljbGVTcGFjaW5nPWUucGFydGljbGVTcGFjaW5nLHRoaXMuYW5nbGVTdGFydD1lLmFuZ2xlU3RhcnQ/ZS5hbmdsZVN0YXJ0OjA7YnJlYWs7Y2FzZVwicG9pbnRcIjpkZWZhdWx0OnRoaXMuc3Bhd25UeXBlPVwicG9pbnRcIix0aGlzLl9zcGF3bkZ1bmM9dGhpcy5fc3Bhd25Qb2ludH10aGlzLmZyZXF1ZW5jeT1lLmZyZXF1ZW5jeSx0aGlzLnNwYXduQ2hhbmNlPVwibnVtYmVyXCI9PXR5cGVvZiBlLnNwYXduQ2hhbmNlJiZlLnNwYXduQ2hhbmNlPjA/ZS5zcGF3bkNoYW5jZToxLHRoaXMuZW1pdHRlckxpZmV0aW1lPWUuZW1pdHRlckxpZmV0aW1lfHwtMSx0aGlzLm1heFBhcnRpY2xlcz1lLm1heFBhcnRpY2xlcz4wP2UubWF4UGFydGljbGVzOjFlMyx0aGlzLmFkZEF0QmFjaz0hIWUuYWRkQXRCYWNrLHRoaXMucm90YXRpb249MCx0aGlzLm93bmVyUG9zPW5ldyBQSVhJLlBvaW50LHRoaXMuc3Bhd25Qb3M9bmV3IFBJWEkuUG9pbnQoZS5wb3MueCxlLnBvcy55KSx0aGlzLl9wcmV2RW1pdHRlclBvcz10aGlzLnNwYXduUG9zLmNsb25lKCksdGhpcy5fcHJldlBvc0lzVmFsaWQ9ITEsdGhpcy5fc3Bhd25UaW1lcj0wLHRoaXMuZW1pdD12b2lkIDA9PT1lLmVtaXR8fCEhZS5lbWl0LHRoaXMuYXV0b1VwZGF0ZT12b2lkIDAhPT1lLmF1dG9VcGRhdGUmJiEhZS5hdXRvVXBkYXRlfX0sdC5wcm90b3R5cGUucmVjeWNsZT1mdW5jdGlvbih0KXt0Lm5leHQmJih0Lm5leHQucHJldj10LnByZXYpLHQucHJldiYmKHQucHJldi5uZXh0PXQubmV4dCksdD09dGhpcy5fYWN0aXZlUGFydGljbGVzTGFzdCYmKHRoaXMuX2FjdGl2ZVBhcnRpY2xlc0xhc3Q9dC5wcmV2KSx0PT10aGlzLl9hY3RpdmVQYXJ0aWNsZXNGaXJzdCYmKHRoaXMuX2FjdGl2ZVBhcnRpY2xlc0ZpcnN0PXQubmV4dCksdC5wcmV2PW51bGwsdC5uZXh0PXRoaXMuX3Bvb2xGaXJzdCx0aGlzLl9wb29sRmlyc3Q9dCx0LnBhcmVudCYmdC5wYXJlbnQucmVtb3ZlQ2hpbGQodCksLS10aGlzLnBhcnRpY2xlQ291bnR9LHQucHJvdG90eXBlLnJvdGF0ZT1mdW5jdGlvbih0KXtpZih0aGlzLnJvdGF0aW9uIT10KXt2YXIgZT10LXRoaXMucm90YXRpb247dGhpcy5yb3RhdGlvbj10LHMuZGVmYXVsdC5yb3RhdGVQb2ludChlLHRoaXMuc3Bhd25Qb3MpLHRoaXMuX3Bvc0NoYW5nZWQ9ITB9fSx0LnByb3RvdHlwZS51cGRhdGVTcGF3blBvcz1mdW5jdGlvbih0LGUpe3RoaXMuX3Bvc0NoYW5nZWQ9ITAsdGhpcy5zcGF3blBvcy54PXQsdGhpcy5zcGF3blBvcy55PWV9LHQucHJvdG90eXBlLnVwZGF0ZU93bmVyUG9zPWZ1bmN0aW9uKHQsZSl7dGhpcy5fcG9zQ2hhbmdlZD0hMCx0aGlzLm93bmVyUG9zLng9dCx0aGlzLm93bmVyUG9zLnk9ZX0sdC5wcm90b3R5cGUucmVzZXRQb3NpdGlvblRyYWNraW5nPWZ1bmN0aW9uKCl7dGhpcy5fcHJldlBvc0lzVmFsaWQ9ITF9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImVtaXRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2VtaXR9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9lbWl0PSEhdCx0aGlzLl9lbWl0dGVyTGlmZT10aGlzLmVtaXR0ZXJMaWZldGltZX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJhdXRvVXBkYXRlXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9hdXRvVXBkYXRlfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5fYXV0b1VwZGF0ZSYmIXQ/bi5yZW1vdmUodGhpcy51cGRhdGUsdGhpcyk6IXRoaXMuX2F1dG9VcGRhdGUmJnQmJm4uYWRkKHRoaXMudXBkYXRlLHRoaXMpLHRoaXMuX2F1dG9VcGRhdGU9ISF0fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLnBsYXlPbmNlQW5kRGVzdHJveT1mdW5jdGlvbih0KXt0aGlzLmF1dG9VcGRhdGU9ITAsdGhpcy5lbWl0PSEwLHRoaXMuX2Rlc3Ryb3lXaGVuQ29tcGxldGU9ITAsdGhpcy5fY29tcGxldGVDYWxsYmFjaz10fSx0LnByb3RvdHlwZS5wbGF5T25jZT1mdW5jdGlvbih0KXt0aGlzLmVtaXQ9ITAsdGhpcy5fY29tcGxldGVDYWxsYmFjaz10fSx0LnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24odCl7aWYodGhpcy5fYXV0b1VwZGF0ZSYmKHQ9dC9QSVhJLnNldHRpbmdzLlRBUkdFVF9GUE1TLzFlMyksdGhpcy5fcGFyZW50KXt2YXIgZSxpLHM7Zm9yKGk9dGhpcy5fYWN0aXZlUGFydGljbGVzRmlyc3Q7aTtpPXMpcz1pLm5leHQsaS51cGRhdGUodCk7dmFyIGEscjt0aGlzLl9wcmV2UG9zSXNWYWxpZCYmKGE9dGhpcy5fcHJldkVtaXR0ZXJQb3MueCxyPXRoaXMuX3ByZXZFbWl0dGVyUG9zLnkpO3ZhciBuPXRoaXMub3duZXJQb3MueCt0aGlzLnNwYXduUG9zLngsbz10aGlzLm93bmVyUG9zLnkrdGhpcy5zcGF3blBvcy55O2lmKHRoaXMuX2VtaXQpZm9yKHRoaXMuX3NwYXduVGltZXItPXQ8MD8wOnQ7dGhpcy5fc3Bhd25UaW1lcjw9MDspe2lmKHRoaXMuX2VtaXR0ZXJMaWZlPjAmJih0aGlzLl9lbWl0dGVyTGlmZS09dGhpcy5fZnJlcXVlbmN5LHRoaXMuX2VtaXR0ZXJMaWZlPD0wKSl7dGhpcy5fc3Bhd25UaW1lcj0wLHRoaXMuX2VtaXR0ZXJMaWZlPTAsdGhpcy5lbWl0PSExO2JyZWFrfWlmKHRoaXMucGFydGljbGVDb3VudD49dGhpcy5tYXhQYXJ0aWNsZXMpdGhpcy5fc3Bhd25UaW1lcis9dGhpcy5fZnJlcXVlbmN5O2Vsc2V7dmFyIGg9dm9pZCAwO2lmKGg9dGhpcy5taW5MaWZldGltZT09dGhpcy5tYXhMaWZldGltZT90aGlzLm1pbkxpZmV0aW1lOk1hdGgucmFuZG9tKCkqKHRoaXMubWF4TGlmZXRpbWUtdGhpcy5taW5MaWZldGltZSkrdGhpcy5taW5MaWZldGltZSwtdGhpcy5fc3Bhd25UaW1lcjxoKXt2YXIgbD12b2lkIDAscD12b2lkIDA7aWYodGhpcy5fcHJldlBvc0lzVmFsaWQmJnRoaXMuX3Bvc0NoYW5nZWQpe3ZhciBjPTErdGhpcy5fc3Bhd25UaW1lci90O2w9KG4tYSkqYythLHA9KG8tcikqYytyfWVsc2UgbD1uLHA9bztlPTA7Zm9yKHZhciB1PU1hdGgubWluKHRoaXMucGFydGljbGVzUGVyV2F2ZSx0aGlzLm1heFBhcnRpY2xlcy10aGlzLnBhcnRpY2xlQ291bnQpO2U8dTsrK2UpaWYoISh0aGlzLnNwYXduQ2hhbmNlPDEmJk1hdGgucmFuZG9tKCk+PXRoaXMuc3Bhd25DaGFuY2UpKXt2YXIgZD12b2lkIDA7aWYodGhpcy5fcG9vbEZpcnN0PyhkPXRoaXMuX3Bvb2xGaXJzdCx0aGlzLl9wb29sRmlyc3Q9dGhpcy5fcG9vbEZpcnN0Lm5leHQsZC5uZXh0PW51bGwpOmQ9bmV3IHRoaXMucGFydGljbGVDb25zdHJ1Y3Rvcih0aGlzKSx0aGlzLnBhcnRpY2xlSW1hZ2VzLmxlbmd0aD4xP2QuYXBwbHlBcnQodGhpcy5wYXJ0aWNsZUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqdGhpcy5wYXJ0aWNsZUltYWdlcy5sZW5ndGgpXSk6ZC5hcHBseUFydCh0aGlzLnBhcnRpY2xlSW1hZ2VzWzBdKSxkLmFscGhhTGlzdC5yZXNldCh0aGlzLnN0YXJ0QWxwaGEpLDEhPXRoaXMubWluaW11bVNwZWVkTXVsdGlwbGllciYmKGQuc3BlZWRNdWx0aXBsaWVyPU1hdGgucmFuZG9tKCkqKDEtdGhpcy5taW5pbXVtU3BlZWRNdWx0aXBsaWVyKSt0aGlzLm1pbmltdW1TcGVlZE11bHRpcGxpZXIpLGQuc3BlZWRMaXN0LnJlc2V0KHRoaXMuc3RhcnRTcGVlZCksZC5hY2NlbGVyYXRpb24ueD10aGlzLmFjY2VsZXJhdGlvbi54LGQuYWNjZWxlcmF0aW9uLnk9dGhpcy5hY2NlbGVyYXRpb24ueSxkLm1heFNwZWVkPXRoaXMubWF4U3BlZWQsMSE9dGhpcy5taW5pbXVtU2NhbGVNdWx0aXBsaWVyJiYoZC5zY2FsZU11bHRpcGxpZXI9TWF0aC5yYW5kb20oKSooMS10aGlzLm1pbmltdW1TY2FsZU11bHRpcGxpZXIpK3RoaXMubWluaW11bVNjYWxlTXVsdGlwbGllciksZC5zY2FsZUxpc3QucmVzZXQodGhpcy5zdGFydFNjYWxlKSxkLmNvbG9yTGlzdC5yZXNldCh0aGlzLnN0YXJ0Q29sb3IpLHRoaXMubWluUm90YXRpb25TcGVlZD09dGhpcy5tYXhSb3RhdGlvblNwZWVkP2Qucm90YXRpb25TcGVlZD10aGlzLm1pblJvdGF0aW9uU3BlZWQ6ZC5yb3RhdGlvblNwZWVkPU1hdGgucmFuZG9tKCkqKHRoaXMubWF4Um90YXRpb25TcGVlZC10aGlzLm1pblJvdGF0aW9uU3BlZWQpK3RoaXMubWluUm90YXRpb25TcGVlZCxkLm5vUm90YXRpb249dGhpcy5ub1JvdGF0aW9uLGQubWF4TGlmZT1oLGQuYmxlbmRNb2RlPXRoaXMucGFydGljbGVCbGVuZE1vZGUsZC5lYXNlPXRoaXMuY3VzdG9tRWFzZSxkLmV4dHJhRGF0YT10aGlzLmV4dHJhRGF0YSx0aGlzLl9zcGF3bkZ1bmMoZCxsLHAsZSksZC5pbml0KCksZC51cGRhdGUoLXRoaXMuX3NwYXduVGltZXIpLGQucGFyZW50KXt2YXIgZj10aGlzLl9wYXJlbnQuY2hpbGRyZW47aWYoZlswXT09ZClmLnNoaWZ0KCk7ZWxzZSBpZihmW2YubGVuZ3RoLTFdPT1kKWYucG9wKCk7ZWxzZXt2YXIgbT1mLmluZGV4T2YoZCk7Zi5zcGxpY2UobSwxKX10aGlzLmFkZEF0QmFjaz9mLnVuc2hpZnQoZCk6Zi5wdXNoKGQpfWVsc2UgdGhpcy5hZGRBdEJhY2s/dGhpcy5fcGFyZW50LmFkZENoaWxkQXQoZCwwKTp0aGlzLl9wYXJlbnQuYWRkQ2hpbGQoZCk7dGhpcy5fYWN0aXZlUGFydGljbGVzTGFzdD8odGhpcy5fYWN0aXZlUGFydGljbGVzTGFzdC5uZXh0PWQsZC5wcmV2PXRoaXMuX2FjdGl2ZVBhcnRpY2xlc0xhc3QsdGhpcy5fYWN0aXZlUGFydGljbGVzTGFzdD1kKTp0aGlzLl9hY3RpdmVQYXJ0aWNsZXNMYXN0PXRoaXMuX2FjdGl2ZVBhcnRpY2xlc0ZpcnN0PWQsKyt0aGlzLnBhcnRpY2xlQ291bnR9fXRoaXMuX3NwYXduVGltZXIrPXRoaXMuX2ZyZXF1ZW5jeX19dGhpcy5fcG9zQ2hhbmdlZCYmKHRoaXMuX3ByZXZFbWl0dGVyUG9zLng9bix0aGlzLl9wcmV2RW1pdHRlclBvcy55PW8sdGhpcy5fcHJldlBvc0lzVmFsaWQ9ITAsdGhpcy5fcG9zQ2hhbmdlZD0hMSksdGhpcy5fZW1pdHx8dGhpcy5fYWN0aXZlUGFydGljbGVzRmlyc3R8fCh0aGlzLl9jb21wbGV0ZUNhbGxiYWNrJiZ0aGlzLl9jb21wbGV0ZUNhbGxiYWNrKCksdGhpcy5fZGVzdHJveVdoZW5Db21wbGV0ZSYmdGhpcy5kZXN0cm95KCkpfX0sdC5wcm90b3R5cGUuX3NwYXduUG9pbnQ9ZnVuY3Rpb24odCxlLGkpe3RoaXMubWluU3RhcnRSb3RhdGlvbj09dGhpcy5tYXhTdGFydFJvdGF0aW9uP3Qucm90YXRpb249dGhpcy5taW5TdGFydFJvdGF0aW9uK3RoaXMucm90YXRpb246dC5yb3RhdGlvbj1NYXRoLnJhbmRvbSgpKih0aGlzLm1heFN0YXJ0Um90YXRpb24tdGhpcy5taW5TdGFydFJvdGF0aW9uKSt0aGlzLm1pblN0YXJ0Um90YXRpb24rdGhpcy5yb3RhdGlvbix0LnBvc2l0aW9uLng9ZSx0LnBvc2l0aW9uLnk9aX0sdC5wcm90b3R5cGUuX3NwYXduUmVjdD1mdW5jdGlvbih0LGUsaSl7dGhpcy5taW5TdGFydFJvdGF0aW9uPT10aGlzLm1heFN0YXJ0Um90YXRpb24/dC5yb3RhdGlvbj10aGlzLm1pblN0YXJ0Um90YXRpb24rdGhpcy5yb3RhdGlvbjp0LnJvdGF0aW9uPU1hdGgucmFuZG9tKCkqKHRoaXMubWF4U3RhcnRSb3RhdGlvbi10aGlzLm1pblN0YXJ0Um90YXRpb24pK3RoaXMubWluU3RhcnRSb3RhdGlvbit0aGlzLnJvdGF0aW9uLG8ueD1NYXRoLnJhbmRvbSgpKnRoaXMuc3Bhd25SZWN0LndpZHRoK3RoaXMuc3Bhd25SZWN0Lngsby55PU1hdGgucmFuZG9tKCkqdGhpcy5zcGF3blJlY3QuaGVpZ2h0K3RoaXMuc3Bhd25SZWN0LnksMCE9PXRoaXMucm90YXRpb24mJnMuZGVmYXVsdC5yb3RhdGVQb2ludCh0aGlzLnJvdGF0aW9uLG8pLHQucG9zaXRpb24ueD1lK28ueCx0LnBvc2l0aW9uLnk9aStvLnl9LHQucHJvdG90eXBlLl9zcGF3bkNpcmNsZT1mdW5jdGlvbih0LGUsaSl7dGhpcy5taW5TdGFydFJvdGF0aW9uPT10aGlzLm1heFN0YXJ0Um90YXRpb24/dC5yb3RhdGlvbj10aGlzLm1pblN0YXJ0Um90YXRpb24rdGhpcy5yb3RhdGlvbjp0LnJvdGF0aW9uPU1hdGgucmFuZG9tKCkqKHRoaXMubWF4U3RhcnRSb3RhdGlvbi10aGlzLm1pblN0YXJ0Um90YXRpb24pK3RoaXMubWluU3RhcnRSb3RhdGlvbit0aGlzLnJvdGF0aW9uLG8ueD1NYXRoLnJhbmRvbSgpKnRoaXMuc3Bhd25DaXJjbGUucmFkaXVzLG8ueT0wLHMuZGVmYXVsdC5yb3RhdGVQb2ludCgzNjAqTWF0aC5yYW5kb20oKSxvKSxvLngrPXRoaXMuc3Bhd25DaXJjbGUueCxvLnkrPXRoaXMuc3Bhd25DaXJjbGUueSwwIT09dGhpcy5yb3RhdGlvbiYmcy5kZWZhdWx0LnJvdGF0ZVBvaW50KHRoaXMucm90YXRpb24sbyksdC5wb3NpdGlvbi54PWUrby54LHQucG9zaXRpb24ueT1pK28ueX0sdC5wcm90b3R5cGUuX3NwYXduUmluZz1mdW5jdGlvbih0LGUsaSl7dmFyIGE9dGhpcy5zcGF3bkNpcmNsZTt0aGlzLm1pblN0YXJ0Um90YXRpb249PXRoaXMubWF4U3RhcnRSb3RhdGlvbj90LnJvdGF0aW9uPXRoaXMubWluU3RhcnRSb3RhdGlvbit0aGlzLnJvdGF0aW9uOnQucm90YXRpb249TWF0aC5yYW5kb20oKSoodGhpcy5tYXhTdGFydFJvdGF0aW9uLXRoaXMubWluU3RhcnRSb3RhdGlvbikrdGhpcy5taW5TdGFydFJvdGF0aW9uK3RoaXMucm90YXRpb24sYS5taW5SYWRpdXMhPT1hLnJhZGl1cz9vLng9TWF0aC5yYW5kb20oKSooYS5yYWRpdXMtYS5taW5SYWRpdXMpK2EubWluUmFkaXVzOm8ueD1hLnJhZGl1cyxvLnk9MDt2YXIgcj0zNjAqTWF0aC5yYW5kb20oKTt0LnJvdGF0aW9uKz1yLHMuZGVmYXVsdC5yb3RhdGVQb2ludChyLG8pLG8ueCs9dGhpcy5zcGF3bkNpcmNsZS54LG8ueSs9dGhpcy5zcGF3bkNpcmNsZS55LDAhPT10aGlzLnJvdGF0aW9uJiZzLmRlZmF1bHQucm90YXRlUG9pbnQodGhpcy5yb3RhdGlvbixvKSx0LnBvc2l0aW9uLng9ZStvLngsdC5wb3NpdGlvbi55PWkrby55fSx0LnByb3RvdHlwZS5fc3Bhd25CdXJzdD1mdW5jdGlvbih0LGUsaSxzKXswPT09dGhpcy5wYXJ0aWNsZVNwYWNpbmc/dC5yb3RhdGlvbj0zNjAqTWF0aC5yYW5kb20oKTp0LnJvdGF0aW9uPXRoaXMuYW5nbGVTdGFydCt0aGlzLnBhcnRpY2xlU3BhY2luZypzK3RoaXMucm90YXRpb24sdC5wb3NpdGlvbi54PWUsdC5wb3NpdGlvbi55PWl9LHQucHJvdG90eXBlLmNsZWFudXA9ZnVuY3Rpb24oKXt2YXIgdCxlO2Zvcih0PXRoaXMuX2FjdGl2ZVBhcnRpY2xlc0ZpcnN0O3Q7dD1lKWU9dC5uZXh0LHRoaXMucmVjeWNsZSh0KSx0LnBhcmVudCYmdC5wYXJlbnQucmVtb3ZlQ2hpbGQodCk7dGhpcy5fYWN0aXZlUGFydGljbGVzRmlyc3Q9dGhpcy5fYWN0aXZlUGFydGljbGVzTGFzdD1udWxsLHRoaXMucGFydGljbGVDb3VudD0wfSx0LnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5hdXRvVXBkYXRlPSExLHRoaXMuY2xlYW51cCgpO2Zvcih2YXIgdCxlPXRoaXMuX3Bvb2xGaXJzdDtlO2U9dCl0PWUubmV4dCxlLmRlc3Ryb3koKTt0aGlzLl9wb29sRmlyc3Q9dGhpcy5fcGFyZW50PXRoaXMucGFydGljbGVJbWFnZXM9dGhpcy5zcGF3blBvcz10aGlzLm93bmVyUG9zPXRoaXMuc3RhcnRDb2xvcj10aGlzLnN0YXJ0U2NhbGU9dGhpcy5zdGFydEFscGhhPXRoaXMuc3RhcnRTcGVlZD10aGlzLmN1c3RvbUVhc2U9dGhpcy5fY29tcGxldGVDYWxsYmFjaz1udWxsfSx0fSgpO2kuZGVmYXVsdD1ofSx7XCIuL1BhcnRpY2xlXCI6MyxcIi4vUGFydGljbGVVdGlsc1wiOjQsXCIuL1Byb3BlcnR5Tm9kZVwiOjd9XSwzOltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHM9dGhpcyYmdGhpcy5fX2V4dGVuZHN8fGZ1bmN0aW9uKCl7dmFyIHQ9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShpKSYmKHRbaV09ZVtpXSl9O3JldHVybiBmdW5jdGlvbihlLGkpe2Z1bmN0aW9uIHMoKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLGkpLGUucHJvdG90eXBlPW51bGw9PT1pP09iamVjdC5jcmVhdGUoaSk6KHMucHJvdG90eXBlPWkucHJvdG90eXBlLG5ldyBzKX19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGE9dChcIi4vUGFydGljbGVVdGlsc1wiKSxyPXQoXCIuL1Byb3BlcnR5TGlzdFwiKSxuPVBJWEkuU3ByaXRlLG89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShpKXt2YXIgcz10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIHMuZW1pdHRlcj1pLHMuYW5jaG9yLng9cy5hbmNob3IueT0uNSxzLnZlbG9jaXR5PW5ldyBQSVhJLlBvaW50LHMubWF4TGlmZT0wLHMuYWdlPTAscy5lYXNlPW51bGwscy5leHRyYURhdGE9bnVsbCxzLmFscGhhTGlzdD1uZXcgci5kZWZhdWx0LHMuc3BlZWRMaXN0PW5ldyByLmRlZmF1bHQscy5zcGVlZE11bHRpcGxpZXI9MSxzLmFjY2VsZXJhdGlvbj1uZXcgUElYSS5Qb2ludCxzLm1heFNwZWVkPU5hTixzLnNjYWxlTGlzdD1uZXcgci5kZWZhdWx0LHMuc2NhbGVNdWx0aXBsaWVyPTEscy5jb2xvckxpc3Q9bmV3IHIuZGVmYXVsdCghMCkscy5fZG9BbHBoYT0hMSxzLl9kb1NjYWxlPSExLHMuX2RvU3BlZWQ9ITEscy5fZG9BY2NlbGVyYXRpb249ITEscy5fZG9Db2xvcj0hMSxzLl9kb05vcm1hbE1vdmVtZW50PSExLHMuX29uZU92ZXJMaWZlPTAscy5uZXh0PW51bGwscy5wcmV2PW51bGwscy5pbml0PXMuaW5pdCxzLlBhcnRpY2xlX2luaXQ9ZS5wcm90b3R5cGUuaW5pdCxzLnVwZGF0ZT1zLnVwZGF0ZSxzLlBhcnRpY2xlX3VwZGF0ZT1lLnByb3RvdHlwZS51cGRhdGUscy5TcHJpdGVfZGVzdHJveT10LnByb3RvdHlwZS5kZXN0cm95LHMuUGFydGljbGVfZGVzdHJveT1lLnByb3RvdHlwZS5kZXN0cm95LHMuYXBwbHlBcnQ9cy5hcHBseUFydCxzLmtpbGw9cy5raWxsLHN9cmV0dXJuIHMoZSx0KSxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dGhpcy5hZ2U9MCx0aGlzLnZlbG9jaXR5Lng9dGhpcy5zcGVlZExpc3QuY3VycmVudC52YWx1ZSp0aGlzLnNwZWVkTXVsdGlwbGllcix0aGlzLnZlbG9jaXR5Lnk9MCxhLmRlZmF1bHQucm90YXRlUG9pbnQodGhpcy5yb3RhdGlvbix0aGlzLnZlbG9jaXR5KSx0aGlzLm5vUm90YXRpb24/dGhpcy5yb3RhdGlvbj0wOnRoaXMucm90YXRpb24qPWEuZGVmYXVsdC5ERUdfVE9fUkFEUyx0aGlzLnJvdGF0aW9uU3BlZWQqPWEuZGVmYXVsdC5ERUdfVE9fUkFEUyx0aGlzLmFscGhhPXRoaXMuYWxwaGFMaXN0LmN1cnJlbnQudmFsdWUsdGhpcy5zY2FsZS54PXRoaXMuc2NhbGUueT10aGlzLnNjYWxlTGlzdC5jdXJyZW50LnZhbHVlLHRoaXMuX2RvQWxwaGE9ISF0aGlzLmFscGhhTGlzdC5jdXJyZW50Lm5leHQsdGhpcy5fZG9TcGVlZD0hIXRoaXMuc3BlZWRMaXN0LmN1cnJlbnQubmV4dCx0aGlzLl9kb1NjYWxlPSEhdGhpcy5zY2FsZUxpc3QuY3VycmVudC5uZXh0LHRoaXMuX2RvQ29sb3I9ISF0aGlzLmNvbG9yTGlzdC5jdXJyZW50Lm5leHQsdGhpcy5fZG9BY2NlbGVyYXRpb249MCE9PXRoaXMuYWNjZWxlcmF0aW9uLnh8fDAhPT10aGlzLmFjY2VsZXJhdGlvbi55LHRoaXMuX2RvTm9ybWFsTW92ZW1lbnQ9dGhpcy5fZG9TcGVlZHx8MCE9PXRoaXMuc3BlZWRMaXN0LmN1cnJlbnQudmFsdWV8fHRoaXMuX2RvQWNjZWxlcmF0aW9uLHRoaXMuX29uZU92ZXJMaWZlPTEvdGhpcy5tYXhMaWZlO3ZhciB0PXRoaXMuY29sb3JMaXN0LmN1cnJlbnQudmFsdWU7dGhpcy50aW50PWEuZGVmYXVsdC5jb21iaW5lUkdCQ29tcG9uZW50cyh0LnIsdC5nLHQuYiksdGhpcy52aXNpYmxlPSEwfSxlLnByb3RvdHlwZS5hcHBseUFydD1mdW5jdGlvbih0KXt0aGlzLnRleHR1cmU9dHx8UElYSS5UZXh0dXJlLkVNUFRZfSxlLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24odCl7aWYodGhpcy5hZ2UrPXQsdGhpcy5hZ2U+PXRoaXMubWF4TGlmZXx8dGhpcy5hZ2U8MClyZXR1cm4gdGhpcy5raWxsKCksLTE7dmFyIGU9dGhpcy5hZ2UqdGhpcy5fb25lT3ZlckxpZmU7aWYodGhpcy5lYXNlJiYoZT00PT10aGlzLmVhc2UubGVuZ3RoP3RoaXMuZWFzZShlLDAsMSwxKTp0aGlzLmVhc2UoZSkpLHRoaXMuX2RvQWxwaGEmJih0aGlzLmFscGhhPXRoaXMuYWxwaGFMaXN0LmludGVycG9sYXRlKGUpKSx0aGlzLl9kb1NjYWxlKXt2YXIgaT10aGlzLnNjYWxlTGlzdC5pbnRlcnBvbGF0ZShlKSp0aGlzLnNjYWxlTXVsdGlwbGllcjt0aGlzLnNjYWxlLng9dGhpcy5zY2FsZS55PWl9aWYodGhpcy5fZG9Ob3JtYWxNb3ZlbWVudCl7aWYodGhpcy5fZG9TcGVlZCl7dmFyIHM9dGhpcy5zcGVlZExpc3QuaW50ZXJwb2xhdGUoZSkqdGhpcy5zcGVlZE11bHRpcGxpZXI7YS5kZWZhdWx0Lm5vcm1hbGl6ZSh0aGlzLnZlbG9jaXR5KSxhLmRlZmF1bHQuc2NhbGVCeSh0aGlzLnZlbG9jaXR5LHMpfWVsc2UgaWYodGhpcy5fZG9BY2NlbGVyYXRpb24mJih0aGlzLnZlbG9jaXR5LngrPXRoaXMuYWNjZWxlcmF0aW9uLngqdCx0aGlzLnZlbG9jaXR5LnkrPXRoaXMuYWNjZWxlcmF0aW9uLnkqdCx0aGlzLm1heFNwZWVkKSl7dmFyIHI9YS5kZWZhdWx0Lmxlbmd0aCh0aGlzLnZlbG9jaXR5KTtyPnRoaXMubWF4U3BlZWQmJmEuZGVmYXVsdC5zY2FsZUJ5KHRoaXMudmVsb2NpdHksdGhpcy5tYXhTcGVlZC9yKX10aGlzLnBvc2l0aW9uLngrPXRoaXMudmVsb2NpdHkueCp0LHRoaXMucG9zaXRpb24ueSs9dGhpcy52ZWxvY2l0eS55KnR9cmV0dXJuIHRoaXMuX2RvQ29sb3ImJih0aGlzLnRpbnQ9dGhpcy5jb2xvckxpc3QuaW50ZXJwb2xhdGUoZSkpLDAhPT10aGlzLnJvdGF0aW9uU3BlZWQ/dGhpcy5yb3RhdGlvbis9dGhpcy5yb3RhdGlvblNwZWVkKnQ6dGhpcy5hY2NlbGVyYXRpb24mJiF0aGlzLm5vUm90YXRpb24mJih0aGlzLnJvdGF0aW9uPU1hdGguYXRhbjIodGhpcy52ZWxvY2l0eS55LHRoaXMudmVsb2NpdHkueCkpLGV9LGUucHJvdG90eXBlLmtpbGw9ZnVuY3Rpb24oKXt0aGlzLmVtaXR0ZXIucmVjeWNsZSh0aGlzKX0sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMucGFyZW50JiZ0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKSx0aGlzLlNwcml0ZV9kZXN0cm95KCksdGhpcy5lbWl0dGVyPXRoaXMudmVsb2NpdHk9dGhpcy5jb2xvckxpc3Q9dGhpcy5zY2FsZUxpc3Q9dGhpcy5hbHBoYUxpc3Q9dGhpcy5zcGVlZExpc3Q9dGhpcy5lYXNlPXRoaXMubmV4dD10aGlzLnByZXY9bnVsbH0sZS5wYXJzZUFydD1mdW5jdGlvbih0KXt2YXIgZTtmb3IoZT10Lmxlbmd0aDtlPj0wOy0tZSlcInN0cmluZ1wiPT10eXBlb2YgdFtlXSYmKHRbZV09UElYSS5UZXh0dXJlLmZyb21JbWFnZSh0W2VdKSk7aWYoYS5kZWZhdWx0LnZlcmJvc2UpZm9yKGU9dC5sZW5ndGgtMTtlPjA7LS1lKWlmKHRbZV0uYmFzZVRleHR1cmUhPXRbZS0xXS5iYXNlVGV4dHVyZSl7d2luZG93LmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBpeGlQYXJ0aWNsZXM6IHVzaW5nIHBhcnRpY2xlIHRleHR1cmVzIGZyb20gZGlmZmVyZW50IGltYWdlcyBtYXkgaGluZGVyIHBlcmZvcm1hbmNlIGluIFdlYkdMXCIpO2JyZWFrfXJldHVybiB0fSxlLnBhcnNlRGF0YT1mdW5jdGlvbih0KXtyZXR1cm4gdH0sZX0obik7aS5kZWZhdWx0PW99LHtcIi4vUGFydGljbGVVdGlsc1wiOjQsXCIuL1Byb3BlcnR5TGlzdFwiOjZ9XSw0OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9UElYSS5CTEVORF9NT0RFUyxhPXQoXCIuL1Byb3BlcnR5Tm9kZVwiKSxyPXt2ZXJib3NlOiExLERFR19UT19SQURTOk1hdGguUEkvMTgwLHJvdGF0ZVBvaW50OmZ1bmN0aW9uKHQsZSl7aWYodCl7dCo9ci5ERUdfVE9fUkFEUzt2YXIgaT1NYXRoLnNpbih0KSxzPU1hdGguY29zKHQpLGE9ZS54KnMtZS55Kmksbj1lLngqaStlLnkqcztlLng9YSxlLnk9bn19LGNvbWJpbmVSR0JDb21wb25lbnRzOmZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gdDw8MTZ8ZTw8OHxpfSxub3JtYWxpemU6ZnVuY3Rpb24odCl7dmFyIGU9MS9yLmxlbmd0aCh0KTt0LngqPWUsdC55Kj1lfSxzY2FsZUJ5OmZ1bmN0aW9uKHQsZSl7dC54Kj1lLHQueSo9ZX0sbGVuZ3RoOmZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnNxcnQodC54KnQueCt0LnkqdC55KX0saGV4VG9SR0I6ZnVuY3Rpb24odCxlKXtlfHwoZT17fSksXCIjXCI9PXQuY2hhckF0KDApP3Q9dC5zdWJzdHIoMSk6MD09PXQuaW5kZXhPZihcIjB4XCIpJiYodD10LnN1YnN0cigyKSk7dmFyIGk7cmV0dXJuIDg9PXQubGVuZ3RoJiYoaT10LnN1YnN0cigwLDIpLHQ9dC5zdWJzdHIoMikpLGUucj1wYXJzZUludCh0LnN1YnN0cigwLDIpLDE2KSxlLmc9cGFyc2VJbnQodC5zdWJzdHIoMiwyKSwxNiksZS5iPXBhcnNlSW50KHQuc3Vic3RyKDQsMiksMTYpLGkmJihlLmE9cGFyc2VJbnQoaSwxNikpLGV9LGdlbmVyYXRlRWFzZTpmdW5jdGlvbih0KXt2YXIgZT10Lmxlbmd0aCxpPTEvZTtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIGEscixuPWUqc3wwO3JldHVybiBhPShzLW4qaSkqZSxyPXRbbl18fHRbZS0xXSxyLnMrYSooMiooMS1hKSooci5jcC1yLnMpK2EqKHIuZS1yLnMpKX19LGdldEJsZW5kTW9kZTpmdW5jdGlvbih0KXtpZighdClyZXR1cm4gcy5OT1JNQUw7Zm9yKHQ9dC50b1VwcGVyQ2FzZSgpO3QuaW5kZXhPZihcIiBcIik+PTA7KXQ9dC5yZXBsYWNlKFwiIFwiLFwiX1wiKTtyZXR1cm4gc1t0XXx8cy5OT1JNQUx9LGNyZWF0ZVN0ZXBwZWRHcmFkaWVudDpmdW5jdGlvbih0LGUpe3ZvaWQgMD09PWUmJihlPTEwKSwoXCJudW1iZXJcIiE9dHlwZW9mIGV8fGU8PTApJiYoZT0xMCk7dmFyIGk9bmV3IGEuZGVmYXVsdCh0WzBdLnZhbHVlLHRbMF0udGltZSk7aS5pc1N0ZXBwZWQ9ITA7Zm9yKHZhciBzPWksbj10WzBdLG89MSxoPXRbb10sbD0xO2w8ZTsrK2wpe2Zvcih2YXIgcD1sL2U7cD5oLnRpbWU7KW49aCxoPXRbKytvXTtwPShwLW4udGltZSkvKGgudGltZS1uLnRpbWUpO3ZhciBjPXIuaGV4VG9SR0Iobi52YWx1ZSksdT1yLmhleFRvUkdCKGgudmFsdWUpLGQ9e307ZC5yPSh1LnItYy5yKSpwK2MucixkLmc9KHUuZy1jLmcpKnArYy5nLGQuYj0odS5iLWMuYikqcCtjLmIscy5uZXh0PW5ldyBhLmRlZmF1bHQoZCxsL2UpLHM9cy5uZXh0fXJldHVybiBpfX07aS5kZWZhdWx0PXJ9LHtcIi4vUHJvcGVydHlOb2RlXCI6N31dLDU6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjt2YXIgcz10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8ZnVuY3Rpb24oKXt2YXIgdD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIGkgaW4gZSllLmhhc093blByb3BlcnR5KGkpJiYodFtpXT1lW2ldKX07cmV0dXJuIGZ1bmN0aW9uKGUsaSl7ZnVuY3Rpb24gcygpe3RoaXMuY29uc3RydWN0b3I9ZX10KGUsaSksZS5wcm90b3R5cGU9bnVsbD09PWk/T2JqZWN0LmNyZWF0ZShpKToocy5wcm90b3R5cGU9aS5wcm90b3R5cGUsbmV3IHMpfX0oKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT10KFwiLi9QYXJ0aWNsZVV0aWxzXCIpLHI9dChcIi4vUGFydGljbGVcIiksbj1uZXcgUElYSS5Qb2ludCxvPVtcInBvd1wiLFwic3FydFwiLFwiYWJzXCIsXCJmbG9vclwiLFwicm91bmRcIixcImNlaWxcIixcIkVcIixcIlBJXCIsXCJzaW5cIixcImNvc1wiLFwidGFuXCIsXCJhc2luXCIsXCJhY29zXCIsXCJhdGFuXCIsXCJhdGFuMlwiLFwibG9nXCJdLGg9bmV3IFJlZ0V4cChbXCJbMDEyMzQ1Njc4OTBcXFxcLlxcXFwqXFxcXC1cXFxcK1xcXFwvXFxcXChcXFxcKXggLF1cIl0uY29uY2F0KG8pLmpvaW4oXCJ8XCIpLFwiZ1wiKSxsPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10Lm1hdGNoKGgpLGk9ZS5sZW5ndGgtMTtpPj0wOy0taSlvLmluZGV4T2YoZVtpXSk+PTAmJihlW2ldPVwiTWF0aC5cIitlW2ldKTtyZXR1cm4gdD1lLmpvaW4oXCJcIiksbmV3IEZ1bmN0aW9uKFwieFwiLFwicmV0dXJuIFwiK3QrXCI7XCIpfSxwPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSl7dmFyIGk9dC5jYWxsKHRoaXMsZSl8fHRoaXM7cmV0dXJuIGkucGF0aD1udWxsLGkuaW5pdGlhbFJvdGF0aW9uPTAsaS5pbml0aWFsUG9zaXRpb249bmV3IFBJWEkuUG9pbnQsaS5tb3ZlbWVudD0wLGl9cmV0dXJuIHMoZSx0KSxlLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dGhpcy5pbml0aWFsUm90YXRpb249dGhpcy5yb3RhdGlvbix0aGlzLlBhcnRpY2xlX2luaXQoKSx0aGlzLnBhdGg9dGhpcy5leHRyYURhdGEucGF0aCx0aGlzLl9kb05vcm1hbE1vdmVtZW50PSF0aGlzLnBhdGgsdGhpcy5tb3ZlbWVudD0wLHRoaXMuaW5pdGlhbFBvc2l0aW9uLng9dGhpcy5wb3NpdGlvbi54LHRoaXMuaW5pdGlhbFBvc2l0aW9uLnk9dGhpcy5wb3NpdGlvbi55fSxlLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5QYXJ0aWNsZV91cGRhdGUodCk7aWYoZT49MCYmdGhpcy5wYXRoKXt2YXIgaT10aGlzLnNwZWVkTGlzdC5pbnRlcnBvbGF0ZShlKSp0aGlzLnNwZWVkTXVsdGlwbGllcjt0aGlzLm1vdmVtZW50Kz1pKnQsbi54PXRoaXMubW92ZW1lbnQsbi55PXRoaXMucGF0aCh0aGlzLm1vdmVtZW50KSxhLmRlZmF1bHQucm90YXRlUG9pbnQodGhpcy5pbml0aWFsUm90YXRpb24sbiksdGhpcy5wb3NpdGlvbi54PXRoaXMuaW5pdGlhbFBvc2l0aW9uLngrbi54LHRoaXMucG9zaXRpb24ueT10aGlzLmluaXRpYWxQb3NpdGlvbi55K24ueX1yZXR1cm4gZX0sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuUGFydGljbGVfZGVzdHJveSgpLHRoaXMucGF0aD10aGlzLmluaXRpYWxQb3NpdGlvbj1udWxsfSxlLnBhcnNlQXJ0PWZ1bmN0aW9uKHQpe3JldHVybiByLmRlZmF1bHQucGFyc2VBcnQodCl9LGUucGFyc2VEYXRhPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O2lmKHQmJnQucGF0aCl0cnl7ZS5wYXRoPWwodC5wYXRoKX1jYXRjaCh0KXthLmRlZmF1bHQudmVyYm9zZSYmY29uc29sZS5lcnJvcihcIlBhdGhQYXJ0aWNsZTogZXJyb3IgaW4gcGFyc2luZyBwYXRoIGV4cHJlc3Npb25cIiksZS5wYXRoPW51bGx9ZWxzZSBhLmRlZmF1bHQudmVyYm9zZSYmY29uc29sZS5lcnJvcihcIlBhdGhQYXJ0aWNsZSByZXF1aXJlcyBhIHBhdGggc3RyaW5nIGluIGV4dHJhRGF0YSFcIiksZS5wYXRoPW51bGw7cmV0dXJuIGV9LGV9KHIuZGVmYXVsdCk7aS5kZWZhdWx0PXB9LHtcIi4vUGFydGljbGVcIjozLFwiLi9QYXJ0aWNsZVV0aWxzXCI6NH1dLDY6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKHQpe3JldHVybiB0aGlzLmVhc2UmJih0PXRoaXMuZWFzZSh0KSksKHRoaXMubmV4dC52YWx1ZS10aGlzLmN1cnJlbnQudmFsdWUpKnQrdGhpcy5jdXJyZW50LnZhbHVlfWZ1bmN0aW9uIGEodCl7dGhpcy5lYXNlJiYodD10aGlzLmVhc2UodCkpO3ZhciBlPXRoaXMuY3VycmVudC52YWx1ZSxpPXRoaXMubmV4dC52YWx1ZSxzPShpLnItZS5yKSp0K2UucixhPShpLmctZS5nKSp0K2UuZyxyPShpLmItZS5iKSp0K2UuYjtyZXR1cm4gbC5kZWZhdWx0LmNvbWJpbmVSR0JDb21wb25lbnRzKHMsYSxyKX1mdW5jdGlvbiByKHQpe2Zvcih0aGlzLmVhc2UmJih0PXRoaXMuZWFzZSh0KSk7dD50aGlzLm5leHQudGltZTspdGhpcy5jdXJyZW50PXRoaXMubmV4dCx0aGlzLm5leHQ9dGhpcy5uZXh0Lm5leHQ7cmV0dXJuIHQ9KHQtdGhpcy5jdXJyZW50LnRpbWUpLyh0aGlzLm5leHQudGltZS10aGlzLmN1cnJlbnQudGltZSksKHRoaXMubmV4dC52YWx1ZS10aGlzLmN1cnJlbnQudmFsdWUpKnQrdGhpcy5jdXJyZW50LnZhbHVlfWZ1bmN0aW9uIG4odCl7Zm9yKHRoaXMuZWFzZSYmKHQ9dGhpcy5lYXNlKHQpKTt0PnRoaXMubmV4dC50aW1lOyl0aGlzLmN1cnJlbnQ9dGhpcy5uZXh0LHRoaXMubmV4dD10aGlzLm5leHQubmV4dDt0PSh0LXRoaXMuY3VycmVudC50aW1lKS8odGhpcy5uZXh0LnRpbWUtdGhpcy5jdXJyZW50LnRpbWUpO3ZhciBlPXRoaXMuY3VycmVudC52YWx1ZSxpPXRoaXMubmV4dC52YWx1ZSxzPShpLnItZS5yKSp0K2UucixhPShpLmctZS5nKSp0K2UuZyxyPShpLmItZS5iKSp0K2UuYjtyZXR1cm4gbC5kZWZhdWx0LmNvbWJpbmVSR0JDb21wb25lbnRzKHMsYSxyKX1mdW5jdGlvbiBvKHQpe2Zvcih0aGlzLmVhc2UmJih0PXRoaXMuZWFzZSh0KSk7dGhpcy5uZXh0JiZ0PnRoaXMubmV4dC50aW1lOyl0aGlzLmN1cnJlbnQ9dGhpcy5uZXh0LHRoaXMubmV4dD10aGlzLm5leHQubmV4dDtyZXR1cm4gdGhpcy5jdXJyZW50LnZhbHVlfWZ1bmN0aW9uIGgodCl7Zm9yKHRoaXMuZWFzZSYmKHQ9dGhpcy5lYXNlKHQpKTt0aGlzLm5leHQmJnQ+dGhpcy5uZXh0LnRpbWU7KXRoaXMuY3VycmVudD10aGlzLm5leHQsdGhpcy5uZXh0PXRoaXMubmV4dC5uZXh0O3ZhciBlPXRoaXMuY3VycmVudC52YWx1ZTtyZXR1cm4gbC5kZWZhdWx0LmNvbWJpbmVSR0JDb21wb25lbnRzKGUucixlLmcsZS5iKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbD10KFwiLi9QYXJ0aWNsZVV0aWxzXCIpLHA9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3ZvaWQgMD09PXQmJih0PSExKSx0aGlzLmN1cnJlbnQ9bnVsbCx0aGlzLm5leHQ9bnVsbCx0aGlzLmlzQ29sb3I9ISF0LHRoaXMuaW50ZXJwb2xhdGU9bnVsbCx0aGlzLmVhc2U9bnVsbH1yZXR1cm4gdC5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24odCl7dGhpcy5jdXJyZW50PXQsdGhpcy5uZXh0PXQubmV4dCx0aGlzLm5leHQmJnRoaXMubmV4dC50aW1lPj0xP3RoaXMuaW50ZXJwb2xhdGU9dGhpcy5pc0NvbG9yP2E6czp0LmlzU3RlcHBlZD90aGlzLmludGVycG9sYXRlPXRoaXMuaXNDb2xvcj9oOm86dGhpcy5pbnRlcnBvbGF0ZT10aGlzLmlzQ29sb3I/bjpyLHRoaXMuZWFzZT10aGlzLmN1cnJlbnQuZWFzZX0sdH0oKTtpLmRlZmF1bHQ9cH0se1wiLi9QYXJ0aWNsZVV0aWxzXCI6NH1dLDc6W2Z1bmN0aW9uKHQsZSxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz10KFwiLi9QYXJ0aWNsZVV0aWxzXCIpLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxpKXt0aGlzLnZhbHVlPVwic3RyaW5nXCI9PXR5cGVvZiB0P3MuZGVmYXVsdC5oZXhUb1JHQih0KTp0LHRoaXMudGltZT1lLHRoaXMubmV4dD1udWxsLHRoaXMuaXNTdGVwcGVkPSExLHRoaXMuZWFzZT1pP1wiZnVuY3Rpb25cIj09dHlwZW9mIGk/aTpzLmRlZmF1bHQuZ2VuZXJhdGVFYXNlKGkpOm51bGx9cmV0dXJuIHQuY3JlYXRlTGlzdD1mdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUubGlzdCkpe3ZhciBpPWUubGlzdCxzPXZvaWQgMCxhPXZvaWQgMDtpZihhPXM9bmV3IHQoaVswXS52YWx1ZSxpWzBdLnRpbWUsZS5lYXNlKSxpLmxlbmd0aD4yfHwyPT09aS5sZW5ndGgmJmlbMV0udmFsdWUhPT1pWzBdLnZhbHVlKWZvcih2YXIgcj0xO3I8aS5sZW5ndGg7KytyKXMubmV4dD1uZXcgdChpW3JdLnZhbHVlLGlbcl0udGltZSkscz1zLm5leHQ7cmV0dXJuIGEuaXNTdGVwcGVkPSEhZS5pc1N0ZXBwZWQsYX12YXIgbj1uZXcgdChlLnN0YXJ0LDApO3JldHVybiBlLmVuZCE9PWUuc3RhcnQmJihuLm5leHQ9bmV3IHQoZS5lbmQsMSkpLG59LHR9KCk7aS5kZWZhdWx0PWF9LHtcIi4vUGFydGljbGVVdGlsc1wiOjR9XSw4OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9dChcIi4vUGFydGljbGVVdGlscy5qc1wiKTtpLlBhcnRpY2xlVXRpbHM9cy5kZWZhdWx0O3ZhciBhPXQoXCIuL1BhcnRpY2xlLmpzXCIpO2kuUGFydGljbGU9YS5kZWZhdWx0O3ZhciByPXQoXCIuL0VtaXR0ZXIuanNcIik7aS5FbWl0dGVyPXIuZGVmYXVsdDt2YXIgbj10KFwiLi9QYXRoUGFydGljbGUuanNcIik7aS5QYXRoUGFydGljbGU9bi5kZWZhdWx0O3ZhciBvPXQoXCIuL0FuaW1hdGVkUGFydGljbGUuanNcIik7aS5BbmltYXRlZFBhcnRpY2xlPW8uZGVmYXVsdH0se1wiLi9BbmltYXRlZFBhcnRpY2xlLmpzXCI6MSxcIi4vRW1pdHRlci5qc1wiOjIsXCIuL1BhcnRpY2xlLmpzXCI6MyxcIi4vUGFydGljbGVVdGlscy5qc1wiOjQsXCIuL1BhdGhQYXJ0aWNsZS5qc1wiOjV9XSw5OltmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7aWYoT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksXCJ1bmRlZmluZWRcIj09dHlwZW9mIFBJWEkpdGhyb3dcInBpeGktcGFydGljbGVzIHJlcXVpcmVzIHBpeGkuanMgdG8gYmUgbG9hZGVkIGZpcnN0XCI7UElYSS5wYXJ0aWNsZXN8fChQSVhJLnBhcnRpY2xlcz17fSk7dmFyIHM9dChcIi4vcGFydGljbGVzXCIpO2Zvcih2YXIgYSBpbiBzKVBJWEkucGFydGljbGVzW2FdPXNbYV07dm9pZCAwIT09ZSYmZS5leHBvcnRzJiYoZS5leHBvcnRzPXMpfSx7XCIuL3BhcnRpY2xlc1wiOjh9XX0se30sWzldKSg5KX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGl4aS1wYXJ0aWNsZXMubWluLmpzLm1hcFxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0IHtTaW1wbGVCdXR0b24sIEZsaXBwYWJsZVNwcml0ZSwgR2FtZUxldmVsfSBmcm9tICcuL3N1cHBvcnQnO1xyXG5pbXBvcnQge0Jhc2VBcHB9IGZyb20gJy4vbWFpbic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZHNMZXZlbCBpbXBsZW1lbnRzICBHYW1lTGV2ZWwge1xyXG4gIGxldmVsX25hbWU6c3RyaW5nID0gXCJDYXJkc1wiO1xyXG4gIGNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBkZWNrX3NpemU6bnVtYmVyID0gMTQ0O1xyXG4gIHByaXZhdGUgZGVjazpGbGlwcGFibGVTcHJpdGVbXTtcclxuICBwcml2YXRlIHRpY2tlcjpQSVhJLnRpY2tlci5UaWNrZXI7XHJcbiAgcHJpdmF0ZSBjYXJkX2luZGV4Om51bWJlciA9IDA7XHJcbiAgY2FyZF9kZWxheTpudW1iZXIgPSAxMDAwO1xyXG4gIGNhcmRfYW5pbV9zcGVlZDpudW1iZXIgPSAyMDAwO1xyXG4gIHByaXZhdGUgY2FyZF9jb3VudGVyOm51bWJlciA9IDAuMDtcclxuICBwcml2YXRlIGNhcmRfc3RhcnRfdGltZTpudW1iZXIgPSAwLjA7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMudGlja2VyID0gbmV3IFBJWEkudGlja2VyLlRpY2tlcigpO1xyXG4gICAgICB0aGlzLnRpY2tlci5hdXRvU3RhcnQgPSBmYWxzZTtcclxuICB9XHJcbiAgY3JlYXRlTGV2ZWwoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FyZCBMZXZlbCBjcmVhdGlvbiBzdGFydGVkLlwiKTtcclxuICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgICAgLy8gY3JlYXRlIGNhcmRzXHJcbiAgICAgIHRoaXMuZGVjayA9IFtdO1xyXG4gICAgICB2YXIgc3BhY2luZyA9IDM7XHJcbiAgICAgIHZhciBiYWNrcyA9IFtcImNhcmRCYWNrX2JsdWU1LnBuZ1wiLCBcImNhcmRCYWNrX2dyZWVuNS5wbmdcIiwgXCJjYXJkQmFja19yZWQ1LnBuZ1wiXTtcclxuICAgICAgdmFyIGZyb250cyA9IFtcImNhcmRDbHViczIucG5nXCIsXCJjYXJkQ2x1YnMzLnBuZ1wiLFwiY2FyZENsdWJzNC5wbmdcIixcImNhcmRDbHViczUucG5nXCIsXCJjYXJkQ2x1YnM2LnBuZ1wiLFwiY2FyZENsdWJzNy5wbmdcIixcImNhcmRDbHViczgucG5nXCIsXCJjYXJkQ2x1YnM5LnBuZ1wiLFwiY2FyZENsdWJzMTAucG5nXCIsXCJjYXJkQ2x1YnNBLnBuZ1wiLFwiY2FyZENsdWJzSi5wbmdcIixcImNhcmRDbHVic0sucG5nXCIsXCJjYXJkQ2x1YnNRLnBuZ1wiLFwiY2FyZERpYW1vbmRzMi5wbmdcIixcImNhcmREaWFtb25kczMucG5nXCIsXCJjYXJkRGlhbW9uZHM0LnBuZ1wiLFwiY2FyZERpYW1vbmRzNS5wbmdcIixcImNhcmREaWFtb25kczYucG5nXCIsXCJjYXJkRGlhbW9uZHM3LnBuZ1wiLFwiY2FyZERpYW1vbmRzOC5wbmdcIixcImNhcmREaWFtb25kczkucG5nXCIsXCJjYXJkRGlhbW9uZHMxMC5wbmdcIixcImNhcmREaWFtb25kc0EucG5nXCIsXCJjYXJkRGlhbW9uZHNKLnBuZ1wiLFwiY2FyZERpYW1vbmRzSy5wbmdcIixcImNhcmREaWFtb25kc1EucG5nXCIsXCJjYXJkSGVhcnRzMi5wbmdcIixcImNhcmRIZWFydHMzLnBuZ1wiLFwiY2FyZEhlYXJ0czQucG5nXCIsXCJjYXJkSGVhcnRzNS5wbmdcIixcImNhcmRIZWFydHM2LnBuZ1wiLFwiY2FyZEhlYXJ0czcucG5nXCIsXCJjYXJkSGVhcnRzOC5wbmdcIixcImNhcmRIZWFydHM5LnBuZ1wiLFwiY2FyZEhlYXJ0czEwLnBuZ1wiLFwiY2FyZEhlYXJ0c0EucG5nXCIsXCJjYXJkSGVhcnRzSi5wbmdcIixcImNhcmRIZWFydHNLLnBuZ1wiLFwiY2FyZEhlYXJ0c1EucG5nXCIsXCJjYXJkSm9rZXIucG5nXCIsXCJjYXJkU3BhZGVzMi5wbmdcIixcImNhcmRTcGFkZXMzLnBuZ1wiLFwiY2FyZFNwYWRlczQucG5nXCIsXCJjYXJkU3BhZGVzNS5wbmdcIixcImNhcmRTcGFkZXM2LnBuZ1wiLFwiY2FyZFNwYWRlczcucG5nXCIsXCJjYXJkU3BhZGVzOC5wbmdcIixcImNhcmRTcGFkZXM5LnBuZ1wiLFwiY2FyZFNwYWRlczEwLnBuZ1wiLFwiY2FyZFNwYWRlc0EucG5nXCIsXCJjYXJkU3BhZGVzSi5wbmdcIixcImNhcmRTcGFkZXNLLnBuZ1wiLFwiY2FyZFNwYWRlc1EucG5nXCJdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGVja19zaXplOyBpKyspIHtcclxuICAgICAgICAgIHZhciBiYWNrID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZShiYWNrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKGJhY2tzLmxlbmd0aC0wLjEpKV0pO1xyXG4gICAgICAgICAgdmFyIGZyb250ID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZShmcm9udHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihmcm9udHMubGVuZ3RoLTAuMSkpXSk7XHJcbiAgICAgICAgICB2YXIgY2FyZCA9IG5ldyBGbGlwcGFibGVTcHJpdGUoZnJvbnQsIGJhY2spXHJcbiAgICAgICAgICBjYXJkLmZsaXBfcm90YXRpb24gPSAwO1xyXG4gICAgICAgICAgY2FyZC5mbGlwX3RpbWUgPSB0aGlzLmNhcmRfYW5pbV9zcGVlZDtcclxuICAgICAgICAgIGNhcmQuZmxpcF9zY2FsZSA9IHRydWU7XHJcbiAgICAgICAgICBjYXJkLnNjYWxlLnggPSAwLjY7XHJcbiAgICAgICAgICBjYXJkLnNjYWxlLnkgPSAwLjY7XHJcbiAgICAgICAgICBjYXJkLmZsaXBfc2xpZGVfeCA9IDIwMDtcclxuICAgICAgICAgIGNhcmQuZmxpcF9zbGlkZV95ID0gMjA7XHJcbiAgICAgICAgICBjYXJkLnggPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLndpZHRoLzIgLSAxMDA7Ly8gKyBpKnNwYWNpbmc7XHJcbiAgICAgICAgICBjYXJkLnkgPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLmhlaWdodC8yICsgKHRoaXMuZGVja19zaXplLzIpICogc3BhY2luZyAtIGkqc3BhY2luZztcclxuICAgICAgICAgIHRoaXMuZGVjay5wdXNoKGNhcmQpO1xyXG4gICAgICAgICAgY2FyZC5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY2FyZCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYXJkX2NvdW50ZXIgPSB0aGlzLmNhcmRfZGVsYXk7XHJcbiAgICAgIHRoaXMuY2FyZF9pbmRleCA9IC0xO1xyXG4gICAgICB0aGlzLmNhcmRfc3RhcnRfdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG4gICAgICB0aGlzLnRpY2tlci5hZGQodGhpcy5vblRpY2spO1xyXG5cclxuICAgICAgLy9jcmVhdGUgYmFjayBvcHRpb25cclxuICAgICAgdmFyIG1lbnVfYmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICBtZW51X2JnLmJlZ2luRmlsbCgweEVFRUVFRSk7XHJcbiAgICAgIG1lbnVfYmcubGluZVN0eWxlKDIsIDB4ZGRkZGZGLCAxKTtcclxuICAgICAgbWVudV9iZy5kcmF3Um91bmRlZFJlY3QoMTAwLCAxMDAsIDIwMCwgMTAwLCA1KTtcclxuICAgICAgbWVudV9iZy5lbmRGaWxsKCk7XHJcblxyXG4gICAgICB2YXIgbWFpbl9tZW51X2J0biA9IG5ldyBTaW1wbGVCdXR0b24oJ0JhY2snLCAweDAwYTlmZiwgMHg5OWQ5ZmYsIDB4MDA2NmFhLCAxNTAsICA1MCwgMyk7XHJcbiAgICAgIG1haW5fbWVudV9idG4ueCA9IDEyNTtcclxuICAgICAgbWFpbl9tZW51X2J0bi55ID0gMTI1O1xyXG4gICAgICBtZW51X2JnLmFkZENoaWxkKG1haW5fbWVudV9idG4pO1xyXG4gICAgICBtYWluX21lbnVfYnRuLnNldENsaWNrQ2FsbGJhY2sodGhpcy5iYWNrVG9NZW51KTtcclxuICAgICAgbWFpbl9tZW51X2J0bi5hY3RpdmF0ZSgpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtZW51X2JnKTtcclxuICAgICAgQmFzZUFwcC5pbnN0YW5jZS5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FyZCBMZXZlbCBjcmVhdGVkIHN1Y2Nlc3NmdWxseS5cIik7XHJcbiAgfVxyXG4gIGJhY2tUb01lbnUoKSB7XHJcbiAgICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJNYWluTWVudVwiKTtcclxuICB9XHJcbiAgZGVzdHJveUxldmVsKCkge1xyXG4gICAgICB0aGlzLmRlY2sgPSBbXVxyXG4gICAgICB0aGlzLnRpY2tlci5zdG9wKCk7XHJcbiAgICAgIHRoaXMudGlja2VyLnJlbW92ZSh0aGlzLm9uVGljayk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmRlc3Ryb3koe2NoaWxkcmVuOnRydWV9KTtcclxuICB9XHJcbiAgb25UaWNrID0gKGRlbHRhOm51bWJlcikgPT4ge1xyXG4gICAgdGhpcy5jYXJkX2NvdW50ZXIgKz0gdGhpcy50aWNrZXIuZWxhcHNlZE1TO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIlRpY2tpbmcuLi4gXCIsdGhpcy5jYXJkX2NvdW50ZXIsXCIgaW5kZXg6IFwiK3RoaXMuY2FyZF9pbmRleCk7XHJcbiAgICBpZiAodGhpcy5jYXJkX2NvdW50ZXIgPj0gdGhpcy5jYXJkX2RlbGF5KSB7XHJcbiAgICAgICAgdGhpcy5jYXJkX2NvdW50ZXIgPSAwLjA7XHJcbiAgICAgICAgLy8gbW92ZSBjdXJyZW50IGNhcmQgdG8gdGhlIGJhY2suXHJcbiAgICAgICAgaWYgKHRoaXMuY2FyZF9pbmRleCA+PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRDaGlsZEluZGV4KHRoaXMuZGVja1t0aGlzLmRlY2subGVuZ3RoLXRoaXMuY2FyZF9pbmRleC0xXSx0aGlzLmNhcmRfaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuY2FyZF9pbmRleCArKztcclxuICAgICAgICBpZiAodGhpcy5jYXJkX2luZGV4ID09IHRoaXMuZGVjay5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIC8vVGhlIEVuZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhcmQgYW5pbWF0aW9uIGNvbXBsZXRlZCBpbiBcIixwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuY2FyZF9zdGFydF90aW1lLFwiIG1zXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVja1t0aGlzLmRlY2subGVuZ3RoLXRoaXMuY2FyZF9pbmRleC0xXS5mbGlwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFzdENhcmRzTGV2ZWwgZXh0ZW5kcyBDYXJkc0xldmVsIHtcclxuICAgIGxldmVsX25hbWUgPSBcIkZhc3RDYXJkc1wiO1xyXG4gICAgY2FyZF9kZWxheSA9IDEwMDtcclxuICAgIGNhcmRfYW5pbV9zcGVlZCA9IDMwMDtcclxufSIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCAqIGFzIEhVQiBmcm9tICcuL3N1cHBvcnQnO1xyXG5pbXBvcnQge0NhcmRzTGV2ZWwsIEZhc3RDYXJkc0xldmVsfSBmcm9tICcuL2NhcmRzX2xldmVscyc7XHJcbmltcG9ydCB7VGV4dEltYWdlTGV2ZWx9IGZyb20gJy4vdGV4dF9pbWFnZV9sZXZlbCc7XHJcbmltcG9ydCB7UGFydGljbGVzTGV2ZWx9IGZyb20gJy4vcGFydGljbGVzX2xldmVsJztcclxuaW1wb3J0IHtNYWluTWVudX0gZnJvbSAnLi9tYWluX21lbnUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VBcHAgZXh0ZW5kcyBQSVhJLkFwcGxpY2F0aW9uIHtcclxuICBzdGF0aWMgaW5zdGFuY2U6QmFzZUFwcDtcclxuICBjdXJyZW50X2xldmVsOkhVQi5HYW1lTGV2ZWw7XHJcbiAgZnBzX3RleHQ6IGFueTtcclxuICBzdGFnZTogYW55O1xyXG4gIGF2YWlsYWJsZV9sZXZlbHM6IEhVQi5HYW1lTGV2ZWxbXTtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCB7dHJhbnNwYXJlbnQ6dHJ1ZX0pO1xyXG4gICAgaWYgKEJhc2VBcHAuaW5zdGFuY2UpIHtcclxuICAgICAgLy9nYW1lIGFscmVhZHkgcnVubmluZ1xyXG4gICAgICB0aGlzLmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL2luaXRpYWxpemF0aW9uXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy52aWV3KTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXBwLnJlbmRlcmVyLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGlja2VyLmFkZCh0aGlzLnJlbmRlckZQUyk7XHJcbiAgICAgIEJhc2VBcHAuaW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgdGhpcy5hdmFpbGFibGVfbGV2ZWxzID0gW11cclxuICAgICAgdmFyIGh1YiA9IG5ldyBNYWluTWVudSgpO1xyXG4gICAgICB0aGlzLmF2YWlsYWJsZV9sZXZlbHMucHVzaChodWIpO1xyXG4gICAgICBmb3IgKHZhciBsZXZlbCBvZiBbbmV3IENhcmRzTGV2ZWwoKSwgbmV3IEZhc3RDYXJkc0xldmVsKCksIG5ldyBUZXh0SW1hZ2VMZXZlbCgpLCBuZXcgUGFydGljbGVzTGV2ZWwoKV0pIHtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZV9sZXZlbHMucHVzaChsZXZlbCk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2ZpcnN0IGxldmVsXHJcbiAgICAgIHRoaXMuY3VycmVudF9sZXZlbCA9IGh1YjtcclxuICAgICAgaHViLmNyZWF0ZUxldmVsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlckZQUyA9IChkZWx0YTpudW1iZXIpID0+IHtcclxuICAgIGlmICh0aGlzLmZwc190ZXh0ID09IG51bGwpIHtcclxuICAgICAgdmFyIHN0eWxlID0ge1xyXG4gICAgICAgIGZvbnQgOiAnYm9sZCAxNnB4IEFyaWFsJyxcclxuICAgICAgICBmaWxsIDogJyNGN0VEQ0EnLFxyXG4gICAgICAgIHN0cm9rZSA6ICcjNGExODUwJyxcclxuICAgICAgICBzdHJva2VUaGlja25lc3MgOiA1XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZnBzX3RleHQgPSBuZXcgUElYSS5UZXh0KFwiRlBTPTYwXCIsIHN0eWxlKTtcclxuICAgICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmZwc190ZXh0KTtcclxuICAgIH1cclxuICAgIHRoaXMuZnBzX3RleHQueCA9IGFwcC5yZW5kZXJlci53aWR0aCAtIDE1IC0gdGhpcy5mcHNfdGV4dC53aWR0aDtcclxuICAgIHRoaXMuZnBzX3RleHQueSA9IDEwO1xyXG4gICAgdGhpcy5mcHNfdGV4dC50ZXh0ID0gXCJGUFMgPSBcIitNYXRoLnJvdW5kKHRoaXMudGlja2VyLkZQUyk7XHJcbiAgfVxyXG4gIGNoYW5nZUxldmVsKGxldmVsX25hbWU6c3RyaW5nKTp2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU3dpdGNoaW5nIGZyb20gXCIsIHRoaXMuY3VycmVudF9sZXZlbC5sZXZlbF9uYW1lLCBcIiB0byBcIiwgbGV2ZWxfbmFtZSk7XHJcbiAgICBmb3IgKHZhciBsZXZlbCBvZiB0aGlzLmF2YWlsYWJsZV9sZXZlbHMpIHtcclxuICAgICAgaWYgKGxldmVsLmxldmVsX25hbWUgPT09IGxldmVsX25hbWUpIHtcclxuICAgICAgICAvL2ZvdW5kIHRoZSBsZXZlbCwgcmVtb3ZlIG9sZCBvbmVcclxuICAgICAgICB0aGlzLmN1cnJlbnRfbGV2ZWwuZGVzdHJveUxldmVsKCk7XHJcbiAgICAgICAgLy91cGRhdGUgYW5kIGNyZWF0ZSB0aGUgbmV3IGxldmVsXHJcbiAgICAgICAgdGhpcy5jdXJyZW50X2xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgbGV2ZWwuY3JlYXRlTGV2ZWwoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vbm8gbGV2ZWwgZm91bmQgd2l0aCB0aGF0IG5hbWUuXHJcbiAgICBjb25zb2xlLmVycm9yKFwiTm8gbGV2ZWwgZm91bmQgd2l0aCBuYW1lOiBcIitsZXZlbF9uYW1lK1wiLiBDYW5ub3QgY2hhbmdlIGxldmVsIVwiKTtcclxuICB9XHJcbn1cclxuXHJcbnZhciBhcHAgPSBuZXcgQmFzZUFwcCgpO1xyXG4iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gJ3BpeGkuanMnO1xyXG5pbXBvcnQge1NpbXBsZUJ1dHRvbiwgRmxpcHBhYmxlU3ByaXRlLCBHYW1lTGV2ZWx9IGZyb20gJy4vc3VwcG9ydCc7XHJcbmltcG9ydCB7QmFzZUFwcH0gZnJvbSAnLi9tYWluJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudSBpbXBsZW1lbnRzIEdhbWVMZXZlbCB7XHJcbiAgbGV2ZWxfbmFtZTpzdHJpbmcgPSBcIk1haW5NZW51XCI7XHJcbiAgY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuICBidXR0b25zOlNpbXBsZUJ1dHRvbltdO1xyXG4gIGNvaW46RmxpcHBhYmxlU3ByaXRlO1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci54ID0gMTAwO1xyXG4gICAgdGhpcy5jb250YWluZXIueSA9IDEwMDtcclxuXHJcbiAgICB2YXIgbWVudV9iZyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICBtZW51X2JnLmJlZ2luRmlsbCgweEVFRUVFRSk7XHJcbiAgICBtZW51X2JnLmxpbmVTdHlsZSgyLCAweGRkZGRmRiwgMSk7XHJcbiAgICBtZW51X2JnLmRyYXdSb3VuZGVkUmVjdCgwLCAwLCAyMDAsIDMyNSwgNSk7XHJcbiAgICBtZW51X2JnLmVuZEZpbGwoKTtcclxuXHJcbiAgICB2YXIgdGVzdGVfY2FydGFzID0gbmV3IFNpbXBsZUJ1dHRvbignQ2FyZHMnLCAweDAwYTlmZiwgMHg5OWQ5ZmYsIDB4MDA2NmFhLCAxNTAsICA1MCwgMyk7XHJcbiAgICB0ZXN0ZV9jYXJ0YXMueCA9IDI1O1xyXG4gICAgdGVzdGVfY2FydGFzLnkgPSAyNTtcclxuICAgIG1lbnVfYmcuYWRkQ2hpbGQodGVzdGVfY2FydGFzKTtcclxuICAgIHRlc3RlX2NhcnRhcy5zZXRDbGlja0NhbGxiYWNrKHRoaXMuZW50ZXJDYXJkcyk7XHJcblxyXG4gICAgdmFyIHRlc3RlX2Zhc3RfY2FydGFzID0gbmV3IFNpbXBsZUJ1dHRvbignKEZhc3QpIENhcmRzJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgdGVzdGVfZmFzdF9jYXJ0YXMueCA9IDI1O1xyXG4gICAgdGVzdGVfZmFzdF9jYXJ0YXMueSA9IHRlc3RlX2NhcnRhcy55ICsgdGVzdGVfY2FydGFzLmhlaWdodCArIDI1O1xyXG4gICAgbWVudV9iZy5hZGRDaGlsZCh0ZXN0ZV9mYXN0X2NhcnRhcyk7XHJcbiAgICB0ZXN0ZV9mYXN0X2NhcnRhcy5zZXRDbGlja0NhbGxiYWNrKHRoaXMuZW50ZXJGYXN0Q2FyZHMpO1xyXG5cclxuICAgIHZhciB0ZXN0ZV90ZXh0ID0gbmV3IFNpbXBsZUJ1dHRvbignVGV4dCArIEltYWdlJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgdGVzdGVfdGV4dC54ID0gMjU7XHJcbiAgICB0ZXN0ZV90ZXh0LnkgPSB0ZXN0ZV9mYXN0X2NhcnRhcy55ICsgdGVzdGVfZmFzdF9jYXJ0YXMuaGVpZ2h0ICsgMjU7XHJcbiAgICBtZW51X2JnLmFkZENoaWxkKHRlc3RlX3RleHQpO1xyXG4gICAgdGVzdGVfdGV4dC5zZXRDbGlja0NhbGxiYWNrKHRoaXMuZW50ZXJUZXh0SW1hZ2UpO1xyXG5cclxuICAgIHZhciB0ZXN0ZV9wYXJ0aWNsZXMgPSBuZXcgU2ltcGxlQnV0dG9uKCdQYXJ0aWNsZXMnLCAweDAwYTlmZiwgMHg5OWQ5ZmYsIDB4MDA2NmFhLCAxNTAsICA1MCwgMyk7XHJcbiAgICB0ZXN0ZV9wYXJ0aWNsZXMueCA9IDI1O1xyXG4gICAgdGVzdGVfcGFydGljbGVzLnkgPSB0ZXN0ZV90ZXh0LnkgKyB0ZXN0ZV90ZXh0LmhlaWdodCArIDI1O1xyXG4gICAgbWVudV9iZy5hZGRDaGlsZCh0ZXN0ZV9wYXJ0aWNsZXMpO1xyXG4gICAgdGVzdGVfcGFydGljbGVzLnNldENsaWNrQ2FsbGJhY2sodGhpcy5lbnRlclBhcnRpY2xlcyk7XHJcblxyXG4gICAgdGhpcy5idXR0b25zID0gW3Rlc3RlX2NhcnRhcywgdGVzdGVfdGV4dCwgdGVzdGVfcGFydGljbGVzLCB0ZXN0ZV9mYXN0X2NhcnRhc107XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChtZW51X2JnKTtcclxuICAgIFBJWEkubG9hZGVyXHJcbiAgICAgICAgLmFkZCgnZnVsbF9zcHJpdGVzLmpzb24nKVxyXG4gICAgICAgIC5hZGQoJ3BhcnRpY2xlUGFjay5qc29uJylcclxuICAgICAgICAubG9hZCh0aGlzLmxvYWRDb2luKTtcclxuXHJcbiAgICAvL2V4dHJhIFRleHRcclxuICAgIHZhciBzdHlsZSA9IHtcclxuICAgICAgICBmb250IDogJ2l0YWxpYyAxOHB4IEFyaWFsJyxcclxuICAgICAgICBmaWxsIDogMHhGRkZGRkYsXHJcbiAgICAgICAgYWxpZ246ICdyaWdodCdcclxuICAgIH1cclxuICAgIHZhciB0ZXh0ID0gbmV3IFBJWEkuVGV4dChcIlVzaW5nOiBQaXhpLkpTLCBUeXBlc2NyaXB0LCB3ZWJwYWNrIGFuZCBOUE1cXG5HYW1lIERldmVsb3BtZW50IFRlc3RcXG5NYXJjZWxvIEYuIFJpZ29uXFxuQXNzZXRzOiBrZW5uZXkubmxcIiwgc3R5bGUpO1xyXG4gICAgdGV4dC54ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci53aWR0aC8yICsgdGV4dC53aWR0aCAtIHRoaXMuY29udGFpbmVyLng7XHJcbiAgICB0ZXh0LnkgPSAwO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGV4dCk7XHJcblxyXG4gIH1cclxuICBwcml2YXRlIGxvYWRDb2luID0gKCk6dm9pZCA9PiB7XHJcbiAgICB0aGlzLmNvaW4gPSBuZXcgRmxpcHBhYmxlU3ByaXRlKFBJWEkuVGV4dHVyZS5mcm9tSW1hZ2UoJ2NoaXBHcmVlbldoaXRlX3NpZGVCb3JkZXIucG5nJykpO1xyXG4gICAgdGhpcy5jb2luLmZsaXBfc2xpZGVfeSA9IDEwMDtcclxuICAgIHRoaXMuY29pbi5mbGlwX3JvdGF0aW9uID0gTWF0aC5QSSoyO1xyXG4gICAgdGhpcy5jb2luLmZsaXBfc2xpZGVfeCA9IDA7XHJcbiAgICB0aGlzLmNvaW4uZmxpcF9zY2FsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb2luLnggPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLndpZHRoLzI7XHJcbiAgICB0aGlzLmNvaW4ueSA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIuaGVpZ2h0LzI7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmNvaW4pO1xyXG5cclxuICAgIHZhciBjb2luMiA9IG5ldyBGbGlwcGFibGVTcHJpdGUoUElYSS5UZXh0dXJlLmZyb21JbWFnZSgnY2hpcEdyZWVuV2hpdGVfc2lkZUJvcmRlci5wbmcnKSk7XHJcbiAgICBjb2luMi5mbGlwX3NsaWRlX3kgPSAxMDA7XHJcbiAgICBjb2luMi5mbGlwX3JvdGF0aW9uID0gTWF0aC5QSSoyO1xyXG4gICAgY29pbjIuZmxpcF9zbGlkZV94ID0gMDtcclxuICAgIGNvaW4yLmZsaXBfc2NhbGUgPSBmYWxzZTtcclxuICAgIGNvaW4yLmZsaXBfdGltZSA9IDUwMDtcclxuICAgIGNvaW4yLnggPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLndpZHRoLzIgLSA4MDtcclxuICAgIGNvaW4yLnkgPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLmhlaWdodC8yO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY29pbjIpO1xyXG4gICAgdmFyIHN0eWxlID0ge1xyXG4gICAgICAgIGZvbnQgOiAnYm9sZCAxOHB4IEFyaWFsJyxcclxuICAgICAgICBmaWxsIDogMHhGRkZGRkYsXHJcbiAgICB9XHJcbiAgICB2YXIgdGV4dCA9IG5ldyBQSVhJLlRleHQoXCJDbGljayBtZSFcIiwgc3R5bGUpO1xyXG4gICAgdGV4dC54ID0gdGhpcy5jb2luLnggLSB0ZXh0LndpZHRoLzI7XHJcbiAgICB0ZXh0LnkgPSB0aGlzLmNvaW4ueSArMzA7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0ZXh0KTtcclxuICB9XHJcbiAgY3JlYXRlTGV2ZWwoKTp2b2lkIHtcclxuICAgIGZvciAodmFyIGJ1dHRvbiBvZiB0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICBidXR0b24uYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvaW4pXHJcbiAgICAgICAgdGhpcy5jb2luLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIEJhc2VBcHAuaW5zdGFuY2Uuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gIH1cclxuICBkZXN0cm95TGV2ZWwoKTp2b2lkIHtcclxuICAgIGZvciAodmFyIGJ1dHRvbiBvZiB0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICBidXR0b24uZGVhY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvaW4pXHJcbiAgICAgICAgdGhpcy5jb2luLmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICB9XHJcbiAgZW50ZXJDYXJkcygpOnZvaWQge1xyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5jaGFuZ2VMZXZlbChcIkNhcmRzXCIpO1xyXG4gIH1cclxuICBlbnRlckZhc3RDYXJkcygpOnZvaWQge1xyXG4gICAgQmFzZUFwcC5pbnN0YW5jZS5jaGFuZ2VMZXZlbChcIkZhc3RDYXJkc1wiKTtcclxuICB9XHJcbiAgZW50ZXJUZXh0SW1hZ2UoKTp2b2lkIHtcclxuICAgIEJhc2VBcHAuaW5zdGFuY2UuY2hhbmdlTGV2ZWwoXCJUZXh0SW1hZ2VcIik7XHJcbiAgfVxyXG4gIGVudGVyUGFydGljbGVzKCk6dm9pZCB7XHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLmNoYW5nZUxldmVsKFwiUGFydGljbGVzXCIpO1xyXG4gIH1cclxufSIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcyc7XHJcbmltcG9ydCAqIGFzIFRPT0xTIGZyb20gJy4vc3VwcG9ydCc7XHJcbmltcG9ydCB7QmFzZUFwcH0gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0ICogYXMgUEFSVElDTEVTIGZyb20gJ3BpeGktcGFydGljbGVzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGVzTGV2ZWwgaW1wbGVtZW50cyBUT09MUy5HYW1lTGV2ZWwge1xyXG4gIGxldmVsX25hbWU6c3RyaW5nID0gXCJQYXJ0aWNsZXNcIjtcclxuICBjb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gIHRpY2tlcjogUElYSS50aWNrZXIuVGlja2VyO1xyXG4gIGVtaXR0ZXI6UEFSVElDTEVTLkVtaXR0ZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLnRpY2tlci5UaWNrZXIoKTtcclxuICAgIHRoaXMudGlja2VyLmF1dG9TdGFydCA9IGZhbHNlO1xyXG4gICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gIH1cclxuICBjcmVhdGVMZXZlbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUGFydGljbGVzIGNyZWF0aW9uIHN0YXJ0ZWQuXCIpO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuXHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMudGlja2VyLmFkZCh0aGlzLm9uVGljayk7XHJcbiAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG5cclxuICAgIC8vY3JlYXRlIGJhY2sgb3B0aW9uXHJcbiAgICB2YXIgbWVudV9iZyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICBtZW51X2JnLmJlZ2luRmlsbCgweEVFRUVFRSk7XHJcbiAgICBtZW51X2JnLmxpbmVTdHlsZSgyLCAweGRkZGRmRiwgMSk7XHJcbiAgICBtZW51X2JnLmRyYXdSb3VuZGVkUmVjdCgxMDAsIDEwMCwgMjAwLCAxMDAsIDUpO1xyXG4gICAgbWVudV9iZy5lbmRGaWxsKCk7XHJcblxyXG4gICAgdmFyIG1haW5fbWVudV9idG4gPSBuZXcgVE9PTFMuU2ltcGxlQnV0dG9uKCdCYWNrJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgbWFpbl9tZW51X2J0bi54ID0gMTI1O1xyXG4gICAgbWFpbl9tZW51X2J0bi55ID0gMTI1O1xyXG4gICAgbWVudV9iZy5hZGRDaGlsZChtYWluX21lbnVfYnRuKTtcclxuICAgIG1haW5fbWVudV9idG4uc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmJhY2tUb01lbnUpO1xyXG4gICAgbWFpbl9tZW51X2J0bi5hY3RpdmF0ZSgpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWVudV9iZyk7XHJcblxyXG4gICAgdGhpcy5lbWl0dGVyID0gbmV3IFBBUlRJQ0xFUy5FbWl0dGVyKHRoaXMuY29udGFpbmVyLCBQSVhJLlRleHR1cmUuZnJvbUltYWdlKCdmaXJlXzAyLnBuZycpLCB7XHJcbiAgICAgICAgICBcImFscGhhXCI6IHtcclxuICAgICAgICAgICAgXCJzdGFydFwiOiAxLFxyXG4gICAgICAgICAgICBcImVuZFwiOiAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJzY2FsZVwiOiB7XHJcbiAgICAgICAgICAgIFwic3RhcnRcIjogMC40LFxyXG4gICAgICAgICAgICBcImVuZFwiOiAwLjAxLFxyXG4gICAgICAgICAgICBcIm1pbmltdW1TY2FsZU11bHRpcGxpZXJcIjogMlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiY29sb3JcIjoge1xyXG4gICAgICAgICAgICBcInN0YXJ0XCI6IFwiI2YwMDkxOVwiLFxyXG4gICAgICAgICAgICBcImVuZFwiOiBcIiNlMGE1NjJcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwic3BlZWRcIjoge1xyXG4gICAgICAgICAgICBcInN0YXJ0XCI6IDI1LFxyXG4gICAgICAgICAgICBcImVuZFwiOiA4MCxcclxuICAgICAgICAgICAgXCJtaW5pbXVtU3BlZWRNdWx0aXBsaWVyXCI6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImFjY2VsZXJhdGlvblwiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAwLFxyXG4gICAgICAgICAgICBcInlcIjogLTUwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwibWF4U3BlZWRcIjogMCxcclxuICAgICAgICAgIFwic3RhcnRSb3RhdGlvblwiOiB7XHJcbiAgICAgICAgICAgIFwibWluXCI6IDAsXHJcbiAgICAgICAgICAgIFwibWF4XCI6IDM2MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwibm9Sb3RhdGlvblwiOiBmYWxzZSxcclxuICAgICAgICAgIFwicm90YXRpb25TcGVlZFwiOiB7XHJcbiAgICAgICAgICAgIFwibWluXCI6IDAsXHJcbiAgICAgICAgICAgIFwibWF4XCI6IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImxpZmV0aW1lXCI6IHtcclxuICAgICAgICAgICAgXCJtaW5cIjogMC4yLFxyXG4gICAgICAgICAgICBcIm1heFwiOiAxLjJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImJsZW5kTW9kZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgXCJmcmVxdWVuY3lcIjogMC4wMDEsXHJcbiAgICAgICAgICBcImVtaXR0ZXJMaWZldGltZVwiOiAtMSxcclxuICAgICAgICAgIFwibWF4UGFydGljbGVzXCI6IDUwMCxcclxuICAgICAgICAgIFwicG9zXCI6IHtcclxuICAgICAgICAgICAgXCJ4XCI6IDAsXHJcbiAgICAgICAgICAgIFwieVwiOiAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJhZGRBdEJhY2tcIjogZmFsc2UsXHJcbiAgICAgICAgICBcInNwYXduVHlwZVwiOiBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgXCJzcGF3bkNpcmNsZVwiOiB7XHJcbiAgICAgICAgICAgIFwieFwiOiAwLFxyXG4gICAgICAgICAgICBcInlcIjogMCxcclxuICAgICAgICAgICAgXCJyXCI6IDEyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB0aGlzLmVtaXR0ZXIuc3Bhd25Qb3MueCA9IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIud2lkdGgvMjtcclxuICAgIHRoaXMuZW1pdHRlci5zcGF3blBvcy55ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQvMjtcclxuICAgIHRoaXMuZW1pdHRlci5hdXRvVXBkYXRlID0gdHJ1ZTtcclxuICAgIHRoaXMuZW1pdHRlci5lbWl0ID0gdHJ1ZTtcclxuICB9XHJcbiAgYmFja1RvTWVudSgpIHtcclxuICAgICAgQmFzZUFwcC5pbnN0YW5jZS5jaGFuZ2VMZXZlbChcIk1haW5NZW51XCIpO1xyXG4gIH1cclxuICBkZXN0cm95TGV2ZWwoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5kZXN0cm95KHtjaGlsZHJlbjp0cnVlfSk7XHJcbiAgICB0aGlzLmVtaXR0ZXIuZGVzdHJveSgpO1xyXG4gICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gIH1cclxuICB1cGRhdGVFbWl0dGVyKHB4Om51bWJlciwgcHk6bnVtYmVyKSB7XHJcbiAgICBpZiAoKHB4IDwgMzAwKSB8fCAocHggPiBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLndpZHRoLTIwMCkgfHxcclxuICAgICAgICAocHkgPCAxMDApIHx8IChweSA+IEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIuaGVpZ2h0LTEwMCkpIHtcclxuICAgICAgdGhpcy5lbWl0dGVyLnNwYXduUG9zLnggPSBCYXNlQXBwLmluc3RhbmNlLnJlbmRlcmVyLndpZHRoLzI7XHJcbiAgICAgIHRoaXMuZW1pdHRlci5zcGF3blBvcy55ID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQvMjtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVtaXR0ZXIuc3Bhd25Qb3MueCA9IHB4O1xyXG4gICAgICB0aGlzLmVtaXR0ZXIuc3Bhd25Qb3MueSA9IHB5O1xyXG4gICAgfVxyXG4gIH1cclxuICBvblRpY2sgPSAoZGVsdGE6bnVtYmVyKSA9PntcclxuICAgIC8vdGhpcy5lbWl0dGVyLnVwZGF0ZSh0aGlzLnRpY2tlci5kZWx0YVRpbWUpO1xyXG4gICAgdmFyIG1vdXNlUG9zID0gQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5wbHVnaW5zLmludGVyYWN0aW9uLm1vdXNlLmdsb2JhbDtcclxuICAgIHZhciBweCA9IG1vdXNlUG9zLng7XHJcbiAgICB2YXIgcHkgPSBtb3VzZVBvcy55O1xyXG4gICAgdGhpcy51cGRhdGVFbWl0dGVyKHB4LHB5KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0IHtCYXNlQXBwfSBmcm9tICcuL21haW4nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHYW1lTGV2ZWwge1xyXG4gIHJlYWRvbmx5IGxldmVsX25hbWU6IHN0cmluZztcclxuICBjb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gIGNyZWF0ZUxldmVsKCk6dm9pZDtcclxuICBkZXN0cm95TGV2ZWwoKTp2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlQnV0dG9uIGV4dGVuZHMgUElYSS5HcmFwaGljcyB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBub3JtYWxfY29sb3I6IG51bWJlcjtcclxuICBob3Zlcl9jb2xvcjogbnVtYmVyO1xyXG4gIGJvcmRlcl9jb2xvcjogbnVtYmVyO1xyXG4gIGJvcmRlcl9yYWRpdXM6bnVtYmVyO1xyXG4gIGNsaWNrX2NhbGxiYWNrPzogYW55O1xyXG4gIHc6IG51bWJlcjtcclxuICBoOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IgKGxhYmVsOnN0cmluZywgbm9ybWFsX2NvbG9yOm51bWJlciwgaG92ZXJfY29sb3I6bnVtYmVyLCBib3JkZXJfY29sb3I6bnVtYmVyLCB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXIsIHJhZGl1czpudW1iZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLncgPSB3aWR0aDtcclxuICAgIHRoaXMuaCA9IGhlaWdodDtcclxuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcclxuICAgIHRoaXMubm9ybWFsX2NvbG9yID0gbm9ybWFsX2NvbG9yO1xyXG4gICAgdGhpcy5ob3Zlcl9jb2xvciA9IGhvdmVyX2NvbG9yO1xyXG4gICAgdGhpcy5ib3JkZXJfY29sb3IgPSBib3JkZXJfY29sb3I7XHJcbiAgICB0aGlzLmJvcmRlcl9yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB0aGlzLmRyYXdUZXh0KCk7XHJcblxyXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy5kcmF3QnV0dG9uKHRoaXMubm9ybWFsX2NvbG9yKTtcclxuICB9XHJcbiAgZHJhd0J1dHRvbihjb2xvcjpudW1iZXIpIHtcclxuICAgIHRoaXMuYmVnaW5GaWxsKGNvbG9yKTtcclxuICAgIHRoaXMubGluZVN0eWxlKHRoaXMuYm9yZGVyX3JhZGl1cywgdGhpcy5ib3JkZXJfY29sb3IsIDEpO1xyXG4gICAgdGhpcy5kcmF3Um91bmRlZFJlY3QoMCwgMCwgdGhpcy53LCB0aGlzLmgsIDMpO1xyXG4gICAgdGhpcy5lbmRGaWxsKCk7XHJcbiAgfVxyXG4gIGRyYXdUZXh0KCkge1xyXG4gICAgdmFyIHN0eWxlID0ge1xyXG4gICAgICAgIGZvbnQgOiAnYm9sZCAxOHB4IEFyaWFsJyxcclxuICAgICAgICBmaWxsIDogMHhGRkZGRkYsXHJcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgIHN0cm9rZSA6IHRoaXMuYm9yZGVyX2NvbG9yLFxyXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzcyA6IDVcclxuICAgIH1cclxuICAgIHZhciB0ZXh0ID0gbmV3IFBJWEkuVGV4dCh0aGlzLmxhYmVsLCBzdHlsZSk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRleHQpO1xyXG4gICAgdGV4dC54ID0gdGhpcy53LzIgLSB0ZXh0LndpZHRoLzI7XHJcbiAgICB0ZXh0LnkgPSB0aGlzLmgvMiAtIHRleHQuaGVpZ2h0LzI7XHJcbiAgfVxyXG4gIHNldENsaWNrQ2FsbGJhY2soY2FsbGJhY2s6RnVuY3Rpb24pIHtcclxuICAgIHRoaXMuY2xpY2tfY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICB9XHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLm9uKCdjbGljaycsIHRoaXMub25DbGljayk7XHJcbiAgICB0aGlzLm9uKCd0YXAnLCB0aGlzLm9uQ2xpY2spO1xyXG4gICAgdGhpcy5vbigncG9pbnRlcm92ZXInLCB0aGlzLm9uSG92ZXIpO1xyXG4gICAgdGhpcy5vbigndG91Y2hzdGFydCcsIHRoaXMub25Ib3Zlcik7XHJcbiAgICB0aGlzLm9uKCdwb2ludGVyb3V0JywgdGhpcy5vbkV4aXQpO1xyXG4gICAgdGhpcy5vbigndG91Y2hlbmRvdXRzaWRlJywgdGhpcy5vbkV4aXQpO1xyXG4gICAgdGhpcy5vbigndG91Y2hlbmQnLCB0aGlzLm9uRXhpdCk7XHJcbiAgfVxyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygpO1xyXG4gIH1cclxuICBvbkhvdmVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gICAgdGhpcy5kcmF3QnV0dG9uKHRoaXMuaG92ZXJfY29sb3IpO1xyXG4gIH1cclxuICBvbkV4aXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB0aGlzLmRyYXdCdXR0b24odGhpcy5ub3JtYWxfY29sb3IpO1xyXG4gIH1cclxuICBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2xpY2tfY2FsbGJhY2spXHJcbiAgICAgIHRoaXMuY2xpY2tfY2FsbGJhY2soKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGbGlwcGFibGVTcHJpdGUgZXh0ZW5kcyBQSVhJLlNwcml0ZSB7XHJcbiAgZmxpcF90aW1lOm51bWJlciA9IDIwMDA7XHJcbiAgZmxpcF9oZWlnaHQ6bnVtYmVyID0gMTAuMDtcclxuICBmbGlwX3NsaWRlX3g6bnVtYmVyID0gMTAwLjA7XHJcbiAgZmxpcF9yb3RhdGlvbjpudW1iZXIgPSAwLjA7XHJcbiAgZmxpcF9zbGlkZV95Om51bWJlciA9IDAuMDtcclxuICBmbGlwX3NjYWxlOmJvb2xlYW4gPSB0cnVlO1xyXG4gIHNpZGVzOlBJWEkuVGV4dHVyZVtdO1xyXG4gIHRpY2tlcjpQSVhJLnRpY2tlci5UaWNrZXI7XHJcbiAgYmFzZV9zY2FsZTpudW1iZXIgPSAxLjA7XHJcbiAgc2lkZTpudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgb3JpZ194Om51bWJlcjtcclxuICBwcml2YXRlIG9yaWdfeTpudW1iZXI7XHJcbiAgcHJpdmF0ZSBmbGlwX2NvdW50ZXI6bnVtYmVyID0gMC4wO1xyXG4gIGNvbnN0cnVjdG9yKHRleHR1cmU/OlBJWEkuVGV4dHVyZSB8IHVuZGVmaW5lZCwgYmFja2ZhY2U/OlBJWEkuVGV4dHVyZSB8IHVuZGVmaW5lZCkge1xyXG4gICAgc3VwZXIodGV4dHVyZSk7XHJcblxyXG4gICAgdGhpcy50aWNrZXIgPSBuZXcgUElYSS50aWNrZXIuVGlja2VyKCk7XHJcbiAgICB0aGlzLnRpY2tlci5hdXRvU3RhcnQgPSBmYWxzZTtcclxuICAgIHRoaXMudGlja2VyLnNwZWVkID0gMS4wO1xyXG5cclxuICAgIHRoaXMucGl2b3QueCA9IHRoaXMud2lkdGgvMjtcclxuICAgIHRoaXMucGl2b3QueSA9IHRoaXMuaGVpZ2h0LzI7XHJcblxyXG4gICAgdGhpcy5zaWRlcyA9IFtdO1xyXG4gICAgaWYgKHRleHR1cmUpXHJcbiAgICAgIHRoaXMuc2lkZXMucHVzaCh0ZXh0dXJlKTtcclxuICAgIGlmIChiYWNrZmFjZSlcclxuICAgICAgdGhpcy5zaWRlcy5wdXNoKGJhY2tmYWNlKVxyXG5cclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5vbignY2xpY2snLCB0aGlzLmZsaXApO1xyXG4gICAgdGhpcy5vbigndGFwJywgdGhpcy5mbGlwKTtcclxuICB9XHJcbiAgZmxpcD0oKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiU3RhcnRlZCBmbGlwLlwiKTtcclxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZmxpcF9jb3VudGVyID0gMC4wO1xyXG4gICAgdGhpcy50aWNrZXIuc3RhcnQoKTtcclxuICAgIHRoaXMuYmFzZV9zY2FsZSA9IHRoaXMuc2NhbGUueDtcclxuICAgIHRoaXMub3JpZ194ID0gdGhpcy54O1xyXG4gICAgdGhpcy5vcmlnX3kgPSB0aGlzLnk7XHJcbiAgICB0aGlzLnNpZGUgPSAodGhpcy5zaWRlICsgMSklIHRoaXMuc2lkZXMubGVuZ3RoXHJcbiAgICB0aGlzLnRpY2tlci5hZGQodGhpcy5mbGlwTG9naWMpO1xyXG4gIH1cclxuICBmbGlwTG9naWM9KGRlbHRhOm51bWJlcik9PntcclxuICAgIHRoaXMuZmxpcF9jb3VudGVyICs9IHRoaXMudGlja2VyLmVsYXBzZWRNUyAqIHRoaXMudGlja2VyLnNwZWVkO1xyXG4gICAgdmFyIHBlcmMgPSB0aGlzLmZsaXBfY291bnRlciAvIHRoaXMuZmxpcF90aW1lO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnRpY2tlci5lbGFwc2VkTVMsXCIgLSBcIiwgdGhpcy5mbGlwX2NvdW50ZXIpO1xyXG4gICAgLy94XHJcbiAgICBpZiAodGhpcy5mbGlwX3NsaWRlX3ggIT0gMC4wKXtcclxuICAgICAgdGhpcy54ID0gbGVycCh0aGlzLm9yaWdfeCwgdGhpcy5vcmlnX3grdGhpcy5mbGlwX3NsaWRlX3gsIHBlcmMpO1xyXG4gICAgfVxyXG4gICAgLy9yb3RcclxuICAgIGlmICh0aGlzLmZsaXBfcm90YXRpb24gIT0gMC4wKXtcclxuICAgICAgdGhpcy5yb3RhdGlvbiA9IGxlcnAoMCx0aGlzLmZsaXBfcm90YXRpb24scGVyYyk7XHJcbiAgICB9XHJcbiAgICAvL3lcclxuICAgIGlmIChwZXJjIDw9IDAuNSkge1xyXG4gICAgICAvL2dvaW5nIHVwIGFuZCBzaHJpbmtpbmdcclxuICAgICAgaWYgKHRoaXMuZmxpcF9zbGlkZV95ICE9IDApXHJcbiAgICAgICAgdGhpcy55ID0gbGVycCh0aGlzLm9yaWdfeSwgdGhpcy5vcmlnX3ktdGhpcy5mbGlwX3NsaWRlX3ksIE1hdGguc3FydChwZXJjKjIpKTtcclxuICAgICAgaWYgKHRoaXMuZmxpcF9zY2FsZSlcclxuICAgICAgICB0aGlzLnNjYWxlLnggPSBsZXJwKHRoaXMuYmFzZV9zY2FsZSwgMC4xLCBwZXJjKjIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5zaWRlc1t0aGlzLnNpZGVdO1xyXG4gICAgICAvL2dvaW5nIGRvd24gYW5kIGV4cGFuZGluZ1xyXG4gICAgICBpZiAodGhpcy5mbGlwX3NsaWRlX3kgIT0gMClcclxuICAgICAgICB0aGlzLnkgPSBsZXJwKHRoaXMub3JpZ195LXRoaXMuZmxpcF9zbGlkZV95LCB0aGlzLm9yaWdfeSwgTWF0aC5wb3cocGVyYyoyIC0gMS4wLDIpKTtcclxuICAgICAgaWYgKHRoaXMuZmxpcF9zY2FsZSlcclxuICAgICAgICB0aGlzLnNjYWxlLnggPSBsZXJwKDAuMSwgdGhpcy5iYXNlX3NjYWxlLCBwZXJjKjIgLSAxLjApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmxpcF9jb3VudGVyID49IHRoaXMuZmxpcF90aW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLmZsaXBfc2NhbGUpXHJcbiAgICAgICAgdGhpcy5zY2FsZS54ID0gdGhpcy5iYXNlX3NjYWxlO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5mbGlwX3JvdGF0aW9uO1xyXG4gICAgICB0aGlzLnggPSB0aGlzLm9yaWdfeCt0aGlzLmZsaXBfc2xpZGVfeDtcclxuICAgICAgdGhpcy55ID0gdGhpcy5vcmlnX3k7XHJcbiAgICAgIHRoaXMudGlja2VyLnJlbW92ZSh0aGlzLmZsaXBMb2dpYyk7XHJcbiAgICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIC8vdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2Jhc2ljIGxlcnAgZnVudGlvbi5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYTE6bnVtYmVyLGEyOm51bWJlcix0Om51bWJlcil7XHJcbiAgcmV0dXJuIGExKigxLXQpICsgYTIqdDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE91dHB1dENvbnRlbnQge1xyXG4gIHR5cGU6c3RyaW5nO1xyXG4gIGNvbnRlbnQ6c3RyaW5nO1xyXG4gIG9wdGlvbnM/Om9iamVjdCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRJbWFnZU1peGluIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRUb1ByaW50Ok91dHB1dENvbnRlbnRbXSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGxldCBsYXN0X3g6bnVtYmVyID0gMDtcclxuICAgIGxldCBsYXN0X3k6bnVtYmVyID0gMDtcclxuICAgIGZvciAodmFyIGNvbnRlbnQgb2YgY29udGVudFRvUHJpbnQpIHtcclxuICAgICAgbGV0IG9iajpQSVhJLlNwcml0ZTtcclxuICAgICAgaWYgKGNvbnRlbnQudHlwZSA9PSBcIlRleHRcIilcclxuICAgICAgICBvYmogPSB0aGlzLmNyZWF0ZVRleHQoY29udGVudCk7XHJcbiAgICAgIGVsc2UgaWYgKGNvbnRlbnQudHlwZSA9PSBcIkltYWdlXCIpXHJcbiAgICAgICAgb2JqID0gdGhpcy5jcmVhdGVJbWFnZShjb250ZW50KTtcclxuICAgICAgZWxzZXtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJUZXh0SW1hZ2VNaXhpbjo6Y29uc3RydWN0b3IgLSBDYW5ub3QgY3JlYXRlIGNvbnRlbnQgb2YgdHlwZTogXCIsY29udGVudC50eXBlKTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBvYmoucGl2b3QueSA9IG9iai5oZWlnaHRcclxuICAgICAgb2JqLnBpdm90LnggPSAwO1xyXG4gICAgICBvYmoueCA9IGxhc3RfeDtcclxuICAgICAgb2JqLnkgPSBsYXN0X3k7XHJcblxyXG4gICAgICBsYXN0X3ggKz0gb2JqLndpZHRoO1xyXG4gICAgICB0aGlzLmFkZENoaWxkKG9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNyZWF0ZVRleHQoY29udGVudDpPdXRwdXRDb250ZW50KTpQSVhJLlRleHQge1xyXG4gICAgcmV0dXJuIG5ldyBQSVhJLlRleHQoY29udGVudC5jb250ZW50LCBjb250ZW50Lm9wdGlvbnMpO1xyXG4gIH1cclxuICBjcmVhdGVJbWFnZShjb250ZW50Ok91dHB1dENvbnRlbnQpOlBJWEkuU3ByaXRlIHtcclxuICAgIHJldHVybiBuZXcgUElYSS5TcHJpdGUoUElYSS5UZXh0dXJlLmZyb21JbWFnZShjb250ZW50LmNvbnRlbnQpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYW5pc2hpbmdPYmplY3Qge1xyXG4gIHRpbWVfdG9fZmFkZTpudW1iZXIgPSAxMDAwMDtcclxuICBmYWRlX3RpbWU6bnVtYmVyID0gMTAwMDtcclxuICBwcml2YXRlIHN0YXJ0X3RpbWU6bnVtYmVyID0gMDtcclxuICBwcml2YXRlIGZhZGVfY291bnRlcjpudW1iZXIgPSAwO1xyXG4gIHRpY2tlcjpQSVhJLnRpY2tlci5UaWNrZXI7XHJcbiAgb2JqOiBQSVhJLkNvbnRhaW5lcjtcclxuICBjb25zdHJ1Y3RvcihvYmo6UElYSS5Db250YWluZXIpIHtcclxuICAgIHRoaXMudGlja2VyID0gbmV3IFBJWEkudGlja2VyLlRpY2tlcigpO1xyXG4gICAgdGhpcy50aWNrZXIuYXV0b1N0YXJ0ID0gdHJ1ZTtcclxuICAgIHRoaXMudGlja2VyLnN0YXJ0KCk7XHJcbiAgICB0aGlzLnRpY2tlci5hZGQodGhpcy50aWNUYWMpO1xyXG4gICAgdGhpcy5vYmogPSBvYmo7XHJcbiAgICB0aGlzLmZhZGVfY291bnRlciA9IDA7XHJcbiAgICB0aGlzLnN0YXJ0X3RpbWUgPSAwO1xyXG4gIH1cclxuICB0aWNUYWMgPSAoZGVsdGE6bnVtYmVyKSA9PiB7XHJcbiAgICB0aGlzLnN0YXJ0X3RpbWUgKz0gdGhpcy50aWNrZXIuZWxhcHNlZE1TO1xyXG4gICAgaWYgKHRoaXMuc3RhcnRfdGltZSA+IHRoaXMudGltZV90b19mYWRlICsgdGhpcy5mYWRlX3RpbWUpIHtcclxuICAgICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgICB0aGlzLm9iai5kZXN0cm95KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGFydF90aW1lID4gdGhpcy50aW1lX3RvX2ZhZGUpIHtcclxuICAgICAgICB0aGlzLmZhZGVfY291bnRlciArPSB0aGlzLnRpY2tlci5lbGFwc2VkTVM7XHJcbiAgICAgICAgdmFyIGFscGhhID0gbGVycCgxLjAsIDAuMCwgdGhpcy5mYWRlX2NvdW50ZXIvdGhpcy5mYWRlX3RpbWUpO1xyXG4gICAgICAgIHRoaXMub2JqLmFscGhhID0gYWxwaGE7XHJcbiAgICAgICAgdGhpcy5vYmouY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZDpQSVhJLlNwcml0ZSkge1xyXG4gICAgICAgICAgY2hpbGQuYWxwaGEgPSBhbHBoYTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0ICogYXMgUElYSSBmcm9tICdwaXhpLmpzJztcclxuaW1wb3J0ICogYXMgVE9PTFMgZnJvbSAnLi9zdXBwb3J0JztcclxuaW1wb3J0IHtCYXNlQXBwfSBmcm9tICcuL21haW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRJbWFnZUxldmVsIGltcGxlbWVudHMgVE9PTFMuR2FtZUxldmVsIHtcclxuICBsZXZlbF9uYW1lOnN0cmluZyA9IFwiVGV4dEltYWdlXCI7XHJcbiAgY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuICB0aWNrZXI6IFBJWEkudGlja2VyLlRpY2tlcjtcclxuICBpbWFnZXNfbmFtZV9hcnJheTogc3RyaW5nW107XHJcbiAgdGltZV90b19jcmVhdGU6bnVtYmVyID0gMjAwMDtcclxuICBwcml2YXRlIGNvdW50ZXI6bnVtYmVyID0gMDtcclxuICBtYXhfZm9udF9zaXplOm51bWJlciA9IDMwO1xyXG4gIG1pbl9mb250X3NpemU6bnVtYmVyID0gMTI7XHJcbiAgY29udGVudF9zaXplOm51bWJlciA9IDM7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRpY2tlciA9IG5ldyBQSVhJLnRpY2tlci5UaWNrZXIoKTtcclxuICAgIHRoaXMudGlja2VyLmF1dG9TdGFydCA9IGZhbHNlO1xyXG4gICAgdGhpcy50aWNrZXIuc3RvcCgpO1xyXG4gICAgdGhpcy5pbWFnZXNfbmFtZV9hcnJheSA9IFtcInBpZWNlV2hpdGVfYm9yZGVyMDAucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjAxLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwMi5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDMucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjA0LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwNS5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDYucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjA3LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIwOC5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMDkucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjEwLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxMS5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTIucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjEzLnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxNC5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTUucG5nXCIsXCJwaWVjZVdoaXRlX2JvcmRlcjE2LnBuZ1wiLFwicGllY2VXaGl0ZV9ib3JkZXIxNy5wbmdcIixcInBpZWNlV2hpdGVfYm9yZGVyMTgucG5nXCJdO1xyXG4gIH1cclxuICBjcmVhdGVMZXZlbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVGV4dCArIEltYWdlIGNyZWF0aW9uIHN0YXJ0ZWQuXCIpO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuXHJcbiAgICBCYXNlQXBwLmluc3RhbmNlLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMudGlja2VyLmFkZCh0aGlzLm9uVGljayk7XHJcbiAgICB0aGlzLnRpY2tlci5zdGFydCgpO1xyXG5cclxuICAgIC8vY3JlYXRlIGJhY2sgb3B0aW9uXHJcbiAgICB2YXIgbWVudV9iZyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICBtZW51X2JnLmJlZ2luRmlsbCgweEVFRUVFRSk7XHJcbiAgICBtZW51X2JnLmxpbmVTdHlsZSgyLCAweGRkZGRmRiwgMSk7XHJcbiAgICBtZW51X2JnLmRyYXdSb3VuZGVkUmVjdCgxMDAsIDEwMCwgMjAwLCAxMDAsIDUpO1xyXG4gICAgbWVudV9iZy5lbmRGaWxsKCk7XHJcblxyXG4gICAgdmFyIG1haW5fbWVudV9idG4gPSBuZXcgVE9PTFMuU2ltcGxlQnV0dG9uKCdCYWNrJywgMHgwMGE5ZmYsIDB4OTlkOWZmLCAweDAwNjZhYSwgMTUwLCAgNTAsIDMpO1xyXG4gICAgbWFpbl9tZW51X2J0bi54ID0gMTI1O1xyXG4gICAgbWFpbl9tZW51X2J0bi55ID0gMTI1O1xyXG4gICAgbWVudV9iZy5hZGRDaGlsZChtYWluX21lbnVfYnRuKTtcclxuICAgIG1haW5fbWVudV9idG4uc2V0Q2xpY2tDYWxsYmFjayh0aGlzLmJhY2tUb01lbnUpO1xyXG4gICAgbWFpbl9tZW51X2J0bi5hY3RpdmF0ZSgpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQobWVudV9iZyk7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLnRpbWVfdG9fY3JlYXRlO1xyXG4gIH1cclxuICBiYWNrVG9NZW51KCkge1xyXG4gICAgICBCYXNlQXBwLmluc3RhbmNlLmNoYW5nZUxldmVsKFwiTWFpbk1lbnVcIik7XHJcbiAgfVxyXG4gIGRlc3Ryb3lMZXZlbCgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmRlc3Ryb3koe2NoaWxkcmVuOnRydWV9KTtcclxuICAgIHRoaXMudGlja2VyLnN0b3AoKTtcclxuICB9XHJcbiAgb25UaWNrPSgpID0+e1xyXG4gICAgdGhpcy5jb3VudGVyICs9IHRoaXMudGlja2VyLmVsYXBzZWRNUztcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLnRpbWVfdG9fY3JlYXRlKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlUmFuZG9tKCk7XHJcbiAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNyZWF0ZVJhbmRvbSgpIHtcclxuICAgIGxldCBjb250ZW50OlRPT0xTLk91dHB1dENvbnRlbnRbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5jb250ZW50X3NpemU7IGkrKykge1xyXG4gICAgICBsZXQgY2hhbmNlOm51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgIGxldCBuZXdfY29udGVudDpUT09MUy5PdXRwdXRDb250ZW50ID0gbmV3IFRPT0xTLk91dHB1dENvbnRlbnQoKTtcclxuICAgICAgaWYgKGNoYW5jZSA+IDAuNSkge1xyXG4gICAgICAgIC8vVGV4dFxyXG4gICAgICAgIG5ld19jb250ZW50LnR5cGUgPSBcIlRleHRcIjtcclxuICAgICAgICB2YXIgc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoe1xyXG4gICAgICAgICAgZm9udFNpemU6IE1hdGgucmFuZG9tKCkqKHRoaXMubWF4X2ZvbnRfc2l6ZS10aGlzLm1pbl9mb250X3NpemUpK3RoaXMubWluX2ZvbnRfc2l6ZSxcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgICAgIGZpbGw6IFwiI0ZGRkZGRlwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoY2hhbmNlIDwgMC4xKVxyXG4gICAgICAgICAgc3R5bGUuZm9udFdlaWdodD1cImJvbGRcIjtcclxuICAgICAgICBpZiAoY2hhbmNlID4gMC40KVxyXG4gICAgICAgICAgc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuXHJcbiAgICAgICAgaWYgKGNoYW5jZSA+IDAuNzUpIHtcclxuICAgICAgICAgIGlmIChjaGFuY2UgPCAwLjg1KVxyXG4gICAgICAgICAgICBzdHlsZS5maWxsID0gMHgzMzMzMzM7XHJcbiAgICAgICAgICBlbHNlIGlmIChjaGFuY2UgPCAwLjk1KVxyXG4gICAgICAgICAgICBzdHlsZS5maWxsID0gMHg2NjY2NjY7XHJcbiAgICAgICAgICBlbHNlIGlmIChjaGFuY2UgPiAwLjk1KVxyXG4gICAgICAgICAgICBzdHlsZS5maWxsID0gWzB4MDAwMDAwLDB4MDAzM2E5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3X2NvbnRlbnQuY29udGVudCA9IFwiQWhveSFcIjtcclxuICAgICAgICBuZXdfY29udGVudC5vcHRpb25zID0gc3R5bGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9JbWFnZVxyXG4gICAgICAgIG5ld19jb250ZW50LnR5cGUgPSBcIkltYWdlXCI7XHJcbiAgICAgICAgbmV3X2NvbnRlbnQuY29udGVudCA9IHRoaXMuaW1hZ2VzX25hbWVfYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuaW1hZ2VzX25hbWVfYXJyYXkubGVuZ3RoLTAuMSkpXTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50LnB1c2gobmV3X2NvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgLy9NZXRhLWRhdGEgT0ssIHJlYWwgY3JlYXRpb24uXHJcbiAgICB2YXIgbmV3X29iaiA9IG5ldyBUT09MUy5UZXh0SW1hZ2VNaXhpbihjb250ZW50KTtcclxuICAgIG5ld19vYmoueCA9IDMwMCArIE1hdGgucmFuZG9tKCkqKEJhc2VBcHAuaW5zdGFuY2UucmVuZGVyZXIud2lkdGggLSAzNTAgLSBuZXdfb2JqLndpZHRoKTtcclxuICAgIG5ld19vYmoueSA9IDUwICsgTWF0aC5yYW5kb20oKSooQmFzZUFwcC5pbnN0YW5jZS5yZW5kZXJlci5oZWlnaHQgLSAyMDAgLSBuZXdfb2JqLmhlaWdodCk7XHJcbiAgICAvL29iaiB0byB2YW5pc2ggYWZ0ZXIgc29tZSB0aW1lLlxyXG4gICAgbmV3IFRPT0xTLlZhbmlzaGluZ09iamVjdChuZXdfb2JqKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKG5ld19vYmopO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiXSwic291cmNlUm9vdCI6IiJ9