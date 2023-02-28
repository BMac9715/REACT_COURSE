import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    /*test('Debe hacer match con el snapshot', () => {
        const title = 'Hola, soy Bryan';
        const { container } = render(<FirstApp title={title}/>);

        expect(container).toMatchSnapshot();

    });*/

    //test('Debe de mostrar el titulo en un h1', () => {
    //    const title = 'Hola, soy Bryan';
    //    const { container, getByText } = render(<FirstApp title={title}/>);
    //    expect( getByText(title) ).toBeTruthy();
    //    const h1 = container.querySelector('h1');
    //    expect(h1.innerHTML).toBe(title);
    //    expect(h1.innerHTML).toContain(title);
    //});

    test('Debe de mostrar el titulo en un h1', () => {
        const title = 'Hola, soy Bryan';
        const { container, getByText, getByTestId } = render(<FirstApp title={title}/>);

        expect( getByText(title) ).toBeTruthy();

        //expect( getByTestId('test-title').innerHTML ).toBe(title);
        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Bryan';
        const subtitle = 'Soy un subtitulo';

        const { getByText } = render(<FirstApp title={title} subtitle={subtitle}/>);

        expect(getByText(subtitle)).toBeTruthy();
    });
});