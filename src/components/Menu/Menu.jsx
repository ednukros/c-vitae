import React from 'react'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Habilities from '../Habilities/Habilities';
import Languages from '../Languages/Languages';
import './menu-style.scss'
import { useState } from 'react';
import { CV } from '../../CV/cv'

const Menu = () => {
  const { person, education, experience, languages, habilities } = CV;
 

  

  const [active, setActive] = useState('about');
  return (
    <div className='menu'>
      <nav className='menu__buttons'>
        <button onClick = {() => setActive('contact')} className='btn contact'>Contact</button>
        <button onClick = {() => setActive('about')} className='btn about'><span>I</span>About</button>
        <button onClick = {() => setActive('education')} className='btn education'>Education</button>
        <button onClick = {() => setActive('experience')} className='btn experience'>Experience</button>
        <button onClick = {() => setActive('habilities')} className='btn habilities'>Habilities</button>
        <button onClick = {() => setActive('languages')} className='btn languages'>Languages</button>
        <div className='menu__img-div'>
          <img className='menu__img-image' src="https://avatars.githubusercontent.com/u/74204729?v=4" alt="foto" />
        </div>
      </nav>
      {active === 'contact' && <Contact contact={person} />}
      {active === 'about' && <About about={person.aboutMe} />}
      {active === 'education' && <Education education={education} />}
      {active === 'experience' && <Experience experience={experience} />}
      {active === 'habilities' && <Habilities habilities={habilities} />}
      {active === 'languages' && <Languages languages={languages} />}
    </div>
  )
}

export default Menu