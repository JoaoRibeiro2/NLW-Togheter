import { useState } from "react";

export function Button(){
    const [counter, setCounter] = useState(0) // todo estado deve ser declarado como const

    function increment(){
        setCounter(counter + 1)
        console.log(counter)
    }
    return (
        <button className="button">
            {counter}
         </button>
    )
}

// Conceito de Imutabilidade // Sempre criamos uma nova informação baseada em uma informação já existente