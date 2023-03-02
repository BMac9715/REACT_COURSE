import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en componente <GifGrid />', () => {

    const category = 'Demon Slayer';

    test('Debe de mostrar el loading inicialmente ', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        
        expect(screen.getByText('Cargando...')).toBeTruthy();

        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs ', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Tanjiro',
                url: 'https://localhost:3000/tanjiro.jpg'
            },
            {
                id: 'DEF',
                title: 'Nezuko',
                url: 'https://localhost:3000/nezuko.jpg'
            },
            {
                id: 'GHI',
                title: 'Upper Moon 2',
                url: 'https://localhost:3000/UpperMoon2.jpg'
            },
            {
                id: 'JKL',
                title: 'Rengoku',
                url: 'https://localhost:3000/rengoku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(4);
    });
});