import { Link } from "react-router-dom"
import { Filter } from "./Filter"

const productFiltered=({products, filterState, handleFilterChange}) => {
    return(
   <>
    <div className='col'>
        <div>
            <label>Buscar productos</label>
            <input 
                id='buscador'
                className='form-control' 
                type='text' value={filterState}
                onChange={handleFilterChange} 

                />
                <p></p>
        </div>
        <div className="row">
        {
            filterState === '' ? 
            
                    products.map((product, index) => 
                            <div className='card w-20' style={{ width: '18rem' }} key={index}> 
                                <Link to={`/item/${product.id}`}>
                                <img src={product.imageURL} className='card-img-top' />
                                </Link>
                                <div className='card-body'>
                                    <p>Nombre: {product.name}</p>
                                    <p>Precio: {product.price}</p>
                                    <p>Categoria: {product.category}</p>
                                    <p>Precio: {product.description}</p>
                                </div>
                                <div className='card-footer'>
                                    <Link to={`/item/${product.id}`}>
                                    <button className='btn btn-outline-dark w-100'>Detalle</button>
                                    </Link>
                                </div>
                            </div>
                )
                           
            :
               

                    products
                    .filter(
                        prod => prod.name.toLowerCase().includes(filterState.toLowerCase())
                        )
                    .map((product, index) => 
                            <div className='card w-20' style={{ width: '18rem' }}> 
                            <img src={product.imageURL} className='card-img-top' />
                                <div className='card-body'>
                                    <p>Nombre: {product.name}</p>
                                    <p>Precio: {product.price}</p>
                                    <p>Categoria: {product.category}</p>
                                    <p>Precio: {product.description}</p>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-outline-dark w-100'>Detalle  </button>
                                </div>
                            </div>

                )
            
        }
        </div>
    </div>
   </>
   )
}


export const ItemList = ({products}) => {
    return (
        <Filter products={products} >
            {productFiltered}
        </Filter>
    )
}

