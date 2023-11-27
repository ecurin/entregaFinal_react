import React, { useState, useEffect } from 'react';
import Titulo from "../Titulo/Titulo"
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore';



function ItemListContainer({greeting = 'valor inicial'}){
    
    const subTit = 'Bienvenidos a nuestro sitio.'
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {cid} = useParams()

    useEffect(() => {

        const dbFs = getFirestore()
        const queryColl = collection(dbFs,'products')



        if(cid ){
            const queryFilter = query(queryColl, where('category','==', cid))

            getDocs(queryFilter)
            .then(res => setProducts( res.docs.map( product => ({id: product.id, ...product.data() }))))
            .catch(err => console.log(err))
            .finally(setLoading(false))
    
        } else {

            getDocs(queryColl)
            .then(res => setProducts( res.docs.map( product => ({id: product.id, ...product.data() }))))
            .catch(err => console.log(err))
            .finally(setLoading(false))
    
        }

        

    },[cid])

    console.log(products, cid)





    return (
        <>
        <Titulo 
                titulo ={greeting}
            
        />
                
              
            <div className='d-flex justify-content-center'>
            {
                loading ? <h2>Cargando...</h2>
            :
                <ItemList products={products} />
            }  
            </div>
            
            
        </>
    )
}

//colocar en linea 53 <FormContainer />

export default ItemListContainer