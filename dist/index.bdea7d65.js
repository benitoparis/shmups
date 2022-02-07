// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2HtCd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var _imageHandler = require("./models/image-handler");
var _displayHandler = require("./models/display-handler");
var _player = require("./models/player");
var _backgroundHandler = require("./models/background-handler");
var _collisionHandler = require("./models/collision-handler");
var _enemy = require("./models/enemy");
var _explosion = require("./models/explosion");
var _item = require("./models/item");
var _particule = require("./models/particule");
var _datas = require("./models/datas");
//const canvas = document.getElementById('game') as HTMLCanvasElement;
const canvas1 = createCanvasElement(960, 720, 'game');
const container = document.querySelector('.game-flex-container');
container.appendChild(canvas1);
//canvas.width = 960;
//canvas.height = 720;
const ctx1 = canvas1.getContext('2d');
const displayHandler = new _displayHandler.DisplayHandler(ctx1);
const imageHandler = new _imageHandler.ImageHandler(_datas.imagesDatas);
let gameAnimationFrameRequestId;
let backgroundHandler1;
let backgroundHandler2;
let collisionHandler = new _collisionHandler.CollisionHandler();
let enemies = [];
let explosions = [];
let particules = [];
let player;
// let enemyDatas = new GameCharacterData().data
//     .filter(character=> {
//         return character.type === 'enemy';
//     });
let items1 = [];
var active = false;
let gameActive = false;
let delay = 0;
function initPlayer() {
    player = new _player.Player({
        x: 0,
        y: 0,
        speedX: 2,
        speedY: 2,
        cropX: 0,
        cropY: 0,
        width: 64,
        height: 64,
        cropWidth: 32,
        cropHeight: 32,
        ..._datas.heroesDatas[0]
    }, imageHandler, displayHandler);
}
function initItem() {
    const item = new _item.Item({
        x: Math.floor(Math.random() * 960),
        y: 0,
        speedX: 0,
        speedY: 0.3,
        ..._datas.itemsDatas[Math.floor(Math.random() * _datas.itemsDatas.length)]
    }, imageHandler, displayHandler);
    item.setCoords({
        x: Math.floor(Math.random() * 960),
        y: 0
    });
    items1.push(item);
}
function initParticule() {
    const particule = new _particule.Particule({
        x: player.x,
        y: player.y,
        speedX: 2,
        speedY: 0.1,
        reference: 'character_ememy_set_3',
        cropX: 0,
        cropY: 0,
        width: 10,
        height: 10,
        cropWidth: 32,
        cropHeight: 32
    }, imageHandler, displayHandler, player);
    particule.setCoords({
        x: player.x + 30,
        y: player.y + 80
    });
    particules.push(particule);
}
function initEnemy() {
    const enemy = new _enemy.Enemy({
        width: 64,
        height: 64,
        cropWidth: 32,
        cropHeight: 32,
        x: Math.floor(Math.random() * 960),
        y: 0,
        speedX: 2,
        speedY: 0.1,
        ..._datas.enemiesDatas[Math.floor(Math.random() * _datas.enemiesDatas.length)]
    }, imageHandler, displayHandler, player, // function behavior() { // go down quick when the player is below
    //     if (this.player.centerX > this.x &&  this.player.centerX < this.x + this.width) {
    //         this.y += 1;
    //     }
    // }
    function behavior() {
        this.y += 0.2;
        if (this.x > 800) this.speedX = -1;
        if (this.x < 50) this.speedX = 1;
        this.x += this.speedX;
    });
    enemy.setCoords({
        x: 400,
        y: 10
    });
    enemies.push(enemy);
}
function initBackground() {
    backgroundHandler1 = new _backgroundHandler.BackgroundHandler(0.3, 'vertical-shooter-map', imageHandler, displayHandler, 0.1);
    backgroundHandler2 = new _backgroundHandler.BackgroundHandler(0.3, 'vertical-shooter-map', imageHandler, displayHandler, 0.1);
}
function initSprites() {
    initPlayer();
    initEnemy();
    initBackground();
}
const initExplosion = (x, y)=>{
    const explosion = new _explosion.Explosion({
        x: x,
        y: x,
        speedX: 0,
        speedY: 0,
        reference: 'explosion',
        width: 40,
        height: 40,
        cropX: 0,
        cropY: 0,
        cropWidth: 100,
        cropHeight: 100
    }, imageHandler, displayHandler);
    explosion.setCoords({
        x: x,
        y: y
    });
    explosions.push(explosion);
};
// Supprime définitivement un élément qui sort des limites
function deleteItemWhenOutOfBounds(items) {
    items.forEach((item, index)=>{
        if (item.x < -200 || item.x > 1200 || item.y < -200 || item.y > 820) items.splice(index, 1);
    });
}
canvas1.addEventListener('mousemove', (e)=>{
    if (!player) return;
    player.setCoords({
        x: e.layerX - 50,
        y: e.layerY - 100
    });
});
window.addEventListener('keydown', (e)=>{
    if (e.keyCode === 13) {
        initSound('http://benoit-dev-demo.com/audio/Elemental_master_stage1_8bit.mp3', 0.2);
        active = true;
    }
    if (e.keyCode === 32) {
        player.shoot();
        initSound('http://benoit-dev-demo.com/audio/mixkit-short-laser-gun-shot-1670.wav', 0.1);
    }
    if (e.keyCode === 82) {
        if (player.direction === 'north') player.setDirection('south');
        else player.setDirection('north');
    }
    return;
});
const gameLoop = ()=>{
    // On clean le canvas
    backgroundHandler1.update();
    backgroundHandler1.draw();
    backgroundHandler2.update();
    backgroundHandler2.draw();
    // backgroundHandler3.update();
    // backgroundHandler3.draw();
    // On affiche tous les éléments
    player.update();
    player.draw();
    player.updateBullets();
    player.drawShootedBullets();
    player.drawPlayerDatas();
    enemies.forEach((enemy)=>{
        enemy.update();
        enemy.shoot();
        enemy.updateBullets();
        enemy.drawShootedBullets();
        enemy.draw();
        enemy.drawScore();
    });
    explosions.forEach((explosion, idx)=>{
        if (explosion.toDelete) delete explosions[idx];
        else {
            explosion.update();
            explosion.draw();
        }
    });
    particules.forEach((particule)=>{
        particule.update();
        particule.draw();
    });
    items1.forEach((item)=>{
        item.update();
        item.draw();
    });
    if (delay === 30) {
        checkAllCollisions();
        delay = 0;
    } else delay++;
    //deleteItemWhenOutOfBounds(enemies);
    if (gameActive) gameAnimationFrameRequestId = window.requestAnimationFrame(gameLoop);
    else {
        gameOver();
        displayHandler.drawRect({
            x: 0,
            y: 0,
            width: canvas1.width,
            height: canvas1.height
        });
        displayHandler.drawText('Game Over', 300, canvas1.height / 2, 'white', 70);
        setTimeout(initGame, 2000);
    }
};
async function initGame() {
    await startScreenAnimation();
    gameActive = true;
    imageHandler.loadImages().then(async (data)=>{
        displayHandler.drawHomeScreen('Elemental Remaster', '[Press Enter]', 'Version 2022');
        const homePageImage = imageHandler.getImage('elemental-illustration');
        displayHandler.draw({
            img: homePageImage,
            cropX: 0,
            cropY: 0,
            cropWidth: 500,
            cropHeight: 500,
            x: 50,
            y: 200,
            width: 400,
            height: 400 // The height of the destination image
        });
        await new Promise((resolve, reject)=>{
            window.addEventListener('keydown', (e)=>{
                displayHandler.clearRect();
                resolve('ok');
            });
        });
        displayHandler.drawHomeScreen('Loading...', '', '');
        initSprites();
        setInterval(initEnemy, 10000);
        setInterval(initItem, 5000);
        initParticule();
        //const gameBackgroundImage = createMapsheetImageHTMLElement();
        // backgroundHandler = new BackgroundHandler(0.7, imageHandler.getImage('map1'), displayHandler);
        setTimeout(gameLoop, 2000);
    });
}
async function startScreenAnimation() {
    displayHandler.drawHomeScreen('Elemental', '', '2022 copyright');
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            displayHandler.drawHomeScreen('Elemental Remaster', '', '2022 copyright');
            resolve('ok');
        }, 3000);
    });
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            displayHandler.drawHomeScreen('Elemental Remaster', 'Press Enter', '2022 copyright');
            resolve('ok');
        }, 4000);
    });
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('ok');
        }, 1000);
    });
}
function checkAllCollisions() {
    enemies.forEach((enemy, idx)=>{
        if (collisionHandler.checkCollision(enemy, player)) {
            if (player.life > 0) player.damage();
            else gameActive = false;
        }
        if (player.shootedBullets.length) player.shootedBullets.forEach((bullet, index)=>{
            if (collisionHandler.checkCollision(enemy, bullet)) {
                if (enemy.life > 0) enemy.damage();
                else {
                    delete enemies[idx];
                    delete player.shootedBullets[index];
                    initExplosion(enemy.x, enemy.y);
                }
            }
        });
        if (enemy.shootedBullets.length) enemy.shootedBullets.forEach((enemyBullet, index)=>{
            if (collisionHandler.checkCollision(player, enemyBullet)) {
                delete enemy.shootedBullets[index];
                if (player.life > 0) player.damage();
                if (player.life <= 0) gameActive = false;
            }
        });
    });
    items1.forEach((item, index)=>{
        if (collisionHandler.checkCollision(item, player)) {
            player.bulletType = item.playerBehavior.bulletType;
            player.shootType = item.playerBehavior.shootType;
            delete items1[index];
        }
    });
}
// Fonction qui crée un élément Image HTML en prenant une capture du canvas
function createMapsheetImageHTMLElement() {
    const widthSize = 960;
    const heightSize = 9600;
    const canvas = createCanvasElement(widthSize, heightSize, 'temporary');
    const ctx = canvas.getContext('2d');
    for(let col = 0; col < 20; col++)for(let row = 0; row < 200; row++)ctx.drawImage(imageHandler.getImage('background1'), 96, 96, 48, 48, col * 48, row * 48, 48, 48);
    const dataUrl = canvas.toDataURL();
    const image = document.createElement('img');
    //image.crossOrigin = '*';
    image.src = dataUrl;
    image.style.width = `${widthSize}px`;
    image.style.height = `${heightSize}px`;
    //After you are done styling it, append it to the BODY element
    //document.body.appendChild(image);
    return image;
}
function createCanvasElement(width, height, idName) {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', idName);
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
function initSound(url, volume) {
    //const audio = document.getElementById('myPlayer');
    const audio = new Audio();
    audio.src = url;
    audio.autoplay = true;
    audio.volume = volume;
    audio.onended = function() {
        audio.remove(); //on arrete le son à la fin de la piste
    };
    audio.play();
}
function getRandomShootSoundUrl() {
    return [
        'http://benoit-dev-demo.com/audio/mixkit-short-laser-gun-shot-1670.wav',
        'http://benoit-dev-demo.com/audio/mixkit-arcade-space-shooter-dead-notification-272.wav',
        'http://benoit-dev-demo.com/audio/mixkit-electro-hit-3203.wav',
        'http://benoit-dev-demo.com/audio/mixkit-falling-hit-757.wav',
        'http://benoit-dev-demo.com/audio/mixkit-space-coin-win-notification-271.wav',
        'http://benoit-dev-demo.com/audio/mixkit-space-deploy-whizz-3003.wav'
    ][Math.floor(Math.random() * 5)];
}
function gameOver() {
    window.cancelAnimationFrame(gameAnimationFrameRequestId);
    resetSprites();
    return;
}
function resetSprites() {
    enemies = [];
    explosions = [];
    particules = [];
}
initGame();

},{"./models/image-handler":"dNiUY","./models/display-handler":"68nTU","./models/player":"kBw1Q","./models/background-handler":"gCSiG","./models/collision-handler":"jg8rU","./models/enemy":"6Lm0A","./models/explosion":"7cHCu","./models/item":"iyvNj","./models/particule":"l7mQG","./models/datas":"iJx4u"}],"dNiUY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImageHandler", ()=>ImageHandler
);
class ImageHandler {
    constructor(imagesSet){
        this.imagesSet = imagesSet;
        // imagesSet= [
        //     {type: 'sprites', reference: 'ships', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/ships.png', base64: false},
        //     {type: 'sprites', reference: 'shootemup-spritesheet', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/shootemup-spritesheet.png', base64: false},
        //     {type: 'sprites', reference: 'map1', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/background/shooter_map1.png', base64: false},
        //     {type: 'sprites', reference: 'explosion', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/explosion.png', base64: false},
        //     // {type: 'sprites', reference: 'background1', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: '', base64: true},
        //     {type: 'sprites', reference: 'vertical-shooter-map', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/background/Vertical_Shooter_Full.png', base64: false},
        //     {type: 'sprites', reference: 'hero', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/heros8.png', base64: false},
        //     {type: 'sprites', reference: 'Fire_Bullet_Pixel_All_Reverse', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/tilesets/Fire_Bullet_Pixel_All_Reverse.png', base64: false},
        //     {type: 'sprites', reference: 'character_ememy_set_3', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/character_ememy_set_3.png', base64: false},
        //     {type: 'illustration', reference: 'elemental-illustration', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/illustrations/elemental-illustration.jpeg', base64: false},
        //     {type: 'sprites', reference: 'spritesheet_items_48x48', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/tilesets/spritesheet_items_48x48.png', base64: false},
        // ];
        this.imagesAssets = [];
    }
    // Méthode qui renvoie l'objet image correspondant à une reference
    getImage(reference) {
        const index = this.imagesSet.findIndex((item)=>{
            return item.reference === reference;
        });
        return this.imagesAssets[index];
    }
    async loadImages() {
        const promiseArray = []; // create an array for promises
        for (let image of this.imagesSet)promiseArray.push(new Promise((resolve)=>{
            const img = new Image();
            // if you don't need to do anything when the image loads,
            // then you can just write img.onload = resolve;        
            img.onload = function() {
                // do stuff with the image if necessary
                // resolve the promise, indicating that the image has been loaded
                resolve(img);
            };
            img.src = image.filePath;
            this.imagesAssets.push(img);
        }));
        await Promise.all(promiseArray); // wait for all the images to be loaded
        console.log("all images loaded");
        console.log('this.imagesAssets', this.imagesAssets);
        return this.imagesAssets;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"68nTU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DisplayHandler", ()=>DisplayHandler
);
class DisplayHandler {
    constructor(ctx){
        this.ctx = ctx;
    }
    drawRect(entity) {
        this.ctx.rect(entity.x, entity.y, entity.width, entity.height);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
    }
    drawCircle(entity1) {
        this.ctx.fillStyle = '#FFF';
        this.ctx.beginPath();
        this.ctx.arc(entity1.x, entity1.y, entity1.width, 0, 2 * Math.PI, true);
        this.ctx.fill();
    }
    clearRect() {
        this.ctx.clearRect(0, 0, 960, 720);
    }
    draw(entity2) {
        this.ctx.drawImage(entity2.img, entity2.cropX, entity2.cropY, entity2.cropWidth, entity2.cropHeight, entity2.x, entity2.y, entity2.width, entity2.height // The height of the destination image
        );
        this.ctx.filter = `saturate(50)%`;
    }
    // Affiche des informations sur le héros
    drawDatas(entity3) {
        const topMargin = 5;
        this.setFontSize(20);
        const message = `Life : ${entity3.life}  score : ${entity3.score}`;
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillText(message, entity3.x, entity3.y - topMargin);
    /* propriétés possibles pour le contexte */ // direction: "ltr"
    // fillStyle: "#ffffff"
    // filter: "none"
    // font: "40px small-caption"
    // globalAlpha: 1
    // globalCompositeOperation: "source-over"
    // imageSmoothingEnabled: true
    // imageSmoothingQuality: "low"
    // lineCap: "butt"
    // lineDashOffset: 0
    // lineJoin: "miter"
    // lineWidth: 1
    // miterLimit: 10
    // shadowBlur: 0
    // shadowColor: "rgba(0, 0, 0, 0)"
    // shadowOffsetX: 0
    // shadowOffsetY: 0
    // strokeStyle: "#000000"
    // textAlign: "start"
    // textBaseline: "alphabetic"
    }
    drawHomeScreen(h1, h2, h3) {
        // Background
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, 960, 720);
        this.drawText(h1, 50, 150, '#FFFFFF', 110);
        this.drawText(h2, 500, 500, '#FFFFFF', 50);
        this.drawText(h3, 400, 700, '#FFFFFF', 30);
    }
    setFontSize(fontsize) {
        this.ctx.globalAlpha = 2;
        //this.ctx.filter = 'contrast(1)';
        this.ctx.font = `${fontsize}px small-caption`;
    }
    // Ecrit un texte sur le canvas
    drawText(txt, x, y, fontColor, textSize) {
        this.setFontSize(textSize);
        this.ctx.fillStyle = fontColor;
        this.ctx.fillText(txt, x, y);
    }
    drawFloatingMessage(entity4) {
        this.drawDatas(entity4);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kBw1Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player
);
var _bullet = require("./bullet");
var _sprite = require("./sprite");
var _srpiteImageCropper = require("./srpite-image-cropper");
class Player extends _sprite.Sprite {
    constructor(attributes, imageHandler, displayHandler){
        // By calling the super() method in the constructor method, we call the parent's constructor method
        super(attributes, imageHandler, displayHandler);
        this.shootedBullets = [];
        this.life = 10;
        this.score = 0;
        this.direction = 'north';
        this.bulletTypeCrop = {
            a: {
                cropX: 240,
                cropY: 63,
                cropWidth: 32,
                cropHeight: 40
            },
            b: {
                cropX: 146,
                cropY: 385,
                cropWidth: 15,
                cropHeight: 40
            },
            c: {
                cropX: 162,
                cropY: 116,
                cropWidth: 30,
                cropHeight: 30
            }
        };
        this.bulletType = 'a';
        this.shootTypes = {
            first: [
                0,
                20,
                40,
                60,
                80,
                100,
                120,
                160,
                180,
                200,
                220,
                240,
                260,
                280,
                300,
                320,
                340
            ],
            second: [
                300
            ],
            third: [
                280,
                300,
                320
            ],
            forth: [
                270,
                285,
                300,
                315,
                330
            ]
        };
        this.shootType = 'first';
        this.shoot = ()=>{
            let bulletSpeed = 5;
            this.shootTypes[this.shootType].forEach((shootAngle)=>{
                const positionX = this.x + Math.cos(shootAngle) * 50;
                const positionY = this.y + Math.sin(shootAngle) * 50;
                const deltaX = positionX - this.x;
                const deltaY = positionY - this.y;
                const magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const velocityScale = bulletSpeed / magnitude;
                const speedX = deltaX * velocityScale;
                const speedY = deltaY * velocityScale;
                this.initBullet(positionX, positionY, speedX, speedY);
            });
        };
        this.spriteImageCroper = new _srpiteImageCropper.SpriteImageCroper(attributes.cropCycles, 3);
    }
    drawShootedBullets() {
        this.shootedBullets.forEach((shootedBullet)=>{
            shootedBullet.draw(shootedBullet);
        });
    }
    updateBullets() {
        this.shootedBullets.forEach((shootedBullet)=>{
            shootedBullet.update();
        });
    }
    drawPlayerDatas() {
        this.displayHandler.drawDatas(this);
    }
    setCropCoordinates() {
        const { cropX , cropY  } = this.spriteImageCroper.getCropCoordinate(this.direction);
        this.cropX = cropX;
        this.cropY = cropY;
    }
    update() {
        this.setCropCoordinates();
    }
    setDirection(direction) {
        this.direction = direction;
    }
    initBullet(x, y, speedX, speedY) {
        const shootedBullet = new _bullet.Bullet({
            x: x,
            y: y,
            speedX: speedX,
            speedY: speedY,
            reference: 'Fire_Bullet_Pixel_All_Reverse',
            cropX: this.bulletTypeCrop[this.bulletType].cropX,
            cropY: this.bulletTypeCrop[this.bulletType].cropY,
            cropWidth: this.bulletTypeCrop[this.bulletType].cropWidth,
            cropHeight: this.bulletTypeCrop[this.bulletType].cropHeight,
            width: 32,
            height: 40
        }, this.imageHandler, this.displayHandler);
        shootedBullet.setCoords({
            x: this.centerX - 10,
            y: this.direction === 'north' ? this.y - 10 : this.y + 50
        });
        this.shootedBullets.push(shootedBullet);
    }
}

},{"./bullet":"9V7mY","./sprite":"3Hinm","./srpite-image-cropper":"8EDiP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9V7mY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bullet", ()=>Bullet
);
var _sprite = require("./sprite");
class Bullet extends _sprite.Sprite {
    constructor(attributes, imageHandler, displayHandler){
        super(attributes, imageHandler, displayHandler);
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.setCenter();
    }
}

},{"./sprite":"3Hinm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3Hinm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sprite", ()=>Sprite
);
class Sprite {
    constructor(attributes, imageHandler, displayHandler){
        this.imageHandler = imageHandler;
        this.displayHandler = displayHandler;
        this.width = 960;
        this.height = 720;
        this.cropX = 0;
        this.cropY = 0;
        this.cropWidth = 960;
        this.cropHeight = 720;
        this.life = 5;
        this.angle = 0;
        this.activeBlink = false;
        this.frame = 0;
        this.damage = ()=>{
            if (this.life === 0) return;
            this.life--;
            this.activeBlink = true;
        };
        this.reference = attributes.reference;
        this.img = imageHandler.getImage(this.reference);
        this.setSpeed(attributes);
        this.setCropCoords(attributes);
        this.setDimensions(attributes);
    }
    setCenter() {
        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2;
    }
    setCoords(attributes1) {
        this.x = attributes1.x;
        this.y = attributes1.y;
        this.setCenter();
    }
    setSpeed(attributes2) {
        this.speedX = attributes2.speedX;
        this.speedY = attributes2.speedY;
    }
    setCropCoords(attributes3) {
        this.cropX = attributes3.cropX;
        this.cropY = attributes3.cropY;
        this.cropWidth = attributes3.cropWidth;
        this.cropHeight = attributes3.cropHeight;
    }
    setDimensions(attributes4) {
        this.width = attributes4.width;
        this.height = attributes4.height;
    }
    draw() {
        this.frame++;
        if (this.frame > 20) {
            this.frame = 0;
            this.activeBlink = false;
        }
        if (this.activeBlink) {
            if (this.frame % 2 === 0) this.displayHandler.draw(this);
        } else this.displayHandler.draw(this);
    }
    drawScore() {
        this.displayHandler.drawFloatingMessage(this);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8EDiP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpriteImageCroper", ()=>SpriteImageCroper
);
class SpriteImageCroper {
    constructor(cycles, indexPerCycle){
        this.cycles = cycles;
        this.indexPerCycle = indexPerCycle;
        this.step = 0;
        this.currentLoopIndex = 0;
    }
    getCropCoordinate(direction) {
        this.setCurrentLoopIndex();
        if (direction === 'north') return this.cycles.upCycleLoop[this.currentLoopIndex];
        if (direction === 'south') return this.cycles.downCycleLoop[this.currentLoopIndex];
    }
    // Méthode qui renseigne l'index de la séquence de marche
    setCurrentLoopIndex() {
        // On détermine quel sprite afficher
        if (this.step < 20) this.step++;
        else {
            this.step = 0;
            // Si l'index est supérieur au nombre de position possible on le repositionne à zero
            if (this.currentLoopIndex === this.indexPerCycle) this.currentLoopIndex = 0;
            else this.currentLoopIndex++;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gCSiG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BackgroundHandler", ()=>BackgroundHandler
);
class BackgroundHandler {
    constructor(speed, reference, imageHandler, displayHandler, alpha){
        this.speed = speed;
        this.reference = reference;
        this.imageHandler = imageHandler;
        this.displayHandler = displayHandler;
        this.alpha = alpha;
        this.backgroundImageSet = [];
        this.x = 0;
        this.y = 0;
        this.width // 
         = 960;
        this.height // 
         = 720;
        this.cropX // Coordonnées X du morceau d'image à cropper sur l'image
         = 0;
        this.cropY // Coordonnées Y du morceau d'image à cropper sur l'image
         = 6000;
        this.cropWidth = 960;
        this.cropHeight = 720;
        // 48  fois 20
        this.mapSheetArray = [];
        this.setImage();
        this.buildRandomMapSheetArray();
    }
    update() {
        if (this.cropY < 50) {
            this.speed = 0;
            return;
        }
        this.cropY -= this.speed;
    }
    setImage() {
        this.img = this.imageHandler.getImage(this.reference);
    }
    draw() {
        this.displayHandler.draw(this);
    }
    buildRandomMapSheetArray() {
        for(let i = 0; i < 300; i++)this.mapSheetArray.push(Math.floor(Math.random() * 4));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jg8rU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollisionHandler", ()=>CollisionHandler
);
class CollisionHandler {
    constructor(){
        this.checkCollision = (a, b)=>{
            if (a.x < b.centerX && b.centerX < a.x + a.width && a.y < b.centerY && b.centerY < a.y + a.height) return true;
            else return false;
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6Lm0A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Enemy", ()=>Enemy
);
var _bullet = require("./bullet");
var _sprite = require("./sprite");
var _srpiteImageCropper = require("./srpite-image-cropper");
class Enemy extends _sprite.Sprite {
    constructor(attributes, imageHandler, displayHandler, player, behavior){
        super(attributes, imageHandler, displayHandler);
        this.player = player;
        this.behavior = behavior;
        this.shootedBullets = [];
        this.direction = 'south';
        this.shoot = ()=>{
            if (Math.random() < 0.99) return;
            // const ratio = (this.y - this.player.y) / (this.x - this.player.x);
            // const speedX = 1;
            // const speedY = speedX * ratio;
            let bulletSpeed = 5;
            for(let i = 0; i < 360; i += 20){
                const positionX = this.x + Math.cos(i) * 50;
                const positionY = this.y + Math.sin(i) * 50;
                const deltaX = positionX - this.x;
                const deltaY = positionY - this.y;
                const magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const velocityScale = bulletSpeed / magnitude;
                const speedX = deltaX * velocityScale;
                const speedY = deltaY * velocityScale;
                this.initBullet(positionX, positionY, speedX, speedY);
            }
        //this.setSpeed({speedX: this.speedX === 1 ? -1: 1});
        };
        this.spriteImageCroper = new _srpiteImageCropper.SpriteImageCroper(attributes.cropCycles, 2);
    }
    update() {
        this.setCenter();
        //this.setDirection();
        this.setCropCoordinates();
        this.angle++;
        this.behavior();
    // if (Math.random() < 0.95) return;
    // const random = Math.random() * 10;
    // this.y += Math.random() < 0.5 ? - random: random;
    // this.x += Math.random() < 0.5 ? - random: random;
    }
    drawShootedBullets() {
        this.shootedBullets.forEach((shootedBullet)=>{
            shootedBullet.draw(shootedBullet);
        });
    }
    updateBullets() {
        this.shootedBullets.forEach((shootedBullet)=>{
            shootedBullet.update();
        });
    }
    initBullet(x, y, speedX, speedY) {
        const shootedBullet = new _bullet.Bullet({
            x: x,
            y: y,
            speedX: speedX,
            speedY: speedY,
            reference: 'Fire_Bullet_Pixel_All_Reverse',
            cropX: 164,
            cropY: 114,
            cropWidth: 30,
            cropHeight: 30,
            width: 20,
            height: 20
        }, this.imageHandler, this.displayHandler);
        shootedBullet.setCoords({
            x: x,
            y: y
        });
        this.shootedBullets.push(shootedBullet);
    }
    setCropCoordinates() {
        const { cropX , cropY  } = this.spriteImageCroper.getCropCoordinate(this.direction);
        this.cropX = cropX;
        this.cropY = cropY;
    }
    setDirection() {
        if (this.speedY < 0) this.direction = 'south';
        if (this.speedY > 0) this.direction = 'north';
    }
}

},{"./bullet":"9V7mY","./sprite":"3Hinm","./srpite-image-cropper":"8EDiP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7cHCu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Explosion", ()=>Explosion
);
var _sprite = require("./sprite");
class Explosion extends _sprite.Sprite {
    constructor(attributes, imageHandler, displayHandler){
        super(attributes, imageHandler, displayHandler);
        this.imagesCrops = [
            {
                cropX: 0,
                cropY: 0
            },
            {
                cropX: 200,
                cropY: 0
            },
            {
                cropX: 400,
                cropY: 0
            },
            {
                cropX: 600,
                cropY: 0
            },
            {
                cropX: 800,
                cropY: 0
            },
            {
                cropX: 0,
                cropY: 200
            },
            {
                cropX: 200,
                cropY: 200
            },
            {
                cropX: 400,
                cropY: 200
            },
            {
                cropX: 600,
                cropY: 200
            },
            {
                cropX: 800,
                cropY: 200
            },
            {
                cropX: 0,
                cropY: 400
            },
            {
                cropX: 200,
                cropY: 400
            },
            {
                cropX: 400,
                cropY: 400
            },
            {
                cropX: 600,
                cropY: 400
            },
            {
                cropX: 800,
                cropY: 400
            },
            {
                cropX: 0,
                cropY: 600
            },
            {
                cropX: 200,
                cropY: 600
            },
            {
                cropX: 400,
                cropY: 600
            },
            {
                cropX: 600,
                cropY: 600
            },
            {
                cropX: 800,
                cropY: 600
            }, 
        ];
        this.cropIndex = 0;
        this.toDelete = false;
    }
    update() {
        if (this.imagesCrops[this.cropIndex]) {
            this.cropX = this.imagesCrops[this.cropIndex].cropX;
            this.cropY = this.imagesCrops[this.cropIndex].cropY;
            if (Math.random() > 0.2) this.cropIndex++;
            return;
        }
        this.toDelete = true;
    // this.cropIndex = 0;
    // this.cropX = this.imagesCrops[this.cropIndex].cropX;
    // this.cropY = this.imagesCrops[this.cropIndex].cropY;
    }
    draw() {
        this.displayHandler.draw(this);
    }
}

},{"./sprite":"3Hinm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iyvNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Item", ()=>Item
);
var _sprite = require("./sprite");
class Item extends _sprite.Sprite {
    constructor(attributes, imageHandler, displayHandler){
        super(attributes, imageHandler, displayHandler);
        this.playerBehavior = {
        };
        this.playerBehavior = attributes.playerBehavior;
    }
    update() {
        this.y += this.speedY;
    }
    draw() {
        this.displayHandler.draw(this);
    }
}

},{"./sprite":"3Hinm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l7mQG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particule", ()=>Particule
);
var _sprite = require("./sprite");
class Particule extends _sprite.Sprite {
    constructor(attributes, imageHandler, displayHandler, player){
        super(attributes, imageHandler, displayHandler);
        this.player = player;
        this.frame = 0;
    }
    draw() {
        if (this.frame === 4) {
            this.displayHandler.drawCircle(this);
            this.frame = 0;
        } else this.frame++;
    }
    update() {
        if (this.angle < 360) this.angle++;
        else this.angle = 0;
        //if (this.angle%2 == 0){
        this.x = 300 + Math.cos(this.angle) * 80;
        this.y = 300 + Math.sin(this.angle) * 80;
    //}
    }
}

},{"./sprite":"3Hinm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iJx4u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "itemsDatas", ()=>itemsDatas
);
parcelHelpers.export(exports, "enemiesDatas", ()=>enemiesDatas
);
parcelHelpers.export(exports, "imagesDatas", ()=>imagesDatas
);
parcelHelpers.export(exports, "heroesDatas", ()=>heroesDatas
);
const itemsDatas = [
    {
        id: 1,
        name: 'diamant-marron',
        reference: 'spritesheet_items_48x48',
        cropX: 0,
        cropY: 384,
        width: 32,
        height: 32,
        cropWidth: 48,
        cropHeight: 48,
        playerBehavior: {
            shootType: 'first',
            bulletType: 'a'
        }
    },
    {
        id: 2,
        name: 'diamant-marron',
        reference: 'spritesheet_items_48x48',
        cropX: 48,
        cropY: 384,
        width: 32,
        height: 32,
        cropWidth: 48,
        cropHeight: 48,
        playerBehavior: {
            shootType: 'second',
            bulletType: 'b'
        }
    },
    {
        id: 3,
        name: 'diamant-noir',
        reference: 'spritesheet_items_48x48',
        cropX: 96,
        cropY: 384,
        width: 32,
        height: 32,
        cropWidth: 48,
        cropHeight: 48,
        playerBehavior: {
            shootType: 'third',
            bulletType: 'c'
        }
    },
    {
        id: 4,
        name: 'diamant-noir',
        reference: 'spritesheet_items_48x48',
        cropX: 144,
        cropY: 384,
        width: 32,
        height: 32,
        cropWidth: 48,
        cropHeight: 48,
        playerBehavior: {
            shootType: 'forth',
            bulletType: 'a'
        }
    }
];
const enemiesDatas = [
    {
        characterName: 'chauve-souris',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {
                    cropX: 0,
                    cropY: 32
                },
                {
                    cropX: 32,
                    cropY: 32
                },
                {
                    cropX: 64,
                    cropY: 32
                }
            ],
            rightCycleLoop: [
                {
                    cropX: 0,
                    cropY: 64
                },
                {
                    cropX: 32,
                    cropY: 64
                },
                {
                    cropX: 64,
                    cropY: 64
                }
            ],
            upCycleLoop: [
                {
                    cropX: 0,
                    cropY: 96
                },
                {
                    cropX: 32,
                    cropY: 96
                },
                {
                    cropX: 0,
                    cropY: 96
                }
            ],
            downCycleLoop: [
                {
                    cropX: 0,
                    cropY: 0
                },
                {
                    cropX: 32,
                    cropY: 0
                },
                {
                    cropX: 64,
                    cropY: 0
                }
            ]
        }
    },
    {
        characterName: 'globule-rouge',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {
                    cropX: 92,
                    cropY: 32
                },
                {
                    cropX: 128,
                    cropY: 32
                },
                {
                    cropX: 160,
                    cropY: 32
                }
            ],
            rightCycleLoop: [
                {
                    cropX: 92,
                    cropY: 64
                },
                {
                    cropX: 128,
                    cropY: 64
                },
                {
                    cropX: 160,
                    cropY: 64
                }
            ],
            upCycleLoop: [
                {
                    cropX: 92,
                    cropY: 96
                },
                {
                    cropX: 128,
                    cropY: 96
                },
                {
                    cropX: 160,
                    cropY: 96
                }
            ],
            downCycleLoop: [
                {
                    cropX: 92,
                    cropY: 0
                },
                {
                    cropX: 128,
                    cropY: 0
                },
                {
                    cropX: 160,
                    cropY: 0
                }
            ]
        }
    },
    {
        characterName: 'abeille-verte',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {
                    cropX: 192,
                    cropY: 32
                },
                {
                    cropX: 224,
                    cropY: 32
                },
                {
                    cropX: 256,
                    cropY: 32
                }
            ],
            rightCycleLoop: [
                {
                    cropX: 192,
                    cropY: 64
                },
                {
                    cropX: 224,
                    cropY: 64
                },
                {
                    cropX: 256,
                    cropY: 64
                }
            ],
            upCycleLoop: [
                {
                    cropX: 192,
                    cropY: 96
                },
                {
                    cropX: 224,
                    cropY: 96
                },
                {
                    cropX: 256,
                    cropY: 96
                }
            ],
            downCycleLoop: [
                {
                    cropX: 192,
                    cropY: 0
                },
                {
                    cropX: 224,
                    cropY: 0
                },
                {
                    cropX: 256,
                    cropY: 0
                }
            ]
        }
    },
    {
        characterName: 'champignon-bleu',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {
                    cropX: 288,
                    cropY: 32
                },
                {
                    cropX: 320,
                    cropY: 32
                },
                {
                    cropX: 352,
                    cropY: 32
                }
            ],
            rightCycleLoop: [
                {
                    cropX: 288,
                    cropY: 64
                },
                {
                    cropX: 320,
                    cropY: 64
                },
                {
                    cropX: 352,
                    cropY: 64
                }
            ],
            upCycleLoop: [
                {
                    cropX: 288,
                    cropY: 96
                },
                {
                    cropX: 320,
                    cropY: 96
                },
                {
                    cropX: 352,
                    cropY: 96
                }
            ],
            downCycleLoop: [
                {
                    cropX: 288,
                    cropY: 0
                },
                {
                    cropX: 320,
                    cropY: 0
                },
                {
                    cropX: 352,
                    cropY: 0
                }
            ]
        }
    },
    {
        characterName: 'rat',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {
                    cropX: 0,
                    cropY: 160
                },
                {
                    cropX: 32,
                    cropY: 160
                },
                {
                    cropX: 64,
                    cropY: 160
                }
            ],
            rightCycleLoop: [
                {
                    cropX: 0,
                    cropY: 192
                },
                {
                    cropX: 32,
                    cropY: 192
                },
                {
                    cropX: 64,
                    cropY: 192
                }
            ],
            upCycleLoop: [
                {
                    cropX: 0,
                    cropY: 224
                },
                {
                    cropX: 32,
                    cropY: 224
                },
                {
                    cropX: 64,
                    cropY: 224
                }
            ],
            downCycleLoop: [
                {
                    cropX: 0,
                    cropY: 128
                },
                {
                    cropX: 32,
                    cropY: 128
                },
                {
                    cropX: 64,
                    cropY: 128
                }
            ]
        }
    },
    {
        characterName: 'globule-rouge',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {
                    cropX: 92,
                    cropY: 160
                },
                {
                    cropX: 128,
                    cropY: 160
                },
                {
                    cropX: 160,
                    cropY: 160
                }
            ],
            rightCycleLoop: [
                {
                    cropX: 92,
                    cropY: 192
                },
                {
                    cropX: 128,
                    cropY: 192
                },
                {
                    cropX: 160,
                    cropY: 192
                }
            ],
            upCycleLoop: [
                {
                    cropX: 92,
                    cropY: 224
                },
                {
                    cropX: 128,
                    cropY: 224
                },
                {
                    cropX: 160,
                    cropY: 224
                }
            ],
            downCycleLoop: [
                {
                    cropX: 92,
                    cropY: 128
                },
                {
                    cropX: 128,
                    cropY: 128
                },
                {
                    cropX: 160,
                    cropY: 128
                }
            ]
        }
    },
    {
        characterName: 'abeille-verte',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {
                    cropX: 192,
                    cropY: 160
                },
                {
                    cropX: 224,
                    cropY: 160
                },
                {
                    cropX: 256,
                    cropY: 160
                }
            ],
            rightCycleLoop: [
                {
                    cropX: 192,
                    cropY: 192
                },
                {
                    cropX: 224,
                    cropY: 192
                },
                {
                    cropX: 256,
                    cropY: 192
                }
            ],
            upCycleLoop: [
                {
                    cropX: 192,
                    cropY: 224
                },
                {
                    cropX: 224,
                    cropY: 224
                },
                {
                    cropX: 256,
                    cropY: 224
                }
            ],
            downCycleLoop: [
                {
                    cropX: 192,
                    cropY: 128
                },
                {
                    cropX: 224,
                    cropY: 128
                },
                {
                    cropX: 256,
                    cropY: 128
                }
            ]
        }
    },
    {
        characterName: 'champignon-bleu',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {
                    cropX: 288,
                    cropY: 160
                },
                {
                    cropX: 320,
                    cropY: 160
                },
                {
                    cropX: 352,
                    cropY: 160
                }
            ],
            rightCycleLoop: [
                {
                    cropX: 288,
                    cropY: 192
                },
                {
                    cropX: 320,
                    cropY: 192
                },
                {
                    cropX: 352,
                    cropY: 192
                }
            ],
            upCycleLoop: [
                {
                    cropX: 288,
                    cropY: 224
                },
                {
                    cropX: 320,
                    cropY: 224
                },
                {
                    cropX: 352,
                    cropY: 224
                }
            ],
            downCycleLoop: [
                {
                    cropX: 288,
                    cropY: 128
                },
                {
                    cropX: 320,
                    cropY: 128
                },
                {
                    cropX: 352,
                    cropY: 128
                }
            ]
        }
    }, 
];
const imagesDatas = [
    {
        type: 'sprites',
        reference: 'ships',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/sprites/ships.png'
    },
    {
        type: 'sprites',
        reference: 'shootemup-spritesheet',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/sprites/shootemup-spritesheet.png'
    },
    {
        type: 'sprites',
        reference: 'map1',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/background/shooter_map1.png'
    },
    {
        type: 'sprites',
        reference: 'explosion',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/sprites/explosion.png'
    },
    // {type: 'sprites', reference: 'background1', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: '', base64: true},
    {
        type: 'sprites',
        reference: 'vertical-shooter-map',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/background/Vertical_Shooter_Full.png'
    },
    {
        type: 'sprites',
        reference: 'hero',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/sprites/heros8.png'
    },
    {
        type: 'sprites',
        reference: 'Fire_Bullet_Pixel_All_Reverse',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/tilesets/Fire_Bullet_Pixel_All_Reverse.png'
    },
    {
        type: 'sprites',
        reference: 'character_ememy_set_3',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/sprites/character_ememy_set_3.png'
    },
    {
        type: 'illustration',
        reference: 'elemental-illustration',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/illustrations/elemental-illustration.jpeg'
    },
    {
        type: 'sprites',
        reference: 'spritesheet_items_48x48',
        belongsToMapsheetId: 1,
        belongsToWorldId: 1,
        filePath: 'http://benoit-dev-demo.com/img/tilesets/spritesheet_items_48x48.png'
    }, 
];
const heroesDatas = [
    {
        characterName: 'elemental-master',
        type: 'main-character',
        reference: 'hero',
        cropCycles: {
            rightCycleLoop: [
                {
                    cropX: 0,
                    cropY: 64
                },
                {
                    cropX: 32,
                    cropY: 64
                },
                {
                    cropX: 0,
                    cropY: 64
                },
                {
                    cropX: 64,
                    cropY: 64
                }
            ],
            leftCycleLoop: [
                {
                    cropX: 0,
                    cropY: 32
                },
                {
                    cropX: 32,
                    cropY: 32
                },
                {
                    cropX: 0,
                    cropY: 32
                },
                {
                    cropX: 64,
                    cropY: 32
                }
            ],
            upCycleLoop: [
                {
                    cropX: 0,
                    cropY: 96
                },
                {
                    cropX: 32,
                    cropY: 96
                },
                {
                    cropX: 0,
                    cropY: 96
                },
                {
                    cropX: 64,
                    cropY: 96
                }
            ],
            downCycleLoop: [
                {
                    cropX: 0,
                    cropY: 0
                },
                {
                    cropX: 32,
                    cropY: 0
                },
                {
                    cropX: 0,
                    cropY: 0
                },
                {
                    cropX: 64,
                    cropY: 0
                }
            ]
        }
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["2HtCd","7PGg5"], "7PGg5", "parcelRequire6e74")

//# sourceMappingURL=index.bdea7d65.js.map
