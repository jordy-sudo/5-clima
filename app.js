const clima = require('./controlador/clima');

const argv = require('yargs').options({
    ciudad : {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let ciudad = argv.ciudad

/*
const temp = clima.getClima(ciudad);

console.log(`El clima de ${ciudad} es de ${temp}`);
*/

clima.getClima(ciudad)
.then(respuesta => {
    console.log(`El clima de ${ciudad} es de ${respuesta}`);
}).catch(err => {
    console.log(err);
});

// Tarea:
// 1. Modificar el código para obtener un error coherente
// 2. Cambiar para que nos muestre la temp en grados centígrados
// 3. Mostrar los demás datos del clima y utilizar colores
//      3.1 Si es nublado, un color; soleado, otro color, etc.
// 4. Subir el código a GitHub
