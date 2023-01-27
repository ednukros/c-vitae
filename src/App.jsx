import './App.scss';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { setHero } from './redux/hero/hero.actions';
import { CV } from './CV/cv.js'
import Footer from './components/Footer/Footer';


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
      </div>
     <Footer />
    </div>
  );
}

export default App;






