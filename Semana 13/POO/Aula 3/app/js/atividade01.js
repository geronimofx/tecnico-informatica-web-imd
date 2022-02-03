var MesaDeJantar = /** @class */ (function () {
    function MesaDeJantar(material, lugares, preco) {
        this.material = material;
        this.lugares = lugares;
        this.preco = preco;
        if (lugares == undefined) {
            this.lugares = 4;
        }
        else {
            this.lugares = lugares;
        }
        if (preco == undefined) {
            this.preco = 0;
        }
        else {
            this.preco = preco;
        }
    }
    MesaDeJantar.prototype.detalhar = function () {
        console.log(this.material, this.lugares, this.preco);
    };
    return MesaDeJantar;
}());
var mesa1 = new MesaDeJantar("Metal", 8, 100);
mesa1.detalhar();
var mesa2 = new MesaDeJantar("Madeira", 6);
mesa2.detalhar();
var mesa3 = new MesaDeJantar("Vidro");
mesa3.detalhar();
