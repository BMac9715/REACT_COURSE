import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    //Permite ejecutar un callback en una situación determinada
    //En este caso dejar el arreglo vacio lo interpreta como la ejecución de una sola vez
    //y esta vez es cuando se crea el componente desde cero
    useEffect(() => { 
        //Forma 1
        /*getGifs(category)
            .then( newImages => setImages(newImages) );*/

        //Forma 2
        getImages();
    }, [ ]);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map((img) => (<GifGridItem key={img.id} { ...img }/>))
                }
            </div>      
        </>
    )
}
