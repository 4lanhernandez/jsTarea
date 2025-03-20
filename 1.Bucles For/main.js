//1.1 recorrer los números del 1 al 10 usando For

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//1.2 Imprime los números pares entre 0 y 20 usando for y una condición if.

for (let i = 0; i <= 20; i++) {
    if ( i % 2 == 0)
        console.log(i);
};

//1.3 Crea un triángulo con asteriscos usando bucles anidados

let filas = 5;

for(let i = 1; i <= filas; i++){
    let espacio = "";

for (let h = 1; h <= i; h++) {
    espacio += "*";
}
    console.log(espacio);
}