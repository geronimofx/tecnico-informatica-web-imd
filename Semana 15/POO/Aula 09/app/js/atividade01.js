var Jogador = /** @class */ (function () {
    function Jogador() {
    }
    Jogador.prototype.mover = function () {
        console.log("Jogador se movendo");
    };
    return Jogador;
}());
var Volante = /** @class */ (function () {
    function Volante() {
    }
    Volante.prototype.mover = function () {
        console.log("Volante girando");
    };
    return Volante;
}());
var jogador = new Jogador();
jogador.mover();
var volante = new Volante();
volante.mover();
