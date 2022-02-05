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
var _gameCharacterData = require("./models/game-character-data");
//const canvas = document.getElementById('game') as HTMLCanvasElement;
const canvas1 = createCanvasElement(960, 720, 'game');
const container = document.querySelector('.game-flex-container');
container.appendChild(canvas1);
//canvas.width = 960;
//canvas.height = 720;
const ctx1 = canvas1.getContext('2d');
const displayHandler = new _displayHandler.DisplayHandler(ctx1);
const imageHandler = new _imageHandler.ImageHandler();
let gameAnimationFrameRequestId;
let backgroundHandler1;
let backgroundHandler2;
let collisionHandler = new _collisionHandler.CollisionHandler();
let enemies = [];
let explosions = [];
let particules = [];
let player;
let enemyDatas = new _gameCharacterData.GameCharacterData().data.filter((character)=>{
    return character.type === 'enemy';
});
let items1 = [];
var active = false;
let gameActive = false;
function initPlayer() {
    player = new _player.Player({
        x: 0,
        y: 0,
        speedX: 2,
        speedY: 2,
        characterName: 'elemental-master',
        reference: 'hero',
        cropX: 0,
        cropY: 0,
        width: 64,
        height: 64,
        cropWidth: 32,
        cropHeight: 32
    }, imageHandler, displayHandler);
}
function initItem() {
    const item = new _item.Item({
        x: Math.floor(Math.random() * 960),
        y: 0,
        speedX: 0,
        speedY: 0.3,
        characterName: '',
        reference: 'spritesheet_items_48x48',
        cropX: 240,
        cropY: 384,
        width: 32,
        height: 32,
        cropWidth: 48,
        cropHeight: 48
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
    // Récupère les données d'un enemi à créer
    const enemyData = enemyDatas[Math.floor(Math.random() * enemyDatas.length - 1)];
    const enemy = new _enemy.Enemy({
        x: Math.floor(Math.random() * 960),
        y: 0,
        speedX: 2,
        speedY: 0.1,
        characterName: enemyData.characterName,
        reference: 'character_ememy_set_3',
        cropX: 0,
        cropY: 0,
        width: 100,
        height: 100,
        cropWidth: 32,
        cropHeight: 32
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
    console.log('e.keyCode', e.keyCode);
    if (e.keyCode === 13) {
        initSound('http://benoit-dev-demo.com/audio/Elemental_master_stage1_8bit.mp3', 0.2);
        active = true;
        alert('active');
    }
    if (e.keyCode === 32) {
        player.shoot();
        initSound('http://benoit-dev-demo.com/audio/mixkit-short-laser-gun-shot-1670.wav', 0.1);
    }
    if (e.keyCode === 82) {
        console.log('player.direction ', player.direction);
        if (player.direction === 'north') player.setDirection('south');
        else player.setDirection('north');
    }
    return;
});
let delay = 0;
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
                console.log('enemy.life', enemy.life);
                console.log('bullet', bullet);
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
}
// Fonction qui crée un élément Image HTML en prenant une capture du canvas
function createMapsheetImageHTMLElement() {
    const widthSize = 960;
    const heightSize = 9600;
    const canvas = createCanvasElement(widthSize, heightSize, 'temporary');
    const ctx = canvas.getContext('2d');
    for(let col = 0; col < 20; col++)for(let row = 0; row < 200; row++)ctx.drawImage(imageHandler.getImage('background1'), 96, 96, 48, 48, col * 48, row * 48, 48, 48);
    const dataUrl = canvas.toDataURL();
    console.log('dataUrl', dataUrl);
    const image = document.createElement('img');
    //image.crossOrigin = '*';
    image.src = dataUrl;
    image.style.width = `${widthSize}px`;
    image.style.height = `${heightSize}px`;
    console.log('imageFoo', image);
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

},{"./models/image-handler":"dNiUY","./models/display-handler":"68nTU","./models/player":"kBw1Q","./models/background-handler":"gCSiG","./models/collision-handler":"jg8rU","./models/enemy":"6Lm0A","./models/explosion":"7cHCu","./models/item":"iyvNj","./models/particule":"l7mQG","./models/game-character-data":"lMPwH"}],"dNiUY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImageHandler", ()=>ImageHandler
);
class ImageHandler {
    constructor(){
        this.imagesSet = [
            {
                type: 'sprites',
                reference: 'ships',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/sprites/ships.png',
                base64: false
            },
            {
                type: 'sprites',
                reference: 'shootemup-spritesheet',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/sprites/shootemup-spritesheet.png',
                base64: false
            },
            {
                type: 'sprites',
                reference: 'map1',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/background/shooter_map1.png',
                base64: false
            },
            {
                type: 'sprites',
                reference: 'explosion',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/sprites/explosion.png',
                base64: false
            },
            {
                type: 'sprites',
                reference: 'background1',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: '',
                base64: true
            },
            {
                type: 'sprites',
                reference: 'vertical-shooter-map',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/background/Vertical_Shooter_Full.png',
                base64: false
            },
            {
                type: 'sprites',
                reference: 'hero',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/sprites/heros8.png',
                base64: false
            },
            {
                type: 'sprites',
                reference: 'Fire_Bullet_Pixel_All_Reverse',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/tilesets/Fire_Bullet_Pixel_All_Reverse.png',
                base64: false
            },
            {
                type: 'sprites',
                reference: 'character_ememy_set_3',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/sprites/character_ememy_set_3.png',
                base64: false
            },
            {
                type: 'illustration',
                reference: 'elemental-illustration',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/illustrations/elemental-illustration.jpeg',
                base64: false
            },
            {
                type: 'illustration',
                reference: 'logo_md_green_red',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/illustrations/logo_md_green_red.png',
                base64: false
            },
            {
                type: 'sprites',
                reference: 'spritesheet_items_48x48',
                belongsToMapsheetId: 1,
                belongsToWorldId: 1,
                filePath: 'http://benoit-dev-demo.com/img/tilesets/spritesheet_items_48x48.png',
                base64: false
            }, 
        ];
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
            if (image.base64) img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAMACAYAAAAt6LBOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZDQzYTM2Ni01OTE2LTcyNDAtYThiNy0yMWFjOTA4ZTRlY2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjdBQkUzQTg0QjBGMTFFODgzRTVGQzE0RUYyNzUwRUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjdBQkUzQTc0QjBGMTFFODgzRTVGQzE0RUYyNzUwRUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N2Y3N2QyZmQtZjFhZC02YTRiLTg0MzQtYzNlZDhkYjBhNjdmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVkNDNhMzY2LTU5MTYtNzI0MC1hOGI3LTIxYWM5MDhlNGVjYyIv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";
            else img.src = image.filePath;
            this.imagesAssets.push(img);
        }));
        await Promise.all(promiseArray); // wait for all the images to be loaded
        console.log("all images loaded");
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
        this.shootType = 'second';
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
        this.spriteImageCroper = new _srpiteImageCropper.SpriteImageCroper(attributes.characterName, 3);
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
var _gameCharacterData = require("./game-character-data");
class SpriteImageCroper extends _gameCharacterData.GameCharacterData {
    constructor(characterName, indexPerCycle){
        super();
        this.indexPerCycle = indexPerCycle;
        this.step = 0;
        this.currentLoopIndex = 0;
        this.cycle = this.getCharacterData(characterName).cropCryle;
    }
    getCropCoordinate(direction) {
        this.setCurrentLoopIndex();
        // On détermine la positon x/y du crop du personnage
        // if (direction === 'west'){ 
        //     return this.leftCycleLoop[this.currentLoopIndex];
        // } else if (direction === 'east'){
        //     return this.rightCycleLoop[this.currentLoopIndex];
        if (direction === 'north') return this.cycle.upCycleLoop[this.currentLoopIndex];
        else if (direction === 'south') return this.cycle.downCycleLoop[this.currentLoopIndex];
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

},{"./game-character-data":"lMPwH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lMPwH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameCharacterData", ()=>GameCharacterData
);
class GameCharacterData {
    constructor(){
        this.data = [
            {
                characterName: 'elemental-master',
                type: 'main-character',
                imageReference: 'hero',
                cropCryle: {
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
            {
                characterName: 'chauve-souris',
                type: 'enemy',
                imageReference: 'character_ememy_set_3',
                cropCryle: {
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
                imageReference: 'character_ememy_set_3',
                cropCryle: {
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
                imageReference: 'character_ememy_set_3',
                cropCryle: {
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
                imageReference: 'character_ememy_set_3',
                cropCryle: {
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
            /////////////////////////////
            {
                characterName: 'rat',
                type: 'enemy',
                imageReference: 'character_ememy_set_3',
                cropCryle: {
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
                imageReference: 'character_ememy_set_3',
                cropCryle: {
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
                imageReference: 'character_ememy_set_3',
                cropCryle: {
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
                imageReference: 'character_ememy_set_3',
                cropCryle: {
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
    }
    getCharacterData(characterName) {
        return this.data.find((character)=>{
            return character.characterName === characterName;
        });
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
        this.spriteImageCroper = new _srpiteImageCropper.SpriteImageCroper(attributes.characterName, 2);
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

},{"./sprite":"3Hinm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["2HtCd","7PGg5"], "7PGg5", "parcelRequire6e74")

//# sourceMappingURL=index.bdea7d65.js.map
