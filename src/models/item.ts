import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";
import { Sprite } from "./sprite";

export class Item extends Sprite {

    type: string;
    playerBehavior: any = {};

    constructor(
        attributes: any,
        imageHandler: ImageHandler,
        displayHandler: DisplayHandler
    ){

        
        super (
            attributes,
            imageHandler,
            displayHandler
        );

        this.playerBehavior = attributes.playerBehavior;
    }

    update() {
        this.y += this.speedY;
    }

    draw(): void {
        this.displayHandler.draw(this);
    };
    

}