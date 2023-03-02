import PropTypes from "prop-types";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            {
                //isLoading ? (<h2>Cargando...</h2>) : null     //Forma 1
                isLoading && (<h2>Cargando...</h2>)             //Forma 2
            }

            <div className="card-grid">
                {
                    images.map((img) => (<GifGridItem key={img.id} { ...img }/>))
                }
            </div>      
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
