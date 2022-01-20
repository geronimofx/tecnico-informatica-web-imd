class MesaDeJantar{

    material: string;
    lugares: number;
    preco: number;

    constructor(material:string, lugares?:number, preco?:number) {
        this.material = material;
        this.lugares = lugares;
        this.preco = preco;

        if(lugares == undefined) {
            this.lugares = 4;
        } else {
            this.lugares = lugares;
        }

        if(preco == undefined) {
            this.preco = 0;
        } else {
            this.preco = preco;
        }
    }

    detalhar(): void {
        console.log(this.material, this.lugares, this.preco);
    }

}

let mesa1 = new MesaDeJantar("Metal", 8, 100);
mesa1.detalhar();

let mesa2 = new MesaDeJantar("Madeira", 6);
mesa2.detalhar();

let mesa3 = new MesaDeJantar("Vidro");
mesa3.detalhar();