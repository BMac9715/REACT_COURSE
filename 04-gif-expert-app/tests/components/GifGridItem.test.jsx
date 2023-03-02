import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components";

describe('Prueba del componente GifGridItem', () => {
    const title = "Demon Slayer";
    const url = "https://demon-slayer.com/tanjiro.jpg"

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url}/>);

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifGridItem title={title} url={url}/>);
        //screen.debug();

        ///expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifGridItem title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();
    });
});