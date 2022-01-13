let args = process.argv.slice(2);

let a = args[0];let b = args[1];let c = args[2];

let delta = (b*b) - (4*a*c);

if(delta < 0 || a == 0){
    console.log("Impossível calcular!!!");
} else {
    var x1 = (-b + Math.sqrt(delta)) / (2*a);
    console.log("X1 = " + x1);

    var x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log("X2 = " + x2);
}
