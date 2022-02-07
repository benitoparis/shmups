import { CropCycles } from "../interfaces/cropCycles-interface";

export class SpriteImageCroper {

    step = 0;
    currentLoopIndex = 0;
    
    constructor(
        private cycles: CropCycles,
        private indexPerCycle: number
    ){}

    getCropCoordinate(direction: string): {cropX:number,cropY:number} {

        this.setCurrentLoopIndex();

        if (direction === 'north') return this.cycles.upCycleLoop[this.currentLoopIndex];
            
        if (direction === 'south') return this.cycles.downCycleLoop[this.currentLoopIndex];
    }

    // Méthode qui renseigne l'index de la séquence de marche
    setCurrentLoopIndex(): void {

        // On détermine quel sprite afficher
        if (this.step < 20){ // on décide d'incrémenter l'index toutes les 2 steps
            this.step++;
        } else {
            this.step = 0
             // Si l'index est supérieur au nombre de position possible on le repositionne à zero
             if (this.currentLoopIndex === this.indexPerCycle) {
                this.currentLoopIndex = 0;
            } else {
                this.currentLoopIndex++;
            }
        }
    }

}