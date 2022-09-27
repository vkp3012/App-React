// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Section from './components/Section';
import Footer from './components/Footer';
import Product from './components/Product';
import './components/Home.css'
import About from './components/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Ourproject from './components/Ourproject';
import Shop from './components/Shop';
import Contect from './components/Contect';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Buy from './components/Buy';

function App() {
  return (
      <BrowserRouter>
          <Home />

          <Routes>
            <Route path = "/product" 
                element = {                 
                  <Product />
                } 
            />
          </Routes>
          
          <Routes>
            <Route path = "/about" 
                element = {                 
                  <About />
                } 
            />
          </Routes>
          <Routes>
            <Route path = "/ourproduct" 
                element = {                 
                  <Ourproject />
                } 
            />
          </Routes>
          <Routes>
            <Route path = "/contect" 
                element = {                 
                  <Contect />
                } 
            />
          </Routes>

          <Routes>
            <Route path = "/" 
                element = {                 
                  <Section />
                } 
            />
          </Routes>

          <Routes>
            <Route path = "/login" 
                element = {                 
                  <Login />
                } 
            />
          </Routes>

          <Routes>
            <Route path = "/Signup" 
                element = {                 
                  <Signup />
                } 
            />
          </Routes>

          <Routes>
            <Route path = "/shop" 
                element = {                 
                    <Shop/>
                } 
            />
          </Routes>

          <Routes>
            <Route path = "/cart" 
                element = {                 
                    <Cart/>
                } 
            />
          </Routes>

          <Routes>
            <Route path = "/buy" 
                element = {                 
                    <Buy />
                } 
            />
          </Routes>

          <Footer/>
      </BrowserRouter>
  );
}

export default App;
