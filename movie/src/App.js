// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import List from './Components/List';
import Favourites from './Components/Favourites';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Components/About';
import Profile from './Components/Profile';
function App() {
  return (

    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route 
        path = "/" 
        element={
        <>
          <Banner />
          <List />
        </>
        }
      />

      <Route path = "/fav" element={<Favourites/>} />
      <Route path = "/about" element={<About />} />

        <Route 
          path = "/profile" 
          element={
          <>
            <Profile />
            <Favourites />
          </>
          }

        />

    </Routes>

  </BrowserRouter>
  );
}

export default App;
