const cursos = {cursosDisponibles, mostrarCursos, cursoBuscado} = require ('./Cursos');
const express = require('express')
const app = express()

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

let imprimirEnPantalla = (texto) => {
	app.get('/', function (req, res) {
  			res.send('<b> ' + texto + '</b>')
			})
}

//Funcion para mostrar en pantalla la informacion del usuario y el curso que ha escogido
function mostrarCursoSeleccionado() {
	texto = ('Informacion del interesado: ' + '<br>' +
			'Nombre: ' + argv.nombre + '</br>' +
			'Cedula: ' + argv.cedula + '</br></br>' +
			'Informacion del curso: ' + '</br>' +
			'Nombre del curso: ' + cursosDisponibles[argv.curso-1].nombre + '</br>' +
			'Id del curso: ' + cursosDisponibles[argv.curso-1].id + '</br>' +
			'Duracion del curso: ' + cursosDisponibles[argv.curso-1].horas + '</br>' +
			'Valor del curso: ' + cursosDisponibles[argv.curso-1].valor);
			imprimirEnPantalla(texto);
}

//Metodo que ejecuta el programa segun la historia de usuario indicada
function inicializar() {
	if(argv.curso == null || argv.nombre == null || argv.cedula == null) {
		mostrarCursos(2000, 4000, 6000);
		imprimirEnPantalla('Aun no se ha seleccionado un curso');
	}
	else {
		if(cursoBuscado(argv.curso) == null) {
			console.log('El curso con el id [' + argv.curso + '] no existe.');
			imprimirEnPantalla('Aun no se ha seleccionado un curso')
			mostrarCursos(2000, 4000, 6000);
		} else{
			console.log(cursoBuscado(argv.curso));
			setTimeout(function () {
			mostrarCursoSeleccionado();
			}, 2000);
		}
	}	
}

inicializar();
app.listen(3000);