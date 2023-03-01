import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    
    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

    //Another way
    //setCategories(cat => [...cat, 'Demon Slayer']);
  };

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/*<AddCategory setCategories={ setCategories }/>*/}
        <AddCategory onNewCategory={ onAddCategory }/>

        {/* Listado de Gif */}
        {
          categories.map((category) => 
            (<GifGrid key={category} category={category} />)
          )
          //categories.map(category => <GifGrid key={category} category={category} />)
        }
    </>
  )
}
