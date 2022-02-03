class Cidade {

    public constructor(
        private readonly _nome: string,
    ) {}

    public get nome(): string {
        return this._nome;
    }

}

class Pessoa {
    
    public constructor(
        private _nome: string,
        private _cidade: Cidade,
    ) {}

    public get nome(): string {
        return this._nome;
    }

    public set nome(valor: string) {
        this._nome = valor;
    }

    public get cidade(): Cidade {
        return this._cidade;
    }
}

class Animal {

    public constructor(
        private _nome: string,
        private _dono: Pessoa,
    ) {}

    public get nome(): string {
        return this._nome;
    }

    public set nome(valor: string) {
        this._nome = valor;
    }

    public get dono(): Pessoa {
        return this._dono;
    }
}

const natal = new Cidade("Natal");
console.log(natal);

const joao = new Pessoa("João", natal);
console.log(joao);

const toto = new Animal("Totó", joao);
console.log(toto);