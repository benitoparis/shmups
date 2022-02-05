
export class GameItemData {

    data = [
        {
            id: 1,
            name: 'diamant-marron',
            reference: 'spritesheet_items_48x48',
            cropX: 240,
            cropY: 384,
            width: 32,
            height: 32,
            cropWidth: 48,
            cropHeight: 48,
            collisionTrigger: ()=> {}
        },
        {
            id: 2,
            name: 'diamant-noir',
            reference: 'spritesheet_items_48x48',
            cropX: 288,
            cropY: 384,
            width: 32,
            height: 32,
            cropWidth: 48,
            cropHeight: 48,
            collisionTrigger: ()=> {}
        },
        {
            id: 3,
            name: 'diamant-mauve',
            reference: 'spritesheet_items_48x48',
            cropX: 336,
            cropY: 384,
            width: 32,
            height: 32,
            cropWidth: 48,
            cropHeight: 48,
            collisionTrigger: ()=> {}
        }

    ]

    constructor(){}


    getRandomtem() {
        return this.data[Math.floor(Math.random()*this.data.length-1)];
    }

    get(name: string){
        return this.data.find(item=> item.name === name);
    }
} 