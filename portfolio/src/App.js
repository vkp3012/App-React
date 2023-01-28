import './App.css';
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/home/navbar'
import Header from './components/home/header';
import Footer from './components/home/footer';
import Education from './components/education/education';
import Project from './components/project/project';
import Form from './components/contect/form';
function App() {
  return (
    <div className="App">
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
