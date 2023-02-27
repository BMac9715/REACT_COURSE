/*const getImagenPromesa = () => {
    return new Promise((resolve, reject) => {
        resolve("");
    })
}

getImagenPromesa().then(console.log);*/

const getImagen = async () => {
    try {
        const API_KEY = "200WTu3goDw1JYGjHn63gFnXDU4BKota";

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

        const {data} = await resp.json();

        console.log(data);

        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.warn(error);
    }
}

getImagen();