import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";
import { Player } from "./player";
import { Sprite } from "./sprite";

export class Particule extends Sprite {

    frame = 0;

    constructor(
        attributes: any,
        imageHandler: ImageHandler,
        displayHandler: DisplayHandler,
        private player: Player
    ){

        super(
            attributes,
            imageHandler,
            displayHandler
        );
    }

    draw(): void {
        if(this.frame === 4){
            this.displayHandler.drawCircle(this);
            this.frame = 0;
        } else {
            this.frame++;
        }
        
    }

    update(): void {

        if(this.angle < 360){
            this.angle++;
        } else {
            this.angle = 0;
        }
      

        //if (this.angle%2 == 0){
            this.x = 300 + Math.cos(this.angle) * 80; 
            this.y = 300 + Math.sin(this.angle) * 80; 
        //}

    }



}