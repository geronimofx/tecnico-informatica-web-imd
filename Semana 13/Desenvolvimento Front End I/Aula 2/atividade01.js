// usado para receber os argumentos na chamada do arquivo no terminal e assim colocar os valores de entrada.
let args = process.argv.slice(2);

let idade = args[0]; 
let qtdDeLanches = args[1]; 
let precoDoLanche = args[2]; 

var suprimentos = calcularSuprimento(idade, qtdDeLanches, precoDoLanche);

function calcularSuprimento(idade, qtdDeLanches, precoDoLanche){

    var custoSuprimentos = ((85 - idade) * 365) * qtdDeLanches * precoDoLanche;
    console.log("Você precisará de R$ " + custoSuprimentos.toFixed(2) +
        " para ter um suprimento de lanche até 85 anos.");
}

// console.log(process.argv)