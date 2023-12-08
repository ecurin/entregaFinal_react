import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {pid} = useParams()
    const [loading, setLoading] = useState(true)

    //Traer un registro
    useEffect(() => {
        const dbFs = getFirestore()
        const queryDoc = doc(dbFs,'products',pid)
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id , ...res.data()}  ))
        .catch(err => console.log(err))

    },[])

    return (
        <ItemDetail product={product} />
    )
}

