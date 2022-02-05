import { Bullet } from "./bullet";
import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";
import { Sprite } from "./sprite";
import { SpriteImageCroper } from "./srpite-image-cropper";

export class Player extends Sprite {

    shootedBullets = [];
    life = 10;
    score = 0;
    spriteImageCroper: SpriteImageCroper;
    direction = 'north';
    bulletTypeCrop = {
        a: {cropX:240, cropY:63, cropWidth:32, cropHeight: 40},
        b: {cropX:146, cropY:385, cropWidth:15, cropHeight: 40},
        c: {cropX:162, cropY:116, cropWidth:30, cropHeight: 30},
    };
    bulletType = 'a';
    shootTypes = {
        first: [0, 20, 40, 60, 80, 100, 120, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340],
        second: [300],
        third: [280,300,320],
        forth: [270,285,300,315,330]
    };
    shootType = 'second';

    constructor(
        attributes: any,
        imageHandler : ImageHandler,
        displayHandler : DisplayHandler
    ){

        // By calling the super() method in the constructor method, we call the parent's constructor method
        super (
            attributes,
            imageHandler,
            displayHandler
        ) 

        this.spriteImageCroper = new SpriteImageCroper(
            attributes.characterName,
            3
        );
    }


    shoot = ()=> {

        let bulletSpeed = 5;

        this.shootTypes[this.shootType].forEach(shootAngle => {
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

    drawPlayerDatas(): void {
        this.displayHandler.drawDatas(this);
    }

    setCropCoordinates(): void {
        const { cropX, cropY } = this.spriteImageCroper.getCropCoordinate(this.direction);
        this.cropX = cropX;
        this.cropY = cropY;
    }

    update(){
        this.setCropCoordinates();
    }

    setDirection(direction: string): void {
        this.direction = direction;
    }


    initBullet(x: number, y: number, speedX: number, speedY: number): void {

        const shootedBullet = new Bullet(
            {
            x: x,//this.centerX - 20,
            y: y, //, this.direction === 'north' ? this.y - 10 : this.y + 50,
            speedX: speedX,//0,
            speedY: speedY,//this.direction === 'north' ? -10 : 10,
            reference: 'Fire_Bullet_Pixel_All_Reverse',
            cropX: this.bulletTypeCrop[this.bulletType].cropX,
            cropY: this.bulletTypeCrop[this.bulletType].cropY,
            cropWidth: this.bulletTypeCrop[this.bulletType].cropWidth,
            cropHeight: this.bulletTypeCrop[this.bulletType].cropHeight,
            width: 32,//20,
            height: 40,//20
            },
            this.imageHandler,
            this.displayHandler 
        );
        shootedBullet.setCoords(
            {
            x: this.centerX - 10,
            y: this.direction === 'north' ? this.y - 10 : this.y + 50});
        this.shootedBullets.push(shootedBullet);
 


    }
}