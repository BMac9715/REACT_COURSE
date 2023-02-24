console.log('Reforzando Javascript...');

//Funciones

function saludar(nombre) {
    return `Hola ${nombre}`;
}

//El problema con esta forma es que se puede cometer el error
//de utilizarlo para asignar algun valor por error

//saludar = 30;

console.log(saludar("Bryan"));

//Forma mas utilizada

const saludar2 = function(nombre) {
    return `Hola ${nombre}`;
}

//saludar2 = 2; //Esto ya genera error

console.log(saludar2("Goku"));

//Funciones de flecha
const saludar3 = (nombre) => { return `Hola ${nombre}`; }

console.log(saludar3("Vegeta"));

//const getUser = () => {
//    return {
//        uid: 'ABC123',
//        username: "bmacario"
//    };
//};

const getUser = () => ({uui: 'ABC123', username: 'bmacarioc'});

console.log(getUser());

/*
//Tarea
//1. Transformar a una función de flecha
//2. Retornar un objeto implicito
//3. Probarlo

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC123',
        username: nombre
    };
}

const usuarioActivo = getUsuarioActivo('Bryan');

console.log(usuarioActivo);
*/

const getUsuarioActivo = (nombre) => ({uid: 'ABC123', username: nombre});

const usuarioActivo = getUsuarioActivo('Bryan');

console.log(usuarioActivo);