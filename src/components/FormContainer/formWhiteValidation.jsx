import { useState } from "react"

export const formWhiteValidation = (FromWrappedComponent) => {

    //Nuevo componente con Validaciones
    const NewFormValidationWhite = (props) => {

        const [errors, setError] = useState({})

        const validateForm = () =>{
            let newErrors = {}
            let isValid = true

            if(!props.formData.nombre){
                newErrors.nombre = 'Campo nombre obligatorio'
                isValid = false

            }
            if(!props.formData.correo){
                newErrors.correo = 'Campo correo obligatorio'
                isValid = false
            }

            setError(newErrors)
            return isValid
            
        }

        return (

            <FromWrappedComponent
                //props = formData y handleOnChange
                {...props}
                //nuevas props para formulario
                errors = {errors}
                validateForm = {validateForm}
            />

        )

    }


    return (
        NewFormValidationWhite
    )
}