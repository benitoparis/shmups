import { CropCycles } from "../interfaces/cropCycles-interface";
import { GameCharacterData } from "./game-character-data";

export class SpriteImageCroper extends GameCharacterData {

    step = 0;
    currentLoopIndex = 0;
    cycle: CropCycles

    constructor(
        characterName: string,
        private indexPerCycle: number
    ){
      super();

      this.cycle = this.getCharacterData(characterName).cropCryle;
    }

    getCropCoordinate(direction: string): {cropX:number,cropY:number} {

        this.setCurrentLoopIndex();

        // On détermine la positon x/y du crop du personnage
        // if (direction === 'west'){ 
        //     return this.leftCycleLoop[this.currentLoopIndex];
        // } else if (direction === 'east'){
        //     return this.rightCycleLoop[this.currentLoopIndex];

        if (direction === 'north'){
            return this.cycle.upCycleLoop[this.currentLoopIndex];
        } else if (direction === 'south'){
            return this.cycle.downCycleLoop[this.currentLoopIndex];
        } 
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