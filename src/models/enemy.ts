import { Bullet } from "./bullet";
import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";
import { Player } from "./player";
import { Sprite } from "./sprite";
import { SpriteImageCroper } from "./srpite-image-cropper";

export class Enemy extends Sprite {

    shootedBullets = [];
    spriteImageCroper = new SpriteImageCroper(
        {
            leftCycleLoop: [
                {cropX:0,cropY:32},
                {cropX:32,cropY:32},
                {cropX:64,cropY:32}
            ],
             rightCycleLoop: [
                {cropX:0,cropY:64},
                {cropX:32,cropY:64},
                {cropX:64,cropY:64}
            ],
            upCycleLoop: [
                {cropX:0,cropY:96},
                {cropX:32,cropY:96},
                {cropX:0,cropY:96}
            ],
            downCycleLoop: [
                {cropX:0,cropY:0},
                {cropX:32,cropY:0},
                {cropX:64,cropY:0}
            ],
        },
        2
    );
    direction = 'south';

    constructor(
        attributes: any,
        imageHandler: ImageHandler,
        displayHandler: DisplayHandler,
        public player: Player,
        public behavior: any
    ){

        super (
            attributes,
            imageHandler,
            displayHandler
        );

        
    }

    update(){

        //this.setDirection();
        this.setCropCoordinates();
        this.angle++;

        this.behavior();
        
        // if (Math.random() < 0.95) return;

        
        // const random = Math.random() * 10;

        // this.y += Math.random() < 0.5 ? - random: random;
        // this.x += Math.random() < 0.5 ? - random: random;
    }

    shoot = ()=> {

        if (Math.random() < 0.99) return;

        // const ratio = (this.y - this.player.y) / (this.x - this.player.x);
        // const speedX = 1;
        // const speedY = speedX * ratio;

        this.initBullet(0);
        this.initBullet(45);
        this.initBullet(180);
        this.initBullet(250);

    }

    drawShootedBullets(): void {
        this.shootedBullets.forEach(shootedBullet => {
            shootedBullet.draw(shootedBullet);
        });
    }

    updateBullets(): void {
        this.shootedBullets.forEach(shootedBullet => {
            shootedBullet.update();
        });
    }

    initBullet(angle: number){

        const shootedBullet = new Bullet({
            x: this.x,
            y: this.y,
            speedX: Math.sin(angle),
            speedY: 1,
            reference: 'shootemup-spritesheet',
            cropX: 250,
            cropY: 2500,
            cropWidth: 250,
            cropHeight: 250,
            width: 200,
            height: 200
        }, 
        this.imageHandler,
        this.displayHandler
        );
        shootedBullet.setCoords({x: this.x, y: this.y});
        this.shootedBullets.push(shootedBullet);
    }


    setCropCoordinates(): void {
        const { cropX, cropY } = this.spriteImageCroper.getCropCoordinate(this.direction);
        this.cropX = cropX;
        this.cropY = cropY;
    }

    setDirection(): void {

        if (this.speedY < 0) this.direction = 'south';
        if (this.speedY > 0) this.direction = 'north';
        
    }


}