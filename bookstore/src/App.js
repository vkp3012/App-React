import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from './components/homepage/navbar';
import Login from './components/loginpage/login';
function App() {
 return(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/login" element = { <Login/>} />
    </Routes>
  </BrowserRouter>
 )
}

export default App;
