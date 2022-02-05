class Animal {

    protected _grupo: string  = "indefinido";

    public get grupo(): string {
        return this._grupo
    }
        
}

class Cachorro extends Animal {

    constructor() {
        super();
        this._grupo = "mamífero"
    }
}

let doguinho = new Cachorro();
console.log(doguinho.grupo);