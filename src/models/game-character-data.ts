import { CropCycles } from "../interfaces/cropCycles-interface";

export class GameCharacterData {
    
    data = [
        { 
            characterName: 'elemental-master',
            type: 'main-character',
            imageReference: 'hero',
            cropCryle: {
                rightCycleLoop: [{cropX:0,cropY:64}, {cropX:32,cropY:64},{cropX:0,cropY:64},{cropX:64,cropY:64}],
                leftCycleLoop: [{cropX:0,cropY:32}, {cropX:32,cropY:32},{cropX:0,cropY:32},{cropX:64,cropY:32}],
                upCycleLoop: [{cropX:0,cropY:96}, {cropX:32,cropY:96},{cropX:0,cropY:96},{cropX:64,cropY:96}],
                downCycleLoop: [{cropX:0,cropY:0}, {cropX:32,cropY:0},{cropX:0,cropY:0},{cropX:64,cropY:0}],
            }
        },
        { 
            characterName: 'chauve-souris',
            type: 'enemy',
            imageReference: 'character_ememy_set_3',
            cropCryle:         {
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
            imageReference: 'character_ememy_set_3',
            cropCryle:         {
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
            imageReference: 'character_ememy_set_3',
            cropCryle:         {
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
            imageReference: 'character_ememy_set_3',
            cropCryle: {
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
            imageReference: 'character_ememy_set_3',
            cropCryle:         {
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
            imageReference: 'character_ememy_set_3',
            cropCryle:         {
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
            imageReference: 'character_ememy_set_3',
            cropCryle:         {
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
            imageReference: 'character_ememy_set_3',
            cropCryle: {
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
    
    constructor(
    ){}

    getCharacterData(characterName: string) {
        return this.data.find(character => {
            return character.characterName === characterName;
        });
    }
}