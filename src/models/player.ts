import { Bullet } from "./bullet";
import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";
import { Sprite } from "./sprite";

export class Player extends Sprite {

    shootedBullets = [];
    life = 10;
    score = 0;

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
            x: this.x    ,
            y: this.y,
            speedX: 0,
            speedY: -10,
            reference: 'shootemup-spritesheet',
            cropX: 250, 
            cropY: 1500,
            cropWidth: 250,
            cropHeight: 250,
            width: 200,
            height: 200
            },
            this.imageHandler,
            this.displayHandler
        );
        shootedBullet.setCoords({x: this.x, y: this.y - 50});
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
}