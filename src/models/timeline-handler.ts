import { BackgroundHandler } from './background-handler';

export class TimelineHandler {
  timeline = [];

  constructor(private background: BackgroundHandler) {}

  init(background: BackgroundHandler): void {
    const levelPhases: number = 8;
    const phaseSize: number = background.height / levelPhases;

    for (let i = 0; i < levelPhases; i++) {
      this.timeline.push([i * phaseSize, () => {}]);
    }
  }

  action(): void {
    //
  }
}
