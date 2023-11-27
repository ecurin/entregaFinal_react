import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'


import './App.css'

import NavBar     from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import {CartContainer} from './components/CartContainer/CartContainer.jsx'
import { CartContextProvider } from './context/CartContext.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'


//componentes funcionales => muestran interfaz
//componentes Contentedores => agrupan otros contenedores o funcionales
//useState (hook es de react)


function App() {
  


  return (
    <CartContextProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos, te presentamos nuestros productos' /> } />
        <Route path='/list/' element={<ItemListContainer greeting='Productos' /> } />
        <Route path='/list/:cid' element={<ItemListContainer greeting='Productos' /> } />
        <Route path='/item/:pid' element={<ItemDetailContainer /> } />            
        <Route path='/cart' element={<CartContainer /> } />      
        <Route path='*' element={<Navigate/>} />
      </Routes>
    </Router>
    </CartContextProvider>

  )
}

export default App
