class Estudante {
    
    private _creditos: number;

    constructor(
        public readonly id: number,
        public nome: string,
    ) {
        if (this._creditos == undefined) {
            this._creditos = 1;
        }
    }

    public get creditos(): number {
        return this._creditos;
    }

    public set creditos(valor: number) {
        if(valor < 0) {
            this._creditos = 1;
        } else {
            this._creditos = valor;
        }
    }

    public detalhar(): void {
        console.log(this.id, this.nome, this._creditos);
    }

}

var estudante1 = new Estudante(1, "Geronimo");
var estudante2 = new Estudante(2, "Eloyze");

estudante1.creditos = 6;
estudante1.detalhar();

estudante2.creditos = 7;
estudante2.detalhar();