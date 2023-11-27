import Titulo from "../Titulo/Titulo"
import Formulario from "../Formulario/Formulario"

const Home = ({saludo}) => {

    const tituloApp = 'Tablas y Cocktail'
    const subTituloApp = ' ' 
  
    return(
        <div>
            <Titulo 
                    titulo={tituloApp} 
                    subtitulo={subTituloApp} />
            {/*<Formulario />
            <p>{saludo}</p>*/}
        </div>
    )

}

export default Home
