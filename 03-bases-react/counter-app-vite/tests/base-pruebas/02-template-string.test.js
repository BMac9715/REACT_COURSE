import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Archivo en 02-template-string', () => {
    test('getSaludo debe retornar "Hola Bryan"', () => {
        const name = "Bryan";
        const message = getSaludo( name );

        expect(message).toBe(`Hola ${name}`);
    });
});