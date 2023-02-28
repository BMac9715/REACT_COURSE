import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        //expect(testUser).toBe(user);          //No detecta que es un objeto
        expect(testUser).toStrictEqual(user);   //Sirve para validar que objetos son iguales
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = "bmacarioc"
        const testUser = {
            uid: 'ABC567',
            username: nombre
        };

        const user = getUsuarioActivo(nombre);

        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe de retornar un objeto con el mismo nombre', () => {
        const nombre = "bmacarioc"

        const {username} = getUsuarioActivo(nombre);

        expect(username).toBe(nombre)
    });
});