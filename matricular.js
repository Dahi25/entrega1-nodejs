let { educacion_continua } = require('./carpetaArchivos/baseDatos');
let { imprimirCursos } = require('./listaCursos');
let fs = require('fs');


let opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'
    }
}


const argv = require('yargs')
    .command('inscribir', 'matricular', opciones)
    .argv;


let inscribir_curso = () => {

    if (argv.id == 1 || argv.id == 2 || argv.id == 3) {
        let texto = `El estudiante ${argv.nombre} con cedula: ${argv.cedula} esta matriculado en el curso ${educacion_continua[argv.id - 1].nombre} con un precio de ${educacion_continua[argv.id - 1].precio} pesos y una duracion de: ${educacion_continua[argv.id - 1].duracion} horas`;
        fs.writeFile('entregable.txt', texto, (err) => {
            if (err) throw (err);
            console.log(`Ùsted esta inscrito en el curso ${educacion_continua[argv.id - 1].nombre} satisfactoriamente`);
        })
    } else {
        console.log(`El ID ${argv.id} no corresponde a ningun curso ofertado`);
        imprimirCursos();
    }



}

inscribir_curso();