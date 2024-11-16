// Classe qui enregistre les évènements du clavier
export class InputController {
  left = false;
  right = false;
  up = false;
  down = false;
  space = false;
  enter = false;

  constructor() {}

  setCurrentInput(event: any): void {
    this.resetInputs();

    switch (event.code) {
      case 'ArrowRight':
        this.right = true;
        break;

      case 'ArrowLeft':
        this.left = true;
        break;

      case 'ArrowUp':
        this.up = true;
        break;

      case 'ArrowDown':
        this.down = true;
        break;

      case 'Space':
        this.space = true;
        break;

      case 'Enter':
        this.enter = true;
        break;

      default:
        break;
    }
  }

  // On reset les inputs
  resetInputs(): void {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    this.space = false;
    this.enter = false;
  }
}
