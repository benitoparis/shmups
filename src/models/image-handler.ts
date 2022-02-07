export class ImageHandler {

    // imagesSet= [
    //     {type: 'sprites', reference: 'ships', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/ships.png', base64: false},
    //     {type: 'sprites', reference: 'shootemup-spritesheet', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/shootemup-spritesheet.png', base64: false},
    //     {type: 'sprites', reference: 'map1', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/background/shooter_map1.png', base64: false},
    //     {type: 'sprites', reference: 'explosion', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/explosion.png', base64: false},
    //     // {type: 'sprites', reference: 'background1', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: '', base64: true},
    //     {type: 'sprites', reference: 'vertical-shooter-map', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/background/Vertical_Shooter_Full.png', base64: false},
    //     {type: 'sprites', reference: 'hero', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/heros8.png', base64: false},
    //     {type: 'sprites', reference: 'Fire_Bullet_Pixel_All_Reverse', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/tilesets/Fire_Bullet_Pixel_All_Reverse.png', base64: false},
    //     {type: 'sprites', reference: 'character_ememy_set_3', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/character_ememy_set_3.png', base64: false},
    //     {type: 'illustration', reference: 'elemental-illustration', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/illustrations/elemental-illustration.jpeg', base64: false},
    //     {type: 'sprites', reference: 'spritesheet_items_48x48', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/tilesets/spritesheet_items_48x48.png', base64: false},
    // ];
    imagesAssets: HTMLImageElement[] = [];

    constructor(private imagesSet){}

    // Méthode qui renvoie l'objet image correspondant à une reference
    getImage(reference: string): HTMLImageElement {
        const index = this.imagesSet.findIndex(item => {
            return item.reference === reference;
        });
        return this.imagesAssets[index];
    }

    async loadImages(): Promise<HTMLImageElement[]> {
    const promiseArray = []; // create an array for promises
    
    for (let image of this.imagesSet) {

        promiseArray.push(new Promise(resolve => {

            const img = new Image();
            // if you don't need to do anything when the image loads,
            // then you can just write img.onload = resolve;        
            img.onload = function() {
                // do stuff with the image if necessary

                // resolve the promise, indicating that the image has been loaded
                resolve(img);
            };
     
            img.src = image.filePath;
            this.imagesAssets.push(img);

        }));
    }

    await Promise.all(promiseArray); // wait for all the images to be loaded
    console.log("all images loaded");

    console.log('this.imagesAssets', this.imagesAssets);
    return this.imagesAssets;
    }

}