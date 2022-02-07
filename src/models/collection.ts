export class Collection<T> {
    models: T[];
    //private deserialize: (json: K) => T;

    constructor(models: T[]
    ){
        this.models = models;
    }

    // fill(attributesList: K[]){
    //     attributesList.forEach((attributes: K) => {
    //         this.models.push(this.deserialize(attributes));
    //     });
    // }

    add(newModel: T): void {
        this.models.push(newModel);
    }

    getByIndex(index: number): T {
        return this.models[index];
    }

    delete(index: number): void {
        this.models.slice(index, 1);
    }

    getRandomItem(): T {
        return this.models[Math.floor(Math.random()*this.models.length-1)];
    }

    get(name: string): T {
        return this.models.find(item => item[name] === name);
    }
}