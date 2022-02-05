interface Controlavel {

    mover(): void;
}

class Jogador implements Controlavel {

    mover(): void {
        console.log("Jogador se movendo");
    }
}

class Volante implements Controlavel {

    mover(): void {
        console.log("Volante girando");
    }
}

let jogador = new Jogador();
jogador.mover();

let volante = new Volante();
volante.mover();