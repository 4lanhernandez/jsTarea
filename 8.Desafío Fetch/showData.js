// showData.js
import getData from './getData.js';

async function showData() {
    const data = await getData();  // Llamamos a la función para obtener los datos

    let div = document.getElementById("content");  // Obtenemos el div donde se mostrarán los datos

    if (data && data.length > 0) {
        // Si tenemos datos, mostramos los nombres de los Pokémon
        data.forEach(pokemon => {
            let p = document.createElement("p");  // Creamos un nuevo elemento <p> para cada Pokémon
            p.innerHTML = pokemon.name;  // Colocamos el nombre del Pokémon en el <p>
            div.appendChild(p);  // Añadimos el <p> al div
        });
    } else {
        // Si no hay datos, mostramos un mensaje de error
        div.innerHTML = "<p>No se pudieron obtener los Pokémon</p>";
    }
}

export default showData;
