//Ejercicio 5.1: Escribe una función que divida dos números. Usa try...catch para 
// manejar división por cero.

function dividirNumero(a, b) {
    try{
        if (b == 0) {
            throw new Error(",no se puede dividir por cero");
        }
        return a / b;
    } catch (error) {
        console.log("Lo sentimos, hay un error", error.message);
        } 
    }

    console.log(dividirNumero(5, 0));

// Ejercicio 5.2: Crea un bloque donde intentes acceder a una variable no definida y captura el error.

function definirVariable() {
    try {
        let definir = undefined;
        console.log(definir.variable);
    }catch (error) {
        console.log("Lo siento, hay un error", error.message);
    }
}
definirVariable();

// Ejercicio 5.3 (Desafío): Usa try...catch...finally para asegurar que un mensaje se imprima siempre, haya error o no.

function leerComic() {
try {
 let comic = null;
 if (comic == null){
    throw new Error("No se pudo leer el comic");
 }
 console.log("El comic se pudo leer correctamete");
} catch (error) {
    console.log("Hay un error", error.message);
} finally {
console.log("Esto se imprimirá si hay error y en cuanto no haya error");
    }
}
leerComic();