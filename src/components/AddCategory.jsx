import { useState } from "react";


export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    return (
        <>
            <h4>Add Category</h4>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue} />
        </>
    )
}

