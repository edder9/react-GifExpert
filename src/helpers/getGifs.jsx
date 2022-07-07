export const getGif = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=YmgMD45PiGfqClzt3akB2TismSwHAfR5` 
    const resp = await fetch (url);
    const {data} = await resp.json();

    
    const dataRecorre = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(dataRecorre);
    //setImages(dataRecorre)
    return dataRecorre;

};