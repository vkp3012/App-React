import './App.css';
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Education from './components/education';
import Project from './components/project';
import Form from './components/form';

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
