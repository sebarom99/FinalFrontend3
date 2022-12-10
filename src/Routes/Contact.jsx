import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import { GlobalStates } from '../Components/utils/Context';

const Contact = () => {

    const { tema } = useContext(GlobalStates)
    
    return (
        <div className='contact' style={{background:tema.backgroundHome, color:tema.color}}>
            <h2>Quieres saber más?</h2>
            <p>Ingresá tu nombre, tu correo y nos pondremos en contacto contigo</p>
            <Form/>
        </div>
    )
}

export default Contact;