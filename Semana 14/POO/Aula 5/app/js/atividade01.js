var Cidade = /** @class */ (function () {
    function Cidade(_nome) {
        this._nome = _nome;
    }
    Object.defineProperty(Cidade.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    return Cidade;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _cidade) {
        this._nome = _nome;
        this._cidade = _cidade;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (valor) {
            this._nome = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "cidade", {
        get: function () {
            return this._cidade;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var Animal = /** @class */ (function () {
    function Animal(_nome, _dono) {
        this._nome = _nome;
        this._dono = _dono;
    }
    Object.defineProperty(Animal.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (valor) {
            this._nome = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "dono", {
        get: function () {
            return this._dono;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var natal = new Cidade("Natal");
console.log(natal);
var joao = new Pessoa("João", natal);
console.log(joao);
var toto = new Animal("Totó", joao);
console.log(toto);
