import React from 'react'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Habilities from '../Habilities/Habilities';
import Languages from '../Languages/Languages';
import { useState } from 'react';
import { CV } from '../../CV/cv'

const Menu = () => {
    const { person, education, experience, languages, habilities } = CV;

    const [ active, setActive ] = useState('about');
  return (
    <div className='main'>
    <nav className='main__buttons'>
    <button onClick={() => setActive('contact')} className='btn'>contact</button>
    <button onClick={() => setActive('about')} className='btn'>about</button>
    <button onClick={() => setActive('education')} className='btn'>education</button>
    <button onClick={() => setActive('experience')} className='btn'>experience</button>
    <button onClick={() => setActive('habilities')} className='btn'>habilities</button>
    <button onClick={() => setActive('languages')} className='btn'>languages</button>
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