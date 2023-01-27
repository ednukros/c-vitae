import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { CV } from './CV/cv.js'


function App() {

const { person } = CV;
  return (
    <div className="app">
      <Header person={person} />
      <Menu />
      
    </div>
  );
}

export default App;