
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonal from './Components/Testimonal';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Work/>
     <Testimonal/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
