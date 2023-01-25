import React from 'react'

const Contact = ({contact}) => {
  return (
    <div>
        <h3>Datos contacto</h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.gitHub}</p>
        <p>{contact.linkedin}</p>
        
    </div>
  )
}

export default Contact