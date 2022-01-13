var diasDeNascimento, anos, meses, dias;

diasDeNascimento = [400, 800, 30];
for(var i = 0; i < 3; i++){

    anos = Math.trunc(diasDeNascimento[i]/365);
    meses = Math.trunc(((diasDeNascimento[i] - (365*anos))/30));
    dias = Math.trunc((diasDeNascimento[i] - (365*anos) - (meses*30)));

    console.log("Testando para " + diasDeNascimento[i] + " dias.\n")
    console.log(anos + " ano(s)");
    console.log(meses + " mes(es)");
    console.log(dias + " dias(s)\n");
    
}


