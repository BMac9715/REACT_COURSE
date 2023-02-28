import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await ', () => {
    test('getImagen debe de retornar url de la imagen', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
    });

    test('getImagen debe de retornar un error', async () => {
        const url = await getImagen();

        expect(url).toBe('No se encontro la imagen');
    });
});