function calcularArea(propriedade, formula) {
    return formula(propriedade);
}

// Área do quadrado
var areaDoQuadrado = (x) => {
    return x*x;
}

var resultado = calcularArea(5, areaDoQuadrado);
console.log(resultado);

// Área do circulo
var areaDoCirculo = (r) => {
    return Math.PI * (r**2);
}

var resultado = calcularArea(2, areaDoCirculo);
console.log(resultado);