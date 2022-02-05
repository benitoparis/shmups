import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";
import { Sprite } from "./sprite";

export class Item extends Sprite {

    type: string;

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
    }

    update() {
        this.y += this.speedY;
    }

    draw(): void {
        this.displayHandler.draw(this);
    };
    

}