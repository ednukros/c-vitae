import React from 'react'
import './header-style.scss'

const Header = ({person}) => {
    
  
return (
    <div className='header'>
       
        <h1>{person.lastName}, {person.name} </h1>
        <p>Developer in progress</p>
       
    </div>
  )
}

export default Header