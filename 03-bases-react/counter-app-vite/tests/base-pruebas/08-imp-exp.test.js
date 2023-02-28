import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroeById debe de retornar undefiend si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo de 3 para el owner DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        /*expect(heroes).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'},
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC'}]);*/
        expect(heroes).toEqual(heroes.filter(hero => hero.owner === owner));
    });

    test('getHeroesByOwner debe retornar un arreglo de 2 para el owner Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });
});