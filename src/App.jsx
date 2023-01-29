import './App.scss';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { setHero } from './redux/hero/hero.actions';
import { CV } from './CV/cv.js'
import AsideButtons from './components/aside-buttons/AsideButtons';



function App() {

  const { person } = CV;

  useEffect(() => {
    setHero(person);
  }, [person]);

  return (
    <div className="app">
      <Header person={person} />
      <div className='main'>
        
        <Menu />
        <AsideButtons  person = {person}/>
      </div>
      
    
    </div>
  );
}

export default App;






