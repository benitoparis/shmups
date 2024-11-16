import { DisplayHandler } from './display-handler';
import { ImageHandler } from './image-handler';
import { Player } from './player';
import { Sprite } from './sprite';

export class Around extends Sprite {
  imagesCrops = [
    { cropX: 0, cropY: 0 },
    { cropX: 200, cropY: 0 },
    { cropX: 400, cropY: 0 },
    { cropX: 600, cropY: 0 },
    { cropX: 800, cropY: 0 },
    { cropX: 0, cropY: 200 },
    { cropX: 200, cropY: 200 },
    { cropX: 400, cropY: 200 },
    { cropX: 600, cropY: 200 },
    { cropX: 800, cropY: 200 },
    { cropX: 0, cropY: 400 },
    { cropX: 200, cropY: 400 },
    { cropX: 400, cropY: 400 },
    { cropX: 600, cropY: 400 },
    { cropX: 800, cropY: 400 },
    { cropX: 0, cropY: 600 },
    { cropX: 200, cropY: 600 },
    { cropX: 400, cropY: 600 },
    { cropX: 600, cropY: 600 },
    { cropX: 800, cropY: 600 },
  ];
  cropIndex = 0;

  constructor(
    attributes: any,
    imageHandler: ImageHandler,
    displayHandler: DisplayHandler,
    private player: Player
  ) {
    super(attributes, imageHandler, displayHandler);
  }

  update() {
    this.x = this.player.x;
    this.y = this.player.y;

    if (this.imagesCrops[this.cropIndex]) {
      this.cropX = this.imagesCrops[this.cropIndex].cropX;
      this.cropY = this.imagesCrops[this.cropIndex].cropY;
      this.cropIndex++;

      return;
    }

    this.cropIndex = 0;
    this.cropX = this.imagesCrops[this.cropIndex].cropX;
    this.cropY = this.imagesCrops[this.cropIndex].cropY;
  }

  draw(): void {
    this.displayHandler.draw(this);
  }
}
