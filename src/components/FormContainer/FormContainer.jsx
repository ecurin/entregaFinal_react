import { useState } from 'react'
import { Form } from './Form'
import { formWhiteValidation } from './formWhiteValidation'


const FormWhiteValidation = formWhiteValidation(Form)

const FormContainer = () => {

    const [formData, setFormData] = useState({
      nombre : '',
      telefono : '',
      correo:''
    })



    const handleOnChange = (evt) => {

      setFormData(
          {...formData,
          [evt.target.name]: evt.target.value}
          )
    }



    return (
        <FormWhiteValidation 
            formData={formData}
            handleOnChange={handleOnChange}
        />
    )
  }

  export default FormContainer