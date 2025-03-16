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