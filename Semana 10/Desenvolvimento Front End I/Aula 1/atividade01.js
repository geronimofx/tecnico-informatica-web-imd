// usado para receber os argumentos na chamada do arquivo no terminal e assim colocar os valores de entrada.
let args = process.argv.slice(2);

let  diasDeNascimento = args[0];
let anos = args[1];
let meses = args[2];
let dias = args[3];

anos = Math.trunc(diasDeNascimento/365);
meses = Math.trunc(((diasDeNascimento - (365*anos))/30));
dias = Math.trunc((diasDeNascimento - (365*anos) - (meses*30)));

console.log("Testando para " + diasDeNascimento + " dias.\n")
console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dias(s)\n");
