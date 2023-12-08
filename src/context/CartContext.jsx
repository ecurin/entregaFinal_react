import { createContext, useState } from "react";

export const CartContext = createContext([])


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const Add2Cart = (product) => {
        const prodIndex = cartList.findIndex(p => p.id==product.id)

        if(prodIndex == -1){
            setCartList([
                ...cartList,
                product
            ])
    
        }else{
            cartList[prodIndex].cant += product.cant
            setCartList([...cartList])
        }

    }

    const cantProducts = () => cartList.reduce( (cant,product)   => cant += product.cant, 0 )
    const totalPrice   = () => cartList.reduce( (sum, product )  => sum + (product.cant * product.price) , 0  ) 


    const removeProducts = (pid) => {
        

        const prodIndex = cartList.findIndex(p => p.id==pid)
        if(cartList[prodIndex].cant > 1){
            cartList[prodIndex].cant -= 1
            setCartList([...cartList])
        }else{
            setCartList(cartList.filter(p => p.id !== pid))
        }

    }

    const ClearCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            Add2Cart,
            ClearCart,
            cantProducts,
            totalPrice,
            removeProducts
        }}>
            {children}
        </CartContext.Provider>

    )
}