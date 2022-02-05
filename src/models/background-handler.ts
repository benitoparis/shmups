import { DisplayHandler } from "./display-handler";
import { ImageHandler } from "./image-handler";

export class BackgroundHandler {

    backgroundImageSet = [];
    img: HTMLImageElement;
    x = 0;
    y = 0;
    name: string;
    width = 960; // 
    height = 720; // 
    cropX = 0; // Coordonnées X du morceau d'image à cropper sur l'image
    cropY = 6000; // Coordonnées Y du morceau d'image à cropper sur l'image
    cropWidth = 960;
    cropHeight = 720;

    // 48  fois 20
    mapSheetArray: number [] = [];
    

    constructor(
        private speed: number,
        private reference: string,
        private imageHandler: ImageHandler,
        private displayHandler: DisplayHandler,
        private alpha: number
    ){

        this.setImage();

        this.buildRandomMapSheetArray();
    }

    update(){
        if(this.cropY < 50) {
            this.speed = 0;
            return;
        }
        
        this.cropY -= this.speed;
    }

    setImage(): void {
        this.img = this.imageHandler.getImage(this.reference);
    }


    draw(){
        this.displayHandler.draw(this);
    }

    buildRandomMapSheetArray() {
        
        for (let i = 0; i < 300; i++){

            this.mapSheetArray.push(Math.floor(Math.random() * 4));

        }
    }



}