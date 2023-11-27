const products = [
    {id:'1', name:'Tabla asado basica rectangular', category:'asado',     price:'8000',stock:'10',description: 'Tabla para asados basica rectangular', imageURL:'/img/tbasado001.png'},
    {id:'2', name:'Tabla asado pro con accesorios', category:'asado',     price:'20000',stock:'10',description: 'Tabla para asados con accesorios', imageURL:'/img/tbasado002.jpg'},
    {id:'3', name:'Tabla rectangular cocina', category:'cocina',    price:'10000',stock:'10',description: 'Tabla para cocinar rectangular y con manilla', imageURL:'/img/tbcocina001.jpg'},
    {id:'4', name:'Tabla redonda cocina', category:'cocina',    price:'5000',stock:'10',description: 'Tabla para cocinar redonda', imageURL:'/img/tbcocina002.jpg'},
    {id:'5', name:'Tabla cocktail rectangular', category:'cocktail', price:'10000',stock:'10',description: 'Tabla cocktail rectangular pino', imageURL:'/img/tbcocktail001.jpg'},
    {id:'6', name:'Tabla cocktail cuadrada', category:'cocktail', price:'10000',stock:'10',description: 'Tabla cocktail cuadrada nativa', imageURL:'/img/tbcocktail002.png'}
]

export const mFetch=() => {
    return new Promise ((res, rej) => {
        setTimeout(() =>{
            res(products)
        }, 500)
    })
}


export const mFetchOne=(id)=> {
    return new Promise((res,rej)=>{
        setTimeout(() =>{
            res(products.find(prod => prod.id === id))
        },500)
    })
}