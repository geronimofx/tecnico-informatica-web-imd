var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personagem = /** @class */ (function () {
    function Personagem() {
    }
    Personagem.prototype.atacar = function () {
        console.log("Não recebi dano");
    };
    return Personagem;
}());
var Arqueiro = /** @class */ (function (_super) {
    __extends(Arqueiro, _super);
    function Arqueiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arqueiro.prototype.atacar = function () {
        console.log("Recebi 20 de dano");
    };
    return Arqueiro;
}(Personagem));
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guerreiro.prototype.atacar = function () {
        console.log("Recebi 10 de dano");
    };
    return Guerreiro;
}(Personagem));
function atacarPersonagem(fulano) {
    fulano.atacar();
}
var arqueiro = new Arqueiro();
atacarPersonagem(arqueiro);
var guerreiro = new Guerreiro();
atacarPersonagem(guerreiro);
