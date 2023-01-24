import React from 'react'
import { CV } from '../CV/cv';
// import img from './inma.jpg'


console.log(CV);
console.log(CV.person);
const Header = () => {
    
    const { name, lastName, image} = CV.person;

  return (
    <div className='header'>
        <div className='header__container-img'>
            <img className='' src={image} alt="foto mia" />
        </div>
        <h1>{name} {lastName}</h1>
    </div>
  )
}

export default Header