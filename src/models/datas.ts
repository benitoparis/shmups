
export const itemsDatas = [
    {
        id: 1,
        name: 'diamant-marron',
        reference: 'spritesheet_items_48x48',
        cropX: 0,
        cropY: 384,
        width: 32,
        height: 32,
        cropWidth: 48,
        cropHeight: 48,
        playerBehavior: {
            shootType: 'first',
            bulletType: 'a'
        }
    },

    {
        id: 2,
        name: 'diamant-marron',
        reference: 'spritesheet_items_48x48',
        cropX: 48,
        cropY: 384,
        width: 32,
        height: 32,
        cropWidth: 48,
        cropHeight: 48,
        playerBehavior: {
            shootType: 'second',
            bulletType: 'b'
        }
    },
    {
        id: 3,
        name: 'diamant-noir',
        reference: 'spritesheet_items_48x48',
        cropX: 96,
        cropY: 384,
        width: 32,
        height: 32,
        cropWidth: 48,
        cropHeight: 48,
        playerBehavior: {
            shootType: 'third',
            bulletType: 'c'
        }
    },
    {
        id: 4,
        name: 'diamant-noir',
        reference: 'spritesheet_items_48x48',
        cropX: 144,
        cropY: 384,
        width: 32,
        height: 32,
        cropWidth: 48,
        cropHeight: 48,
        playerBehavior: {
            shootType: 'forth',
            bulletType: 'a'
        }
    }
];

export const enemiesDatas = [

    { 
        characterName: 'chauve-souris',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles:         {
            leftCycleLoop: [
                {cropX:0,cropY:32},
                {cropX:32,cropY:32},
                {cropX:64,cropY:32}
            ],
            rightCycleLoop: [
                {cropX:0,cropY:64},
                {cropX:32,cropY:64},
                {cropX:64,cropY:64}
            ],
            upCycleLoop: [
                {cropX:0,cropY:96},
                {cropX:32,cropY:96},
                {cropX:0,cropY:96}
            ],
            downCycleLoop: [
                {cropX:0,cropY:0},
                {cropX:32,cropY:0},
                {cropX:64,cropY:0}
            ],
        },
    },
    { 
        characterName: 'globule-rouge',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles:         {
            leftCycleLoop: [
                {cropX:92,cropY:32},
                {cropX:128,cropY:32},
                {cropX:160,cropY:32}
            ],
            rightCycleLoop: [
                {cropX:92,cropY:64},
                {cropX:128,cropY:64},
                {cropX:160,cropY:64}
            ],
            upCycleLoop: [
                {cropX:92,cropY:96},
                {cropX:128,cropY:96},
                {cropX:160,cropY:96}
            ],
            downCycleLoop: [
                {cropX:92,cropY:0},
                {cropX:128,cropY:0},
                {cropX:160,cropY:0}
            ],
        },
    },
    { 
        characterName: 'abeille-verte',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles:         {
            leftCycleLoop: [
                {cropX:192,cropY:32},
                {cropX:224,cropY:32},
                {cropX:256,cropY:32}
            ],
             rightCycleLoop: [
                {cropX:192,cropY:64},
                {cropX:224,cropY:64},
                {cropX:256,cropY:64}
            ],
            upCycleLoop: [
                {cropX:192,cropY:96},
                {cropX:224,cropY:96},
                {cropX:256,cropY:96}
            ],
            downCycleLoop: [
                {cropX:192,cropY:0},
                {cropX:224,cropY:0},
                {cropX:256,cropY:0}
            ],
        },
    },
    { 
        characterName: 'champignon-bleu',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {cropX:288,cropY:32},
                {cropX:320,cropY:32},
                {cropX:352,cropY:32}
            ],
             rightCycleLoop: [
                {cropX:288,cropY:64},
                {cropX:320,cropY:64},
                {cropX:352,cropY:64}
            ],
            upCycleLoop: [
                {cropX:288,cropY:96},
                {cropX:320,cropY:96},
                {cropX:352,cropY:96}
            ],
            downCycleLoop: [
                {cropX:288,cropY:0},
                {cropX:320,cropY:0},
                {cropX:352,cropY:0}
            ],
        },
    },
    { 
        characterName: 'rat',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles:         {
            leftCycleLoop: [
                {cropX:0,cropY:160},
                {cropX:32,cropY:160},
                {cropX:64,cropY:160}
            ],
             rightCycleLoop: [
                {cropX:0,cropY:192},
                {cropX:32,cropY:192},
                {cropX:64,cropY:192}
            ],
            upCycleLoop: [
                {cropX:0,cropY:224},
                {cropX:32,cropY:224},
                {cropX:64,cropY:224}
            ],
            downCycleLoop: [
                {cropX:0,cropY:128},
                {cropX:32,cropY:128},
                {cropX:64,cropY:128}
            ],
        },
    },
    { 
        characterName: 'globule-rouge',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles:         {
            leftCycleLoop: [
                {cropX:92,cropY:160},
                {cropX:128,cropY:160},
                {cropX:160,cropY:160}
            ],
             rightCycleLoop: [
                {cropX:92,cropY:192},
                {cropX:128,cropY:192},
                {cropX:160,cropY:192}
            ],
            upCycleLoop: [
                {cropX:92,cropY:224},
                {cropX:128,cropY:224},
                {cropX:160,cropY:224}
            ],
            downCycleLoop: [
                {cropX:92,cropY:128},
                {cropX:128,cropY:128},
                {cropX:160,cropY:128}
            ],
        },
    },
    { 
        characterName: 'abeille-verte',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles:         {
            leftCycleLoop: [
                {cropX:192,cropY:160},
                {cropX:224,cropY:160},
                {cropX:256,cropY:160}
            ],
             rightCycleLoop: [
                {cropX:192,cropY:192},
                {cropX:224,cropY:192},
                {cropX:256,cropY:192}
            ],
            upCycleLoop: [
                {cropX:192,cropY:224},
                {cropX:224,cropY:224},
                {cropX:256,cropY:224}
            ],
            downCycleLoop: [
                {cropX:192,cropY:128},
                {cropX:224,cropY:128},
                {cropX:256,cropY:128}
            ],
        },
    },
    { 
        characterName: 'champignon-bleu',
        type: 'enemy',
        reference: 'character_ememy_set_3',
        cropCycles: {
            leftCycleLoop: [
                {cropX:288,cropY:160},
                {cropX:320,cropY:160},
                {cropX:352,cropY:160}
            ],
             rightCycleLoop: [
                {cropX:288,cropY:192},
                {cropX:320,cropY:192},
                {cropX:352,cropY:192}
            ],
            upCycleLoop: [
                {cropX:288,cropY:224},
                {cropX:320,cropY:224},
                {cropX:352,cropY:224}
            ],
            downCycleLoop: [
                {cropX:288,cropY:128},
                {cropX:320,cropY:128},
                {cropX:352,cropY:128}
            ],
        },
    },
];

export const imagesDatas = [
    {type: 'sprites', reference: 'ships', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/ships.png'},
    {type: 'sprites', reference: 'shootemup-spritesheet', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/shootemup-spritesheet.png'},
    {type: 'sprites', reference: 'map1', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/background/shooter_map1.png'},
    {type: 'sprites', reference: 'explosion', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/explosion.png'},
    // {type: 'sprites', reference: 'background1', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: '', base64: true},
    {type: 'sprites', reference: 'vertical-shooter-map', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/background/Vertical_Shooter_Full.png'},
    {type: 'sprites', reference: 'hero', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/heros8.png'},
    {type: 'sprites', reference: 'Fire_Bullet_Pixel_All_Reverse', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/tilesets/Fire_Bullet_Pixel_All_Reverse.png'},
    {type: 'sprites', reference: 'character_ememy_set_3', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/sprites/character_ememy_set_3.png'},
    {type: 'illustration', reference: 'elemental-illustration', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/illustrations/elemental-illustration.jpeg'},
    {type: 'sprites', reference: 'spritesheet_items_48x48', belongsToMapsheetId: 1, belongsToWorldId: 1, filePath: 'http://benoit-dev-demo.com/img/tilesets/spritesheet_items_48x48.png'},
];

export const heroesDatas = [
    { 
        characterName: 'elemental-master',
        type: 'main-character',
        reference: 'hero',
        cropCycles: {
            rightCycleLoop: [{cropX:0,cropY:64}, {cropX:32,cropY:64},{cropX:0,cropY:64},{cropX:64,cropY:64}],
            leftCycleLoop: [{cropX:0,cropY:32}, {cropX:32,cropY:32},{cropX:0,cropY:32},{cropX:64,cropY:32}],
            upCycleLoop: [{cropX:0,cropY:96}, {cropX:32,cropY:96},{cropX:0,cropY:96},{cropX:64,cropY:96}],
            downCycleLoop: [{cropX:0,cropY:0}, {cropX:32,cropY:0},{cropX:0,cropY:0},{cropX:64,cropY:0}],
        }
    },
];
