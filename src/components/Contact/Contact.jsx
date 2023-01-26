import React from 'react'
import './contact-style.scss'

const Contact = ({contact}) => {
  return (
    <div className='c-contact'>
        <h3>Datos contacto</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.gitHub}</p>
        <p>{contact.linkedin}</p>
        
    </div>
  )
}

export default Contact