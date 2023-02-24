import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element = {<Home/>} />
          <Route path = "/education" element ={ <Education />} />
          <Route path = "/contact" element ={ <Contact />} />
          <Route path = "/about" element ={ <About />} />
          <Route path = "/project" element ={ <Project />} />
        </Route>
      </Routes>                    
    </BrowserRouter>
  );
}

export default App;
