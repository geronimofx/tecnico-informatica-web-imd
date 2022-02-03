const excluirPropriedades = (objeto, propriedades) => {
    
    var x = propriedades;
    
    for(i = 0; i < x.length; i++) {
        delete  objeto[x[i]];
    }

    return objeto;
}

var exemplo1 = { a: 1, b: 2, c: true};
console.log(excluirPropriedades(exemplo1, ['b'])); // { a: 1, c: true }

var exemplo2 = { a: 1, b: 2, c: true};
console.log(excluirPropriedades(exemplo2, ['b', 'a'])); // { c: true } 