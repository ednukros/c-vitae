import './App.scss';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import {CV} from './CV/cv.js'

function App() {

  //destructuring de cv
  const { person, education, experience, languages, habilities } = CV;

  return (
    <div className="app">
      <Header person={person}/>
      <Contact contact={person} />
    
    </div>
  );
}

export default App;