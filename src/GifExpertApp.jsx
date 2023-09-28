import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Peace', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {

        console.log(newCategory)
        setCategories([newCategory, ...categories]);

    };

    return (
        <>
            {/*Titulo App*/}
            <h1>Gif Expert App</h1>
            {/*Input */}
            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={(value) => onAddCategory(value)} />
            {/*Listado de gifs */}
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
            {/*Gif Item */}
        </>
    )
}

