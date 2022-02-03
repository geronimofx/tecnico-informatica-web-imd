class Computador {
    public constructor(
        private _processador: string,
        private _memoria: number,
    ) {}

    public get processador(): string { 
        return this._processador;
    }

    public set processador(value: string) {
        this._processador = value;
    }

    public get memoria(): number { 
        return this._memoria;
    }

    public set memoria(value: number) {
        this._memoria = value;
    }
}

class Laptop extends Computador {
    public bateria_watts: number = 0;
}

class Desktop extends Computador {
    public gabinete: string = "";
}

let computador1 = new Computador("I5", 4);
console.log(computador1);

let laptop1 = new Laptop("I7", 8);
console.log(laptop1);

let desktop1 = new Desktop("I9", 16);
console.log(desktop1);