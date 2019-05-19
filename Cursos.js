//Arreglo de cursos con sus atributos
const cursosDisponibles = [

	{id: 1, nombre: 'Programacion', horas: '40 horas', valor: 300000},
	{id: 2, nombre: 'Matematicas', horas: '45 horas',valor: 400000},
	{id: 3, nombre: 'Ingles', horas: '42 horas',valor: 250000}
];

//Funcion que me muestra en un intervalo de 2 segundos los cursos registrados
const mostrarCursos = (primero, segundo, tercero) => {
	setTimeout(function () {
	console.log(cursosDisponibles[0]);
	}, primero); 

	setTimeout(function () {
	console.log(cursosDisponibles[1]);
	}, segundo); 

	setTimeout(function () {
	console.log(cursosDisponibles[2]);
	}, tercero); 
}

//Funcion que permite buscar un curso a partir del parametro "cursoABuscar"
const cursoBuscado = (cursoABuscar) => cursosDisponibles.find(curso => curso.id === cursoABuscar);

//Scripts que exportaremos
module.exports = {
	cursosDisponibles,
	mostrarCursos,
	cursoBuscado
};	
