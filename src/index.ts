
import { ImageHandler } from "./models/image-handler";
import { DisplayHandler } from "./models/display-handler";
import { Player } from "./models/player";
import { BackgroundHandler } from "./models/background-handler";
import { CollisionHandler } from "./models/collision-handler";
import { Enemy } from "./models/enemy";
import { Explosion } from "./models/explosion";
import { Item } from "./models/item";
import { Bullet } from "./models/bullet";
import { Particule } from "./models/particule";
import { GameCharacterData } from "./models/game-character-data";

//const canvas = document.getElementById('game') as HTMLCanvasElement;

const canvas = createCanvasElement(960, 720,'game') as HTMLCanvasElement;
const container = document.querySelector('.game-flex-container');
container.appendChild(canvas);

//canvas.width = 960;
//canvas.height = 720;
const ctx = canvas.getContext('2d');

const displayHandler = new DisplayHandler(ctx);
const imageHandler = new ImageHandler();

let gameAnimationFrameRequestId: number;
let backgroundHandler1: BackgroundHandler;
let backgroundHandler2: BackgroundHandler;
let collisionHandler = new CollisionHandler();
let enemies = [];
let explosions = [];
let particules = [];
let player: Player;
let enemyDatas = new GameCharacterData().data
    .filter(character=> {
        return character.type === 'enemy';
    });

let items = [];
var active = false;

let gameActive = false;


function initPlayer(): void {
    player = new Player(
        {
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
        },
        imageHandler,
        displayHandler
    );
}

function initItem(): void {
    const item = new Item(
        {
            x: (Math.floor(Math.random() * 960)),
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
        },
        imageHandler,
        displayHandler
    );

    item.setCoords({x: (Math.floor(Math.random() * 960)), y: 0});
    items.push(item);
}



function initParticule(): void {
    const particule = new Particule (
        {
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
        },
        imageHandler,
        displayHandler,
        player
    )

    particule.setCoords({x: player.x + 30, y: player.y + 80});
    particules.push(particule);
}

function initEnemy(): void {

    // Récupère les données d'un enemi à créer
    const enemyData = enemyDatas[
        Math.floor(Math.random() * enemyDatas.length - 1)
    ];

    const enemy = new Enemy(
        {
            x: (Math.floor(Math.random() * 960)),
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
        },
        imageHandler,
        displayHandler,
        player,
        // function behavior() { // go down quick when the player is below
        //     if (this.player.centerX > this.x &&  this.player.centerX < this.x + this.width) {
        //         this.y += 1;
        //     }
        // }

        function behavior() {  // from left to right and slow bottom

            
            this.y += 0.2;

            if (this.x > 800) {
                this.speedX = -1;
            }

            if (this.x < 50){
                this.speedX = 1;
            }

            this.x += this.speedX;

           
        }

        //ZigZag from left to right
        // function behavior() {
        //     if (Math.random() > 0.3) return;

        //     this.x = 300 + (Math.sin(this.angle) * 100);
        //     this.y +=10 ;
        //     if(this.angle < 180){
        //         this.angle++;
        //     } else {
        //         this.angle = 0;
        //     }
        // }
    );

    enemy.setCoords({x: 400, y: 10});
    enemies.push(enemy);
}

function initBackground(): void {
    backgroundHandler1 = new BackgroundHandler(
        0.3,
        'vertical-shooter-map',
        imageHandler,
        displayHandler,
        0.1
    );

    backgroundHandler2 = new BackgroundHandler(
        0.3,
        'vertical-shooter-map',
        imageHandler,
        displayHandler,
        0.1
    );
}

function initSprites() {
    initPlayer();
    initEnemy();
    initBackground();
}

const initExplosion = (x: number, y:number)=> {
    const explosion = new Explosion(
        {
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
            cropHeight: 100,
        },
        imageHandler,
        displayHandler
    );

    explosion.setCoords({x: x, y: y});

    explosions.push(explosion);
}

// Supprime définitivement un élément qui sort des limites
function deleteItemWhenOutOfBounds(items: any[]): void {
    items.forEach((item, index) => {
        if (item.x < - 200 || item.x > 1200 || item.y < -200 || item.y > 820) {
            items.splice(index, 1);
        }
    });
}

canvas.addEventListener('mousemove', (e: any)=> {

    if(!player) return;
    player.setCoords({x: e.layerX - 50, y: e.layerY - 100});
});

window.addEventListener('keydown', (e: any)=> {

    console.log('e.keyCode', e.keyCode);
    
    if (e.keyCode === 13) { // Entrée
        initSound('http://benoit-dev-demo.com/audio/Elemental_master_stage1_8bit.mp3', 0.2);
        active = true;
        alert('active');
    }
    if (e.keyCode === 32) { // Space
        player.shoot(); 
        initSound('http://benoit-dev-demo.com/audio/mixkit-short-laser-gun-shot-1670.wav', 0.1);
    }

    if (e.keyCode === 82) { // touche R

        console.log('player.direction ', player.direction);
        if (player.direction === 'north') {
            player.setDirection('south');
        } else {
            player.setDirection('north');
        }
    }

    return;
    
});

let delay = 0;
const gameLoop = (): void => {

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



    enemies.forEach(enemy=> {
        enemy.update();
        enemy.shoot();
        enemy.updateBullets();
        enemy.drawShootedBullets();
        enemy.draw();
        enemy.drawScore();
    });

    explosions.forEach((explosion, idx) => {
        if (explosion.toDelete){

            delete explosions[idx];

        } else {
            explosion.update();
            explosion.draw();
        };
        
    });

    particules.forEach(particule => {
        particule.update();
        particule.draw();
    });

    items.forEach(item=> {
        item.update();
        item.draw();
    })

    if (delay === 30){
        checkAllCollisions();
        delay = 0;
        
    } else {
        delay++;
    }
    

    //deleteItemWhenOutOfBounds(enemies);

    if (gameActive){
        gameAnimationFrameRequestId = window.requestAnimationFrame(gameLoop);
    } else {
        gameOver();
        displayHandler.drawRect({x:0,y:0,width: canvas.width, height: canvas.height});
        displayHandler.drawText('Game Over', 300, canvas.height / 2, 'white', 70 );
        setTimeout(initGame, 2000);
    }
    
};



async function initGame(){

    await startScreenAnimation();

    gameActive = true;

    imageHandler.loadImages().then(async (data) => {

        displayHandler.drawHomeScreen(
            'Elemental Remaster',
            '[Press Enter]',
            'Version 2022');

        const homePageImage = imageHandler.getImage('elemental-illustration');
        displayHandler.draw(
            {
                img: homePageImage, // The image to be cropped
                cropX: 0, //The x-coordinate of the source image
                cropY: 0, // The y-coordinate of the source image.
                cropWidth: 500, // The width of the source image
                cropHeight: 500, // The height of the source image.
                x: 50, // The x-coordinate of the destination image.
                y: 200, // The y-coordinate of the destination image.
                width: 400, // The width of the destination image.
                height: 400 // The height of the destination image
            }
        );

        await new Promise((resolve, reject)=> {
        
            window.addEventListener('keydown', (e: any)=> {
                displayHandler.clearRect();
                resolve('ok');
            })
        });
        displayHandler.drawHomeScreen('Loading...','', '');
        
        initSprites();
        setInterval(initEnemy, 10000);
        setInterval(initItem, 5000);
        initParticule();
        
        //const gameBackgroundImage = createMapsheetImageHTMLElement();
        // backgroundHandler = new BackgroundHandler(0.7, imageHandler.getImage('map1'), displayHandler);
        
        setTimeout(gameLoop, 2000);
    });
}

async function startScreenAnimation(): Promise<any> {

    displayHandler.drawHomeScreen(
        'Elemental',
        '',
        '2022 copyright');

    

    await new Promise((resolve, reject)=> {
        setTimeout(() => {
            displayHandler.drawHomeScreen(
                'Elemental Remaster',
                '',
                '2022 copyright');

            resolve('ok');
        }, 3000);
    });

    await new Promise((resolve, reject)=> {

        setTimeout(() => {
            displayHandler.drawHomeScreen(
                'Elemental Remaster',
                'Press Enter',
                '2022 copyright');
            resolve('ok');
        }, 4000);
    });

    return new Promise((resolve, reject)=> {
        setTimeout(() => {
       
            resolve('ok');
        }, 1000);
    });
}

function checkAllCollisions(): void {
    enemies.forEach((enemy: Enemy, idx: number) => {
        if (collisionHandler.checkCollision(enemy, player)) {

            if (player.life > 0){
                player.damage();
            } else {
                gameActive = false;
            }
        }

        if (player.shootedBullets.length) {
            player.shootedBullets.forEach((bullet: Bullet, index: number)=> {
                if (collisionHandler.checkCollision(enemy, bullet)){

                    console.log('enemy.life', enemy.life);
                    console.log('bullet', bullet);

                    if (enemy.life > 0){
                        enemy.damage();
                  
                    } else {
                        delete enemies[idx];
                        delete player.shootedBullets[index];
                        initExplosion(enemy.x, enemy.y);
                    }
                }
            });
        }

        if (enemy.shootedBullets.length){
            enemy.shootedBullets.forEach((enemyBullet: Bullet, index: number)=> {
                if (collisionHandler.checkCollision(player, enemyBullet)){
                    delete enemy.shootedBullets[index];
                    if (player.life > 0) player.damage();
                    if (player.life <= 0) gameActive = false;    
                }
            });
        }

    });
}

// Fonction qui crée un élément Image HTML en prenant une capture du canvas
function createMapsheetImageHTMLElement(): HTMLImageElement {

    const widthSize = 960;
    const heightSize = 9600;
    const canvas = createCanvasElement(widthSize, heightSize, 'temporary');
    const ctx = canvas.getContext('2d');

    for (let col= 0; col < 20; col++){

        for (let row= 0; row < 200; row++){
            ctx.drawImage(
                imageHandler.getImage('background1'),
                96,
                96,
                48,
                48,
                col*48,
                row*48,
                48,
                48
            );
        }
    }

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

function createCanvasElement(width: number, height: number, idName: string): HTMLCanvasElement{
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', idName);
    canvas.width = width;
    canvas.height = height;
    return canvas;
}


function initSound(url: string, volume: number): void {
  //const audio = document.getElementById('myPlayer');
  const audio = new Audio();
  audio.src = url;
  audio.autoplay = true;
  audio.volume = volume;
  audio.onended = function(){
    audio.remove(); //on arrete le son à la fin de la piste
  };
  audio.play();
};

function getRandomShootSoundUrl(): string {
    return [
        'http://benoit-dev-demo.com/audio/mixkit-short-laser-gun-shot-1670.wav',
        'http://benoit-dev-demo.com/audio/mixkit-arcade-space-shooter-dead-notification-272.wav',
        'http://benoit-dev-demo.com/audio/mixkit-electro-hit-3203.wav',
        'http://benoit-dev-demo.com/audio/mixkit-falling-hit-757.wav',
        'http://benoit-dev-demo.com/audio/mixkit-space-coin-win-notification-271.wav',
        'http://benoit-dev-demo.com/audio/mixkit-space-deploy-whizz-3003.wav'

    ][Math.floor(Math.random() * 5)];
}

function gameOver(): void {
    window.cancelAnimationFrame(gameAnimationFrameRequestId);
    resetSprites();
    return;
}

function resetSprites(): void {
    enemies = [];
    explosions = [];
    particules = [];
}

initGame();














 
