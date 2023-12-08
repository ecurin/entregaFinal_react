import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {cantProducts} = useContext(CartContext)

    return (
        <div className='dvCarroCompras'>
            <Link to="cart/">{cantProducts()} 
            <img className='carroCompras' src='/carro.png' />
            </Link>
        </div>
    )


}

export default CartWidget