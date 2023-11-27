import { useState } from "react"

//custom hook
export const useCounter = (min,max) => {
    const [count, setCount] = useState(min)

    const handleSuma = () => {
        if(count < max){
            setCount(count+1)
        }            
    }
    const handleResta = () => {
        if(count > min){
            setCount(count-1)
        }
    }

    return {
        count,
        handleResta,
        handleSuma
    }
}