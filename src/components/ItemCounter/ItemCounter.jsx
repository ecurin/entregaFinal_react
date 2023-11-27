import { useCounter } from '../hooks/useCounter'

//todo lo que comience con use , react lo tomará como un hook


export const ItemCounter = ({initial=1, stock=10, onAdd}) =>{

        const {count, handleResta, handleSuma} = useCounter(initial, stock)



        const handleOnAdd = () => {
            onAdd(count)
        }


    return (
        <>
        <div className="text-center">
            <p>Cantidad : {count}</p>
        </div>
        <button className='btn btn-outline-dark' onClick={handleSuma}>+</button>
        <button className='btn btn-outline-dark' onClick={handleResta}>-</button>
        <button className='btn btn-outline-dark' onClick={handleOnAdd}>Agregar</button>
        </>
    )
}