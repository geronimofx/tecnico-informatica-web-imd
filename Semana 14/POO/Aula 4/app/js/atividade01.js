var Estudante = /** @class */ (function () {
    function Estudante(id, nome) {
        this.id = id;
        this.nome = nome;
        if (this._creditos == undefined) {
            this._creditos = 1;
        }
    }
    Object.defineProperty(Estudante.prototype, "creditos", {
        get: function () {
            return this._creditos;
        },
        set: function (valor) {
            if (valor < 0) {
                this._creditos = 1;
            }
            else {
                this._creditos = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    Estudante.prototype.detalhar = function () {
        console.log(this.id, this.nome, this._creditos);
    };
    return Estudante;
}());
var estudante1 = new Estudante(1, "Geronimo");
var estudante2 = new Estudante(2, "Eloyze");
estudante1.creditos = 6;
estudante1.detalhar();
estudante2.creditos = 7;
estudante2.detalhar();
