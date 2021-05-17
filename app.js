/* function add(n1:number, n2:number){
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result: '+ num);
}

printResult(add(5,6));

let combineValues: (a: number, b:number) => number;

combineValues = add;

console.log(combineValues(15,5)); */
function add(n1, n2, n3) {
    return n1 + n2 + n3;
}
function imprimirResultado(num) {
    console.log('El resultado es: ' + num);
}
imprimirResultado(add(1, 2, 3));
var combineValues;
combineValues = add;
console.log(combineValues(3, 4, 5));
