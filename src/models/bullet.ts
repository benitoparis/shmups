import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";
import { Sprite } from "./sprite";

export class Bullet extends Sprite {

    constructor(
        attributes: any,
        imageHandler: ImageHandler,
        displayHandler: DisplayHandler
    ){
        super(
            attributes,
            imageHandler,
            displayHandler
        );
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        this.setCenter();
    }
    
}