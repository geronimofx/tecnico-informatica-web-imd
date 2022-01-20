const excluir = (array, itensParaExcluir) => {
    for (let i = 0; i < itensParaExcluir.length; i++) {
        array = array.filter((item) => item != itensParaExcluir[i]);
    }

    return array;
}

var exemplo1 = [1, 2, 3, 1, 2];
console.log(excluir(exemplo1, [1, 2])); // [ 3 ]

var exemplo2 = ['a', 'b', 'a', 'd', 'e', 'a'];
console.log(excluir(exemplo2, ['a', 'd'])); // [ 'b', 'e' ]

var exemplo3 = [true, false, false, true, true, false, false];
console.log(excluir(exemplo3, [true])); // [ false, false, false, false ]