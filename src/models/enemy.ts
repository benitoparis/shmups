import { Bullet } from "./bullet";
import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";
import { Player } from "./player";
import { Sprite } from "./sprite";
import { SpriteImageCroper } from "./srpite-image-cropper";

export class Enemy extends Sprite {

    shootedBullets = [];
    spriteImageCroper: SpriteImageCroper;
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

        this.spriteImageCroper = new SpriteImageCroper(
            attributes.characterName,
            2
        );

        
    }

    update(){

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

    shoot = ()=> {

        if (Math.random() < 0.9999) return;

        // const ratio = (this.y - this.player.y) / (this.x - this.player.x);
        // const speedX = 1;
        // const speedY = speedX * ratio;

        for (let i = 0; i < 360; i +=20){

            const bulletSpeed = 0.5;
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

    initBullet(x: number, y: number, speedX: number, speedY: number): void {

        const shootedBullet = new Bullet({
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
        }, 
        this.imageHandler,
        this.displayHandler
        );
        shootedBullet.setCoords({x: x, y: y});
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