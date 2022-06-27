import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch',]);
    
    const onAddCategory = ( newCategory ) => {
        //categories.push("valoran");
        //setcategories(cat => [...cat, "valorant"]);
        // PARA NO UTILIZAR PUSH SE MANEJARIA MEJOR DE ESTA MANERA
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>
          {/*TITULO*/}
            <h1>GifExpertApp</h1>
   {/*IMPUT*/}
    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
   {/*LISTADO GIF*/}
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}
