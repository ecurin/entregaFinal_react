import { useContext } from "react"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { CartContext } from "../../context/CartContext"

export  const ItemDetail = ({product}) => {


    const {Add2Cart, cartList} = useContext(CartContext) 

    const onAdd = cant => {
        Add2Cart({...product, cant})
    }

    return(
        <div className='d-flex'>
            <div >
                    <img src={product.imageURL} className='' />
            </div>
            <div >
                <p>Sku: {product.id}</p>
                <p>Nombre: {product.name} </p>
                <p>Category: {product.category} </p>
                <p>Precio: {product.price} </p>

                <ItemCounter onAdd={onAdd}/>
            </div>
        </div>
    )
}

