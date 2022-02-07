

export interface ItemAttributes {
        id: number,
        name: string,
        reference: string,
        cropX: number,
        cropY: number,
        width: number,
        height: number,
        cropWidth: number,
        cropHeight: number,
        update: ()=> {}
        draw: ()=> {}
        collisionTrigger: ()=> {}
}