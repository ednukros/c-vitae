import './App.scss';
import { useState } from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Habilities from './components/Habilities/Habilities';
import Header from './components/Header/Header';
import Languages from './components/Languages/Languages';
import { CV } from './CV/cv.js'

function App() {

  //destructuring de cv
  const { person, education, experience, languages, habilities } = CV;

  const [ active, setActive ] = useState('');

  return (
    <div className="app">
      <Header person={person} />
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
    </div>
  );
}

export default App;