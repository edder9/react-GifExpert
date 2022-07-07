import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs';


export const useFetchGifs = (categoria) => {
       const [images, setImages] = useState([]);
       const [isLoading, setIsLoading] = useState(true);
////se Ejecuta una sola vez al inici de la App

const getImages = async () => { 
  const newIamges = await getGif(categoria);
  setImages(newIamges);
  setIsLoading(false);
}

   useEffect( () => {//manda llamadr get Images
    getImages();    
    },[]);

  return {
    images,
    isLoading
  }
}
