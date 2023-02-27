const API_KEY = "200WTu3goDw1JYGjHn63gFnXDU4BKota";

const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

//http
//.then(
//    resp => {
//        resp.json().then(data => {
//            console.log(data);
//        });
//    }
//)
//.catch(console.warn);

http
.then(resp => resp.json())
.then(({data}) => {
    const { url } = data.images.original;
    console.log(url);

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
})
.catch(console.warn);