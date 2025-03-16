// Ejercicio 4.1: Crea un objeto JavaScript que represente un libro (con título, autor y año) y conviértelo a JSON.

const libro = {
    "Título del libro" : "Batman",
    "Autor del libro" : "Alan",
    "Año de lanzamiento" : "2025"
};
const objectJson = JSON.stringify(libro);
console.log(objectJson);

// ejercicio 4.2 Dado el JSON '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}', conviértelo a objeto y muestra la edad.

const data = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}'
const jsonObject = JSON.parse(data);
console.log(jsonObject.edad);


// ejercicio 4.3 parsea el JSON '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]' y lista los productos.

const product = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]'
const jsonThings = JSON.parse(product).map(mostrar => mostrar.producto)
console.log(jsonThings);
