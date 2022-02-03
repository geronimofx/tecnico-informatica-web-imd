const unico = (array) => {
    array = array.filter((primeiraAparicao, repeticao) => array.indexOf(primeiraAparicao) === repeticao);

    return array;
}

var exemplo1 = [1, 2, 3, 1, 2];
console.log(unico(exemplo1)); // [ 1, 2, 3 ]

var exemplo2 = ["a", "b", "a", "d", "e", "a"];
console.log(unico(exemplo2)); // [ 'a', 'b', 'd', 'e' ]

var exemplo3 = [true, false, false, true, true, false, false];
console.log(unico(exemplo3)); // [ true, false ]
