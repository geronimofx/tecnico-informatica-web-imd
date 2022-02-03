function potencia() {
    var numero = parseFloat(document.getElementById("potencia-input").value);
    var valorPotencia = Math.pow(numero, 3);
    console.log(valorPotencia);

    var solucao = document.getElementById('solucao');
    solucao.innerHTML = valorPotencia;
}

function metade() {
    var numero = parseFloat(document.getElementById('metade-input').value);
    var valorMetade = numero/2;
    console.log(valorMetade);

    var solucao = document.getElementById('solucao');
    solucao.innerHTML = valorMetade; 
}

function area() {
    var numero = parseFloat(document.getElementById('area-input').value);
    var valorArea = (Math.PI*(numero*numero)).toFixed(3);
    console.log(valorArea);

    var solucao = document.getElementById('solucao');
    solucao.innerHTML = valorArea; 
}