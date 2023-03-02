import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Demon Slayer']);

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

        <footer>
          <p>Developed by <strong>Bryan Macario</strong> guided by <strong>Fernando Herrera / Udemy Instructor</strong></p>
          <p>March 2023</p>
        </footer>
    </>
  )
}
