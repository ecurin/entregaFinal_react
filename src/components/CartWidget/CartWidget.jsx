import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {cartList} = useContext(CartContext)

    const initialValue = 0;
    const total = cartList.reduce((a, b) => a + (b['cant'] || 0), 0);

    return (
        <div className='dvCarroCompras'>
            <Link to="cart/">{total} 
            <img className='carroCompras' src='/carro.png' />
            </Link>
        </div>
    )


}

export default CartWidget