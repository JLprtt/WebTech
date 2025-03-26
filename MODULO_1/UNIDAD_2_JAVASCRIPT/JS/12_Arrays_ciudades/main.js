const lista = document.querySelector("#lista")

let ciudades = [];

function escribirCiudades() {
    lista.innerHTML = "";

    ciudades.forEach(ciudad => {
        lista.innerHTML += `<li> ${ciudad} </li>`
    });
}

function eliminarCiudad() {
    let ciudadEliminada = parseInt(prompt(`Indique la posición de la ciudad que desea eliminar:`));
    
    ciudades.splice(ciudadEliminada -1, 1)
    escribirCiudades();
}

let i = 1;

for (i; i < 5; i++) {
    let ciudad = prompt(`Ingrese el nombre de la ciudad ${i}.`);

    if (!ciudad || ciudad == "") {
        alert("Ingrese el nombre de una ciudad.")
        i--;
        continue;
    }
    
    ciudades.push(ciudad);
    if (i == 4) escribirCiudades();
    console.log(ciudad);
    
}