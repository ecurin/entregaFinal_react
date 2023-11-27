
export const Form = ({formData, handleOnChange, errors, validateForm}) => {

    const handleOnSubmit = (evt) => {
        evt.preventDefault()

        if(validateForm()){
            console.log('enviando..,', formData)            
        }else{
            
        }
    }

    //const t = 'Titulo del Form'
    //const s = 'SubTit del form'

    return (
            <form onSubmit={handleOnSubmit}>
          
            <input 
                type='text' 
                name='nombre'
                placeholder='ingrese su nombre'
                value={formData.nombre} 
                onChange={handleOnChange}
            />
            <br />
            {errors && errors.nombre && <span>{errors.nombre}</span>}
            <br />
            <input 
                type='text' 
                name='telefono'
                placeholder='ingrese su telefono'
                value={formData.telefono} 
                onChange={handleOnChange}
            />
            <br />
            <br />
            <input 
                type='text' 
                name='correo'
                placeholder='ingrese su mail' 
                value={formData.correo}
                onChange={handleOnChange}
            />
            <br />
            <br />
            {errors && errors.correo && <span>{errors.correo}</span>}
            <br />
            {//<button>Enviar</button> 
            }
        </form>
    )
}