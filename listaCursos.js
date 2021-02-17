let { educacion_continua } = require('./carpetaArchivos/baseDatos');



let imprimirCursos = () => {
    let contador = 1;
    for (let i = 0; i < educacion_continua.length; i++) {
        contador = contador + 1;
        setTimeout(() => {
            console.log(`
            Nombre del curso: ${educacion_continua[i].nombre}
            ID curso: ${educacion_continua[i].id}
            Duracion del curso: ${educacion_continua[i].duracion}
            Precio del curso: ${educacion_continua[i].precio}
            `);
        }, 2000 * contador);

    }
}

imprimirCursos();


module.exports = {
    imprimirCursos
}