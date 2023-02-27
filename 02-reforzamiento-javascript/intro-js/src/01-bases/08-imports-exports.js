import heroes, { owners } from "../data/heroes";

console.log('Reforzando Javascript...');

export const getHeroById = (id) => {
    return heroes.find(hero => hero.id == id);
}

export const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner == owner);
}

//console.log(owners);

//console.log(getHeroById(2)); 

//console.log(getHeroesByOwner('DC'));