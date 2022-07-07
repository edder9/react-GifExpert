import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("")

    //const obtenerCategoria = setCategories;
   

    const handleInputChange = (e) => {
        //console.log(e.target.value);
     setInputValue(e.target.value);
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if(inputValue.trim().length > 2){
          setCategories( cats => [...cats, inputValue]);
          setInputValue('');
        }else{
          alert("debe tener más de 2 caracteres")
        }
    }
  return (
    
    <form onSubmit={handleSubmit}>
    <h2>Add Category</h2>
    <input type="text" value={inputValue} onChange={handleInputChange}></input>
    </form>

  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
