class Personagem {

    atacar(): void {
        console.log("Não recebi dano")
    }
}

class Arqueiro extends Personagem {

    atacar(): void {
        console.log("Recebi 20 de dano");
    }
}

class Guerreiro extends Personagem {

    atacar(): void {
        console.log("Recebi 10 de dano");
    }
}

function atacarPersonagem(fulano: Personagem) {

    fulano.atacar();
}

let arqueiro = new Arqueiro();
atacarPersonagem(arqueiro);

let guerreiro = new Guerreiro();
atacarPersonagem(guerreiro);