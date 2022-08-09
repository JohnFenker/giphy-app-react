 export const getGifs= async(cat) =>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=htoxXk8OtvBAIPteRBN62XlXZoBsct3H&q=${cat}&limit=6`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}