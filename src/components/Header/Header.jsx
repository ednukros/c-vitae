import React from 'react'
import './header-style.scss'

const Header = ({person}) => {
    
   
return (
    <div className='header'>
        <div className='header__container-img'>
            <img className='header__img' src={person.image} alt="foto mia" />
        </div>
        <h1>{person.name} </h1>
        {/* <h2>{person.lastName}</h2> */}
    </div>
  )
}

export default Header