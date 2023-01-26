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

    const [ active, setActive ] = useState('');
  return (
    <div className='menu'>
    <nav className='menu__buttons'>
    <button onClick={() => setActive('contact')} className='btn contact'>contact</button>
    <button onClick={() => setActive('about')} className='btn about'>about</button>
    <button onClick={() => setActive('education')} className='btn education'>education</button>
    <button onClick={() => setActive('experience')} className='btn experience'>experience</button>
    <button onClick={() => setActive('habilities')} className='btn habilities'>habilities</button>
    <button onClick={() => setActive('languages')} className='btn languages'>languages</button>
    <button className='btn me'>ME</button>
    </nav>
    {active === 'contact' && <Contact contact={person} />}
    {active === 'about' && <About about={person.aboutMe} />}
    {active === 'education' && <Education education={education} />}
    {active === 'experience' && <Experience experience={experience}/>}
    {active === 'habilities' && <Habilities habilities={habilities} />}
    {active === 'languages' && <Languages languages={languages}/>}
    </div>
  )
}

export default Menu