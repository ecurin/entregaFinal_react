import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import FormContainer from "../FormContainer/FormContainer"
import { addDoc, collection, getFirestore } from "firebase/firestore"




export const CartContainer = () => {

    const {cartList, ClearCart, totalPrice} = useContext(CartContext)

    const handleOrders = () => {
        
    }

    const finishPurchase = () => {

        const order = {}
            
        order.buyer = {name: 'Erik', phone : '12345 ', mail : 'erik@gmail.com' }

        //order.items = [{id:'', price:'', title:'', cant:0}],
        //order.items = cartList.map( product => ({id : product.id , price : product.price , title : product.name , cant : product.cant }))

        //aplicamos destructuring de product
        order.items = cartList.map( ({id , price, name, cant }) => ({id : id , price : price , title : name , cant : cant }))

        order.total = totalPrice()

        
        const db = getFirestore()
        const queryCol = collection(db, 'order')

        addDoc(queryCol, order)
        .then(
            //res => console.log(res)
            
                res => console.log('Se ha generado su ID de Compra ', res._key.path.segments[1]) 
            
            
            
        )
        .catch(err => console.log(err))
        
        console.log('Enviando orden', order)

        //Alert("Orden enviada, gracias por su compra!!")


    }

    return (
        <div className= "w-100">
        <h1>Mi Carro</h1>
        {
            cartList.map(product => <div>
                                        <img src={product.imageURL} width='40' height='40'/>
                                        {product.cant} x  &nbsp;
                                        {product.name}
                                        <hr/>
                                        </div>)
        }
            <p>TOTAL: { totalPrice() }
                </p>
                <hr/>


            <FormContainer />
            <hr/>

            <button className="btn btn-outline-dark" onClick={ClearCart}>Vaciar</button> 
            &nbsp;
            <button className="btn btn-outline-dark" onClick={finishPurchase}>Finalizar Compra</button>
        </div>
    )
}