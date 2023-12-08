import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import FormContainer from "../FormContainer/FormContainer"
import { addDoc, collection, getFirestore } from "firebase/firestore"




export const CartContainer = () => {

    const [isId, setIsId] = useState('')
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:''
    })

    const {cartList, ClearCart, totalPrice, removeProducts} = useContext(CartContext)

    const handleOrders = () => {
        
    }

    const finishPurchase = () => {

        const order = {}
            
        order.buyer = {name: 'Erik', phone : '12345 ', mail : 'erik@gmail.com' }

        //aplicamos destructuring de product
        order.items = cartList.map( ({id , price, name, cant }) => ({id : id , price : price , title : name , cant : cant }))

        order.total = totalPrice()
       
        const db = getFirestore()
        const queryCol = collection(db, 'order')

        addDoc(queryCol, order)
        .then(({id}) => {

            setIsId(id)

            //res => console.log('Se ha generado su ID de Compra ', res._key.path.segments[1]) 
            
        })
        .catch(err => console.log(err))
        .finally(() =>{
            setFormData({
                name:'',
                phone:'',
                email:''
            })
            ClearCart()
        })
        

    }

    return (
        <div className= "w-100">
        <h1>Mi Carro</h1>
        
        {isId != '' && <h2>El Id de la compra es : {isId} </h2>}
        {
            cartList.length == 0 ?
            <div>
                {isId == '' && <h2>No hay productos en el carrito...</h2>}
            </div>
            
            :
            <div>
            {
            cartList.map(product => <div key={product.id}>
                                        <img src={product.imageURL} width='40' height='40'/>
                                        {product.cant} x {product.price} &nbsp;
                                        {product.name} &nbsp; &nbsp; &nbsp;
                                        <button className='btn btn-danger' onClick={() => removeProducts(product.id)}> X </button>
                                        </div>)
            }
            <p>TOTAL: { totalPrice() }</p>

            <FormContainer />
            <hr/>
       
            <button className="btn btn-outline-dark" onClick={ClearCart}>Vaciar</button> 
            &nbsp;
            <button className="btn btn-outline-dark" onClick={finishPurchase}>Finalizar Compra</button>
            </div>
        }
        </div>
    )
}