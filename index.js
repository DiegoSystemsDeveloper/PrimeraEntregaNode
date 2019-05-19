const cursos = {cursosDisponibles, mostrarCursos, cursoBuscado} = require ('./Cursos');
const fs = require ('fs');

//Arreglo que guardará la informacion del usuario que se ingrese por teclado
const usuario = {
	nombre: {
		demand: true,
		alias: 'n'
	},
	cedula: {
		demand: true,
		alias: 'd'
	},
	curso: {
		demand: true,
		alias: 'c'
	}
}

const argv = require ('yargs')
			 .command('inscribir','Inscribir usuario', usuario)
			 .argv

//Funcion para crear archivo de texto con la informacion del usuario y el curso que ha escogido
function crearArchivo() {
	texto = ('Informacion del interesado: ' + '\n' +
			'Nombre: ' + argv.nombre + '\n' +
			'Cedula: ' + argv.cedula + '\n\n' +
			'Informacion del curso: ' + '\n' +
			'Nombre del curso: ' + cursosDisponibles[argv.curso-1].nombre + '\n' +
			'Id del curso: ' + cursosDisponibles[argv.curso-1].id + '\n' +
			'Duracion del curso: ' + cursosDisponibles[argv.curso-1].horas + '\n' +
			'Valor del curso: ' + cursosDisponibles[argv.curso-1].valor);
			fs.writeFile('Informacion.txt', texto, (err) => {
			if(err) throw (err);
			console.log('Se ha registrado correctamente la informacion');
			});
}

//Metodo que ejecuta el programa segun la histroria de usuario indicada
function inicializar() {
	if(argv.curso == null || argv.nombre == null || argv.cedula == null) {
	mostrarCursos(2000, 4000, 6000);
	}
	else {
		if(cursoBuscado(argv.curso) == null) {
			console.log('El curso con el id [' + argv.curso + '] no existe.');
		} else{
			console.log(cursoBuscado(argv.curso));
			setTimeout(function () {
			crearArchivo();
			}, 2000);
		}
	}	
}
