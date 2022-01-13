import { Bullet } from "./bullet";
import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";
import { Sprite } from "./sprite";
import { SpriteImageCroper } from "./srpite-image-cropper";

export class Player extends Sprite {

    shootedBullets = [];
    life = 10;
    score = 0;
    spriteImageCroper = new SpriteImageCroper(
        {
            rightCycleLoop: [{cropX:0,cropY:64}, {cropX:32,cropY:64},{cropX:0,cropY:64},{cropX:64,cropY:64}],
            leftCycleLoop: [{cropX:0,cropY:32}, {cropX:32,cropY:32},{cropX:0,cropY:32},{cropX:64,cropY:32}],
            upCycleLoop: [{cropX:0,cropY:96}, {cropX:32,cropY:96},{cropX:0,cropY:96},{cropX:64,cropY:96}],
            downCycleLoop: [{cropX:0,cropY:0}, {cropX:32,cropY:0},{cropX:0,cropY:0},{cropX:64,cropY:0}],
        },
        3
    );
    direction = 'north';

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
    }


    shoot = ()=> {
        const shootedBullet = new Bullet(
            {
            x: this.centerX   ,
            y: this.y,
            speedX: 0,
            speedY: this.direction === 'north' ? -10 : 10,
            reference: 'Fire_Bullet_Pixel_All_Reverse',
            cropX: 162, 
            cropY: 116,
            cropWidth: 30,
            cropHeight: 30,
            width: 40,
            height: 40
            },
            this.imageHandler,
            this.displayHandler 
        );
        shootedBullet.setCoords({x: this.centerX, y: this.y - 50});
        this.shootedBullets.push(shootedBullet);
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
}