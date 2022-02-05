import { Player } from "./player";

export class DisplayHandler {

    variabletest: '';

    constructor(
        private ctx: CanvasRenderingContext2D
    ){}

    drawRect(entity): void {
      this.ctx.rect(entity.x, entity.y, entity.width, entity.height);
      this.ctx.fillStyle = "black";
      this.ctx.fill();
    }

    drawCircle(entity): void {
      this.ctx.fillStyle = '#FFF';
      this.ctx.beginPath();
      this.ctx.arc(entity.x, entity.y, entity.width, 0, 2 * Math.PI, true);
      this.ctx.fill();
    }

    clearRect() {
      this.ctx.clearRect(0,0, 960, 720);
    }

    draw(
      entity: any,
    ) {
        
        this.ctx.drawImage(
          entity.img, // The image to be cropped
          entity.cropX, //The x-coordinate of the source image
          entity.cropY, // The y-coordinate of the source image.
          entity.cropWidth, // The width of the source image
          entity.cropHeight, // The height of the source image.
          entity.x, // The x-coordinate of the destination image.
          entity.y, // The y-coordinate of the destination image.
          entity.width, // The width of the destination image.
          entity.height // The height of the destination image
        );
        
        this.ctx.filter = `saturate(50)%`;
    }

      // Affiche des informations sur le héros
      drawDatas(entity: any) {
        const topMargin = 5;

        this.setFontSize(20);

        const message = `Life : ${entity.life}  score : ${entity.score}`;
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillText(message, entity.x, entity.y - topMargin);


        /* propriétés possibles pour le contexte */
        // direction: "ltr"
        // fillStyle: "#ffffff"
        // filter: "none"
        // font: "40px small-caption"
        // globalAlpha: 1
        // globalCompositeOperation: "source-over"
        // imageSmoothingEnabled: true
        // imageSmoothingQuality: "low"
        // lineCap: "butt"
        // lineDashOffset: 0
        // lineJoin: "miter"
        // lineWidth: 1
        // miterLimit: 10
        // shadowBlur: 0
        // shadowColor: "rgba(0, 0, 0, 0)"
        // shadowOffsetX: 0
        // shadowOffsetY: 0
        // strokeStyle: "#000000"
        // textAlign: "start"
        // textBaseline: "alphabetic"
      };


      drawHomeScreen(h1: string, h2: string, h3: string): void {

        // Background
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, 960, 720);

        this.drawText(h1, 50, 150, '#FFFFFF', 110);
        this.drawText(h2, 500, 500, '#FFFFFF', 50);
        this.drawText(h3, 400, 700, '#FFFFFF', 30);

      }


      setFontSize(fontsize: number): void {
        this.ctx.globalAlpha = 2
        //this.ctx.filter = 'contrast(1)';
        this.ctx.font = `${fontsize}px small-caption`;
      }

      // Ecrit un texte sur le canvas
      drawText(txt: string, x: number, y: number, fontColor: string, textSize: number): void {

        this.setFontSize(textSize);
        this.ctx.fillStyle = fontColor;
        this.ctx.fillText(txt, x, y);
      }

      drawFloatingMessage(entity:any): void{
        this.drawDatas(entity);
      }
}