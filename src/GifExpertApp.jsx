import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Peace', 'Dragon Ball']);

    const onAddCategorie = () => {
        setCategories(['Valorant', ...categories]);

    };

    return (
        <>
            {/*Titulo App*/}
            <h1>Gif Expert App</h1>
            {/*Input */}
            <AddCategory />
            {/*Listado de gifs */}
            <button onClick={onAddCategorie}>Agregar</button>
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

