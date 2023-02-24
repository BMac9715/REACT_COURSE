console.log('Reforzando Javascript...');

const name = "Bryan";
const lastname = "Macario";

//const fullname = name + ' - ' + lastname;
//const fullname = `Hola mundo`;
const fullname = `${name}  ${lastname}`;

//const fullname = `
//${name}
//${lastname}
//${ 1 + 1}`

console.log(fullname);

function getSaludo(names) {
    return "Hello " + names;
}

console.log(`Esto es un texto: ${getSaludo(fullname)}`)