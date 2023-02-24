console.log('Reforzando Javascript...');

//Desestructuración
//Asignación Desestructurante

//Desestructuración de Objetos
const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "IronMan",
    //rango: "Soldado",
}

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

//const { nombre, edad, clave } = persona;
const { edad, nombre, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

/*
const retornaPersona = (usuario) => {
    console.log(usuario.nombre);
    console.log(usuario.edad);
    console.log(usuario.clave);
}
*/


const retornaPersona = ({nombre, edad, rango = 'Capitan'}) => {
    console.log(nombre);
    console.log(edad);
    console.log(rango);
}

retornaPersona(persona);

const retornaPersona2 = ({nombre, clave, edad, rango = 'Capitan'}) => {
    return { nombreClave: clave, anios: edad, latlng: { lat: 1.12312, lng: -0.91231} }
}

const {nombreClave, anios, latlng:{lat, lng} } = retornaPersona2(persona);

console.log(`Nombre Clave: ${nombreClave}`);
console.log(`Años: ${anios}`); 
console.log(`Latitud: ${lat}`);
console.log(`Longitud: ${lng}`);