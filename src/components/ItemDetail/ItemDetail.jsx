import { useContext, useState } from "react"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export  const ItemDetail = ({product}) => {
    
    const [ isCount, setIsCount ] = useState(true)

    const {Add2Cart, cartList} = useContext(CartContext) 

    const onAdd = cant => {
        Add2Cart({...product, cant})

        setIsCount(false)

    }

    return(
        <div className='d-flex'>
            <div >
                    <img src={product.imageURL} className='imgDetail' />
            </div>
            <div >
                <p>Sku: {product.id}</p>
                <p>Nombre: {product.name} </p>
                <p>Category: {product.category} </p>
                <p>Precio: {product.price} </p>
                {
                    isCount ?
                        <ItemCounter onAdd={onAdd}/>
                    :
                        <>
                            <Link to='/cart' className='btn btn-outline-dark'>Ir al Carro</Link>
                            &nbsp;
                            <Link to ='/'    className='btn btn-outline-dark'>Ir al Inicio</Link>
                        </>
                }
            </div>
        </div>
    )
}

