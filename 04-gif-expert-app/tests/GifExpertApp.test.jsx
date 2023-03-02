import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el componente principal <GifExpertApp />', () => {
    test('should ', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Demon Slayer' }});
        fireEvent.submit(form);

        screen.debug();
    });
});