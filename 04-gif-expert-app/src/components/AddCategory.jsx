import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('Demon Slayer');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    /*
    const onSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length <= 1) return;

        setCategories(cat => [...cat, inputValue]);
        setInputValue('');
    }
    */

    const onSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange={ onInputChange } />
        </form>   
  )
}

//Props Types
//AddCategory.propTypes = {
//    value: PropTypes.function.required
//}



