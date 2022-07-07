import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GigGrid = ({categoria}) => {

  const {images, isLoading} = useFetchGifs( categoria);

  return (
    <div>
        <h3>{ categoria }</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
       
          <div className='card-grid'>
            {
                images.map(img => (
                    //return <li key={img.id}> {img.title}</li>
                    <GifGridItem 
                    key={img.id}
                    {...img}
                   />
                ))
            }
          </div>
        
    </div>
  )
}
