import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas del componente AddCategory', () => {
    test('Debe de cambiar el valor de la caja de texto ', () => {
        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');

        //Seteando un valor en el Input
        fireEvent.input(input, { target: { value: 'Demon Slayer' }});

        //screen.debug();

        expect(input.value).toBe('Demon Slayer');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor ', () => {
        
        const inputValue = 'Demon Slayer';

        render(<AddCategory onNewCategory={() => {}}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit(form);

        expect(input.value).toBe('');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor parte 2', () => {
        const inputValue = 'Demon Slayer';
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalled();
        
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

        //expect(onNewCategory).toHaveBeenCalledTimes(1);
    });

    test('No debe llamar el OnNewCategory si el input es vacio', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        //Forma 1
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        
        //Forma 2
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});