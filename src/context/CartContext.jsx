import { createContext, useState } from "react";

export const CartContext = createContext([])


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const Add2Cart = (product) => {
        setCartList([
            ...cartList,
            product
        ])
    }

    const totalPrice = () => cartList.reduce( (sum, product )  => sum + (product.cant * product.price) , 0  ) 



    const ClearCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            Add2Cart,
            ClearCart,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>

    )
}