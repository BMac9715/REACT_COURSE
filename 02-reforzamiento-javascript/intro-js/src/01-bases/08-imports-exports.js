import heroes, { owners } from "./data/heroes";

console.log('Reforzando Javascript...');

const getHeroeById = (id) => {
    return heroes.find(hero => hero.id == id);
}

const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner == owner);
}

console.log(owners);

console.log(getHeroeById(2)); 

console.log(getHeroesByOwner('DC'));