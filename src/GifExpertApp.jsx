import { useState } from "react"
import { AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Goku']);
    // esta f es quien se encarga de llamar al setCat para grabar el nuevo valor.
    const onAddCategory = ( newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories] );
    }
    return (
    <>
        <h2>GifExpertApp</h2>
        
        <AddCategory onNewCat={onAddCategory} />

        {categories.map( category => (
            <GifGrid key={category} category={category} />
        ))
        }
    </>
  )
}
