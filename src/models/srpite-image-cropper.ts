export class SpriteImageCroper {

    step = 0;
    currentLoopIndex = 0;
    cycle: {
        rightCycleLoop: {cropX:number,cropY:number}[]
        leftCycleLoop: {cropX:number,cropY:number}[]
        upCycleLoop: {cropX:number,cropY:number}[]
        downCycleLoop: {cropX:number,cropY:number}[]
    }
    // rightCycleLoop = [{cropX:0,cropY:64}, {cropX:32,cropY:64},{cropX:0,cropY:64},{cropX:64,cropY:64}];
    // leftCycleLoop = [{cropX:0,cropY:32}, {cropX:32,cropY:32},{cropX:0,cropY:32},{cropX:64,cropY:32}];
    // upCycleLoop = [{cropX:0,cropY:96}, {cropX:32,cropY:96},{cropX:0,cropY:96},{cropX:64,cropY:96}];
    // downCycleLoop = [{cropX:0,cropY:0}, {cropX:32,cropY:0},{cropX:0,cropY:0},{cropX:64,cropY:0}];


    constructor(
        cycle,
        private indexPerCycle: number
    ){
        this.cycle = cycle;
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