//Ejercicio 3.1: Convierte esta función a arrow function.

function sumar(a, b) {
    return a + b;
  }
  console.log(sumar(4,5));

  //arrow function

const sumar = (a, b) => a + b;
  console.log(sumar(4,5));



//Ejercicio 3.2: Crea una arrow function que reciba un número y devuelva su cuadrado.

const cuadrado = (a) => a * a;
  console.log(cuadrado(4));


//Ejercicio 3.3 (Desafío): Usa una arrow function con map() para duplicar los valores del array [2, 4, 6]

const numbers = [2, 4, 6]
  const duplicateNumbers = numbers.map(duplicate => duplicate * 2);
  console.log("Los números duplicados son:", duplicateNumbers);
