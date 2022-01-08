import { Entity } from "../interfaces/entity-interface";

export class CollisionHandler {

    constructor(){}

        checkCollision = (a: Entity, b: Entity): boolean => {
            if (a.x < b.centerX && b.centerX < a.x + a.width && a.y < b.centerY && b.centerY < a.y + a.height) {
                return true;
            } else {
                return false;
            }
        };
}