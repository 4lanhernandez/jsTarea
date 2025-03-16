// 2.1 Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of

let num = [3, 7, 2, 9, 5];
let suma = 1;

for (sumando of num) {
    suma += sumando;
}
console.log("La suma es:", suma);


// 2.2 Encuentra el número mayor en el array [12, 45, 6, 89, 23]

let numero = [12, 45, 6, 89, 23];
let mayor = numero[0];

for (let numm of numero) {
    if (numm > mayor) {
        mayor = numm;
    }
}
console.log("El número mayor es :", mayor);


// 2.3 Filtra los números menores a 10 del array [15, 3, 8, 12, 1] y crea un nuevo array

let firstArray = [15, 3, 8, 12, 1];
let filtrerNumbers = [];
for (let number of firstArray){
    if (number <= 10) {
        filtrerNumbers.push(number);

    }
}
console.log("Números menores a 10:", filtrerNumbers);
