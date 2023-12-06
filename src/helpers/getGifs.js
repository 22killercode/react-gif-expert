
export const getGifs = async (category) => {

    const apiKey = "EbvM9jhN0zrTKKWfzDnBcXwtLKQAoYrp"
    const buscar = category
    const limite = "&limit=5"
    const url    = "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&q="+buscar+limite

    const respuesta = await fetch(url);

    const {data} = await respuesta.json();

    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    )); 

    return gifs
}
