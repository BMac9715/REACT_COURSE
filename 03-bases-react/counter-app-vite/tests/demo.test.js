// Test de Prueba
//test('Esta prueba no debe de fallar', () => {
//    if( 1 === 0) {
//        throw new Error('No se puede dividir en cero')
//    }
//});

//describe sirve para agrupar un conjunto de pruebas
describe('Pruebas en <DemoComponent />', () => {
    test('Esta es una prueba que no debe fallar', () => { 
        //1. Inicialización
        const message1 = 'Hola mundo';
    
        //2. Estimulo
        const message2 = message1.trim();
    
        //3. Observar el comportamiento ... esperado
        expect( message1 ).toBe( message2 );    // if(message1 === message2)
    });
});