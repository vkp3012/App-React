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
        <Route path='/education' element={<Education/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/form' element={<Form/>}/>
        {/* <Route path='/' element={<Header/>}/> */}
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
