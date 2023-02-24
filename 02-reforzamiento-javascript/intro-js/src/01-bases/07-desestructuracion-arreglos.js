console.log('Reforzando Javascript...');

//Desestructuración
//Asignación Desestructurante

//Desestructuración de Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

//console.log(personajes[0]);
//console.log(personajes[1]);
//console.log(personajes[2]);

const [ , p2, p3] = personajes;

console.log(p2);
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

/**
 * Tarea
 * 1. El primer valor del arreglo debe llamarse nombre
 * 2. El segundo valor se llamara setNumber
 */

const testUseState = (valor) => {
    return [valor, ()=>{console.log('Hello world!')}];
}

const [nombre, setNumber] = testUseState('Goku');

//console.log(arr);
//arr[1]();

console.log(nombre);
setNumber();