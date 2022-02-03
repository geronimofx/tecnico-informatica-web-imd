const transformarObjEmArray = (objeto) => {

    const transformar = Object.entries(objeto);
    
    return transformar;

};

var exemplo = { a: 1, b: 2, c: true };
console.log(transformarObjEmArray(exemplo)); // [['a', 1], ['b',2], ['c',3]]
