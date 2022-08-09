import { useState } from "react";
 
export const AddCategory = ({onNewCat}) => {

    const [inputValue, setInputValue] = useState('');
    //cuando algo cambia, el attr onChange envia el evento a esta f 
    // event.target cae desestruturada como target
    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }
    // funcion pra anular la recarga que se provoca con el envio de formlulario.
    // desde aca se llama al fetch.
    const onSubmit = (event)=>{
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        onNewCat(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar giphy's"
                value = {inputValue}
                onChange= { onInputChange}
            />
        </form>
    )
}
 