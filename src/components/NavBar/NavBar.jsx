import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo'

function NavBar(){
    return (
     
     <nav className="navbar navbar-expand-lg fixed-top">
     
     <div className="container-fluid">
         {<Link to='/'><Logo /></Link>}
         
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-1 mb-lg-0">
             <li className="btn">
             {<Link to='/'>Inicio</Link>}
             </li>
             <li className="btn">{<Link to="/list/asado"     >Asado</Link>}</li>
             <li className="btn">{<Link to="/list/cocina"    >Cocina</Link>}</li>
             <li className="btn">{<Link to="/list/cocktail"  >Aperitivo</Link>}</li>
             <li className="btn">{<Link to="/list"           >Todos</Link>}</li>
             <li className="btn">
             {<Link to='/contacto'>Contáctanos</Link>} 
             </li>
         </ul>
         </div>
     </div>
     <CartWidget />
     </nav>

    )
  }
  
  export default NavBar
