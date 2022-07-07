import React, { useState } from "react";
import { AddCategory, GigGrid } from './components';
//import { GigGrid } from "./components";

export const GifExpertApp = () => {

    const [categoria, setCategories] = useState(["Goku"])

    //const handleAdd = () => {
    //  setCategories([...categoria,"Edder"])
    //}



  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr></hr>
    
     
          {
              categoria.map((categoria) => 
                //<li key={ categoria }>{ categoria }</li>
                <GigGrid  
                key={categoria}
                categoria={categoria}/>
              )
          }
     
    </>
  );
};
