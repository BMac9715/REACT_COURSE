

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {
    try {
        const apiKey = '200WTu3goDw1JYGjHn63gFnXDU4BKota';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;
        
    } catch (error) {
        // manejo del error
        //console.error(error)
        return 'No se encontro la imagen'
    }   
}



