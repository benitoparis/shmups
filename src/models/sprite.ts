import { DisplayHandler } from './display-handler';
import { ImageHandler } from './image-handler';

export class Sprite {
  img: HTMLImageElement;
  reference: string;
  x: number;
  y: number;
  width: number = 960;
  height: number = 720;
  centerX: number;
  centerY: number;
  speedX: number;
  speedY: number;
  cropX = 0;
  cropY = 0;
  cropWidth = 960;
  cropHeight = 720;
  life = 5;
  angle = 0;

  constructor(
    attributes: any,
    public imageHandler: ImageHandler,
    public displayHandler: DisplayHandler
  ) {
    this.reference = attributes.reference;
    this.img = imageHandler.getImage(this.reference);

    this.setSpeed(attributes);
    this.setCropCoords(attributes);
    this.setDimensions(attributes);
  }

  setCenter(): void {
    this.centerX = this.x + this.width / 2;
    this.centerY = this.y + this.height / 2;
  }

  setCoords(attributes: any): void {
    this.x = attributes.x;
    this.y = attributes.y;

    this.setCenter();
  }

  setSpeed(attributes: any): void {
    this.speedX = attributes.speedX;
    this.speedY = attributes.speedY;
  }

  setCropCoords(attributes: any): void {
    this.cropX = attributes.cropX;
    this.cropY = attributes.cropY;
    this.cropWidth = attributes.cropWidth;
    this.cropHeight = attributes.cropHeight;
  }

  setDimensions(attributes: any): void {
    this.width = attributes.width;
    this.height = attributes.height;
  }

  draw(): void {
    this.displayHandler.draw(this);
  }

  damage = () => {
    if (this.life === 0) return;
    this.life--;
  };
}
