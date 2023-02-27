import { getHeroById } from "./01-bases/08-imports-exports";

console.log('Reforzando Javascript...');

//const promesa = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        const heroe = getHeroById(2);
//        resolve(heroe);
//    }, 2000);
//});
//
//promesa.then((res) => {
//    console.log("Then de la promesa");
//    console.log(res);
//});

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroById(id);
            if(heroe) { resolve(heroe); } else { reject("No se encontro el heroe"); }
        }, 2000);
    });
}


//getHeroByIdAsync(10)
//.then((res) => {
//    console.log("Then de la promesa");
//    console.log(res);
//})
//.catch((err)=> {
//    console.warn(err);
//});

getHeroByIdAsync(3)
.then(console.log)
.catch(console.warn);