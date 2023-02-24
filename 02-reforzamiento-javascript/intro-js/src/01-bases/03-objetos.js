console.log('Reforzando Javascript...');

const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "Guatemala",
        zona: 1,
        zip: 1089,
        lat: 1.9209312,
        lng: -0.918212 
    }
};

//console.log(persona);
//console.log({persona:persona});
console.log({persona});
console.table(persona);

const persona2 = persona; //En realidad se copia la referencia al espacio de memoria y no el objeto literal

persona.nombre = "Peter";

//Falso positivo
console.log(persona2);

// En pantalla se muestran iguales
//console.log(persona);
//console.log(persona2);

//Forma correcta de realizar una copia o clon del objeto literal

const persona3 = {...persona}

persona3.nombre = "Peter";
persona3.apellido = "Parker";

console.log(persona);
console.log(persona3);